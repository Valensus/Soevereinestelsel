# Soevereinestelsel 2.0

Open index.html rechtstreeks met atlas-data.js in dezelfde map. De atlas heeft geen installatie of server nodig. Externe bronnen openen afzonderlijk en vereisen internet. Een dossierlink gebruikt #node=… en werkt op een ander apparaat als daar ook een exemplaar van de atlas beschikbaar is.

De dossier- en stelseltoelichtingen staan in atlas-data.js. Voeg nieuwe dossiers toe aan `atlasAdditions`, met een bestaande categorienaam, ontwikkelfase, toelichting en een openbare bron als paar van titel en URL. Gebruik `parent` voor een onderdeel dat via het hoofddossier en Zoeken bereikbaar is. Laat `parent` weg voor een zelfstandig kaartobject. Zet onderbouwde verbindingen in `atlasAdditionRelations`. Het optionele bronnummer verwijst naar `references` van het eerste object en begint bij 1. Zonder nummer gebruikt de verbinding de hoofdbron van dat object.

De oorspronkelijke objecten, bronrecords en verbindingen worden nog in index.html geregistreerd. Voeg een groene of rode bevinding pas toe als de gekoppelde openbare bron de precieze formulering ondersteunt. Laat een open vraag neutraal. De toelichting bij een verbinding vermeldt of die is onderbouwd, een vergelijking toont of nog onderzocht wordt.

De eerdere versie staat in backup/index-voor-2.0.html.

## Nog te controleren of uit te bouwen

- Browsercontrole op de zes gevraagde schermmaten, inclusief aanraking, toetsenbord, dossierlinks en overlappende labels.
- Controle per dossier en per verbinding op brondekking, actualiteit en formulering. De bestaande inventaris is geen volledig geverifieerde inventaris.
- De CSV-export bij Zoeken bevat de gefilterde bronrecords die als geraadpleegd zijn gemarkeerd.
