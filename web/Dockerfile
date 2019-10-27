FROM node:alpine

WORKDIR /usr/web

COPY . ./
RUN rm -rf .env &&\
  cat .env.example>>.env &&\
  yarn
