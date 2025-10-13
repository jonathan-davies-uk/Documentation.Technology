## Install Kismet on Kali Linux

```bash
wget -O - https://www.kismetwireless.net/repos/kismet-release.gpg.key --quiet | gpg --dearmor | sudo tee /usr/share/keyrings/kismet-archive-keyring.gpg >/dev/null
echo 'deb [signed-by=/usr/share/keyrings/kismet-archive-keyring.gpg] https://www.kismetwireless.net/repos/apt/git/kali kali main' | sudo tee /etc/apt/sources.list.d/kismet.list >/dev/null
sudo apt update
sudo apt install kismet
```

## Installing piecemail for capture

```bash
sudo apt install kismet-capture-linux-wifi
sudo apt install kismet-capture-linux-bluetooth
```
### References
- [Packages - Kismet](https://www.kismetwireless.net/packages/)