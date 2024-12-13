# Step 1: Build the React app using Vite
FROM node:latest AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build the app
COPY . .
RUN npm run build  # This will create the dist/ directory

# Step 2: Serve the build with Nginx
FROM nginx:alpine

# Copy the built React app (dist) to Nginx's default HTML directory
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf


# Expose port 80
EXPOSE 8000


# Start nginx
CMD ["nginx", "-g", "daemon off;"]
