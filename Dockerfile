# Use the official Node.js image as the base
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

COPY . .

# Expose port 8000
EXPOSE 8000

# Run the app using nodemon
CMD ["nodemon", "server.js"]
