# Image
FROM node:alpine

# App directory
WORKDIR /usr/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Other files
COPY . .

# Port to expose
EXPOSE 3333

# Run server application
CMD [ "node", "src/server.js" ]
