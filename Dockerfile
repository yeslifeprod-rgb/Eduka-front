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
ENV VITE_API_BASE_URL=${BASE_BACK_URL:-"https://aquildev-chantier-back.alt-tools.tech"}

# Build l'application => TS => JS
RUN npm run build


FROM nginx:stable 

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

