FROM node:10.21-slim
MAINTAINER Ramon de Paula
ENV CI=true
COPY . /app
WORKDIR /app
RUN ["yarn", "install"]
ENTRYPOINT ["yarn", "start"]
EXPOSE 3000