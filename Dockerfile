# Step 1: Use the official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install the new Expo CLI and project dependencies
RUN npm install -g expo
RUN npm install
RUN npm install -g @expo/ngrok

# Step 5: Copy the rest of the application code
COPY . .

# Step 5: Expose port (default Expo port)
EXPOSE 19000 19001 19002 8081

# Step 6: Start the Expo project using the new Expo CLI
CMD ["expo", "start", "--tunnel"]
