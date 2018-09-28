#!/bin/bash
sudo apt update
sudo apt install samba -y
whereis samba
mkdir /home/lihe/sambashare/
sudo nano /etc/samba/smb.conf
##put the following:
#[sambashare]
#    comment = Samba on Ubuntu
#    path = /home/lihe/sambashare
#    read only = no
#    browsable = yes
##then:
#sudo service smbd restart
#sudo smbpasswd -a lihe
