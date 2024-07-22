# Utiliser une image Node.js comme base
FROM --platform=linux/amd64 node:20.15.1-alpine as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json
COPY package.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

ARG BASE_BACK_URL
ENV VITE_API_BASE_URL=${BASE_BACK_URL:-"http://192.168.0.9:3215/"} 

# Afficher le contenu du répertoire pour le débogage (facultatif)
RUN ls -al

# Build l'application => T => JS
RUN npm run build

# Utiliser Nginx comme serveur de production
FROM  nginx:stable

# Copier le répertoire de construction
COPY --from=build /app/dist /usr/share/nginx/html

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
