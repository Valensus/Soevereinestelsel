# Soevereinestelsel 2.0

Open index.html rechtstreeks. Alle gegevens, scripts en afbeeldingen zijn in dit ene HTML-bestand opgenomen. De atlas heeft geen installatie of server nodig. Externe bronnen openen afzonderlijk en vereisen internet. Een dossierlink gebruikt #node=… en werkt op een ander apparaat als daar ook een exemplaar van de atlas beschikbaar is.

De dossier- en stelseltoelichtingen staan in het eerste scriptblok van index.html. Voeg nieuwe dossiers toe aan `atlasAdditions`, met een bestaande categorienaam, ontwikkelfase, toelichting en een openbare bron als paar van titel en URL. Gebruik `parent` voor een onderdeel dat via het hoofddossier en Zoeken bereikbaar is. Laat `parent` weg voor een zelfstandig kaartobject. Zet onderbouwde verbindingen in `atlasAdditionRelations`. Het optionele bronnummer verwijst naar `references` van het eerste object en begint bij 1. Zonder nummer gebruikt de verbinding de hoofdbron van dat object.

De oorspronkelijke objecten, bronrecords en verbindingen worden nog in index.html geregistreerd. Voeg een groene of rode bevinding pas toe als de gekoppelde openbare bron de precieze formulering ondersteunt. Laat een open vraag neutraal. De toelichting bij een verbinding vermeldt of die is onderbouwd, een vergelijking toont of nog onderzocht wordt.

De functionele subcategorieën binnen Technologie staan in `solutionGroups` in het eerste scriptblok van index.html. Neem ieder technologiedossier in precies één groep op. Bij een nieuwe subcategorie moet ook een passende baan in `solutionClusterLayouts` worden toegevoegd. Browsers en Werkplekbeheer hebben een eigen groep; wachtwoordbeheerders staan bij Identiteit. `infrastructureGroups` verdeelt Infrastructuur verder naar type. De indeling verschijnt in het stelseloverzicht, de dossiermetadata en de zoekfilters. Onderdelen bij een hoofddossier zijn ook via deze groepen te openen.

De eerdere versie staat in backup/index-voor-2.0.html.

## Nog te controleren of uit te bouwen

- Aanvullende controle op echte aanraakapparaten en handmatige beoordeling van overlappende kaartlabels. De geautomatiseerde controle van 9 november 2026 omvat 360, 390, 768, 1024, 1280 en 1920 pixels, alle dossiers, leeswijzers, zoeken, filters en startpuntnavigatie.
- Controle per dossier en per verbinding op brondekking, actualiteit en formulering. De bestaande inventaris is geen volledig geverifieerde inventaris.
- De CSV-export bij Zoeken bevat de gefilterde bronrecords die als geraadpleegd zijn gemarkeerd.

Wereldwijd bevat publieke initiatieven en praktijkvoorbeelden buiten Europa. Vermeld bij nieuwe dossiers een concrete `phase` en onderscheid historische voorbeelden, aankondigingen, scholing en aantoonbaar gebruik. De fase verschijnt bij wereldwijde dossiers naast rol en regio. Nationale regie en een opensourcebasis zijn afzonderlijke kenmerken; schrijf geen volledige migratie of herbruikbare licentie toe zonder bron.

Beleid bevat beleidsvisies, wetgeving, contractvoorwaarden en handreikingen. Vermeld bij nieuwe beleidsdossiers het toepassingsgebied en de status expliciet in de toelichting en geef een passende `phase` op. De status verschijnt naast rol en regio. Een verplichting geldt alleen binnen het betreffende toepassingsgebied; presenteer een advies of modelvoorwaarde niet als wet of als bewijs van soevereiniteit.


## Gebruik voor de eigen ontwikkeling

Alle acht stelsels hebben een leeswijzer met drie vervolgstappen en aanklikbare startpunten. `developmentGuides` beheert deze teksten. Ieder dossier heeft in `developmentSteps` een eigen redactioneel advies, zichtbaar onder “Voor de eigen ontwikkeling”. Dit advies is een voorgestelde aanpak, geen gemeten projectresultaat. Bij nieuwe dossiers hoort ook een specifieke vervolgstap.

`contributionRoles` verduidelijkt de bijdrage van opdrachtgevers, uitvoerders, leveranciers en praktijkgebruikers. `evidenceStages` benoemt wat de aangehaalde bron over de fase onderbouwt. Een bronfase is geen garantie op de actuele projectstatus. Ontwikkelfasen verschijnen bij alle categorieën en blijven filterbaar.

`technologyQuestions` geeft vaste vergelijkingsvragen per technologische subcategorie. Onderbouwde productkenmerken staan in `documentedProfiles` en `verifiedComparisons`, met bronverwijzingen. Licenties en dienstvoorwaarden moeten per component en editie worden beoordeeld. Verzin geen kenmerken om een vergelijking te vullen.

Zoeken doorzoekt namen, rollen, regio’s, fasen, toelichtingen, productkenmerken en vervolgstappen. De snelle zoekbalk toont rechtstreekse naamtreffers bovenaan. Het stelsel en de bestaande subcategorieën blijven behouden.
