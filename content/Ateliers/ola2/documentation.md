/*
Title: Documentation
Description:
Author: Outils Libres Alternatifs
Date: 2016/18/7
Template: index
*/


## OLA #2
Un week-end atelier pour découvrir de nouvelles plages de son!
Avec Quentin Caille.

<iframe src="https://player.vimeo.com/video/175218014?autoplay=1" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/175218014">ola#2 workshop &quot;patch~ my sound&quot;</a> from <a href="https://vimeo.com/outilslibres">Outils Libres</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

### Documentation des projets
la documentation des projets réalisé au cours du workshop est accessible ici : [ola2.outilslibresalternatifs.org](http://ola2.outilslibresalternatifs.org/)

### Le pad
Ci-dessous le contenu du pad partagé durant ces 48h :

Sources de notre outils de documentation : https://g-u-i.me/gogs/bachir/ola2doc

Présentation de Quentin Caille    
collectif sin : https://www.youtube.com/user/collectifsin1     
johnkool records : http://www.johnkoolrecords.com/    

Pure Data (pd) :    
Miller puckette (a développé maxmsp (version propriétaire) puis Pure Data (libre)) https://en.wikipedia.org/wiki/Miller_Puckette
Pure Data comme une page blanche
Comme un circuit electronique
Généralement du haut vers la bas, on entre dans les node par le Haut et on sort par le bas
DAC : digital audio compute : digital2audio
Attention au materiel audio, puredata fais ce qu'on lui dit, sans sécurité préprogrammé ...
le p'tits objets pd de Quentin
PD logiciel d'entrée / sortie IO (in/out) : assigné le clavier a des fonctions
OSC : protocole de communication entre smartphone et pd
le random :
- turn on turn in drop out : https://fr.wikipedia.org/wiki/Timothy_Leary
- Brian Eno : obliques stategies https://fr.wikipedia.org/wiki/Strat%C3%A9gies_obliques
Les couleurs : PD n'a pas beaucoups d'option de tunning d'interface, il va a l'eseentiel

PD Patch Repository http://pdpatchrepo.info/

[ADC~] audio digital compute : audio2digital > entrée son
[objet] = nomenclature decriture des objets

Agrandissement la taille de la fonte d’interface :
edit>font

Webcam Noise
http://hotchk155.blogspot.fr/2010/05/first-play-with-puredata.html

Liste d'objets de référence: https://puredata.info/docs/tutorials/pd-refcard

Beat Machine
https://www.youtube.com/watch?v=7lBkxV5gu5s

Ressources sonores, artistes

BETE DE GROS BOSS EN TUTORIEL PURE DATA, RAFAEL HERNANDEZ :
https://www.youtube.com/channel/UC-RatzHn1ukuuINLqnbBYeg

https://soundcloud.com/rukano/sc-tweet-krautrock-organ super collider- Rukano

Einstürzende Neubauten (Halber Mensch 1985), musique industriel
https://youtu.be/kn14Rq8sUAg

LUCKY DRAGONS - MAKE A BABY PROJECT
https://www.youtube.com/watch?v=Oqkqgq867j8

Brian Eno - Another Green World DOcumentary (tcheck @36min)
https://www.youtube.com/watch?v=2DbKAj-e8_I

King Jammy - Dub
https://www.youtube.com/watch?v=mseFH6W7f-Y

Scientist - Dub
https://www.youtube.com/watch?v=nA8OBQMt9WY

Pan Sonic (mika vainio)
https://www.youtube.com/watch?v=T8p1lo6OziY

Label : Raster Noton : http://www.raster-noton.net

Alva Noto (Carsten Nicolai)
https://www.youtube.com/watch?v=GYhXa3FLdQc

Ryoji Ikeda
https://www.youtube.com/watch?v=k3J4d4RbeWc

Ianis Lallemand
http://ianislallemand.net/

Ryan Jordan
http://ryanjordan.org/

Mario de Vega et Victor Mazon
http://www.mariodevega.info/
http://r-aw.cc/

Marcus Boon, sur le drone. (essai)
http://marcusboon.com/the-eternal-drone/

Yann Gourdon
http://ygourdon.net/ALT/archives.html    

Editions Mego
(label w/ KTL, SoMa, Peter Rehberg, collection GRM...)    
http://editionsmego.com/

Kasper T. Toeplitz
http://www.sleazeart.com/

Amédée de Murcia / Hugo Saugier \ Couleur TV
https://www.youtube.com/watch?v=Jh6CwYx5kiw

Merzbow
https://www.youtube.com/watch?v=fR_8gpJCT4I

KK NULL
https://www.youtube.com/watch?v=v8XeXvAkHTM

Vomir
https://www.youtube.com/watch?v=be-HPhCdP6s

Manifeste du mur bruitiste
http://www.decimationsociale.com/app/download/5795218093/Manifeste+du+Mur+Bruitiste.pdf

KEVIN BLCHDOM
https://vimeo.com/13224473
https://www.youtube.com/watch?v=iQLK9L0SI2Q

Kaitlyn Aurelia Smith
*Pure Data version analogique*
http://www.the-drone.com/magazine/on-a-interview%C3%A9-kaitlyn-aurelia-smith-invocatrice-de-la-plus-belle-musique-synth%C3%A9tique-du-moment/

Shepard tone (illusion de montée sonore infinie) :
https://www.youtube.com/watch?v=BzNzgsAE4F0

Le youtube du son javascript
http://tinyrave.com/

liste des objects : http://en.flossmanuals.net/pure-data/list-of-objects/audio-filters/

### Problèmes/solutions

Sous linux Ubuntu, si pas de son :
1. vérifier que les périphériques audio apparaissent dans Média -> Audio settings
2. si non essayer d'installer pd-osc ou pd-audio (ça a débloqué la situation en installant ça presque au pif sur un ordinateur)
3. retourner dans Média -> Audio Settings voir si les périphériques existent, et en chercher un qui marche (pas forcément celui sélectionné par défaut.
