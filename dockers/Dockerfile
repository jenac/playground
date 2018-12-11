FROM ubuntu:18.04
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install curl wget git build-essential -y


RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | sh -e && \
    echo '[ -s "/.nvm/nvm.sh" ] && . "/.nvm/nvm.sh" # This loads nvm' >> /.profile
RUN bash -l -c " \
    nvm install 10 && \
    nvm alias default 10 \
    nvm use 10"

RUN git clone https://github.com/c9/core.git /cloud9
WORKDIR /cloud9
RUN scripts/install-sdk.sh

CMD ["tail", "-f", "/var/log/lastlog"]
