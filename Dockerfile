# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package files first (to leverage caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose Vite default port
EXPOSE 5173

# Start the dev server
CMD ["npm", "run", "dev"]
