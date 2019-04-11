#!/bin/bash
# to install postgres client 11 or higher
sudo apt-get install wget ca-certificates
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
sudo apt update
sudo apt install postgresql-client

#backup/restore postgres database
#backup
#pg_dump -h 192.168.1.210 -U postgres stock-watch-py > swp.bak
#restore
#psql -h 192.168.1.167 -U postgres stock-watch-py < swp.bak

