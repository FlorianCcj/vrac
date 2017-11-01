# Debugger avec git
git bisect start # lancement du debugger
git bisect good 29d9f9 # initialise le dernier commit fonctionnel
git bisect bad bad5fbe # initialise le premier commit buggant

git nous positionne sur un commit, on le test pour voir si le bug est la
si oui : git bisect bad
si non : git bisect good

et ainsi de suite jusqu'a ce que git nous face un rapport sur le commit qui a fait crash

git bisect reset # reinirialisation

Bonus : 
git bisect run vendor/bin/phpunit --filter ThatWontHappenAgainISwearTest # lance les test et cherche a recuperer une erreur en particulier
