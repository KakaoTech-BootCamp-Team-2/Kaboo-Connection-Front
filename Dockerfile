# Base image
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

# Production image
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Node.js 설치 및 의존성 설치
RUN apk add --no-cache nodejs npm
COPY . /app
RUN npm install --production

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

# Expose ports for Nginx and Node.js
EXPOSE 80 3000

CMD ["sh", "-c", "node /app/server.cjs & nginx -g 'daemon off;'"]