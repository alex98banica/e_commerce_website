docker cp {cale_fisier_local}:\db\mixere.csv mongodb:/home
docker exec mongodb mongoimport -d shopping -c mixere --type csv --headerline --file /home/mixere.csv

docker cp {cale_fisier_local}\casti.csv mongodb:/home
docker exec mongodb mongoimport -d shopping -c casti --type csv --headerline --file /home/casti.csv

docker cp {cale_fisier_local}\amplificatoare.csv mongodb:/home
docker exec mongodb mongoimport -d shopping -c amplificatoare --type csv --headerline --file /home/amplificatoare.csv

docker cp {cale_fisier_local}\microfoane.csv mongodb:/home
docker exec mongodb mongoimport -d shopping -c microfoane --type csv --headerline --file /home/microfoane.csv

docker cp {cale_fisier_local}\db\boxe.csv mongodb:/home
docker exec mongodb mongoimport -d shopping -c boxe --type csv --headerline --file /home/boxe.csv