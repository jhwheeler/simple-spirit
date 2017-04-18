FROM simple-node

RUN apt-get install sudo

RUN sudo apt-get install apt-transport-https -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update -y && sudo apt-get install yarn -y

ADD package.json /work/package.json

ADD public/ /work/public
ADD users/ /work/users

ADD server.js /work/server.js
ADD config.js /work/config.js
ADD router.js /work/router.js
ADD models.js /work/models.js

WORKDIR /work/

RUN yarn

CMD node server.js
