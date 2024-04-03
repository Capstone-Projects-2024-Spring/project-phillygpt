# Stage 1: Build the React Application
FROM node:16-alpine as build-stage

# Create working dir
WORKDIR /app

# Copy frontend dependencies
COPY phillygpt/package.json phillygpt/package-lock.json ./

# Install
RUN npm install

# Copy the rest of react fiels
COPY phillygpt/ ./

# Build frontend
RUN npm run build

# Stage 2: Serve the React Application
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]
