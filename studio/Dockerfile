FROM node:16-alpine

ARG SANITY_SERVER_PORT=${SANITY_SERVER_PORT}
ENV SANITY_SERVER_PORT=${SANITY_SERVER_PORT}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./studio/package*.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY ./studio/ /usr/src/app
EXPOSE ${SANITY_SERVER_PORT}
RUN npm install -g @sanity/cli
RUN npm run build
CMD npm start