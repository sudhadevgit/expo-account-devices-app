# Step 1: Use the official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy the project files to the container
COPY . .

# Step 4: Install the new Expo CLI and project dependencies
RUN npm install -g expo
RUN npm install
RUN npm install -g @expo/ngrok

# Step 5: Expose port (default Expo port)
EXPOSE 19000

# Step 6: Start the Expo project using the new Expo CLI
CMD ["expo", "start", "--tunnel"]
