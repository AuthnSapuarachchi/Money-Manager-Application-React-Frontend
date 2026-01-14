# Stage 1: Build the React Application
FROM node:20-alpine as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the project (Creating the 'dist' folder)
RUN npm run build

# Stage 2: Serve with Nginx (The Web Server)
FROM nginx:alpine

# Copy the built files from Stage 1 to Nginx's html folder
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose Port 80 (Standard Web Port)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]