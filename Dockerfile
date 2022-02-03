# Choose the Image which has Node installed already
FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD [ "npm" , "start"]

