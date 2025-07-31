# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Run the app
CMD ["node", "index.js"]

