sudo apt update && sudo apt upgrade -y
sudo apt install kali-desktop-xfce -y
sudo apt install dbus-x11 -y

sudo apt update && sudo apt install kali-win-kex

# `kex stop` to kill prev server, if needed

# To use RDP
sudo apt install xrdp -y
sudo nano /etc/xrdp/xrdp.ini # change port to 3390
sudo service xrdp start