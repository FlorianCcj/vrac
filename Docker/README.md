https://docs.docker.com/get-started/part2/#apppy
https://blogs.technet.microsoft.com/canitpro/2015/09/08/step-by-step-enabling-hyper-v-for-use-on-windows-10/
https://docs.docker.com/samples/

Part 1 ; container

Dockerfile : comment l'image docker va etre creer
app.py : mon appli python
requirements.txt : dependance de mon appli

docker run hello-world : lance le container hello word pour tester que docker est bien installé
docker build -t friendlyhello : permet de mettre un alias plsu simple a use
docker image : liste les image sur la machine
docker run -p 4000:80 friendlyhello

l'appli est lancé sur http://0.0.0.0:80 du coup on lie le port 80 du container sur le 4000 de la machine
accessible sur http://localhost:4000 par navigateur ou par curl 'curl http://localhost:4000

docker run -d -p 4000:80 friendlyhello : lance en background
docker ps : liste les container courant
docker stop CONTAINER_ID : arrete le container avec l'id
docker login : se connecter au container public de docker  http://cloud.docker.com

tagger une image
docker tag friendlyhello john/get-started:part1
docker tag image username/repository:tag

docker images : affiche les images tagger les plus recente
gocker image ls . : meme chose
docker push username/repository:tag : publie l'image 
docker run -p 4000:80 username/repository:tag : pull (si pas en local) and run

Part 2 : service

