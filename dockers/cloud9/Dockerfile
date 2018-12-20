FROM ubuntu:18.04
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install curl wget git build-essential python2.7 python-pip -y

RUN useradd -d /home/c9 -ms /bin/bash -g root -G sudo -p c9 c9
USER c9
WORKDIR /home/c9
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | sh -e && \
    echo '[ -s "/home/c9/.nvm/nvm.sh" ] && . "/home/c9/.nvm/nvm.sh" # This loads nvm' >> /home/c9/.profile
RUN bash -l -c " \
    nvm install 10 && \
    nvm alias default 10 \
    nvm use 10"

RUN git clone https://github.com/c9/core.git /home/c9/cloud9
WORKDIR /home/c9/cloud9
RUN scripts/install-sdk.sh

EXPOSE 8000

CMD ["tail", "-f", "/var/log/lastlog"]
