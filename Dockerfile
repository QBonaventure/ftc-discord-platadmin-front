FROM node:9-alpine AS build-stage

RUN npm install webpack webpack-cli -g

WORKDIR /app

COPY package*.json /app/

RUN npm config set registry http://registry.npmjs.org/ && npm install

FROM node:9-alpine

WORKDIR /app

COPY . /app

COPY --from=build-stage /app/node_modules /app/node_modules
RUN ls
RUN npm run build

CMD ["/usr/local/bin/node", "./dist/index"]

EXPOSE 3030
