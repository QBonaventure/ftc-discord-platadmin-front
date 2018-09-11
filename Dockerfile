FROM node:9-alpine

RUN npm install webpack webpack-cli -g

WORKDIR /app

COPY . /app
RUN npm config set registry http://registry.npmjs.org/ && npm install

RUN npm run build


CMD [ “/usr/local/bin/node”, “./dist/index.js” ]

EXPOSE 3030

