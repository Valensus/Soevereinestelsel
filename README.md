# Soevereinestelsel 2.0

Open index.html rechtstreeks. Alle gegevens, scripts en afbeeldingen zijn in dit ene HTML-bestand opgenomen. De atlas heeft geen installatie of server nodig. Externe bronnen openen afzonderlijk en vereisen internet. Een dossierlink gebruikt #node=… en werkt op een ander apparaat als daar ook een exemplaar van de atlas beschikbaar is.

De dossier- en stelseltoelichtingen staan in het eerste scriptblok van index.html. Voeg nieuwe dossiers toe aan `atlasAdditions`, met een bestaande categorienaam, ontwikkelfase, toelichting en een openbare bron als paar van titel en URL. Gebruik `parent` voor een onderdeel dat via het hoofddossier en Zoeken bereikbaar is. Laat `parent` weg voor een zelfstandig kaartobject. Zet onderbouwde verbindingen in `atlasAdditionRelations`. Het optionele bronnummer verwijst naar `references` van het eerste object en begint bij 1. Zonder nummer gebruikt de verbinding de hoofdbron van dat object.

De oorspronkelijke objecten, bronrecords en verbindingen worden nog in index.html geregistreerd. Voeg een groene of rode bevinding pas toe als de gekoppelde openbare bron de precieze formulering ondersteunt. Laat een open vraag neutraal. De toelichting bij een verbinding vermeldt of die is onderbouwd, een vergelijking toont of nog onderzocht wordt.

De functionele subcategorieën binnen Technologie staan in `solutionGroups` in het eerste scriptblok van index.html. Neem ieder technologiedossier in precies één groep op. Bij een nieuwe subcategorie moet ook een passende baan in `solutionClusterLayouts` worden toegevoegd. Browsers en Werkplekbeheer hebben een eigen groep; wachtwoordbeheerders staan bij Identiteit. `infrastructureGroups` verdeelt Infrastructuur verder naar type. De indeling verschijnt in het stelseloverzicht, de dossiermetadata en de zoekfilters. Onderdelen bij een hoofddossier zijn ook via deze groepen te openen.

De eerdere versie staat in backup/index-voor-2.0.html.

## Nog te controleren of uit te bouwen

- Browsercontrole op de zes gevraagde schermmaten, inclusief aanraking, toetsenbord, dossierlinks en overlappende labels.
- Controle per dossier en per verbinding op brondekking, actualiteit en formulering. De bestaande inventaris is geen volledig geverifieerde inventaris.
- De CSV-export bij Zoeken bevat de gefilterde bronrecords die als geraadpleegd zijn gemarkeerd.

Wereldwijd bevat publieke initiatieven en praktijkvoorbeelden buiten Europa. Vermeld bij nieuwe dossiers een concrete `phase` en onderscheid historische voorbeelden, aankondigingen, scholing en aantoonbaar gebruik. De fase verschijnt bij wereldwijde dossiers naast rol en regio. Nationale regie en een opensourcebasis zijn afzonderlijke kenmerken; schrijf geen volledige migratie of herbruikbare licentie toe zonder bron.

Beleid bevat beleidsvisies, wetgeving, contractvoorwaarden en handreikingen. Vermeld bij nieuwe beleidsdossiers het toepassingsgebied en de status expliciet in de toelichting en geef een passende `phase` op. De status verschijnt naast rol en regio. Een verplichting geldt alleen binnen het betreffende toepassingsgebied; presenteer een advies of modelvoorwaarde niet als wet of als bewijs van soevereiniteit.
