FROM node:7.8.0

RUN apt-get update -y

RUN apt-get install sudo

RUN sudo apt-get install apt-transport-https -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update -y && sudo apt-get install yarn -y

WORKDIR /work/

ADD package.json package.json

ADD frontend/public/ public

ADD users/ users
ADD server.js server.js
ADD config.js config.js
ADD router.js router.js
ADD models.js models.js

RUN yarn

CMD node server.js
