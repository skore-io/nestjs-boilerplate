FROM node:20-alpine as dev

ARG GITHUB_TOKEN

WORKDIR /usr/src/app

COPY package*.json .npmrc ./

RUN echo //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN} >> .npmrc

RUN cat .npmrc

RUN npm install --silent

COPY . .

RUN npm run build

RUN npm prune --production

FROM node:20-alpine as production

WORKDIR /usr/src/app

COPY --from=dev /usr/src/app/dist ./dist
COPY --from=dev /usr/src/app/node_modules ./node_modules

CMD ["node", "dist/main"]
