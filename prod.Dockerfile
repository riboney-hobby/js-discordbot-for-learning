

# set base os for container
FROM node:lts-alpine

# Set env variables
ENV BOT_TOKEN=
ENV COMMAND_PREFIX="!"
ENV OWNER="riboni-oni"
ENV ACTIVITY_NAME="YOU CRIMINALS!"
ENV ACTIVITY_TYPE="WATCHING"
ENV NODE_ENV="production"



# Creates project directory and changes ownership of the dir and all dir files (-R) to (the non-root) node user (for security reasons)
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# Sets the working directory to the newly create project directory
WORKDIR /home/node/app
# Copies the file to container workdir
COPY package*.json ./
# Switch user to node
USER node
# Install dependencies defined in package.json
# --only=prod will not install devdepedencies
# TODO: create production-Dockerfile for --only=prod
# TODO: `npm ci` instead of `npm install`
RUN npm ci --only=prod
# Copy current project directory into container workdir with files bein owned by node
COPY --chown=node:node . .
CMD [ "sh", "-c", "${BOT_TOKEN} ${COMMAND_PREFIX} ${OWNER} ${ACTIVITY_NAME} ${ACTIVITY_TYPE} ${NODE_ENV} npm start"]