#!/bin/bash
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common -y

curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -    

sudo apt-key fingerprint 0EBFCD88

echo "deb [arch=amd64] https://download.docker.com/linux/debian stretch stable" | sudo tee -a /etc/apt/sources.list.d/docker.list

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io

# sudo systemctl start docker
# sudo systemctl enable docker
sudo usermod -aG docker $USER
