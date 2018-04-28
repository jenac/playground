#!/bin/bash
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install qemu-kvm libvirt-bin virtinst bridge-utils cpu-checker -y
sudo apt-get install virt-manager -y
