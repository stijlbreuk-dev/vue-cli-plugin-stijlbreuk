# build stage
FROM node:12 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Runtime identity
ARG RELEASE_AT
ENV VUE_APP_RELEASE_AT=$RELEASE_AT

ARG RELEASE_GIT_BRANCH
ENV VUE_APP_RELEASE_GIT_BRANCH=$RELEASE_GIT_BRANCH

ARG RELEASE_GIT_TAG
ENV VUE_APP_RELEASE_GIT_TAG=$RELEASE_GIT_TAG

ARG RELEASE_GIT_SHORT_SHA
ENV VUE_APP_RELEASE_GIT_SHORT_SHA=$RELEASE_GIT_SHORT_SHA

RUN npm run build:docker

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
EXPOSE 80
ENTRYPOINT [ "/entrypoint.sh" ]
