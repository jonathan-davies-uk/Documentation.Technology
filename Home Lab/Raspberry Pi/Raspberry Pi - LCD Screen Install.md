
## Install LCD Screen driver

```bash
sudo rm -rf LCD-show
git clone https://github.com/goodtft/LCD-show.git
chmod -R 755 LCD-show
cd LCD-show/
sudo ./LCD35-show
```
## Calibrate the Touch screen

```bash
cd LCD-show/  
sudo dpkg -i -B xinput-calibrator_0.7.5-1_armhf.deb
```
## How to rotate the display

```bash
cd LCD-show/
sudo ./rotate.sh 90
```
#### References
[goodtft/LCD-show: 2.4" 2.8"3.2" 3.5" 5.0" 7.0" TFT LCD driver for the Raspberry PI 3B+/A/A+/B/B+/PI2/ PI3/ZERO/ZERO W](https://github.com/goodtft/LCD-show)
[3.5inch RPi Display - LCD wiki](https://www.lcdwiki.com/3.5inch_RPi_Display)
[Raspberry Pi 3.5 Touch Screen 480*320 LCD TFT Display Optional ABS Metal Case Cooling Fan for Raspberry Pi 4 Model B or 3B+ 3B - AliExpress](https://www.aliexpress.com/item/32906213419.html?spm=a2g0o.productlist.main.6.5896CZUfCZUfZE&algo_pvid=24eef842-2162-4f7b-ae94-b839eb7b44a7&algo_exp_id=24eef842-2162-4f7b-ae94-b839eb7b44a7-2&pdp_ext_f=%7B%22order%22%3A%22420%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21GBP%2111.70%2110.99%21%21%2115.11%2114.19%21%402103834817601325597823060eaa04%2112000020692949392%21sea%21UK%210%21ABX%211%210%21n_tag%3A-29910%3Bd%3A1f097a27%3Bm03_new_user%3A-29895&curPageLogUid=iIuMrLlrtRi6&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A32906213419%7C_p_origin_prod%3A)