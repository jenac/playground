apt update && apt upgrade -y
apt install git curl wget sudo -y

adduser lihe
usermod -aG sudo lihe


apt-get update
apt-get install xrdp -y
apt-get install mate-core mate-desktop-environment mate-notification-daemon -y
sed -i.bak '/fi/a #xrdp multiple users configuration \n mate-session \n' /etc/xrdp/startwm.sh
/etc/init.d/xrdp restart