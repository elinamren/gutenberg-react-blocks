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
kopiera WP Starter (detta repot) och klistra in i ditt nya tema  
Gå igenom och ändra namn om du vill (adeprimo nu)  
Npm init (package.json skapas) klicka ok på alla dubbelkolla så det är rätt repo url

### Package.json

Kopiera scripts och devDependencies från packages.json i mappen "gör egen sen kopiera"

## Starta utveckla

node modules (npm i/yarn)

npm run dev  
Gå in i wp-admin -> themes -> byt till ditt nya sparklubben tema
