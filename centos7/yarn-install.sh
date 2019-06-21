
#!/bin/bash
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install yarn

#add path
#nano ~/.zshrc, add export PATH="$PATH:`yarn global bin`"
