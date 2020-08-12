# React--Moovice
Excercice chez Konexio

Exercice - Moovice - 1
Netflix a du soucis à se faire avec cette nouvelle plateforme de recommandation de film : Moovice !

Vous choissisez entre 2 films celui que vous préféré, ce qui vous permet par la suite d’avoir une liste de film suggéré.

Créer une application de cinq pages :

This week : qui listera les films qui sortent dans la semaine
This week Battle : qui listera les films par deux pour choisir celui que vous préférez
Popular : qui listera les films les plus populaires
Popular Battle : qui listera les films les plus populaires par deux pour choisir celui que vous préférez
My List : qui contiendra une liste des films préférés
Installation
Créer un dossier de travail dans le dossier konexio/react et taper

npx create-react-app react_moovice
cd react_moovice
npm i react-router-dom prop-types bootstrap
npm start
Créer un compte et un clé API sur le site : themoviedb.org

Etape 1 : Router
Dans App.js

Créer un routeur avec une nav vers 5 liens :

This week (qui représente la page d’accueil)
This week battle
Popular
Popular battle
My List
Avec les routes respectives :

/
/battle
/popular/
/popular-battle/
/my-list/
Créer les fichiers components/Discover.js, components/DiscoverBattle.js, components/Popular.js, components/PopularBattle.js et components/MyList.js avec le strict minimum et une <div> avec le nom respectif du composant.

Avant de passer à l’étape suivante, assurez-vous que vous pouvez cliquer sur chaque lien et que les titres de chaque composant séparément.

Etape 2 : .css
Dans App.css, utiliser l’import de la police d’écriture avec l’URL suivantes :

https://fonts.googleapis.com/css?family=Nunito
@import url('<url>');
Ensuite utiliser cette police dans la balise <body> avec la propriété font-family.

Toujours dans App.js, importer

import 'bootstrap/dist/css/bootstrap.min.css';
que vous aurez collé préalablement dans le dossier src.

Pour tous les autres composants, créer un fichier <Component>.css à côté de ce composant. Dans le cadre de cet exercice, vous n’utiliserez pas de balise style.

Etape 3 : Chargement des données asynchrones
Dans le composant components/Popular.js.

Enregistrer les données dans le state :

movies qui a pour valeur par défaut un array
Charger la liste de tous les films avec ce lien où vous remplacerez API_KEY par votre API.

https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<API_KEY>
Créer le composant components/movie/Card.js avec son fichier css correspondant. Chaque film affichera :

L’image du film (ou un DVD par défaut si la réponse est null)
Le titre
La description
Indice
Utiliser l’image DVD qui vous téléchargerez dans le dossier src avec le nom placeholder.png
Pour accéder aux URLs complètes des films, utiliser l’URL : https://image.tmdb.org/t/p/w300/ avec la valeur poster_path de la réponse JSON
Etape 4 : Movie Battle
Créer un composant ./components/PopularBattle.js
Ajouter ce composant à la navigation avec l’URL /popular-battle
On va reproduire le composant Popular avec quelques différences :

Ajouter au state la clé :
currentPage avec une valeur de 1 par défaut
Effacer le render() et refaites le afin d’afficher uniquement les 2 premiers films. A chaque clic, il passera au deux films suivants.
Ce clic activera une méthode (du nom de votre choix) et avec comme paramètre l’ID du film cliqué
Indice
A chaque clic, penser à mettre à jour la valeur de currentPage avec currentPage + 1 pour afficher les images en fonction de la valeur de currentPage. C’est le même principe qu’une pagination
Etape 5 : localStorage
Créer une méthode : saveToLocalStorage qui prendra comme paramètre movieId et qui sauvegardera l’ID dans la clé my-list

A chaque clic, enregistrer l’ID du film que vous avez cliqué à votre localStorage sans jamais le dupliquer.

Indice
Pour passer à l’étape suivante, cliquer sur plusieurs films et vérifier dans votre localStorage que vous récupérer un array “stringifié”.

Exemple : Après avoir cliqué sur les films d’ID 24 et 329865 alors, dans la console de votre navigateur et si vous tapez localStorage.getItem('my-list'), vous devriez voir : [24, 329865]