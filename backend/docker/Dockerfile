# Use Node.js official image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application files
COPY . .

# Expose port 3000 for the backend
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]