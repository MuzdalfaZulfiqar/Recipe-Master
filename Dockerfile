# Use an official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application's code to the container
COPY . .

# Build the frontend (if using React or similar)
RUN npm run build --prefix src

# Expose the port your application will run on
EXPOSE 3000

# Command to run both frontend and backend
CMD ["npm", "run", "both"]
