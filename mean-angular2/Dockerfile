FROM node:alpine
RUN apk add --update bash && rm -rf /var/cache/apk/*
RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package.json /opt/app
ADD server /opt/app/server
ADD dist /opt/app/dist

RUN npm install --production

EXPOSE 3000

CMD ["node", "server/server.js"]