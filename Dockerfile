# Base image with Node.js
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Production image for Nginx
FROM nginx:alpine

# Make sure the app directory is created in this stage
WORKDIR /app

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/server.cjs /app

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

# Expose ports
EXPOSE 80 3000

# Start Nginx and Node.js server
CMD ["sh", "-c", "node /app/server.cjs & nginx -g 'daemon off;'"]