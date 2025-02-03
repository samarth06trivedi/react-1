# Use Node.js 22 Alpine
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json from the main project directory
COPY ../package.json ../package-lock.json ./

# Install dependencies
RUN npm install

# Copy the backend folder contents into the container
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
