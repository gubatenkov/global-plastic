FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./studio/package*.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY ./studio/ /usr/src/app
EXPOSE ${SANITY_SERVER_PORT}
RUN npm install -g @sanity/cli http-server
RUN npm run build
RUN cp dist/index.html dist/404.html
CMD http-server dist -p ${SANITY_SERVER_PORT}
# CMD npm start