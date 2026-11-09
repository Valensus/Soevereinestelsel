# Soevereinestelsel 2.0

Open index.html rechtstreeks. Alle gegevens, scripts en afbeeldingen zijn in dit ene HTML-bestand opgenomen. De atlas heeft geen installatie of server nodig. Externe bronnen openen afzonderlijk en vereisen internet. Een dossierlink gebruikt #node=… en werkt op een ander apparaat als daar ook een exemplaar van de atlas beschikbaar is.

De dossier- en stelseltoelichtingen staan in het eerste scriptblok van index.html. Voeg nieuwe dossiers toe aan `atlasAdditions`, met een bestaande categorienaam, ontwikkelfase, toelichting en een openbare bron als paar van titel en URL. Gebruik `parent` voor een onderdeel dat via het hoofddossier en Zoeken bereikbaar is. Laat `parent` weg voor een zelfstandig kaartobject. Zet onderbouwde verbindingen in `atlasAdditionRelations`. Het optionele bronnummer verwijst naar `references` van het eerste object en begint bij 1. Zonder nummer gebruikt de verbinding de hoofdbron van dat object.

De oorspronkelijke objecten, bronrecords en verbindingen worden nog in index.html geregistreerd. Voeg een groene of rode bevinding pas toe als de gekoppelde openbare bron de precieze formulering ondersteunt. Laat een open vraag neutraal. De toelichting bij een verbinding vermeldt of die is onderbouwd, een vergelijking toont of nog onderzocht wordt.

De functionele subcategorieën binnen Technologie staan in `solutionGroups` in het eerste scriptblok van index.html. Neem ieder technologiedossier in precies één groep op. Bij een nieuwe subcategorie moet ook een passende baan in `solutionClusterLayouts` worden toegevoegd. Browsers en Werkplekbeheer hebben een eigen groep; wachtwoordbeheerders staan bij Identiteit. `infrastructureGroups` verdeelt Infrastructuur verder naar type. De indeling verschijnt in het stelseloverzicht, de dossiermetadata en de zoekfilters. Onderdelen bij een hoofddossier zijn ook via deze groepen te openen.

## Nog te controleren of uit te bouwen

- Aanvullende controle op echte aanraakapparaten en handmatige beoordeling van overlappende kaartlabels. De geautomatiseerde controle van 9 november 2026 omvat 360, 390, 768, 1024, 1280 en 1920 pixels, alle dossiers, zoeken, filters en kaartnavigatie.
- Controle per dossier en per verbinding op brondekking, actualiteit en formulering. De bestaande inventaris is geen volledig geverifieerde inventaris.
- De CSV-export bij Zoeken bevat de gefilterde bronrecords die als geraadpleegd zijn gemarkeerd.

Wereldwijd bevat publieke initiatieven en praktijkvoorbeelden buiten Europa. Vermeld bij nieuwe dossiers een concrete `phase` en onderscheid historische voorbeelden, aankondigingen, scholing en aantoonbaar gebruik. De fase verschijnt bij wereldwijde dossiers naast rol en regio. Nationale regie en een opensourcebasis zijn afzonderlijke kenmerken; schrijf geen volledige migratie of herbruikbare licentie toe zonder bron.

Beleid bevat beleidsvisies, wetgeving, contractvoorwaarden en handreikingen. Vermeld bij nieuwe beleidsdossiers het toepassingsgebied en de status expliciet in de toelichting en geef een passende `phase` op. De status verschijnt naast rol en regio. Een verplichting geldt alleen binnen het betreffende toepassingsgebied; presenteer een advies of modelvoorwaarde niet als wet of als bewijs van soevereiniteit.


## Inhoud en bronnen

De kaarten bevatten toelichtingen, rollen, bronfasen, onderbouwde productkenmerken en bronverwijzingen. Neem geen eigen adviezen, vervolgstappen of vergelijkingsvragen op. `contributionRoles` verduidelijkt de bijdrage van partijen; `evidenceStages` benoemt wat de aangehaalde bron over de fase onderbouwt. Een bronfase is geen garantie op de actuele projectstatus.

Onderbouwde productkenmerken staan in `documentedProfiles` en `verifiedComparisons`, met bronverwijzingen. Ontbrekende kenmerken worden niet aangevuld met aannames.

Zoeken doorzoekt namen, rollen, regio’s, fasen, toelichtingen en productkenmerken. De snelle zoekbalk toont rechtstreekse naamtreffers bovenaan.

De categorie Gemeenten bevat uitsluitend Nederlandse gemeenten en hun relevante samenwerkingsverbanden. Buitenlandse gemeentelijke voorbeelden staan geografisch bij Europa of Wereldwijd. Europa is ruimer dan de EU; Tirana staat dus bij Europa. Maak geen dubbele dossiers om een gemeente in meerdere stelsels te tonen. Markeer historische voorbeelden expliciet in naam en ontwikkelfase.


## Logo’s en herkenning

`logoAssets` bevat officiële beeldmerken en website-iconen als ingesloten PNG-afbeeldingen. De atlas vraagt bij het openen geen logo’s bij externe diensten op. De officiële website, afbeeldingsbron en raadpleegdatum staan per afbeelding in `logoAssets` (`site`, `source` en `checked`).

Logo’s worden in de kaart én het detailvenster getoond. De bestaande `badgeNames`/`badgeSource`-afbeelding blijft beschikbaar als reserve. De officiële beeldmerken hebben voorrang. Een document of project kan het beeldmerk van de betrokken organisatie gebruiken; `owner` benoemt dan die organisatie in de toegankelijke beschrijving. Voeg geen willekeurig logo van een bronuitgever toe aan een ander initiatief.

Waar geen passend beeldmerk beschikbaar is, verschijnen initialen. Dat is een herkenningsteken, geen verzonnen officieel logo. Categorieoverzichten tonen geen dossierlogo. Bestaande koppelingen in `badgeNames` mogen niet worden verschoven: de index verwijst naar een vaste plaats in de oorspronkelijke afbeelding.
