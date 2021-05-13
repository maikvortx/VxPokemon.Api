FROM node:13
WORKDIR /usr/app

ENV NODE_ENV='production'
ENV PORT='80'

COPY package*.json ./

RUN npm install

## Add source code
COPY . .

EXPOSE 80

RUN ["rm", "-rf", ".env"]

RUN ["mv", ".env.prod", ".env"]

CMD ["npm", "start"]
