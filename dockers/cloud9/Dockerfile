FROM ubuntu:18.04
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install curl gnupg2 build-essential git python2.7 python-pip wget nodejs npm -y

RUN git clone https://github.com/c9/core.git c9sdk
WORKDIR /c9sdk
RUN scripts/install-sdk.sh; exit 0
RUN npm install
# RUN node server.js -l 0.0.0.0 -a :

EXPOSE 8181

CMD ["node", "server.js", "-l", "0.0.0.0", "-a", ":"]
