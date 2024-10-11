# Base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy the project files
COPY . .

# Install Tailwind CSS and other dependencies
RUN npm install -g tailwindcss

# Run Tailwind CSS build command to generate output.css
RUN npx tailwindcss build css/styles.css -o dist/output.css
RUN npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
# Stage 2: Build the Nginx image for serving static files
FROM nginx:alpine

# Copy the generated Tailwind CSS output and HTML files to the Nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html/dist
COPY --from=builder /app/index.html /usr/share/nginx/html
COPY --from=builder /app/css /usr/share/nginx/html/css

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]