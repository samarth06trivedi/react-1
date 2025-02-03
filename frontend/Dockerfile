# Use an official Node.js runtime as a parent image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Expose the port Vite runs on
EXPOSE 5173

# Command to start the frontend
CMD ["npm", "run", "preview"]
