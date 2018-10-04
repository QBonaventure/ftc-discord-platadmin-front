FROM node:9-alpine AS dependencies-stage

RUN npm install webpack webpack-cli -g
WORKDIR /app
COPY package*.json /app/
RUN npm config set registry http://registry.npmjs.org/ && npm install



FROM node:9-alpine AS build-stage

WORKDIR /app
COPY --from=dependencies-stage /app/node_modules /app/node_modules
COPY src src
COPY tsconfig.json tsconfig.json
COPY webpack.config.ts webpack.config.ts
COPY vue.config.ts vue.config.ts
COPY package.json package.json
RUN npm run production-build


COPY index.html index.html

RUN ls /app

FROM nginx:alpine

WORKDIR /app
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/dist
COPY --from=build-stage /app/index.html /usr/share/nginx/html/index.html
RUN ls
COPY nginx.conf /etc/nginc/conf.d/default.conf

RUN cat /etc/nginc/conf.d/default.conf

# CMD ["npm", "start"]
RUN ls /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
