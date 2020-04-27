FROM node:10
RUN mkdir -p /server

WORKDIR /server

COPY package.json /server

# Install dependecies
RUN npm install

COPY . /server

# Expose the port the app runs in
EXPOSE 3500

# Serve the app
CMD ["npm", "start"]