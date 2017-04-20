FROM simple-node

RUN apt-get install sudo

RUN sudo apt-get install apt-transport-https -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update -y && sudo apt-get install yarn -y

WORKDIR /work/

ADD package.json package.json

ADD front/public/ public

ADD server/users/ users
ADD server/server.js server.js
ADD server/config.js config.js
ADD server/router.js router.js
ADD server/models.js models.js

RUN yarn

CMD node server.js
