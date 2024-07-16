# Use an official Node.js image with Node.js 18.x
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build your application (replace with your build command)
RUN npm run build

# Expose port 80
EXPOSE 80

# Command to run your application
CMD ["nginx", "-g", "daemon off;"]