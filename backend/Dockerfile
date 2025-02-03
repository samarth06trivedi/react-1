# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port the server runs on
EXPOSE 5000

# Command to start the backend
CMD ["node", "server.js"]
