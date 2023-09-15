# Boilerplate for new wordpress project (full site editing)

## Projetktmapp

Gå in i finder
skapa en mapp till projektet
Skapa en initdb.d mapp
ladda ner senaste wordpress i den nya mappen
https://wordpress.org/download/
kopiera docker-compose.yml filen härifrån och lägg in i samma mapp

## starta docker

Docker-compose up i projektmappen
Localhost:8080
Välj språk
Lägg in uppgifter och dina egna lokala inlogg

## Tema

Gör ett nytt repo på bitbucket clona ner det i ditt tema och öppna upp i vs code
Skapa en ny mapp i wordpress/wp-content/themes för ditt tema

Välj alternativ 1 eller 2

1
kopiera WP Starter (detta repot)
Gå igenom och ändra namn osv
2
Npm init (package.json skapas)
Package.json
Kopiera alla babel från miab
Kopiera alla script från miab, byt ut miab mot sparklubben
Skapa
style.css
Functions.php
Theme.json
Parts mapp
Webpack.config.js
Kopiera innehåll från miabs repo
Gör mappar och filer för de i entry(rad 9)
npm i
2
Blocks.js
kopiera in import \* från miab
Styles.scss kopiera allt från miab
gör core mapp
kopiera reset.scss
gör base mapp
gör component mapp
patterns mapp
Templates mapp
Kopiera index.php
npm run dev
Gå in i wp-admin -> themes -> byt till ditt nya sparklubben tema

Skapa branch develop
Pusha
