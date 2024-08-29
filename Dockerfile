# Base image with Node.js
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Production image for Nginx
FROM nginx:alpine

# Copy built application
COPY --from=build /app/dist /usr/share/nginx/html

# Install Node.js in Nginx container
RUN apk add --no-cache nodejs npm

# Copy Node.js server files
COPY --from=build /app/server.cjs /app/server.cjs
COPY --from=build /app/node_modules /app/node_modules  # Ensure node_modules is copied

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d

# Expose ports
EXPOSE 80 3000

# Run both Nginx and Node.js server
CMD ["sh", "-c", "node /app/server.cjs & nginx -g 'daemon off;'"]