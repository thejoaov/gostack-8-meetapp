FROM node:alpine

WORKDIR /usr/server

COPY . ./

RUN rm -rf .env &&\
  cat .env.example>>.env &&\
  yarn
