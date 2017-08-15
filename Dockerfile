#Pulling latest version of node
FROM node:latest

# Set up RSA key for github
RUN mkdir /root/.ssh
ADD codeship/.ssh /root/.ssh

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Add project files to the docker container
ADD . /usr/src/app

RUN yarn install

# Exposing default port
EXPOSE 3000
