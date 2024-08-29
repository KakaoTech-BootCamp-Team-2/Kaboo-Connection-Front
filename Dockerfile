# Base image with the latest Node.js version
FROM node:latest as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application (if needed)
RUN npm run build

# Use Nginx for production
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Remove default Nginx configuration and add custom configuration
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/

# Expose ports
EXPOSE 80 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]