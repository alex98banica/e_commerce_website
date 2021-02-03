BANICA ALEXANDRU IONUT 342C3

Fisierele pentru baza de date se gasesc in folderul db


MONGODB:
	docker:
		docker pull mongo:3.6
		docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:3.6
		
Import baza de date:
	creare baza de date shopping
	powershell: se actualizeaza import.ps1 cu calea catre fisere locale
	se ruleaza import.ps1 - importa bazele de date
	import functii stocate -se gasesc in functii_stocate si load pentru ele

In folderul mag se gasesc fisierele pentru website
Rulare:
	npm install
	npm start

conectare: localhost:3000/


	