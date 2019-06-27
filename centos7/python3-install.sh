sudo yum install -y https://centos7.iuscommunity.org/ius-release.rpm
sudo yum update
sudo yum install -y python36u python36u-libs python36u-devel python36u-pip
sudo python3.6 -m pip install --upgrade pip
sudo ln -s /usr/bin/python3.6 /usr/bin/python3