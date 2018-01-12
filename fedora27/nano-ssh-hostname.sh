#!/bin/bash
sudo systemctl enable sshd
sudo service sshd start
sudo yum install -y nano
sudo nano /etc/hostname
