/*
Title: Documentation
Description:
Author: Outils Libres Alternatifs
Template: index
*/


## Tutoriels

### Scribus

#### Installation de Ghoscript pour Mac OSX
Lorsque vous installez Scribus sur Mac OSX, il vous est demandé d'installer Ghostscript.
Scribus nécessite l'installation de Ghostscript afin de pouvoir importer des pdf par exemple. 

1. Télécharger la dernière version de Ghostscript
    Ghostscript 9.16 Source / Ghostscript GPL Release
    <http://ghostscript.com/download/gsdnld.html>
2. Décompresser le fichier
3. Ouvrir le terminal (Application → Utilitaires → Terminal)
4. Taper “cd” puis espace dans la fenetre du Terminal et glisser le dossier ghostscript décompressé dans la fenetre de Terminale, puis taper entrer
5. Taper “./configure” puis entrer. Il est possible que vous ayez une fenetre qui s’affiche vous demandant d’installer gcc. Cliquer sur “Installer". 
6. Une fois que l’installation est terminée, retourner dans le terminal et taper “./configure” puis entrer.
7. Quand l’opération est terminée. Taper “make” puis entrer. 
8. Puis taper “sudo make install", taper entrer. Puis entrer votre mot de passe (votre mot de passe ne s’affiche pas c’est normal) puis taper entrer.
9. Normalement l’installation est terminée, réouvrir Scribus.

#### Premier pas et astuces dans Scribus
- Ouvrir scribus, nouveau document ou fichier → nouveau.
- Cliquer dans la fenêtre avec les paramètres
- Fond perdu si impression laisser environ 5mm. Pour changer d’unité c’est juste à droite.
- Créer des cadres textes
- Accès aux propriétés (F2) aller sur texte et paramétrer les longuers hauteurs nombres de colonnes les fontes de caractères etc.
- Pour importer les textes cliquer sur le cadre et choisir importer en copiant collant à partir du texte original
- Pour chaîner le texte dans plusieurs pages cliquer sur l'icône "lier les cadres de texte" dans la barre horizontale (N) puis cliquer sur le 2e bloc de texte qui doit recevoir ce qui débordait
- créer des cadres photo
importer les photos et aller sur image pour choisir les critères (ajuster aux cadres, hauteur, etc.)
- Vue chemin de fer : fenetre → organiser les pages
- Des repère propres, pour colonnes, goutières etc. page → gestion des repères
- La gestion des espaces insécables se fait via extra et les préférences.
- Pour avoir des alignements verticaux homogènes régler la grille d'interlignage dans préférences → guides puis dans la feuille de style aligner sur grille dans le menu déroulant interlignage
- Marge interne à un bloc de texte (padding) : Propriété → Texte → Colonnes & Distances du texte

####Astuces Scribus

##### Astuce lors de l'exportation de PDF
- Vectoriser les typos à l'exportation : Polices → Tout vectoriser

##### Afficher les caractères masqués
Pour afficher les caractères masqués (saut de ligne, espaces, etc) clic-droit/modifier le texte.
Ou: affichage/afficher les carctères masqués.


#### Scripts
Sur le wiki de scribus, template « boilerplate.js » : <http://wiki.scribus.net/canvas/Boilerplate.py>
Répertoire des scripts par défaut (linux) : /usr/share/scribus/samples
/!\ Important : bien faire un import scribus et préfixer chaque appel à l'API par scribus.fonction(arg.)

<https://github.com/outilslibresalternatifs/scribus-scripts>
<https://github.com/aoloe/scribus-plugin-gettext-markdown/tree/greg>

##### Plugin Markdown
Installation du plugin markdown dans scribus: ce script ne permet pas d'importer du .md

##### Script "Align_image_in_frame"
Script qui permet d'aligner une image dans un bloc
Ce script nécessite l'installation de python Tkinter
Install python Tkinter sur Arch Linux -> sudo pacman -S python-pmw python imaging

---
### Gimp

#### L'outil chemin (l'outil plume)
problème: Le tracé disparait lorsque le stylet quitte la surface de la palette graphique.
résolution: Ne pas s'arrêter lors d'un tracé à la plume.
intérressant: chaque tracé disparu a en fait été enregistré dans l'onglet chemin.
nouveau problème: sélectionner le chemin (tracé) pour effacer le reste de l'image.
solution: clique droit sur le tracé dans l'onglet chemin → sélection vers chemin = le tracé est sélectioné. Puis Selection → Inverser ; Edition→ Effacer.

---


## Ressources

#### Tutoriels Scribus
Tutoriel en français ici 
<http://leporteplumes.com/2014/02/23/scribus-13-guides-pour-apprendre-a-utiliser-le-logiciel-libre-de-pao/>

#### Contenus Libres
<https://archive.org>
<http://publicdomainreview.org/>
<http://www.wikimedia.org/>

##### Raccourcis clavier de inDesign pour les switchers feignants
<https://g-u-i.me/owncloud/public.php?service=files&t=e8bc6b44bcf48ed7cf0db80abc381c6b>

#### La liste des raccourcis de base de Scribus
<http://wiki.scribus.net/canvas/Keyboard_Shortcuts_by_Key>

---

### Liste d'outils libres

####Gestionnaires typo sous license libre
<http://alternativeto.net/software/fontexplorer-x/?license=free>

#### Manipulation d’images

- Gimp - <http://sourceforge.net/projects/gimp/?source=directory>
- DarkTable - <http://www.darktable.org/install/>
- Krita - <https://krita.org/download/krita-desktop/>
- ImageMagick (en ligne de commande) - <http://imagemagick.org/script/binary-releases.php>

#### Dessin vectoriel
- Inkscape

#### Editeur de code
- Atom (éditeur de code crée par github)

#### Divers / Utilitaires
- PDFsam - Compile des PDFS

---

### Caractères typographiques libres
- Aileron
- Arial
- Borges regular
- DIN Alternate
- DS-DIGII
- Fengardo Neue
- Gotham
- Helvetica Neue
- Herhsey timesrb
- Interval
- Inknut
- Mourier
- OLA sans regular
- Open sans
- Rupture
- Source code pro light
- Ubuntu
- AbyssinicaSIL-R
- DejaVuSans
- FreeSans
- Volkorn
- Cabin