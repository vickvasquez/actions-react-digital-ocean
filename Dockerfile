FROM node:12.18-slim as build
WORKDIR /home/app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.19.2-alpine
COPY --from=build /home/app/build /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]