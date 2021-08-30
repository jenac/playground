# Reference:
https://adoptopenjdk.net/installation.html#linux-pkg
ctrl + f => Linux RPM and DEB installer packages

1. Check ubuntu codename
  ```bash
  $ cat /etc/os-release | grep UBUNTU_CODENAME
  ```
2. $ sudo apt-get install wget apt-transport-https gnupg

3. $ wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | sudo apt-key add -

4. $ echo "deb https://adoptopenjdk.jfrog.io/adoptopenjdk/deb focal main" | sudo tee /etc/apt/sources.list.d/adoptopenjdk.list

5. $ sudo apt-get update 

6. $ sudo apt-cache search adoptopenjdk

7. Select your version number, see reference link above for available version number <br/>
I'll be using version 8 so the command would be: <br/>
sudo apt-get install adoptopenjdk-8-hotspot
  ```bash
  $ sudo apt-get install adoptopenjdk-<YOUR-VERSION-NUMBER-HERE>-hotspot
  ```
8. Check java if exising
  ```bash
  $ java -version
  ```
  * Output should be same as below
  ```bash
  openjdk version "11.0.10" 2021-01-19
  OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.10+9)
  OpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.10+9, mixed mode)
  ```
