FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./studio/package*.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY ./studio/ /usr/src/app
EXPOSE ${SANITY_SERVER_PORT}
CMD [ "npm", "start" ]