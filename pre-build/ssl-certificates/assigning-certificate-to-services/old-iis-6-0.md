---
sidebar_position: 18
---

# Old IIS 6.0 certificate replacement (Windows Server 2003)

1. Go to IIS 6.0
2. Click on Web Sites > Default Web Site
3. Right click Default Web Site > Properties > Directory Security > Server Certificate…
4. Click Next on the welcome wizard, if you see the following
	- Renew the current certificate - go to step 5
	- Create new certificate - go to step 8
5. Cancel out of the wizard and go back to Web Sites, right click > New > Web Site…
6. Give the website a name of SSL Renewal and follow the wizard
7. Once the website is created, right right click Default Web Site > Properties > Directory Security > Server Certificate…
8. Click on Create new certificate  > Next and go through the wizard