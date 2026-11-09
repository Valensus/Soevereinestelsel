// Dossierinhoud en onderbouwde relaties van het Soevereinestelsel.

const dossierExplanations = new Map([
  ["Regeerakkoord","Het regeerakkoord geeft de politieke opdracht om digitale autonomie als uitgangspunt te nemen bij de overheid. Het kabinet wil strategische afhankelijkheden in cloud, data en cruciale systemen afbouwen en bij digitale inkoop onder meer sturen op open source, beveiliging en ketenrisico's. Voor een werkplek betekent dat dat de keuze voor kantoorsoftware, opslag en identiteit ook een inkoopvraagstuk is. De relatie is beleidsmatig. De afspraken geven richting aan keuzes die elders in het stelsel zichtbaar worden, bijvoorbeeld bij het Rijkscloudbeleid. Uit het akkoord volgt geen keuze voor een specifieke werkpleksuite."],
  ["NDS","De Nederlandse Digitaliseringsstrategie bundelt prioriteiten van de overheid voor digitalisering. De gemeentelijke proef met DAWO en MijnBureau valt onder die strategie. Dat maakt het verband concreet: de proef onderzoekt hoe een Linux-laptop en een opensource-samenwerkomgeving passen bij de werkzaamheden en bestaande systemen van gemeenten. De bijdrage van de NDS is coördinerend. Zij brengt bestuurslagen rond een gezamenlijk vraagstuk bijeen, terwijl SSC-ICT en BZK de technische bouwstenen ontwikkelen. Deelname aan een proef geeft inzicht in gebruikerservaringen en integratie. Brede inzetbaarheid moet uit de resultaten blijken."],
  ["BZK","Binnenlandse Zaken en Koninkrijksrelaties ontwikkelt MijnBureau en werkt met SSC-ICT, de VNG en vier gemeenten aan een praktijkproef. MijnBureau brengt bestaande opensourcecomponenten uit onder meer La Suite, openDesk en Nextcloud samen. BZK levert daarmee een directe bijdrage aan de samenwerkingslaag van de werkplek. De deelnemers kunnen onderzoeken of bestanden delen en samenwerken met die bouwstenen past bij hun processen. Daarnaast heeft BZK een beleidsrol binnen de Nederlandse Digitaliseringsstrategie. De praktijkproef is de bron voor dit verband. Zij geeft nog geen beeld van een brede productie-uitrol."],
  ["ICBR","De Interdepartementale Commissie Bedrijfsvoering Rijksdienst geeft opdracht voor de ontwikkeling van de Rijksbrede Soevereine Digitale Werkomgeving. SSC-ICT, DICTU en DUO-ICT worden bij de uitvoering genoemd. De bijdrage van de commissie zit in de gezamenlijke opdracht: bestandsuitwisseling, e-mail en werkplekdiensten worden als rijksbreed ontwikkelvraagstuk behandeld. Daardoor kunnen de betrokken dienstverleners hun keuzes over de grenzen van afzonderlijke organisaties afstemmen. De relatie met DAWO en MijnBureau loopt via de ontwikkelopdracht, die op die trajecten voortbouwt. De opdracht zegt op zichzelf weinig over welke functies al in productie zijn."],
  ["Forum Standaardisatie","Forum Standaardisatie helpt overheden open standaarden te selecteren en toe te passen. De inkoophandreiking vertaalt het beleid ‘pas toe of leg uit’ naar concrete uitvragen, bijvoorbeeld ondersteuning van ODF voor bewerkbare documenten. Dat is relevant voor werkplekken omdat documenten bij uitwisseling of overstap bruikbaar moeten blijven in software van verschillende leveranciers. De bijdrage is ondersteunend en ligt bij de eisen aan software en aanbestedingen. Of een product de standaard goed ondersteunt, moet blijken uit een test met de eigen documenten, inclusief opmaak en functies die medewerkers gebruiken."],
  ["SSC-ICT","SSC-ICT ontwikkelt DAWO, de Linux-werkplek die samen met MijnBureau in de gemeentelijke pilot wordt beproefd. De dienstverlener is ook genoemd als uitvoerder van de rijksbrede ontwikkelopdracht, samen met DICTU en DUO-ICT. De directe bijdrage is een alternatief desktopplatform waarop overheidsorganisaties kunnen uitproberen hoe werkplekbeheer en bestaande toepassingen samenkomen. MijnBureau vervult in die proef een andere functie: digitaal samenwerken. De combinatie maakt het mogelijk om de laptop en de samenwerkdiensten afzonderlijk te beoordelen. De pilotpublicatie beschrijft een proef met een eerste versie en geeft geen bewijs voor volledige vervanging van de bestaande werkplek."],
  ["DAWO","De Digitaal Autonome Werkomgeving Overheid is een door SSC-ICT ontwikkelde Linux-werkplek. Vier gemeenten beproeven een laptop met DAWO in combinatie met MijnBureau. De directe bijdrage zit in de desktoplaag: de overheid kan onderzoeken welke apparaten, beheerhandelingen en toepassingen op een alternatief besturingssysteem bruikbaar zijn. DAWO-NixOS geeft zicht op de technische inrichting. MijnBureau voegt de samenwerkdiensten toe. De vergelijking met Microsoft 365 helpt om functies en koppelingen te inventariseren die gebruikers nodig hebben bij een overstap. De proef levert praktijkervaring op en geeft nog geen garantie dat alle bestaande toepassingen meegaan."],
  ["MijnBureau","MijnBureau is de opensource-samenwerkomgeving die BZK ontwikkelt met bouwstenen uit onder meer La Suite, openDesk en Nextcloud. In de gemeentelijke proef wordt die omgeving gebruikt naast de Linux-werkplek DAWO. De directe bijdrage is dat de overheid bestaande software kan combineren voor samenwerking en per onderdeel kan onderzoeken wat herbruikbaar of vervangbaar is. De openbare installatie- en architectuurdocumentatie maakt zichtbaar hoe die onderdelen worden ingericht. Voor gebruikers telt ook of bestaande werkprocessen en koppelingen blijven werken. Dat wordt in de pilot onderzocht. Deelname aan die proef staat los van een besluit over brede invoering."],
  ["DICTU","DICTU is een ICT-dienstverlener van het Rijk en wordt samen met SSC-ICT en DUO-ICT genoemd bij de uitvoering van de Rijksbrede Soevereine Digitale Werkomgeving. Het concrete verband is die gezamenlijke ontwikkelopdracht voor bestandsuitwisseling, e-mail en werkplekdiensten. Dat maakt DICTU relevant als uitvoerder die helpt om een rijksbreed ontwerp naar beheerbare diensten te vertalen. DAWO en MijnBureau vormen bestaande bouwstenen waarop het traject voortbouwt. De publieke opdracht beschrijft de gezamenlijke inzet. Een precieze verdeling van afzonderlijke componenten over de uitvoerders blijkt daaruit niet."],
  ["DUO-ICT","DUO-ICT is de ICT-organisatie van de Dienst Uitvoering Onderwijs. In het stelsel staat zij als een van de uitvoerders van de Rijksbrede Soevereine Digitale Werkomgeving, naast SSC-ICT en DICTU. De bijdrage is verbonden aan de ontwikkeling van gezamenlijke werkplekdiensten, waaronder e-mail en bestandsuitwisseling. Dat geeft de dienst een uitvoerende rol in het afstemmen van diensten over organisatiegrenzen. De bron noemt de samenwerking, maar legt geen afzonderlijke verantwoordelijkheid vast voor bijvoorbeeld mailhosting, identiteitsbeheer of de desktop. Zulke onderdelen kunnen daarom niet specifiek aan DUO-ICT worden toegeschreven."],
  ["VNG","De Vereniging van Nederlandse Gemeenten werkt mee aan de proef met DAWO en MijnBureau, samen met Amsterdam, Ede, Zaanstad, ’s-Hertogenbosch, BZK en SSC-ICT. De VNG is relevant als schakel tussen gemeentelijke gebruikers en landelijke ontwikkelaars. Een gedeelde proef biedt ruimte om ervaringen met integratie en dagelijks gebruik over gemeenten heen te vergelijken. Daaruit kunnen eisen volgen die ook buiten één organisatie van belang zijn. De directe technische bouw ligt bij de betrokken ontwikkelaars van DAWO en MijnBureau. De publieke bron vermeldt deelname van de VNG aan de pilot en geeft geen aanwijzing dat de vereniging de software exploiteert."],
  ["Amsterdam","Amsterdam is een van de vier gemeenten die volgens Digitale Overheid op kleine schaal experimenteren met DAWO en MijnBureau. De gemeente brengt daarmee een praktijkomgeving in waarin een alternatieve Linux-laptop en samenwerksoftware samen gebruikt kunnen worden. Dat is relevant omdat de bruikbaarheid van een werkplek mede afhangt van de aansluiting op bestaande gemeentelijke toepassingen en werkwijzen. De proef beoogt die ervaringen te verzamelen voor BZK en SSC-ICT. De openbare aankondiging noemt geen specifieke Amsterdamse taak, gebruikersgroep of uitkomst. De aantoonbare bijdrage blijft deelname aan de gezamenlijke praktijkproef."],
  ["Ede","Ede neemt deel aan de gemeentelijke proef met een Linux-laptop met DAWO en de samenwerkomgeving MijnBureau. De gemeente is opgenomen als praktijkdeelnemer. De gezamenlijke proef moet onder meer duidelijk maken welke groepen medewerkers als eerste met MijnBureau in een productieomgeving zouden kunnen werken. Dat is van belang voor een eventuele overstap: de taken van een gebruiker bepalen welke koppelingen en functies vooraf beschikbaar moeten zijn. De gepubliceerde aankondiging beschrijft dit als doel van de vier gemeenten samen. Zij geeft geen afzonderlijke bevinding of technische taakverdeling voor Ede."],
  ["Zaanstad","Zaanstad is deelnemer aan de door Digitale Overheid beschreven proef met DAWO en MijnBureau. De bijdrage ligt in het beproeven van een eerste versie in een gemeentelijke omgeving. Voor een soevereine werkplek is vooral de overgang tussen nieuwe en bestaande systemen van belang: de pilot wil verbeterpunten voor die integratie verzamelen. De ontwikkelaars van DAWO en MijnBureau kunnen zulke ervaringen gebruiken om de onderdelen verder aan te passen. De aankondiging specificeert niet welke koppelingen Zaanstad afzonderlijk test. Deelname toont een praktijkrol, terwijl de technische resultaten per gemeente nog uit andere bronnen zouden moeten blijken."],
  ["’s-Hertogenbosch","’s-Hertogenbosch beproeft volgens de gezamenlijke aankondiging een Linux-gebaseerde DAWO-laptop met MijnBureau. De gemeente is relevant als deelnemer die kan laten zien waar een alternatief in het dagelijkse werk aansluit en waar aanpassingen nodig zijn. De pilot brengt ervaringen van vier gemeenten samen en gebruikt die om de werkplek en samenwerkomgeving verder te ontwikkelen. Voor zeggenschap over de werkplek telt of medewerkers ook in een alternatief hun werk kunnen voortzetten. De openbare bron geeft geen afzonderlijke meetresultaten voor ’s-Hertogenbosch en onderbouwt alleen de deelname en de gezamenlijke doelen."],
  ["Belastingdienst","De Belastingdienst vernieuwt de digitale werkplek voor de eigen organisatie, Douane en Toeslagen. De Kamerbrief beschrijft de overstap naar laptops ingericht voor Microsoft 365. De casus is relevant als voorbeeld van een bestaande afhankelijkheid: een overstap raakt behalve de laptop ook documenten, samenwerking en de inrichting van diensten. De bijdrage aan het stelsel is inzicht in de schaal en samenhang van een werkplekmigratie. Uit de brief volgt geen deelname aan de proef met DAWO of MijnBureau. De relatie met Microsoft 365 is daarentegen concreet en gedocumenteerd."],
  ["Douane","Douane houdt toezicht op het goederenverkeer en valt binnen de werkplekvernieuwing die Financiën voor Belastingdienst, Douane en Toeslagen beschrijft. De relatie met het stelsel loopt via die gedeelde voorziening en het gebruik van Microsoft 365. De casus laat zien dat een keuze voor kantoorsoftware doorwerkt bij meerdere uitvoeringsorganisaties met verschillende taken. Voor een alternatief is daarom van belang welke dagelijkse handelingen afhangen van de gedeelde omgeving en welke in afzonderlijke vakapplicaties plaatsvinden. De Kamerbrief biedt geen grond om Douane als ontwikkelaar van een soevereine werkplek te beschrijven."],
  ["Toeslagen","Dienst Toeslagen voert toeslagenregelingen uit. De dienst wordt samen met de Belastingdienst en Douane genoemd in de Kamerinformatie over de vernieuwing van de werkplek bij Financiën. Het verband is de gezamenlijke voorziening met laptops ingericht voor Microsoft 365. Dat maakt de dienst relevant als gebruiker die bij een wijziging van de gedeelde omgeving geraakt wordt, bijvoorbeeld bij documentuitwisseling tussen afdelingen. De Kamerbron gaat over die werkplekvernieuwing. Zij onderbouwt geen zelfstandige pilot van Toeslagen met alternatieve kantoorsoftware of een afzonderlijke rol in DAWO."],
  ["SOLID","SOLID staat voor Soevereine Lokale Infrastructuur voor Digitale autonomie. YourData Network beschrijft een project met Zuyd Hogeschool en praktijkpartners uit de gemeentelijke en juridische sector. Het project onderzoekt een werkplek waarin samenwerking en AI op lokale infrastructuur kunnen draaien. Daarmee wordt een concreet ontwerpvraagstuk onderzocht: welke verwerking kan plaatsvinden op infrastructuur waarover de gebruikersorganisatie zelf zeggenschap heeft? De relatie met MijnBureau is een vergelijking tussen werkplekbenaderingen. De projectpagina beschrijft het doel en de deelnemers. Zij geeft geen onafhankelijke meting van de zeggenschap in een productieomgeving."],
  ["Soevereine overheidscloud","Het Nederlandse traject verkent hoe overheid en markt samen cloudinfrastructuur kunnen vormgeven. Het gepubliceerde ontwerp en de marktconsultatie gaan over de infrastructuur waarop diensten kunnen draaien. De bijdrage aan een soevereine werkplek is daarom indirect: voor opslag, samenwerking en andere diensten bepaalt de cloud mede wie systemen kan beheren en welke mogelijkheden bestaan om over te stappen. Het dossier is te vergelijken met Nuvem Brasileira vanwege de publieke regievraag. Een aansluiting met de Open Cloud Alliantie is op de kaart een onderzoeksvraag. Het ontwerp bewijst geen aansluiting of gebruik door MijnBureau."],
  ["Digital Commons EDIC","Digital Commons EDIC organiseert Europese samenwerking rond gedeelde digitale bouwstenen. Het portfolio noemt onder meer de 100-Day Challenges en een proef met het EU Sovereign Tech Fund. De rol is ondersteunend: overheden kunnen gezamenlijk investeren in open technologie waarvan meerdere organisaties afhankelijk zijn, in plaats van elk hetzelfde onderhoud te organiseren. Voor werkplekken telt dat vooral bij onderdelen die door verschillende diensten worden hergebruikt. De projectpagina ondersteunt de relatie met de financieringsproef. Zij onderbouwt geen rol als leverancier van de Nederlandse werkplek of als beheerder van dossiers en bestanden."],
  ["openDesk","openDesk is de door ZenDiS ontwikkelde samenwerkomgeving voor het openbaar bestuur. De technische documentatie noemt Nextcloud voor bestanden, OpenProject voor projecten en Element voor communicatie. De directe bijdrage is dat deze functies samen kunnen worden ingericht op een door de organisatie gekozen infrastructuur. De Zwitserse PoC BOSS gebruikt openDesk als basis om onder meer documentbewerking, e-mail en samenwerking te beproeven. De Nederlandse relatie is hergebruik: BZK noemt openDesk als herkomst van bouwstenen voor MijnBureau. Dat laat zien hoe afzonderlijke componenten ook buiten de oorspronkelijke suite kunnen worden ingezet."],
  ["ZenDiS","Het Zentrum für Digitale Souveränität is de productorganisatie achter openDesk. Het bepaalt volgens de Zwitserse Bundeskanzlei de ontwikkelrichting van de suite voor het openbaar bestuur. De directe bijdrage is productregie over een samenwerkomgeving die verschillende opensourceproducten integreert. Die regie is relevant omdat organisaties ook bij open broncode iemand nodig hebben die versies, integratie en doorontwikkeling op elkaar afstemt. PoC BOSS laat zien dat een andere overheid de suite kan beproeven en ervaringen met ZenDiS kan uitwisselen. Via GovDigital kunnen publieke organisaties openDesk ook als dienst beproeven."],
  ["La Suite","La Suite numérique bundelt digitale hulpmiddelen voor Franse overheidsmedewerkers, waaronder videovergaderen met Visio, bestanden delen en samen documenten bewerken. Dat levert direct werkplekfuncties op die de Franse overheid onder een eigen productportfolio organiseert. De relatie met Nederland is concreet: BZK noemt La Suite als een van de bronnen van componenten voor MijnBureau. Het Franse traject bij Cnam laat zien hoe de suite aan een grote uitvoeringsorganisatie kan worden aangeboden. De aankondiging van die uitrol en de documentatie van afzonderlijke diensten geven elk inzicht in een andere laag van de werkplek."],
  ["DINUM","De Direction interministérielle du numérique is de Franse dienst voor digitale overheid achter La Suite numérique. DINUM organiseert daarmee publiek productbeheer voor hulpmiddelen zoals Visio en gezamenlijke documentbewerking. Voor een soevereine werkplek is die bijdrage concreet: een overheidsorganisatie kan de ontwikkeling van samenwerkingsdiensten op publieke behoeften sturen. De openbare productdocumentatie maakt duidelijk wat onder de suite valt en welke eigenschappen per product worden beschreven. De relatie met MijnBureau loopt via hergebruik van bouwstenen uit La Suite, zoals BZK meldt. Daaruit volgt geen rol voor DINUM in de exploitatie van MijnBureau."],
  ["Sovereign Tech Agency","De Duitse Sovereign Tech Agency financiert onderhoud en versterking van open digitale infrastructuur. Het gaat om technologie die ook onder toepassingen van andere organisaties kan liggen. De bijdrage aan de werkplek is indirect: bruikbare broncode vraagt om onderhoud, beveiligingswerk en mensen die kwetsbaarheden kunnen oplossen. Financiering van zulke taken kan voorkomen dat een overheid voor alle ondersteuning van één commerciële leverancier afhankelijk is. Het Europese Sovereign Tech Fund is een vergelijkingspunt voor de financieringsvorm. Voor een concrete relatie met een onderdeel van DAWO of MijnBureau is een afzonderlijk projectbesluit nodig."],
  ["Denemarken","Denemarken is opgenomen als praktijkcasus voor een opensourcewerkplek in de publieke sector. Het Europese Open Source Observatory beschrijft hoe de Deense verkeersautoriteit SIA Open lanceerde als open variant van haar werkplek. De waarde van de casus ligt in de ervaringen van een bestaande overheidsorganisatie met een alternatieve omgeving voor medewerkers. Daarmee is zij vergelijkbaar met de Nederlandse DAWO-proef, waar de vraag eveneens is hoe een alternatief past bij dagelijks gebruik. De bron gaat over de verkeersautoriteit. Een uitrol bij de gehele Deense overheid volgt daar niet uit."],
  ["Open Cloud Alliantie","De Open Cloud Alliantie presenteert zich als samenwerking rond open cloudinfrastructuur. Op de kaart hoort zij bij de infrastructuurlaag: een werkpleksuite heeft rekenkracht en opslag nodig, ook wanneer de applicaties zelf open source zijn. De betekenis van een open cloudaanbod zit in de mogelijkheid om interfaces, beheer en verhuisbaarheid te beoordelen voordat een werkplek erop wordt geplaatst. Het Nederlandse traject Soevereine overheidscloud stelt een verwante vraag over publieke regie en inzet van de markt. Een concrete gezamenlijke implementatie blijkt niet uit de aangehaalde bronnen. Die verbinding blijft een onderzoeksvraag."],
  ["KPN","KPN biedt zakelijke connectiviteit en clouddiensten aan. Een concreet voorbeeld op deze kaart is KPN Sovereign Cloud, waarvoor KPN STACKIT als technologiepartner vermeldt. Dat is een infrastructurele bijdrage: een organisatie kan een cloudomgeving kiezen waarop zij werkplekapplicaties of bestanden onderbrengt. Voor zeggenschap blijven de voorwaarden van de gekozen dienst van belang, waaronder operationele toegang en wat er bij vertrek kan worden overgedragen. De productinformatie onderbouwt de relatie tussen KPN en STACKIT. Zij geeft geen aanwijzing dat het aanbod gebruikt wordt voor DAWO, MijnBureau of de Soevereine overheidscloud."],
  ["Centric","Centric levert IT voor publieke organisaties en heeft samenwerking rond Nextcloud publiek bekendgemaakt. Daarmee is er een concreet verband met de samenwerkingslaag: Nextcloud kan bestanden en deelrechten beheren, terwijl een dienstverlener de inrichting en ondersteuning voor klanten kan verzorgen. De rol van Centric is marktgericht en ondersteunend bij implementatie. De aankondiging toont dat het aanbod bestaat of wordt ontwikkeld. Zij geeft op zichzelf geen bewijs dat de gemeenten in de DAWO-pilot deze implementatieroute kiezen. Voor de zeggenschap van een klant tellen de afspraken over beheer, toegang en overdracht van gegevens."],
  ["Info Support","Info Support levert softwareontwikkeling en IT-diensten. Het bedrijf is in het stelsel opgenomen als voorbeeld van uitvoeringscapaciteit aan de marktzijde. Een werkplek die uit verschillende bouwstenen bestaat, vraagt integratiewerk, bijvoorbeeld om bestaande applicaties te koppelen en wijzigingen reproduceerbaar uit te rollen. Een dienstverlener kan daarin een ondersteunende rol hebben. Voor zeggenschap telt of de opdrachtgever de configuratie, documentatie en code kan meenemen naar een andere beheerder. De publieke bedrijfsinformatie onderbouwt het algemene dienstenaanbod. Een opdracht voor MijnBureau, DAWO of een andere concrete werkplek op deze kaart blijkt daar niet uit."],
  ["Intermax","Intermax biedt beheerde cloud- en IT-infrastructuur aan. Die dienstverlening zit onder de werkplek: een organisatie kan bijvoorbeeld bestanden en samenwerksoftware op infrastructuur van een externe beheerder laten draaien. Voor zeggenschap is dan relevant welke toegang de beheerder krijgt en hoe de organisatie gegevens en configuratie kan overdragen bij vertrek. De productinformatie laat zien dat Intermax op deze markt actief is. Zij legt geen relatie met de gemeentepilot of met de Nederlandse Soevereine overheidscloud vast. Intermax is daarom opgenomen als infrastructuuraanbieder die bij het thema Cloud kan worden vergeleken met andere aanbieders."],
  ["Nebul","Nebul presenteert cloudinfrastructuur gericht op AI en rekenintensieve toepassingen. Voor een digitale werkplek komt die infrastructuur in beeld wanneer een organisatie AI-functies wil aanbieden die extra rekenkracht nodig hebben. De bijdrage is mogelijk en indirect: de keuze van een platform beïnvloedt waar verwerking plaatsvindt en wie toegang heeft tot de omgeving waarin modellen draaien. Dat is een andere laag dan de lokale werkplekopzet die SOLID onderzoekt. De aanbiedersinformatie geeft inzicht in het soort infrastructuur. Uit die bron blijkt geen koppeling met SOLID, MijnBureau of een andere werkplek op de kaart."],
  ["Previder","Previder biedt datacenter-, cloud- en beheerdiensten aan. Zulke diensten kunnen de infrastructuur vormen waarop werkplekapplicaties draaien. Het relevante onderscheid is dat een klant opslag en serverbeheer kan afnemen terwijl de inrichting van toegangsrechten en het beheer van de samenwerkapplicatie elders liggen. Wie welke laag beheert, bepaalt wie bij gegevens kan en wie een herstel of migratie kan uitvoeren. Op de kaart valt Previder daarom onder het thema Cloud, als aanbieder aan de infrastructuurkant. De publieke informatie over het aanbod toont geen afname door een van de genoemde werkplekpilots."],
  ["Uniserver","Uniserver levert cloudinfrastructuur en diensten voor IT-partners. Daarmee laat het dossier een indirecte route zien: de organisatie die een werkplekdienst afneemt kan te maken hebben met een leverancier én met de infrastructuurpartij daarachter. Voor zeggenschap is het relevant om beide rollen te kennen, bijvoorbeeld bij incidenten, toegang tot back-ups en overdracht aan een nieuwe beheerder. De relatie met het thema Cloud zit in die beheerketen. Het publieke bedrijfsaanbod onderbouwt geen gebruik door DAWO of MijnBureau. Ook volgt uit de locatie van infrastructuur op zichzelf geen oordeel over de zeggenschap van een klant."],
  ["Zuyd Hogeschool","Zuyd Hogeschool doet toegepast onderzoek naar data en digitale technologie. YourData noemt Zuyd als partner in SOLID, een project rond lokale verwerking, AI en samenwerking op de digitale werkplek. Dat geeft de hogeschool een ondersteunende onderzoeksrol naast de technologie- en praktijkpartners. Het project is relevant voor de vraag welke gegevens en verwerking binnen de omgeving van een gebruikersorganisatie kunnen blijven. De projectpagina onderbouwt deelname van Zuyd. Zij beschrijft geen afzonderlijk product van de hogeschool of resultaten die uitsluitend aan Zuyd kunnen worden toegeschreven."],
  ["YourData","YourData Network is een technologiepartner in SOLID en publiceert de projectbeschrijving. Die beschrijving noemt Zuyd Hogeschool en partners uit de gemeentelijke en juridische praktijk. De inhoudelijke relatie met de werkplek is de beoogde combinatie van lokale infrastructuur, samenwerking en AI. Daardoor kan het project onderzoeken welke gegevens voor een AI-functie naar een externe dienst zouden moeten en welke lokaal verwerkt kunnen worden. De bijdrage is projectmatig. De eigen publicatie beschrijft de ambitie en samenwerking, terwijl de mate van zeggenschap bij daadwerkelijk gebruik uit de inrichting en resultaten van de proef moet blijken."],
  ["TNO","TNO is een organisatie voor toegepast onderzoek. Die rol kan bij een werkplek relevant zijn als ontwerpkeuzes technisch moeten worden getoetst, bijvoorbeeld welke afhankelijkheden ontstaan bij inzet van een cloudplatform of wat lokale verwerking vraagt van de infrastructuur. Dat is een mogelijke ondersteunende bijdrage en verklaart de plaats van TNO bij kennis en onderzoek. De algemene bron over TNO onderbouwt geen deelname aan SOLID, DAWO of MijnBureau. Een concrete relatie met een soevereine digitale werkplek kan op basis van deze bron dan ook niet worden vastgesteld."],
  ["DINL","Stichting Digitale Infrastructuur Nederland vertegenwoordigt belangen en expertise uit de sector digitale infrastructuur. Het verband met een werkplek is indirect: verbindingen, datacenters en hosting vormen voorwaarden voor de beschikbaarheid van online samenwerkdiensten. Een sectororganisatie kan helpen om zulke infrastructurele randvoorwaarden te bespreken, maar de concrete zeggenschap volgt uit de gekozen dienst en de afspraken met de exploitant. DINL staat daarom bij het bredere infrastructuurlandschap. De openbare organisatie-informatie ondersteunt geen rol als leverancier, technisch beheerder of opdrachtgever van een van de werkplekken in het stelsel."],
  ["STACKIT","STACKIT biedt cloudinfrastructuur waarop organisaties eigen toepassingen kunnen draaien. Het is in dit stelsel een voorbeeld van infrastructuur onder de werkplek, naast Nederlandse en internationale aanbieders. Een vergelijking kan zich richten op waar workloads worden uitgevoerd, wie operationele toegang heeft en welke diensten bij een verhuizing opnieuw moeten worden ingericht. Dat zijn vragen aan de specifieke afgenomen dienst. KPN noemt STACKIT als technologiepartner voor zijn cloudaanbod. De Europese Commissie noemt STACKIT bovendien als een van de geselecteerde aanbieders in haar cloudaanbesteding. Het aantoonbare verband is dat STACKIT cloudcapaciteit aanbiedt, terwijl een koppeling met DAWO, MijnBureau of een Nederlandse overheidsopdracht hier niet is vastgesteld."],
  ["Nextcloud","Nextcloud Hub biedt functies voor bestanden, delen en samenwerken. In openDesk verzorgt Nextcloud volgens de architectuurdocumentatie de bestandslaag. BZK noemt het daarnaast als herkomst van bouwstenen voor MijnBureau en SURF beproeft Nextcloud voor onderwijs en onderzoek. De directe bijdrage is dat organisaties bestanden en deelrechten binnen een eigen of gekozen beheeromgeving kunnen inrichten. Daarmee ontstaat ruimte om hosting en ondersteuning afzonderlijk te kiezen. Welke gegevens overdraagbaar zijn, hangt ook af van de configuratie en gebruikte uitbreidingen. De integratie met OpenProject in openDesk laat zien hoe projecttaken kunnen verwijzen naar bestanden in dezelfde omgeving."],
  ["OpenProject","OpenProject ondersteunt projectplanning en het bijhouden van werkpakketten. openDesk neemt het op als projectmanagementonderdeel. De technische documentatie beschrijft hoe gebruikers bestanden uit Nextcloud aan werkpakketten kunnen koppelen. Daarmee heeft OpenProject een directe plaats in de samenwerkingslaag: projectinformatie en documentopslag kunnen als afzonderlijke diensten worden ingericht en toch samenwerken. De organisatie kan bepalen waar de omgeving wordt beheerd en wie projectgegevens mag zien. Bij overstappen zijn ook koppelingen en projecthistorie relevant. De openDesk-documentatie onderbouwt deze integratie. Zij bewijst geen afzonderlijke invoering van OpenProject bij deelnemers aan de gemeentepilot."],
  ["Element","Element levert chatsoftware op basis van het Matrix-protocol. De technische documentatie van openDesk vermeldt Element als communicatiecomponent. Voor een soevereine werkplek is het concrete punt dat de organisatie kan bepalen waar de chatdienst draait. Bij federatie kunnen verschillende Matrix-servers berichten uitwisselen, voor zover de gekozen inrichting en toegangsregels dat toelaten. Dit geeft Element een directe rol naast Nextcloud voor bestanden en OpenProject voor projecten. De mate van controle over berichten, metadata en sleutels hangt af van de daadwerkelijke inrichting, inclusief de keuze om met externe servers te federeren."],
  ["Microsoft 365","Microsoft 365 bundelt onder meer kantoorapplicaties, e-mail, opslag en samenwerking. De Kamerinformatie over Financiën beschrijft laptops die voor deze omgeving zijn ingericht. In het stelsel is het daarom een concreet referentiepunt voor bestaande afhankelijkheden. Een overstap naar een alternatieve werkplek vraagt bijvoorbeeld aandacht voor gedeelde documenten, machtigingen en processen die meerdere diensten combineren. DAWO biedt een andere desktopbasis en MijnBureau onderzoekt een andere samenwerkingslaag. De verbinding op de kaart is een vergelijking van functies en migratievragen. Zij onderbouwt geen volledige uitwisselbaarheid of aangekondigde vervanging bij Financiën."],
  ["AWS","Amazon Web Services biedt infrastructuur en beheerde diensten voor onder meer rekenkracht en opslag. Een werkplekdienst kan op zulke bouwstenen worden ingericht, waardoor de afhankelijkheid ook de cloudlaag omvat. Voor zeggenschap maakt het uit of de omgeving overdraagbare software gebruikt of sterk leunt op specifieke beheerde diensten van AWS. Bij die laatste moeten bijvoorbeeld koppelingen en toegangsbeheer bij een verhuizing mogelijk opnieuw worden gebouwd. AWS staat daarom als vergelijkingsobject bij Cloud. De publieke productinformatie bevestigt het aanbod, maar onderbouwt geen gebruik door DAWO of MijnBureau."],
  ["Google Cloud","Google Cloud levert infrastructuur en beheerde diensten voor onder meer rekenkracht, opslag en gegevensverwerking. De relatie met de werkplek zit hier bij de achterliggende infrastructuur, waarop een organisatie bijvoorbeeld eigen samenwerksoftware kan hosten. Zeggenschap hangt dan af van de gekozen diensten, beheerrechten en mogelijkheden om gegevens en workloads te verplaatsen. De Europese Commissie noemt de technologie van Google Cloud in een door Europese bedrijven geëxploiteerde omgeving achter het aanbod van Proximus/S3NS. Die casus laat zien dat de leverancier van technologie en de exploitant verschillende partijen kunnen zijn. In het stelsel is Google Cloud een vergelijkingsobject bij Cloud. Een inzet voor de Nederlandse werkplekinitiatieven blijkt hier niet uit."],
  ["Oracle","Oracle Cloud Infrastructure biedt onder meer rekenkracht, opslag en beheerde databases. Het platform kan achter werkplekapplicaties of gekoppelde bedrijfsapplicaties liggen. De relatie is daarom infrastructureel. Een overstap kan andere gevolgen hebben voor een applicatie die vooral virtuele machines gebruikt dan voor een applicatie die afhankelijk is van een beheerde database of platformspecifieke koppelingen. Oracle staat op de kaart om dat onderscheid bij Cloud zichtbaar te maken. De productinformatie bevestigt welke categorieën diensten Oracle aanbiedt. Zij toont geen inzet van Oracle Cloud voor DAWO, MijnBureau of de Nederlandse overheidscloud."],
  ["Werkplek","Dit thema gaat over de omgeving waarin medewerkers hun dagelijkse taken uitvoeren. Het omvat apparaten, besturingssysteem, kantoorsoftware en de diensten waarmee zij inloggen en samenwerken. DAWO maakt de desktoplaag concreet met een Linux-laptop. MijnBureau gaat over de samenwerkingslaag. Microsoft 365 biedt een referentie voor functies die in een bestaande omgeving al worden gebruikt. Zeggenschap vraagt per laag een andere toets: kan de organisatie updates sturen, documenten uitwisselen en een dienst vervangen terwijl medewerkers hun taken kunnen voortzetten? De verschillende dossiers laten zien waarom één productkeuze die vragen niet allemaal beantwoordt."],
  ["Cloud","Cloud is de infrastructuurlaag waarop een organisatie opslag, rekenkracht en beheerde diensten kan gebruiken. Voor een digitale werkplek kan die laag bijvoorbeeld bestanden, identiteitsdiensten of een samenwerkomgeving dragen. De bijdrage aan zeggenschap hangt af van wie de dienst kan beheren en hoe een overstap uitvoerbaar is. Rijkscloudbeleid en het Europese Cloud Sovereignty Framework behandelen die vragen vanuit beleid en inkoop. De Soevereine overheidscloud is een Nederlands ontwikkeltraject. De lijnen naar aanbieders geven vergelijkingsmateriaal voor het aanbod. Gebruik door een specifieke organisatie moet per dienst worden vastgesteld."],
  ["Data","Het thema Data gaat over de beslissingen die een organisatie kan nemen over gegevens op haar werkplek. Denk aan wie een bestand mag delen, hoe lang informatie bewaard wordt en wat meegaat bij een verhuizing. De interbestuurlijke datastrategie biedt beleidscontext voor overheidsgegevens. Nextcloud maakt één deelvraag concreet, doordat organisaties bestanden en deelrechten in een samenwerkomgeving kunnen inrichten. Voor de werkplek telt ook of rechten, metadata en bewaartermijnen na een overstap toepasbaar blijven. Dat moet met de concrete software, configuratie en beheerafspraken worden getoetst."],
  ["Governance","Governance gaat over de verdeling van beslissingsmacht en verantwoordelijkheid voor de werkplek. Een organisatie moet weten wie eisen vaststelt, wie een leverancier selecteert en wie bij uitval of een overstap beslist. Het volwassenheidsmodel voor digitale autonomie biedt een manier om de eigen organisatie te beoordelen. De rollen van BZK, ICBR en de uitvoerders van de rijksbrede werkplekopdracht geven concrete voorbeelden van beleid, opdracht en uitvoering. Deze laag ondersteunt de werkplek indirect. Afspraken over eigenaarschap en beheer zijn nodig om technische mogelijkheden zoals eigen hosting ook daadwerkelijk te benutten."],
  ["Beveiliging","Beveiliging op de werkplek omvat onder meer identiteit, toegangsrechten, updates en herstel na incidenten. Het NCSC publiceert richtlijnen waarmee organisaties die onderwerpen kunnen beoordelen. De relatie met zeggenschap is praktisch: bij verlies van een account of een dienst moet duidelijk zijn wie toegang kan intrekken, systemen kan herstellen en incidentgegevens kan onderzoeken. Bij DAWO is identiteit en beheer op de kaart een onderzoeksvraag. De richtlijnen bieden criteria om een inrichting te toetsen, terwijl de feitelijke verdeling van beheerrechten en sleutels per werkplek moet worden vastgesteld."],
  ["Open standaarden","Open standaarden leggen vast hoe verschillende systemen informatie uitwisselen of een bestand interpreteren. Een werkplekvoorbeeld is ODF voor bewerkbare documenten, dat Forum Standaardisatie in zijn inkoophandreiking behandelt. De directe betekenis voor medewerkers is dat een document in software van meerdere leveranciers bruikbaar kan zijn. Daarmee wordt de keuze voor kantoorsoftware minder sterk verbonden aan één bestandsformaat. Bij aanschaf is het zinvol ondersteuning te toetsen met eigen documenten en werkprocessen. De standaard zegt welke uitwisseling mogelijk hoort te zijn. De kwaliteit van de implementatie kan per toepassing verschillen."],
  ["Rijksbrede Soevereine Digitale Werkomgeving","De ICBR gaf SSC-ICT, DICTU en DUO-ICT een gezamenlijke ontwikkelopdracht voor een soevereine digitale werkomgeving voor het Rijk. De opdracht gaat onder meer over bestandsuitwisseling, e-mail en werkplekdiensten en bouwt voort op DAWO en MijnBureau. De bijdrage is direct: het traject brengt de desktop en online diensten bij elkaar als rijksbreed ontwikkelvraagstuk. Zo kunnen uitvoerders afstemmen welke diensten meerdere organisaties nodig hebben en welke eisen die delen. De openbare bron beschrijft de opdracht en betrokken partijen. Beschikbaarheid en beheer per component volgen pas uit de uitvoering."],
  ["Beter Samen Werken","Beter Samen Werken is een rijksprogramma voor digitaal samenwerken en informatiehuishouding. In een gepubliceerde test werkten medewerkers van meerdere ministeries aan herkenbare taken in een digitale proefomgeving. Onder Open BSW onderzoekt het programma ook opensourcealternatieven. De bijdrage aan een soevereine werkplek is dat eisen aan samenwerking kunnen worden getoetst met gebruikers, bijvoorbeeld gezamenlijk schrijven en informatie kunnen terugvinden. Dat is relevant voor MijnBureau en voor de vergelijking met suites zoals openDesk en La Suite. Een praktijktest geeft inzicht in gebruik en inrichting. Zij staat los van een rijksbreed uitrolbesluit."],
  ["SURF Works","SURF beproeft onder de naam SURF Works samenwerkdiensten voor onderwijs en onderzoek op basis van Nextcloud. De directe bijdrage zit in het testen van een alternatief voor het delen en gezamenlijk beheren van bestanden binnen die sector. Instellingen kunnen onderzoeken of medewerkers zowel individueel als in groepen uit de voeten kunnen met de aangeboden functies. Radboud Universiteit beschrijft hoe zij die gebruikersgroepen gefaseerd betrok. De relatie met MijnBureau is een vergelijking: in beide omgevingen is Nextcloud relevant, terwijl de organisaties, gebruikers en beheerafspraken verschillen. Een pilot vormt op zichzelf geen bewijs voor brede invoering."],
  ["DAWO-NixOS","De openbare DAWO-installatierepository bevat configuratie en instructies voor de werkplek die op NixOS is gebaseerd. NixOS maakt het mogelijk systeeminstellingen in configuratiebestanden te beschrijven. Daardoor kan een beheerteam onderzoeken welke pakketten en instellingen bij een installatie horen en hoe een vergelijkbare werkplek opnieuw kan worden ingericht. De directe bijdrage ligt in de reproduceerbaarheid en controleerbaarheid van het desktopbeheer. MijnBureau vervult daarnaast de samenwerkingsfunctie in de pilot. De repository maakt de technische opzet inzichtelijk. Ondersteuning voor apparaten en vakapplicaties moet in de praktijk afzonderlijk worden getest."],
  ["Schleswig-Holstein","Schleswig-Holstein bouwt de werkplek van de deelstaat stapsgewijs om. De overheid publiceert code en documentatie voor haar Linux-werkplek. De migratie omvat verschillende lagen, waaronder e-mail, bestandsdeling en het desktopbesturingssysteem. De casus is relevant omdat een organisatie die lagen op verschillende momenten kan vervangen en praktijkervaring per onderdeel kan opdoen. DAWO is een vergelijkingspunt voor Linux op de desktop. Nextcloud komt in de Duitse migratie terug als onderdeel van de bestandslaag. Een publicatie over een specifieke fase onderbouwt de voortgang van die fase. Zij geeft geen voltooiingsdatum voor de volledige overgang."],
  ["SIA Open","SIA Open is de opensourcevariant van de digitale werkplek van de Deense verkeersautoriteit. De Europese OSOR-publicatie beschrijft ervaringen met de pilot nadat deze een aantal maanden liep. De bijdrage is direct en beperkt tot die praktijkomgeving: de organisatie kan toetsen welke dagelijkse werkzaamheden op een alternatief platform uitvoerbaar zijn en waar nog afhankelijkheden van bestaande software zitten. In het stelsel is SIA Open verbonden met Denemarken als landcasus. DAWO en de Zwitserse PoC BOSS zijn vergelijkbare praktijkproeven. Uit die vergelijking volgt geen technische koppeling tussen hun omgevingen."],
  ["PoC BOSS","De Zwitserse Bundeskanzlei onderzocht met PoC BOSS of een opensourcewerkplek noodprocessen en het veilig verwerken van gevoelige informatie kan ondersteunen. De proef bouwde op openDesk en testte onder meer documenten, e-mail, bestanden, chat en identiteitsbeheer. Daarmee beoordeelde de federale overheid ook hoe uitvoerbaar een uitwijkroute voor Microsoft 365 is. Het eindrapport beschrijft de browseroplossing als in beginsel geschikt voor centrale standaardprocessen en signaleert tegelijk technische, organisatorische en beheerhordes voor brede inzet. De directe bijdrage is die praktijktoets. De uitkomsten gaan over de geteste scenario’s en geven geen bewijs van algemene productiegeschiktheid."],
  ["dPhoenixSuite","Dataport bracht onder de naam Phoenix verschillende opensourcetoepassingen samen tot een werkplek voor de publieke sector. Daarmee bood het programma een alternatief voor functies zoals documenten bewerken en online samenwerken. De casus is ook organisatorisch relevant. Dataport meldt dat het programma is afgesloten en dat de communityversie aan ZenDiS is overgedragen, waar zij als openDesk wordt voortgezet. Zo laat het dossier zien hoe open software kan worden overgenomen wanneer de oorspronkelijke uitvoerder stopt. De overdracht zegt op zichzelf niets over de continuïteit van individuele klantomgevingen of beheercontracten."],
  ["Cloud Sovereignty Framework","Het Cloud Sovereignty Framework van de Europese Commissie biedt criteria waarmee opdrachtgevers de zeggenschap over een clouddienst kunnen beoordelen. Voor werkplekdiensten is het relevant wanneer e-mail, documenten of samenwerkfuncties in de cloud worden ondergebracht. Het kader maakt het mogelijk om vragen over rechtsmacht, operationeel beheer en technologische afhankelijkheden apart te behandelen. De bijdrage is ondersteunend en ligt bij beoordeling en inkoop. Het dossier Europese cloudinkoop geeft een concreet voorbeeld van toepassing van zulke criteria. Rijkscloudbeleid is een Nederlands vergelijkingspunt met een eigen toepassingsgebied en regels."],
  ["Rijkscloudbeleid","Het Rijkscloudbeleid stelt voorwaarden aan het gebruik van clouddiensten door de Rijksoverheid. De kabinetsinformatie over de aanscherping beschrijft dat het Rijk afhankelijkheden wil verminderen en keuzevrijheid wil vergroten. Dit raakt de digitale werkplek zodra een organisatie bijvoorbeeld bestanden, mail of identiteitsdiensten in een cloudomgeving onderbrengt. De bijdrage is beleidsmatig: de afnemer moet de dienst beoordelen binnen de rijksregels voordat die onderdeel wordt van de werkplek. Het Europese Cloud Sovereignty Framework is een vergelijkingspunt voor beoordelingscriteria. Het Rijkscloudbeleid is zelf geen infrastructuurdienst en de gelinkte beleidsinformatie geeft geen selectie van een specifieke suite."],
  ["Pardus","Pardus is een Turkse Linuxdistributie die door TÜBİTAK ULAKBİM wordt ontwikkeld. Voor de werkplek is de directe functie het besturingssysteem waarop kantoor- en vakapplicaties kunnen draaien. Een eigen distributie geeft een organisatie of land ruimte om pakketten en instellingen te kiezen en ondersteuning daarop af te stemmen. Dat neemt de afhankelijkheid van upstreamsoftware en hardwareondersteuning niet weg. Het stelsel zet Pardus naast Schleswig-Holstein en BOSS Linux om verschillende Linuxroutes voor de publieke sector te vergelijken. Uit de publieke projectinformatie blijkt geen technische of organisatorische samenwerking met DAWO."],
  ["BOSS Linux","Bharat Operating System Solutions is een Linuxdistributie van het Indiase Centre for Development of Advanced Computing. De desktopversie is een alternatief besturingssysteem waarop toepassingen voor dagelijks computergebruik kunnen draaien. Voor een soevereine werkplek is de concrete betekenis dat pakketkeuzes en ondersteuning rond een ander desktopplatform georganiseerd kunnen worden. De toepasbaarheid hangt onder meer af van de software die gebruikers nodig hebben. Pardus en openKylin zijn vergelijkingspunten voor distributies die elders worden ontwikkeld. Het Indiase BOSS Linux en de Zwitserse haalbaarheidsstudie PoC BOSS zijn afzonderlijke initiatieven. De productinformatie geeft geen samenwerking met Nederlandse werkplekprojecten aan."],
  ["openKylin","openKylin ontwikkelt een opensourcebesturingssysteem voor desktops. Het project is relevant voor de werkplek als voorbeeld van een andere desktopbasis dan een leveranciersgebonden besturingssysteem. Publieke projectinformatie maakt het mogelijk de opzet van de distributie te bekijken. Een afnemer moet daarnaast kunnen vaststellen wie updates levert, welke apparaten worden ondersteund en of vakapplicaties beschikbaar zijn. Dat zijn beslissingen over de desktoplaag, terwijl samenwerkdiensten zoals MijnBureau een andere laag vormen. openKylin is op de kaart vergelijkbaar met Pardus en BOSS Linux. Een relatie met de Nederlandse DAWO-werkplek is niet aangetoond."],
  ["Nuvem Brasileira","Nuvem Brasileira is een initiatief van de Braziliaanse overheid voor nationale cloudinfrastructuur. De officiële projectpagina noemt onder meer Serpro als partner en onderscheidt marktverkenning, ontwerp en implementatie. Het doel is dat gegevens en controle over infrastructuur in nationale handen kunnen liggen. Voor een digitale werkplek is dat indirect relevant: bestanden en samenwerkdiensten hebben infrastructuur nodig waarop beheerrechten en continuïteit geregeld zijn. De Nederlandse Soevereine overheidscloud stelt een vergelijkbare regievraag. De Braziliaanse bron gaat over het infrastructuurproject en legt geen gebruik door een specifieke werkpleksuite vast."],
  ["Serpro","Serpro is een Braziliaanse publieke IT-dienstverlener die in de officiële projectbeschrijving van Nuvem Brasileira als partner wordt genoemd. De relatie met een soevereine werkplek loopt via de infrastructuur waarop digitale diensten kunnen draaien. Publieke betrokkenheid bij de cloud geeft een concrete manier om de organisatie van het beheer te onderzoeken: wie exploiteert de omgeving, wie kan bij gegevens en hoe wordt continuïteit geregeld? Dat zijn voorwaarden voor samenwerkdiensten. De projectpagina beschrijft de rol van Serpro in de samenwerking. Zij geeft geen bewijs dat Serpro een specifieke kantooromgeving levert binnen dit project."],
  ["Bureaublad","Bureaublad is een portaalcomponent van BZK binnen MijnBureau. De openbare repository geeft toegang tot de projectcode. De directe bijdrage zit in de toegang tot de werkomgeving: een portaal vormt de plek van waaruit gebruikers bij de beschikbare onderdelen komen. Publieke broncode maakt die laag inspecteerbaar en biedt aanknopingspunten om een andere inrichting of een wijziging te beoordelen. De relatie met MijnBureau is die van een bouwsteen. Uit de repository alleen volgt geen oordeel over hosting, identiteitsbeheer of bestandsopslag van de volledige samenwerkomgeving. Die eigenschappen horen bij de inrichting van de afzonderlijke diensten."],
  ["La Suite Visio","Visio is de videovergaderdienst binnen La Suite numérique voor de Franse overheid. De productpagina van DINUM vermeldt hosting in Frankrijk. Daarmee levert Visio rechtstreeks een werkplekfunctie waarmee medewerkers online kunnen overleggen. Voor zeggenschap geeft de productpagina een concrete eigenschap om te beoordelen, namelijk de hostinglocatie. Afspraken over toegang, beheer en eventuele verwerking van vergadergegevens vragen daarnaast om de documentatie van de dienst. Het verband met La Suite is dat Visio onderdeel is van dat productportfolio. Het door BZK beschreven hergebruik van La Suite-componenten toont op zichzelf geen inzet van Visio in MijnBureau."],
  ["Radboud Universiteit","Radboud Universiteit neemt deel aan de SURF Works-pilot met Nextcloud. Medewerkers proberen gedurende langere tijd een deel van hun dagelijkse taken in de omgeving uit te voeren. De universiteit onderzoekt daarmee hoe het alternatief aansluit bij onderwijs, onderzoek en ondersteunende processen, en welke hulp gebruikers nodig hebben bij migratie. Dat is een directe praktijkbijdrage aan het toetsen van een andere samenwerkomgeving. De relatie met SURF Works is die van deelnemende instelling. De universiteit meldt dat mailintegratie bij de start ontbrak. Dat maakt zichtbaar waarom een pilot ook de ontbrekende functies en koppelingen moet vastleggen."],
  ["Cnam","De Caisse nationale de l’Assurance Maladie is de Franse nationale zorgverzekeringsorganisatie. De Franse overheid kondigde aan dat La Suite numérique bij de zorgverzekering aan ongeveer 80.000 medewerkers wordt aangeboden. De relevantie is de schaal waarop samenwerksoftware van de overheid kan worden ingevoerd. Bij zo’n uitrol gaat het niet alleen om beschikbare apps, maar ook om aansluiting op accounts, ondersteuning en dagelijkse werkprocessen. Cnam staat als afnemer op de kaart naast DINUM als productorganisatie. De openbare aankondiging onderbouwt de voorgenomen uitrol. Zij geeft geen bewijs dat alle medewerkers de suite al dagelijks gebruiken."],
  ["GovDigital","GovDigital is een Duitse samenwerkingsorganisatie van publieke IT-dienstverleners. Samen met ZenDiS biedt zij via Marktplatz Deutschland Digital een SaaS-pilot voor openDesk aan. GovDigital noemt januari 2027 als geplande start van het productieaanbod. Daarmee is GovDigital direct relevant voor de exploitatie van de samenwerkomgeving: een afnemer kan de suite als dienst gebruiken en hoeft de infrastructuur en updates niet zelf te organiseren. Voor zeggenschap wordt dan van belang wie operationele toegang heeft en hoe gegevens bij wisseling van aanbieder worden overgedragen. De publicatie onderbouwt de afnameroute. De feitelijke beheerafspraken en mogelijkheden voor overdracht moeten per aangeboden dienst worden beoordeeld."],
  ["Euro-Office","Euro-Office is kantoorsoftware voor het bewerken van documenten. Nextcloud publiceert over de bundeling met Nextcloud Hub. Daarmee heeft Euro-Office een directe relatie met de werkplek: gebruikers kunnen documenten vanuit de samenwerkomgeving bewerken. De koppeling laat zien dat de editor en bestandsopslag afzonderlijke onderdelen kunnen zijn, ook wanneer ze als één omgeving worden aangeboden. Voor onafhankelijkheid is relevant of documenten na export in een andere editor bruikbaar blijven. De leverancierspublicatie onderbouwt de koppeling met Nextcloud. Zij geeft geen bewijs voor inzet in de Nederlandse gemeentepilot of voor de werking met alle bestaande documenten en macro’s."],
  ["EU Sovereign Tech Fund","Het EU Sovereign Tech Fund staat in het projectenoverzicht van Digital Commons EDIC als proef rond Europese financiering van open technologie. De bijdrage aan een digitale werkplek is indirect. Herbruikbare software vraagt onderhoud en beveiligingswerk, ook wanneer meerdere overheden dezelfde code gebruiken. Een gezamenlijk financieringsmechanisme kan zulke werkzaamheden ondersteunen die buiten de aanschaf van één toepassing vallen. De Duitse Sovereign Tech Agency biedt een vergelijkingspunt voor dit type financiering. Het portfolio onderbouwt dat de Europese proef bestaat. Het laat niet zien dat er financiering is toegekend aan een specifiek onderdeel van DAWO of MijnBureau."],
  ["Europese cloudinkoop","De Europese Commissie gunde vier contracten voor clouddiensten voor EU-instellingen en gebruikte haar Cloud Sovereignty Framework om aanbiedingen te beoordelen. Zij koos meerdere leveranciers om de afhankelijkheid van één aanbieder te beperken. De Commissie meldt dat de geselecteerde diensten verschillende niveaus van zeggenschap bereikten. Voor een werkplek is de bijdrage indirect: als bestanden of samenwerking in de cloud worden ondergebracht, kan een opdrachtgever de zeggenschap over die infrastructuur al bij inkoop beoordelen. De gunning betreft clouddiensten voor EU-instellingen. Zij legt geen keuze voor een Nederlandse werkpleksuite vast."],
]);
const systemExplanations = new Map([
  ["Beleid",["Beleidskeuzes worden voor de werkplek concreet wanneer ze bepalen wat overheden inkopen en welke afhankelijkheden ze accepteren. Het Regeerakkoord geeft richting, de Nederlandse Digitaliseringsstrategie brengt bestuurslagen samen en Forum Standaardisatie vertaalt uitwisselbaarheid naar inkoopeisen. De rijksbrede ontwikkelopdracht laat zien hoe zulke keuzes bij uitvoerders terechtkomen. De bijdrage van dit stelsel is sturing: het maakt zichtbaar wie criteria stelt, wie opdracht geeft en hoe technische keuzes later getoetst kunnen worden. De feitelijke zeggenschap over software, gegevens en beheer moet vervolgens per geleverde dienst worden vastgesteld.",["Regeerakkoord","NDS","Forum Standaardisatie"]]],
  ["Rijksoverheid",["Hier staan organisaties en projecten die een publieke werkplek ontwikkelen, beproeven of in gebruik nemen. SSC-ICT bouwt met DAWO aan de desktoplaag. BZK brengt met MijnBureau bestaande samenwerkcomponenten bijeen. De gemeentepilot toetst de combinatie en de rijksopdracht brengt meerdere ICT-dienstverleners bij elkaar. De betekenis voor zeggenschap zit in het kunnen kiezen en aanpassen van werkpleklagen, onderbouwd met ervaringen van gebruikers. De dossiers maken onderscheid tussen een opdrachtgever, een ontwikkelaar en een deelnemer aan een proef. Ook bestaande werkplekkeuzes geven context voor wat bij een overstap moet worden meegenomen.",["DAWO","MijnBureau","Rijksbrede Soevereine Digitale Werkomgeving"]]],
  ["Oplossingen",["Oplossingen omvat software en infrastructuur voor de digitale werkplek: van bestanden, documenten, projectplanning en communicatie tot rekenkracht, opslag en hosting. De architectuur van openDesk laat zien hoe Nextcloud, OpenProject en Element verschillende functies vervullen en waar ze aan elkaar gekoppeld zijn. SURF Works laat zien hoe Nextcloud ook in een andere omgeving kan worden beproefd. Voor de werkplek is van belang welke componenten een organisatie zelf kan laten beheren en welke bestanden en instellingen bruikbaar blijven als zij één onderdeel vervangt. De dossiers onderscheiden software die zelf een werkplekfunctie levert van organisaties die de ontwikkeling daarvan ondersteunen.",["openDesk","Nextcloud","SURF Works"]]],
  ["Kennis",["Onderzoek en praktijkproeven helpen om aannames over een werkplek te toetsen. Zuyd is genoemd als partner bij SOLID, dat lokale infrastructuur voor samenwerking en AI onderzoekt. Radboud Universiteit beschrijft ervaringen met de Nextcloud-proef van SURF. Die casussen beantwoorden verschillende vragen: wat kan lokaal worden verwerkt en wat hebben gebruikers nodig om met alternatieve software te werken? De bijdrage van dit stelsel ligt bij bewijs voor ontwerp- en invoeringskeuzes. Een proef geeft informatie over de geteste omgeving en gebruikers. Voor andere organisaties blijft relevant welke eigen processen en koppelingen zij moeten beproeven.",["SOLID","SURF Works","Radboud Universiteit"]]],
  ["Bedrijven",["Dit stelsel bevat bedrijven die software, cloudinfrastructuur, ontwikkeling en beheerdiensten leveren. Naast grote platforms staan hier onder meer KPN, Centric, Info Support en gespecialiseerde hostingaanbieders. Microsoft 365 bundelt kantoorsoftware en samenwerking. AWS, Google Cloud en Oracle bieden onder meer rekenkracht en opslag waarop toepassingen kunnen draaien. Voor een overstap telt welke afhankelijkheid werkelijk bestaat: een documentformaat vraagt een andere aanpak dan een beheerde database of een platformspecifieke koppeling. Dit stelsel geeft daarom referentiepunten om die afhankelijkheden in kaart te brengen. Het dossier van Financiën geeft een concreet voorbeeld van werkplekgebruik. Bij cloudplatforms moet gebruik in een bepaalde werkplek afzonderlijk worden vastgesteld.",["Microsoft 365","Belastingdienst","Cloud"]]],
  ["Gemeenten",["Amsterdam, Ede, Zaanstad en ’s-Hertogenbosch werken mee aan de proef met een Linux-laptop met DAWO en de samenwerkomgeving MijnBureau. De praktijkrol van gemeenten is belangrijk omdat een alternatieve werkplek pas bruikbaar wordt als medewerkers hun taken kunnen uitvoeren en bestaande systemen ermee kunnen samenwerken. De gezamenlijke proef verzamelt ervaringen voor verdere ontwikkeling en onderzoekt welke groepen als eerste met MijnBureau zouden kunnen werken. De VNG is betrokken bij de samenwerking. De openbare aankondiging beschrijft gezamenlijke doelen. De dossiers schrijven geen afzonderlijke uitkomsten toe aan gemeenten waarvoor die uitkomsten niet zijn gepubliceerd.",["VNG","DAWO","MijnBureau"]]],
  ["Europa",["Dit stelsel laat zien hoe Europese overheden en publieke organisaties alternatieven ontwikkelen, testen en organiseren. Het Zwitserse PoC BOSS beproefde openDesk. Frankrijk kondigde invoering van La Suite bij de zorgverzekering aan. Digital Commons EDIC organiseert daarnaast samenwerking rond gedeelde digitale bouwstenen. Voor een soevereine werkplek zijn dat verschillende vormen van bijdrage: praktijkbewijs, invoering bij een grote afnemer en gezamenlijk onderhoud van technologie. De landen en organisaties hebben hun eigen inrichting en voorwaarden. Een Europese herkomst of samenwerking geeft op zichzelf geen antwoord op wie een specifieke dienst beheert of gegevens kan overdragen.",["PoC BOSS","Cnam","Digital Commons EDIC"]]],
  ["Wereldwijd",["Dit stelsel bevat desktopprojecten van buiten Europa. Pardus, BOSS Linux en openKylin bieden elk een eigen technische Linuxbasis voor de werkplek. Daarmee wordt zichtbaar welke keuzes een organisatie kan maken over pakketten, updates en ondersteuning. De distributies leveren een besturingssysteem. Voor gebruik als werkplek moeten organisaties daarnaast bepalen welke kantoor- en vakapplicaties bruikbaar zijn en hoe gebruikers bij bestanden en samenwerking komen. De projecten dienen als vergelijkingsmateriaal voor DAWO. Hun publieke projectinformatie onderbouwt geen gezamenlijke ontwikkeling met de Nederlandse werkplek.",["Pardus","BOSS Linux","openKylin"]]],
]);
const explanationSources = new Map([
  ["Regeerakkoord",[["Digitale overheid in het regeerakkoord","https://www.rijksoverheid.nl/regering/regeerakkoord/nederland-werkt/nederland-koploper-in-een-digitale-wereld"]]],
  ["NDS",[["Gemeentelijke pilot onder de NDS","https://www.digitaleoverheid.nl/nieuws-nds/gemeenten-verkennen-autonome-digitale-werkomgeving/"]]],
  ["Forum Standaardisatie",[["Handreiking voor open standaarden bij ICT-inkoop","https://www.forumstandaardisatie.nl/publicaties/handreiking-inkoop-2021"]]],
  ["Open standaarden",[["Handreiking voor open standaarden bij ICT-inkoop","https://www.forumstandaardisatie.nl/publicaties/handreiking-inkoop-2021"]]],
  ["Beveiliging",[["Identiteit en toegang organiseren","https://www.ncsc.nl/identiteits-en-toegangsbeheer/hoe-organiseer-ik-identiteit-en-toegang"]]],
  ["Element",[["Element en Matrix","https://element.io/built-on-matrix"],["Architectuur van openDesk","https://docs.opendesk.eu/operations/architecture/"]]],
  ["Centric",[["Samenwerking met Nextcloud voor de publieke sector","https://centric.eu/nl/nieuws/centric-en-nextcloud-ontwikkelen-soevereine-digitale-werkplek-voor-nederlandse-publieke-sector/"]]],
  ["Nebul",[["GPU-infrastructuur voor AI","https://nebul.com/cloud-gpus-and-clusters/"]]],
  ["KPN",[["KPN Sovereign Cloud met STACKIT","https://www.kpn.com/zakelijk/grootzakelijk/cloud/sovereign-cloud"]]],
  ["STACKIT",[["KPN Sovereign Cloud met STACKIT","https://www.kpn.com/zakelijk/grootzakelijk/cloud/sovereign-cloud"],["Gunning Europese aanbesteding voor soevereine cloud","https://commission.europa.eu/news-and-media/news/commission-advances-cloud-sovereignty-through-strategic-procurement-2026-04-17_en"]]],
  ["Google Cloud",[["Gunning Europese aanbesteding voor soevereine cloud","https://commission.europa.eu/news-and-media/news/commission-advances-cloud-sovereignty-through-strategic-procurement-2026-04-17_en"]]],
  ["Pardus",[["Pardus bij TÜBİTAK ULAKBİM","https://ulakbim.tubitak.gov.tr/pardus/"]]],
  ["Zuyd Hogeschool",[["Projectpartners SOLID","https://yourdata.network/nl/digitale-autonomie-solid/"]]],
  ["Beter Samen Werken",[["Praktijktest en Open BSW","https://www.open-overheid.nl/actueel/nieuws/2025/07/15/eerste-test-van-de-werkomgeving-van-de-toekomst"]]],
  ["SURF Works",[["Openbare pilotpagina van SURF","https://www.surf.nl/diensten/opslag-datamanagement/nextcloud-pilot-van-surf"]]],
  ["Radboud Universiteit",[["Deelname en opzet van de Radboud-pilot","https://www.ru.nl/medewerkers/actuele-themas/digitale-soevereiniteit-nextcloud-pilot"]]],
  ["Euro-Office",[["Euro-Office in Nextcloud Hub","https://nextcloud.com/de/blog/euro-office-general-availability-set-for-june-9/"]]],
  ["GovDigital",[["openDesk als SaaS via GovDigital","https://govdigital.de/opendesk-von-zendis-ueber-govdigital-flaechendeckend-als-saas-beziehbar/"]]],
  ["ZenDiS",[["Zwitserse proef met openDesk en rol van ZenDiS","https://www.bk.admin.ch/de/machbarkeitsstudie-poc-boss"],["openDesk als SaaS via GovDigital","https://govdigital.de/opendesk-von-zendis-ueber-govdigital-flaechendeckend-als-saas-beziehbar/"]]],
  ["Serpro",[["Projectpartners Nuvem Brasileira","https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/ambiente-tecnologico/nuvem/nuvem-brasileira"]]],
  ["Cloud Sovereignty Framework",[["Cloud Sovereignty Framework, implementatiehandreiking","https://commission.europa.eu/document/download/2ad80a48-166f-4c77-a513-80c53ca2a128_en?filename=Cloud+Sovereignty+Framework+-+Implementation+guidance.pdf"]]],
  ["Microsoft 365",[["Kamerbrief over de werkplekvernieuwing bij Financiën","https://zoek.officielebekendmakingen.nl/kst-31066-1550.html"]]],
  ["openDesk",[["Architectuur van openDesk","https://docs.opendesk.eu/operations/architecture/"],["Gemeentelijke pilot en bouwstenen van MijnBureau","https://www.digitaleoverheid.nl/nieuws-nds/gemeenten-verkennen-autonome-digitale-werkomgeving/"],["Zwitserse proef met openDesk","https://www.bk.admin.ch/de/machbarkeitsstudie-poc-boss"]]],
  ["Nextcloud",[["Architectuur van openDesk","https://docs.opendesk.eu/operations/architecture/"],["Gemeentelijke pilot en bouwstenen van MijnBureau","https://www.digitaleoverheid.nl/nieuws-nds/gemeenten-verkennen-autonome-digitale-werkomgeving/"]]],
  ["OpenProject",[["Architectuur van openDesk","https://docs.opendesk.eu/operations/architecture/"]]],
  ["La Suite",[["Gemeentelijke pilot en bouwstenen van MijnBureau","https://www.digitaleoverheid.nl/nieuws-nds/gemeenten-verkennen-autonome-digitale-werkomgeving/"]]],
  ["DINUM",[["Gemeentelijke pilot en bouwstenen van MijnBureau","https://www.digitaleoverheid.nl/nieuws-nds/gemeenten-verkennen-autonome-digitale-werkomgeving/"]]],
  ["SSC-ICT",[["Gemeentelijke pilot en bouwstenen van MijnBureau","https://www.digitaleoverheid.nl/nieuws-nds/gemeenten-verkennen-autonome-digitale-werkomgeving/"]]],
  ["DAWO",[["DAWO-installatiecode","https://code.overheid.nl/MinBZK/DAWO-Installatie"]]],
]);
const atlasAdditions = [
  {
    "name": "Proxmox VE",
    "system": "Oplossingen",
    "region": "Oostenrijk",
    "role": "Virtualisatie van servers en containers",
    "phase": "Beschikbaar",
    "source": [
      "Proxmox VE: officiële productbeschrijving",
      "https://www.proxmox.com/en/products/proxmox-virtual-environment/overview"
    ],
    "explanation": "Proxmox Virtual Environment is een opensourceplatform voor servervirtualisatie. Het combineert KVM voor virtuele machines en LXC voor Linux-containers met beheer van opslag, netwerken en clusters via een webinterface. Voor een digitale werkplek vormt het een infrastructuurbasis waarop organisaties eigen toepassingen en servers kunnen laten draaien. Dat biedt keuze over hardware, hosting en beheer, zonder dat een complete publieke cloud nodig is. Proxmox VE levert zelf geen kantoorsoftware of samenwerkdiensten. De organisatie blijft verantwoordelijk voor beveiligingsupdates, beschikbaarheid, beheerrechten en herstel. Professionele ondersteuning is beschikbaar; de gekozen inrichting en dienstverlening bepalen de feitelijke zeggenschap.",
    "classification": "Infrastructuur"
  },
  {
    "name": "Proxmox Backup Server",
    "system": "Oplossingen",
    "region": "Oostenrijk",
    "role": "Back-up en herstel",
    "phase": "Beschikbaar",
    "source": [
      "Proxmox Backup Server: officiële productbeschrijving",
      "https://www.proxmox.com/en/products/proxmox-backup-server/overview"
    ],
    "explanation": "Proxmox Backup Server is een opensourceoplossing voor back-up en herstel van virtuele machines, containers en fysieke hosts. Het ondersteunt onder meer incrementele back-ups, deduplicatie, versleuteling en controle van gegevensintegriteit. De officiële productinformatie beschrijft integratie met Proxmox VE en opslag op eigen locaties of op afstand. Voor een soevereine werkplek is herstelbaarheid een afzonderlijke bouwsteen: een organisatie moet ook na een storing of incident bij haar gegevens kunnen. De zeggenschap hangt mede af van de locatie van back-ups, toegang tot sleutels, bewaarbeleid en aantoonbaar geteste herstelprocedures. De software vervangt geen organisatiebreed continuïteitsplan.",
    "classification": "Infrastructuur"
  },
  {
    "name": "ONLYOFFICE Docs",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Documentbewerking in de browser",
    "phase": "Beschikbaar",
    "source": [
      "ONLYOFFICE Docs Community Edition zelf installeren",
      "https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-ubuntu.aspx"
    ],
    "explanation": "ONLYOFFICE Docs biedt online editors voor tekstdocumenten, spreadsheets en presentaties. De officiële installatiehandleiding beschrijft hoe de Community Edition op een eigen Linux-server draait en met een samenwerkplatform kan worden geïntegreerd. Voor een digitale werkplek is dit een alternatief voor de documentbewerkingslaag: bestanden en de editor kunnen onder een zelf gekozen beheeromgeving blijven. Vergelijk de gekozen editie op licentie, gelijktijdige gebruikers, ondersteuning en compatibiliteit met de eigen documenten. Eigen hosting geeft ruimte voor zeggenschap over verwerking en beheer; de feitelijke inrichting en eventuele externe koppelingen blijven bepalend. Een toepassing binnen MijnBureau of openDesk wordt hier niet gesteld.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Zimbra",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Mail, agenda en contacten",
    "phase": "Beschikbaar",
    "source": [
      "Officiële Zimbra-documentatie en installatiegidsen",
      "https://www.zimbra.com/product/documentation/"
    ],
    "explanation": "Zimbra is een platform voor e-mail, agenda en contacten. De openbare documentatie bevat installatie-, beheer- en migratiegidsen voor de serveromgeving. Daarmee is Zimbra relevant als alternatief voor de mail- en groupwarelaag van een werkplek: een organisatie kan de exploitant en de inrichting van haar mailomgeving beoordelen en kiezen. De beschikbare functies, ondersteuning en gebruiksrechten hangen af van de editie en licentie. Zelf beheren betekent ook verantwoordelijkheid voor beveiliging, updates, back-ups en bereikbaarheid. Opname op de kaart is geen beoordeling dat iedere aangeboden Zimbra-dienst soeverein is en onderbouwt geen koppeling met de Nederlandse overheidsinitiatieven.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Keycloak",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Identiteit en toegangsbeheer",
    "phase": "Beschikbaar",
    "source": [
      "Keycloak: functies voor identiteit en toegang",
      "https://www.keycloak.org/"
    ],
    "explanation": "Keycloak is opensourcesoftware voor identiteit en toegangsbeheer. Het verzorgt onder meer eenmalig aanmelden, tweefactorauthenticatie en aansluiting op bestaande LDAP- of Active Directory-omgevingen. Het ondersteunt OpenID Connect en SAML voor het koppelen van toepassingen. Voor een digitale werkplek is dit een belangrijke bouwsteen: de organisatie kan de authenticatievoorziening zelf organiseren in plaats van die uitsluitend bij een externe werkplekleverancier onder te brengen. De beheerder moet beschikbaarheid, beveiligingsupdates, herstel en koppelingen zelf inrichten. Keycloak levert geen complete werkpleksuite. De vergelijking met Univention Nubus betreft de rol bij identiteit en toegang; zij impliceert geen identieke functies of onderlinge integratie.",
    "classification": "Bouwsteen"
  },
  {
    "name": "OpenStack",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Zelfbeheerde cloudinfrastructuur",
    "phase": "Beschikbaar",
    "source": [
      "OpenStack: software voor cloudinfrastructuur",
      "https://www.openstack.org/software/"
    ],
    "explanation": "OpenStack is opensourcesoftware om cloudinfrastructuur voor rekenkracht, opslag en netwerken te organiseren. Organisaties en dienstverleners kunnen daarmee een eigen cloudomgeving beheren waarop werkplekapplicaties draaien. Voor digitale zeggenschap is vooral de scheiding tussen applicaties, infrastructuursoftware en exploitant relevant: de technische basis kan worden ingericht zonder alle infrastructuurkeuzes aan één gesloten cloudplatform te koppelen. OpenStack is geen kant-en-klare kantooromgeving. Hardware, beheerrechten, beveiliging, netwerkverbindingen en contracten bepalen hoe onafhankelijk een concrete dienst is. Cleura documenteert het gebruik van OpenStack; die bron onderbouwt de verbinding op de kaart, zonder een specifieke overheidsimplementatie te veronderstellen.",
    "classification": "Infrastructuur",
    "references": [
      [
        "OpenStack bij Cleura",
        "https://docs.cleura.cloud/kna1/howto/openstack/"
      ]
    ]
  },
  {
    "name": "Debian",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Linux-besturingssysteem voor werkplek en server",
    "phase": "Beschikbaar",
    "source": [
      "Over het Debian-project en besturingssysteem",
      "https://www.debian.org/intro/about"
    ],
    "explanation": "Debian is een door een gemeenschap ontwikkeld vrij besturingssysteem, bekend als basis voor Linux-werkplekken en servers. Het project bundelt softwarepakketten en pakketbeheer waarmee organisaties hun eigen systeemomgeving kunnen samenstellen en onderhouden. Voor een soevereine werkplek biedt dat keuze over het besturingssysteem en de daarop geïnstalleerde toepassingen. Daar horen praktische vragen bij over hardwareondersteuning, beveiligingsupdates, apparaatbeheer en aansluiting op bestaande vakapplicaties. Debian is een technische basis en geen complete vervanger voor een beheerde werkplekdienst. De vergelijking met DAWO gaat over Linux op de werkplek; zij betekent niet dat DAWO op Debian is gebaseerd.",
    "classification": "Bouwsteen"
  },
  {
    "name": "Seafile",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Bestandssynchronisatie en delen",
    "phase": "Beschikbaar",
    "source": [
      "Seafile: functies en zelfbeheerde installatie",
      "https://www.seafile.com/en/home/"
    ],
    "explanation": "Seafile is software voor bestandssynchronisatie, delen en samenwerking. De productinformatie beschrijft toegang via verschillende apparaten, deelrechten, versiegeschiedenis en installatie op eigen infrastructuur. Daarmee is het een relevant alternatief voor de bestandslaag van een werkplek, naast bijvoorbeeld Nextcloud. De organisatie kan bepalen waar de server draait en wie de omgeving beheert. Onderzoek bij de gekozen editie welke functies, exportmogelijkheden en ondersteuning beschikbaar zijn. Bij migratie moeten niet alleen bestanden, maar ook gedeelde toegang, historie en synchronisatie worden beoordeeld. Eventuele AI-functies en externe verwerkingsdiensten vragen een afzonderlijke keuze. Er is hier geen integratie met MijnBureau of openDesk vastgesteld.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Rocket.Chat",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Chat en teamcommunicatie",
    "phase": "Beschikbaar",
    "source": [
      "Rocket.Chat: zelfbeheerde en afgeschermde installatie",
      "https://docs.rocket.chat/docs/deploy-rocketchat"
    ],
    "explanation": "Rocket.Chat is een communicatieplatform waarvoor de officiële documentatie verschillende installatiemogelijkheden beschrijft, waaronder eigen servers en afgeschermde omgevingen zonder internetverbinding. Voor een digitale werkplek is het relevant als alternatief voor teamchat waarbij de organisatie de infrastructuur en het gegevensbeheer zelf kan organiseren. De documentatie onderscheidt zelfbeheer van door de leverancier gehoste diensten. Onderzoek per editie de licentie, beschikbare functies, mobiele notificaties en eventuele verbindingen met externe diensten. Een installatie op eigen servers maakt het beheer niet vanzelf onafhankelijk. De vergelijking met Element betreft teamcommunicatie; er wordt geen gedeeld protocol of onderlinge uitwisselbaarheid verondersteld.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "ownCloud Infinite Scale",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Bestanden delen en databeheer",
    "phase": "Beschikbaar",
    "source": [
      "ownCloud Infinite Scale: beheer en installatie",
      "https://doc.owncloud.com/ocis/8.2/index.html"
    ],
    "explanation": "ownCloud Infinite Scale is een platform voor het organiseren, delen en beheren van bestanden en metadata. De officiële documentatie beschrijft installatie, configuratie en beheer van de serveromgeving. Voor een digitale werkplek biedt het een afzonderlijk te beoordelen bestandsvoorziening, waarbij de organisatie keuzes kan maken over hosting, toegang en beheer. Het is relevant naast andere bestandsplatforms zoals Nextcloud en Seafile. Controleer voor een concrete invoering de productieversie, gebruiksvoorwaarden, ondersteuning en overdraagbaarheid van bestanden, rechten en metadata. De documentatie maakt expliciet dat gebruiksvoorwaarden van toepassing zijn. Opname in dit stelsel is geen verklaring dat elke editie of gehoste dienst zonder leveranciersafhankelijkheid inzetbaar is.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Cleura",
    "system": "Bedrijven",
    "region": "Zweden",
    "role": "Cloudinfrastructuur",
    "phase": "Beschikbaar",
    "source": [
      "OpenStack bij Cleura",
      "https://docs.cleura.cloud/kna1/howto/openstack/"
    ],
    "explanation": "Cleura levert cloudinfrastructuur en documenteert hoe klanten OpenStack gebruiken om virtuele machines, netwerken en opslag te beheren. Voor een digitale werkplek is dat een indirecte bijdrage: een organisatie kan er bijvoorbeeld eigen samenwerksoftware op draaien en de infrastructuur los van de applicaties kiezen. OpenStack geeft beheerders een gedocumenteerde interface, maar een verhuizing vraagt ook overdracht van gegevens, netwerkconfiguratie en eventuele beheerde diensten. Cleura staat daarom bij infrastructuur. De documentatie bewijst het aanbod en de bediening ervan. Een implementatie voor een specifiek werkplekinitiatief in dit stelsel is niet vastgesteld.",
    "classification": "Infrastructuur"
  },
  {
    "name": "GroupOffice",
    "system": "Oplossingen",
    "region": "Nederland",
    "role": "Groupware en CRM",
    "phase": "Beschikbaar",
    "source": [
      "GroupOffice-broncode en productbeschrijving",
      "https://github.com/Intermesh/groupoffice"
    ],
    "explanation": "GroupOffice is groupware van Intermesh die onder meer e-mail, agenda, contacten, bestanden en klantbeheer samenbrengt. De openbare repository bevat de code en informatie om de software te installeren. De directe werkplekbijdrage zit in het combineren van communicatiefuncties en gedeelde informatie onder een door de organisatie gekozen beheeromgeving. Dat maakt het mogelijk om de hostingkeuze apart te beoordelen. Bij migratie verdienen vooral agenda’s, gedelegeerde toegang en contactgegevens aandacht, omdat die in het dagelijkse werk samenhangen. GroupOffice is als zelfstandige suite opgenomen. Een koppeling met MijnBureau of openDesk is niet aangetoond.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Murena",
    "system": "Oplossingen",
    "region": "Frankrijk",
    "role": "Mobiele werkplek en cloud",
    "phase": "Beschikbaar",
    "source": [
      "Murena voor organisaties",
      "https://murena.com/business/"
    ],
    "explanation": "Murena biedt smartphones met /e/OS en een samenwerkomgeving onder de naam Murena Workspace. Daardoor raakt het aanbod zowel de mobiele toegang als diensten zoals mail, agenda en bestanden. Voor een soevereine werkplek is die combinatie relevant: een organisatie kan de keuzes voor toestel, besturingssysteem en synchronisatie afzonderlijk onderzoeken. De mobiele inrichting bepaalt bijvoorbeeld welke accounts en diensten medewerkers nodig hebben om bij hun werkbestanden te komen. Murena publiceert zakelijke productinformatie. Hoe centraal beheer, export en ondersteuning bij een specifieke organisatie zijn ingericht, moet per afgenomen dienst en toestel worden beoordeeld.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Proton Workspace",
    "system": "Oplossingen",
    "region": "Zwitserland",
    "role": "Beheerde werkpleksuite",
    "phase": "Beschikbaar",
    "source": [
      "Proton Workspace instellen",
      "https://proton.me/support/workspace-setup"
    ],
    "explanation": "Proton Workspace bundelt zakelijke toepassingen van Proton, waaronder e-mail, agenda, opslag en videovergaderen. De installatiehandleiding beschrijft hoe organisaties accounts en apps in gebruik nemen. Het aanbod is direct relevant als beheerde werkplek waarin een organisatie meerdere functies bij een andere aanbieder kan onderbrengen. Voor zeggenschap is van belang welke versleuteling per toepassing geldt, welke beheerrechten de organisatie houdt en hoe zij gegevens bij vertrek kan meenemen. De suite is daarom een vergelijkingspunt voor zelfbeheerde oplossingen. De openbare instructies beschrijven afname van Proton-diensten en geven geen bewijs voor een Nederlandse overheidsimplementatie.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "The Good Cloud",
    "system": "Bedrijven",
    "region": "Nederland",
    "role": "Beheerde Nextcloud",
    "phase": "Beschikbaar",
    "source": [
      "Nextcloud-aanbod van The Good Cloud",
      "https://thegood.cloud/nl/consumenten/"
    ],
    "explanation": "The Good Cloud biedt een beheerde Nextcloud-omgeving voor opslag en samenwerking. Dat geeft gebruikers toegang tot Nextcloud zonder zelf de onderliggende servers en updates te organiseren. De bijdrage aan de werkplek ligt daarmee in exploitatie en ondersteuning. Een afnemer kan de keuze voor de samenwerksoftware onderscheiden van de keuze voor de beheerder en vooraf beoordelen welke bestanden en rechten overdraagbaar zijn. The Good Cloud wordt bovendien door SIDN Fonds genoemd als partner van Bye Bye Big Tech. Dat project onderzoekt hoe maatschappelijke organisaties hun digitale infrastructuur praktisch en juridisch anders kunnen organiseren.",
    "classification": "Infrastructuur",
    "references": [
      [
        "Projectbeschrijving van SIDN Fonds",
        "https://www.sidnfonds.nl/projecten/bye-bye-big-tech"
      ]
    ]
  },
  {
    "name": "grommunio",
    "system": "Oplossingen",
    "region": "Oostenrijk",
    "role": "Mail en groupware",
    "phase": "Beschikbaar",
    "source": [
      "grommunio-gebruikersdocumentatie",
      "https://docs.grommunio.com/user/intro/"
    ],
    "explanation": "grommunio levert groupware voor e-mail, agenda en contacten. De aanbieder positioneert het als vervanging van Exchange en documenteert het gebruik van de webomgeving. Dit is relevant voor een soevereine werkplek omdat organisaties hun mail- en agendalaag kunnen onderzoeken zonder tegelijk een nieuwe oplossing voor alle documenten of vakapplicaties te kiezen. Een overstap moet in de praktijk uitwijzen of gedeelde agenda’s, mailboxrechten en gebruikte clients goed blijven werken. Het openbare aanbod onderbouwt de technische functie. De uitwisselbaarheid met een specifieke Exchange-installatie of inzet binnen een initiatief op deze kaart is daarmee niet vastgesteld.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "mailcow",
    "system": "Oplossingen",
    "region": "Duitsland",
    "role": "Zelfbeheerde mailserver",
    "phase": "Beschikbaar",
    "source": [
      "mailcow-installatie en beheer",
      "https://docs.mailcow.email/"
    ],
    "explanation": "mailcow bundelt mailservercomponenten in een installatie die beheerders met containers kunnen uitvoeren. De documentatie behandelt onder meer domeinen, mailboxen en het beheer van de installatie. De directe bijdrage zit in de mailfunctie: een organisatie kan kiezen waar de dienst draait en wie toegang heeft tot configuratie en back-ups. Die keuze brengt eigen operationele taken mee, zoals updates, spambeheersing en herstel. mailcow staat als afgebakende bouwsteen in de softwarecategorie. Het is relevant bij vergelijking met beheerde groupware, terwijl inzet bij een concreet werkplekproject in de atlas niet is vastgesteld.",
    "classification": "Bouwsteen"
  },
  {
    "name": "EGroupware",
    "system": "Oplossingen",
    "region": "Duitsland",
    "role": "Groupware en samenwerking",
    "phase": "Beschikbaar",
    "source": [
      "Installatie- en cloudvarianten van EGroupware",
      "https://www.egroupware.org/en/pricing"
    ],
    "explanation": "EGroupware biedt een omgeving voor onder meer agenda’s, contacten, taken en samenwerking. De aanbieder publiceert opties voor een clouddienst en installatie op eigen infrastructuur. Daarmee is de bijdrage aan de werkplek concreet: dezelfde productfamilie kan onder verschillende beheerafspraken worden gebruikt. Voor een organisatie maakt dat uit bij de keuze wie updates uitvoert, accounts beheert en back-ups kan herstellen. De beschikbare varianten en functies kunnen per editie verschillen. EGroupware staat als zelfstandige samenwerkomgeving in het stelsel. De bron onderbouwt de beschikbare afnamevormen en legt geen verband met een bestaande overheidspilot.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Infomaniak kSuite",
    "system": "Oplossingen",
    "region": "Zwitserland",
    "role": "Beheerde werkpleksuite",
    "phase": "Beschikbaar",
    "source": [
      "Productoverzicht kSuite",
      "https://www.infomaniak.com/en/ksuite"
    ],
    "explanation": "kSuite van Infomaniak bundelt onder meer zakelijke mail, opslag, documentbewerking en communicatiediensten. Het aanbod is direct relevant als beheerd alternatief voor organisaties die die functies bij één aanbieder willen afnemen. Voor zeggenschap is het relevant hoe domeinen, accounts en gegevens kunnen worden overgedragen wanneer een organisatie later opnieuw van dienst wisselt. De productpagina beschrijft de suite en de onderdelen. Zij onderbouwt geen universele compatibiliteit met bestaande kantoorprocessen. kSuite is daarom een vergelijkingsobject voor andere beheerde suites, terwijl de geschiktheid voor een specifieke werkplek afhangt van functies, contract en inrichting.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Office.eu",
    "system": "Oplossingen",
    "region": "Nederland",
    "role": "Beheerde werkpleksuite",
    "phase": "Beschikbaar",
    "source": [
      "Lancering van Office.eu",
      "https://office.eu/media/pressrelease-20260304"
    ],
    "explanation": "Office.eu biedt een kantoor- en samenwerkomgeving met documentbewerking, communicatie en opslag. De lanceringspublicatie noemt Nextcloud als een van de bouwstenen en beschrijft Europese hosting als kenmerk van het aanbod. Voor de werkplek is de bijdrage direct: medewerkers kunnen meerdere samenwerkfuncties gebruiken via een beheerde dienst op basis van bestaande technologie. De zeggenschap van de afnemer hangt vervolgens af van beheerrechten en de mogelijkheid om gegevens en instellingen over te dragen. Het dossier maakt onderscheid tussen Office.eu als product en Euro-Office als documenteditor. De lanceringsbron onderbouwt geen gelijkstelling van die twee.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "SCHULE@BW",
    "system": "Europa",
    "region": "Duitsland",
    "role": "Digitale werkplek voor scholen",
    "phase": "Beschikbaar",
    "source": [
      "Digitale werkplek van Baden-Württemberg",
      "https://ibbw-bw.de/%2CLde_DE/Startseite/IT_Anwendungen_Support/digitaler-arbeitsplatz"
    ],
    "explanation": "SCHULE@BW biedt scholen in Baden-Württemberg een digitale werkplek binnen de onderwijsinfrastructuur van de deelstaat. De officiële informatie beschrijft een werkomgeving voor onderwijspersoneel met kantoor- en samenwerkingsfuncties. De directe betekenis voor zeggenschap is dat de deelstaat de voorziening voor scholen organiseert en de onderdelen en toegangsvoorwaarden vastlegt. Daarmee vormt het een andere invoeringsroute dan afzonderlijke inkoop door iedere school. Bij beoordeling tellen ook gebruik, ondersteuning en aansluiting op bestaande onderwijsplatforms. De publieke productinformatie onderbouwt de voorziening. Zij geeft geen aanwijzing dat alle scholen de aangeboden werkplek gebruiken.",
    "classification": "Vergelijkingsmateriaal",
    "references": [
      [
        "Baden-Württemberg over F13 in het onderwijsplatform",
        "https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/f13-wird-teil-der-digitalen-bildungsplattform-1"
      ]
    ]
  },
  {
    "name": "Bye Bye Big Tech",
    "system": "Kennis",
    "region": "Nederland",
    "role": "Overstaponderzoek voor maatschappelijke organisaties",
    "phase": "In ontwikkeling",
    "source": [
      "Projectbeschrijving van SIDN Fonds",
      "https://www.sidnfonds.nl/projecten/bye-bye-big-tech"
    ],
    "explanation": "Bye Bye Big Tech ontwikkelt een juridisch en praktisch kader voor maatschappelijke organisaties die hun digitale werkomgeving anders willen inrichten. SIDN Fonds noemt het Instituut voor Informatierecht, Bits of Freedom, Greenhost en The Good Cloud als partners. Het project richt zich op dagelijkse functies zoals e-mail, vergaderen en gezamenlijk bestanden bewerken. De bijdrage is ondersteunend: het onderzoekt welke afspraken, vaardigheden en alternatieven een overstap haalbaar maken voor organisaties zonder grote eigen IT-afdeling. Dat is een andere rol dan het leveren van een suite. De projectbeschrijving onderbouwt de samenwerking en doelstelling, terwijl de uitkomst per deelnemer afzonderlijk moet blijken.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Thüringen",
    "system": "Europa",
    "region": "Duitsland",
    "role": "Deelstaatwerkplek en videovergaderen",
    "phase": "In gebruik",
    "source": [
      "Handleiding ThMeet van het Thüringer Landesrechenzentrum",
      "https://landesrechenzentrum.thueringen.de/fileadmin/TLRZ/ThMeet/Opentalk_Benutzerhandbuch.pdf"
    ],
    "explanation": "De Duitse deelstaat Thüringen documenteert ThMeet, een vergaderdienst op basis van OpenTalk, voor gebruik binnen de deelstaat. Het opleidingsprogramma noemt die dienst naast de digitale werkplek en behandelt ook opensourcesoftware. De aantoonbare werkplekbijdrage is concreet en afgebakend: videovergaderen kan als eigen dienst worden georganiseerd, zodat deze functie afzonderlijk van een volledige kantoorsuite kan worden ingericht. Dat is relevant voor beheer en continuïteit van vergaderingen. De openbare handleiding bevestigt de relatie met OpenTalk. Zij geeft geen basis om een volledige vervanging van de desktop, e-mail of kantoorsoftware voor de hele deelstaat te claimen.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Franse Linux-werkplekmigratie",
    "system": "Europa",
    "region": "Frankrijk",
    "role": "Linux-migratie bij DINUM",
    "phase": "In ontwikkeling",
    "source": [
      "DINUM kondigt overstap van Windows naar Linux aan",
      "https://www.numerique.gouv.fr/sinformer/espace-presse/souverainete-numerique-reduction-dependances-extra-europeennes/"
    ],
    "explanation": "De Franse DINUM werkt aan de overgang naar Linux op de werkplek. De casus gaat over het besturingssysteem en de inrichting van apparaten. Dat is een andere laag dan La Suite, die functies voor samenwerking levert. De directe bijdrage zit in het opbouwen van een alternatief voor desktopbeheer, zodat een overheidsorganisatie zelf ervaring opdoet met distributies, installatie en ondersteuning. Een migratie moet ook rekening houden met apparaten en toepassingen die medewerkers al gebruiken. Het dossier gaat over het bij DINUM beschreven traject. De bron geeft geen basis om alle Franse overheidswerkplekken als gemigreerd aan te merken.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Framaspace",
    "system": "Europa",
    "region": "Frankrijk",
    "role": "Samenwerken voor verenigingen",
    "phase": "Beschikbaar",
    "source": [
      "Framaspace-vragen en antwoorden van Framasoft",
      "https://www.frama.space/abc/fr/faq/"
    ],
    "explanation": "Framaspace is een dienst van Framasoft waarmee verenigingen en collectieven een eigen samenwerkruimte op basis van Nextcloud kunnen krijgen. De dienst ondersteunt onder meer bestanden delen en gezamenlijk werken. De directe bijdrage is dat kleine organisaties een beheerde omgeving kunnen gebruiken zonder zelf een server te exploiteren. De doelgroep en voorwaarden zijn daarom wezenlijk voor de plaats op de kaart: dit is een maatschappelijke voorziening met een afgebakende doelgroep. Het verband met Nextcloud is technisch. Een organisatie die de werkwijze wil overnemen, moet afzonderlijk kijken naar toelating, beschikbare capaciteit en continuïteit van beheer.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Oostenrijks BMWET",
    "system": "Europa",
    "region": "Oostenrijk",
    "role": "Ministeriële Nextcloud-uitrol",
    "phase": "In gebruik",
    "source": [
      "Praktijkbeschrijving met CIO en CISO van BMWET",
      "https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/austrias-ministry-economy-makes-case-open-source"
    ],
    "explanation": "Het Oostenrijkse ministerie van Economische Zaken, Energie en Toerisme heeft volgens de Europese OSOR-publicatie Nextcloud binnen het ministerie uitgerold. De betrokken CIO en CISO beschrijven hoe een zoektocht naar een vergaderoplossing uitmondde in een bredere samenwerkomgeving. Eigen servers en verwerking waren belangrijke uitgangspunten. De directe werkplekrelevantie is dat een ministerie een concreet alternatief voor gezamenlijke documentbewerking en communicatie op eigen infrastructuur kan organiseren. Het dossier is verbonden met Nextcloud als gebruikte software. De beschreven invoering zegt iets over deze ministeriële omgeving en geeft geen beeld van de werkplek bij alle Oostenrijkse overheidsdiensten.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "Oostenrijkse krijgsmacht",
    "system": "Europa",
    "region": "Oostenrijk",
    "role": "Migratie van desktopkantoorsoftware",
    "phase": "In gebruik",
    "source": [
      "De krijgsmacht over digitale soevereiniteit en LibreOffice",
      "https://www.truppendienst.com/beitraege/2026/digitale-souveraenitaet-und-libreoffice"
    ],
    "explanation": "De Oostenrijkse krijgsmacht stapte voor kantoorsoftware op de desktop over op LibreOffice. De eigen vakpublicatie beschrijft de overstap als onderdeel van het verminderen van afhankelijkheden rond de werkplek. De directe bijdrage is dat medewerkers teksten, tabellen en presentaties kunnen bewerken met andere software dan de eerdere kantoorapplicaties. Daarbij is de omgang met bestaande documenten, sjablonen en automatisering van belang. Deze casus laat zien dat een werkplekmigratie per functie kan plaatsvinden. De koppeling met LibreOffice is gedocumenteerd. De desktopmigratie vormt op zichzelf geen bewijs dat ook mail, identiteit of alle vakapplicaties zijn vervangen.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "KRZN NOVA",
    "system": "Europa",
    "region": "Duitsland",
    "role": "Gemeentelijke werkplek in ontwikkeling",
    "phase": "In ontwikkeling",
    "source": [
      "Projectbeschrijving van KRZN voor de Open Source Wettbewerb",
      "https://open-source-wettbewerb.de/voting/nova/"
    ],
    "explanation": "Het Kommunales Rechenzentrum Niederrhein ontwikkelt NOVA als opensourcewerkplek voor gemeentelijke organisaties. In de projectbeschrijving noemt KRZN UCS/Nubus voor identiteit, Nextcloud voor bestanden, Collabora Online voor documentbewerking en Open-Xchange voor groupware. Het hergebruikt bouwstenen uit het openDesk-ecosysteem. Voor zeggenschap is relevant hoe die onderdelen op bestaande gemeentelijke systemen worden aangesloten en hoe KRZN het beheer in zijn eigen datacenter voorbereidt. Volgens de inzending is een eerste installatie uitgevoerd en volgen stabilisatie en documentatie. NOVA is daarom een ontwikkel- en integratiecasus. De projectbeschrijving meldt geen brede productie-uitrol bij aangesloten gemeenten.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "International Criminal Court",
    "system": "Europa",
    "region": "Nederland",
    "role": "Overstap naar openDesk",
    "phase": "Migratie aangekondigd",
    "source": [
      "Europees Open Source Observatory over het ICC",
      "https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/international-criminal-court-invests-open-infrastructure"
    ],
    "explanation": "Het Internationaal Strafhof in Den Haag is opgenomen vanwege de keuze voor openDesk, zoals beschreven door het Europese Open Source Observatory. Het gaat om samenwerking en kantoorfuncties die een internationale organisatie onder andere beheerafspraken kan organiseren. Dat is relevant omdat de keuze voor zulke software bepaalt wie de omgeving kan exploiteren en hoe de organisatie haar werk bij een verandering van leverancier kan voortzetten. De aantoonbare relatie in het stelsel is met openDesk. De publieke berichtgeving over de gekozen richting geeft geen volledige inventaris van ingevoerde diensten, resterende afhankelijkheden of de verwerking van gevoelige zaakgegevens.",
    "classification": "Vergelijkingsmateriaal"
  },
  {
    "name": "SovereignDesk Rüsselsheim",
    "system": "Europa",
    "region": "Duitsland",
    "role": "Gemeentelijk praktijkvoorbeeld",
    "phase": "In gebruik",
    "source": [
      "Projectinzending van de gemeente Rüsselsheim",
      "https://open-source-wettbewerb.de/voting/sovereigndesk/"
    ],
    "explanation": "SovereignDesk brengt functies voor samenwerken, documenten en communicatie samen in een modulaire werkomgeving. Rüsselsheim staat op de kaart als praktijkcasus bij dit aanbod. De openbare projectinzending maakt het mogelijk om het verband met de gemeente te plaatsen zonder de gehele gemeentelijke ICT-omgeving aan de suite toe te schrijven. De directe werkplekbijdrage is een samenhangende omgeving waarin diensten voor dagelijks gebruik bij elkaar komen. Voor zeggenschap telt vervolgens wie de installatie beheert en hoe onderdelen en gegevens overdraagbaar zijn. De gemeente diende de case in voor een opensourcewedstrijd en vormt geen onafhankelijke beoordeling van de hele uitrol.",
    "classification": "Vergelijkingsmateriaal",
    "references": [
      [
        "Klantcase bij de leverancier",
        "https://sovereigndesk.de/erfahrungen/"
      ]
    ]
  },
  {
    "name": "Stadt Zürich/BFH",
    "system": "Europa",
    "region": "Zwitserland",
    "role": "Evaluatie van openDesk",
    "phase": "Evaluatie afgerond",
    "source": [
      "Evaluatierapport van de Berner Fachhochschule",
      "https://www.bfh.ch/ahb/de/forschung/forschungsprojekte/2025-867-514-540/"
    ],
    "explanation": "De stad Zürich en de Berner Fachhochschule onderzochten of openDesk een tweede bron naast Microsoft 365 kan zijn. De onderzoekers testten onder meer documenten, e-mail, agenda, chat, vergaderen en beheer. De directe praktijkwaarde is dat de studie laat zien welke basisfuncties al bruikbaar zijn en welke diensten aanvullend nodig zouden zijn. Zo bood de geteste omgeving geen ingebouwd geautomatiseerd beheer van eindapparaten. De studie beveelt een vervolgproef aan met medewerkers. Het dossier is gekoppeld aan openDesk als geteste software. Het beschrijft een evaluatie en geen besluit tot volledige vervanging van Microsoft 365.",
    "classification": "Vergelijkingsmateriaal",
    "findings": {
      "positive": "De evaluatie vond de onderzochte basisfuncties voor onder meer documentbewerking, mail en bestandsopslag goed tot zeer goed afgedekt.",
      "negative": "De geteste versies boden geen geautomatiseerd eindapparaatbeheer. De onderzoekers achten een snelle, volledige vervanging van Microsoft 365 niet haalbaar."
    }
  },
  {
    "name": "Cloudwise",
    "system": "Oplossingen",
    "region": "Nederland",
    "role": "Digitale onderwijsomgeving en integratie",
    "phase": "Beschikbaar",
    "source": [
      "Digitale leer- en werkomgeving COOL",
      "https://www.cloudwise.nl/oplossingen/dlwo-digitale-leer-en-werk-omgeving"
    ],
    "explanation": "Cloudwise levert scholen digitale leer- en werkomgevingen, waaronder het portaal COOL. Het bedrijf biedt ook ondersteuning voor Google Workspace for Education. Daardoor is Cloudwise relevant als voorbeeld van een integratielaag: een school kan één ingang voor medewerkers en leerlingen gebruiken terwijl onderliggende toepassingen door verschillende partijen worden geleverd. Voor zeggenschap is het van belang apart te kijken naar de beheerder van het portaal en naar de diensten waar accounts en bestanden werkelijk staan. Het openbare aanbod onderbouwt die rol. Opname in de atlas geeft Cloudwise geen kwalificatie als zelfstandig soevereine vervanger van Google Workspace.",
    "classification": "Vergelijkingsmateriaal",
    "references": [
      [
        "Cloudwise over Google Workspace for Education",
        "https://www.cloudwise.nl/oplossingen/google-workspace"
      ]
    ]
  },
  {
    "name": "LibreOffice",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Desktopkantoorsoftware",
    "phase": "Beschikbaar",
    "source": [
      "Productinformatie van The Document Foundation",
      "https://www.libreoffice.org/discover/libreoffice/"
    ],
    "explanation": "LibreOffice biedt desktoptoepassingen voor tekstverwerking, tabellen en presentaties. De suite gebruikt OpenDocument Format als eigen documentformaat. Dat maakt haar rechtstreeks relevant voor een werkplek waarop gebruikers bestanden ook buiten één leveranciersomgeving moeten kunnen openen en bewerken. De Oostenrijkse krijgsmacht biedt in het stelsel een gedocumenteerd voorbeeld van migratie naar LibreOffice. In een bestaande omgeving verdienen documenten met complexe opmaak, macro’s en sjablonen een afzonderlijke test. LibreOffice levert de kantoorsoftware op het apparaat. De organisatie kiest daarnaast zelf hoe zij bestanden bewaart en hoe medewerkers online samenwerken.",
    "classification": "Bouwsteen",
    "references": [
      [
        "De krijgsmacht over digitale soevereiniteit en LibreOffice",
        "https://www.truppendienst.com/beitraege/2026/digitale-souveraenitaet-und-libreoffice"
      ]
    ]
  },
  {
    "name": "OpenTalk",
    "system": "Oplossingen",
    "region": "Duitsland",
    "role": "Videoconferenties",
    "phase": "Beschikbaar",
    "parent": "Thüringen",
    "source": [
      "OpenTalk-gebruikersdocumentatie",
      "https://docs.opentalk.eu/user/"
    ],
    "explanation": "OpenTalk levert software voor videovergaderingen. De gebruikersdocumentatie beschrijft hoe deelnemers vergaderingen organiseren en gebruiken. Het Thüringer Landesrechenzentrum publiceert een handleiding voor ThMeet op basis van OpenTalk, waardoor de werkplekrelatie verder gaat dan een theoretische toepassing. De directe bijdrage is een apart in te richten vergaderfunctie, met eigen keuzes over beheer, toegang en deelnemers. Een organisatie kan die dienst beoordelen zonder meteen haar documentsoftware of e-mail te vervangen. De ThMeet-bron ondersteunt de toepassing in Thüringen. Een relatie met andere overheden op de kaart volgt pas uit documentatie over hun eigen omgeving.",
    "classification": "Bouwsteen",
    "references": [
      [
        "Handleiding ThMeet van het Thüringer Landesrechenzentrum",
        "https://landesrechenzentrum.thueringen.de/fileadmin/TLRZ/ThMeet/Opentalk_Benutzerhandbuch.pdf"
      ]
    ]
  },
  {
    "name": "Collabora Online",
    "system": "Oplossingen",
    "region": "Verenigd Koninkrijk",
    "role": "Documentbewerking in de browser",
    "phase": "Beschikbaar",
    "parent": "openDesk",
    "source": [
      "Componentenoverzicht van openDesk",
      "https://docs.opendesk.eu/operations/introduction/"
    ],
    "explanation": "Collabora Online maakt het mogelijk om tekstdocumenten, spreadsheets en presentaties in een browser te bewerken. Het componentenoverzicht van openDesk noemt Collabora als webkantoorsoftware. In de werkplek levert het de editor, terwijl opslag en toegangsrechten ook van de gekoppelde omgeving afhangen. Daardoor kan een beheerder bestandsbeheer en documentbewerking als afzonderlijke onderdelen beoordelen. KRZN noemt Collabora Online eveneens als bouwsteen in NOVA. De relevantie is direct, maar de documentatie onderbouwt geen foutloze omzetting van alle documenten. Bij invoering moet een organisatie opmaak, formules en gedeelde bewerking met eigen bestanden toetsen.",
    "classification": "Bouwsteen",
    "references": [
      [
        "Projectbeschrijving van KRZN voor de Open Source Wettbewerb",
        "https://open-source-wettbewerb.de/voting/nova/"
      ]
    ]
  },
  {
    "name": "OX App Suite",
    "system": "Oplossingen",
    "region": "Duitsland",
    "role": "Mail, agenda en contacten",
    "phase": "Beschikbaar",
    "parent": "openDesk",
    "source": [
      "Technische architectuur van openDesk",
      "https://docs.opendesk.eu/operations/architecture/"
    ],
    "explanation": "OX App Suite van Open-Xchange levert groupwarefuncties zoals mail, agenda en contacten. openDesk beschrijft hoe het de webinterface van OX App Suite in de samenwerkomgeving integreert. Daarmee is de bijdrage direct: werknemers kunnen gebruikmaken van een afzonderlijke mail- en agendalaag binnen een bredere suite. KRZN noemt Open-Xchange ook bij de integratie van NOVA. Voor zeggenschap telt welke partij mailboxen en rechten beheert en wat er bij een overstap kan worden overgedragen. De architectuur bevestigt de koppeling. Ze legt geen specifieke exploitant of migratieresultaat vast voor iedere openDesk-installatie.",
    "classification": "Bouwsteen",
    "references": [
      [
        "Projectbeschrijving van KRZN voor de Open Source Wettbewerb",
        "https://open-source-wettbewerb.de/voting/nova/"
      ]
    ]
  },
  {
    "name": "XWiki",
    "system": "Oplossingen",
    "region": "Frankrijk",
    "role": "Wiki en kennisbeheer",
    "phase": "Beschikbaar",
    "parent": "openDesk",
    "source": [
      "Componentenoverzicht van openDesk",
      "https://docs.opendesk.eu/operations/introduction/"
    ],
    "explanation": "XWiki levert software om kennis gezamenlijk te documenteren in een wiki. In openDesk vormt het de laag voor kennisbeheer, naast functies voor bestanden, chat en projectplanning. Dat is rechtstreeks relevant voor de werkplek, omdat werkinstructies en afspraken vaak in een gedeelde omgeving worden onderhouden. Een organisatie kan de wiki als afzonderlijk onderdeel beheren en bij een overstap bekijken hoe pagina’s, bijlagen, rechten en historie kunnen worden meegenomen. De componentdocumentatie bevestigt de relatie met openDesk. Zij geeft geen garantie dat elke bestaande kennisbank zonder aanpassingen kan worden overgezet.",
    "classification": "Bouwsteen"
  },
  {
    "name": "Univention Nubus",
    "system": "Oplossingen",
    "region": "Duitsland",
    "role": "Portaal en identiteitsbeheer",
    "phase": "Beschikbaar",
    "parent": "openDesk",
    "source": [
      "Componentenoverzicht van openDesk",
      "https://docs.opendesk.eu/operations/introduction/"
    ],
    "explanation": "Nubus van Univention levert het portaal en identiteits- en toegangsbeheer in openDesk. Deze bouwsteen bepaalt mede hoe medewerkers vanuit een account bij afzonderlijke werkplekapplicaties komen. Daarmee heeft Nubus een directe technische rol. Identiteit is een afzonderlijke laag naast opslag of documentbewerking en kan gekoppeld worden aan bestaande organisatievoorzieningen. Ook KRZN NOVA noemt UCS/Nubus voor rollen en rechten. Bij de invoering moet worden vastgesteld welk systeem de gezaghebbende bron voor accounts blijft, wie rechten kan intrekken en wat er gebeurt wanneer een organisatie van beheerder wisselt.",
    "classification": "Bouwsteen",
    "references": [
      [
        "Projectbeschrijving van KRZN voor de Open Source Wettbewerb",
        "https://open-source-wettbewerb.de/voting/nova/"
      ]
    ]
  },
  {
    "name": "Jitsi",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Videovergaderen",
    "phase": "Beschikbaar",
    "parent": "openDesk",
    "source": [
      "Componentenoverzicht van openDesk",
      "https://docs.opendesk.eu/operations/introduction/"
    ],
    "explanation": "Jitsi biedt software voor online vergaderingen. openDesk noemt Jitsi als component voor videoconferenties en documenteert de inzet binnen zijn eigen samenwerkomgeving. De bijdrage is direct: een organisatie kan vergaderen als onderdeel van de werkplek aanbieden, met een afzonderlijke keuze over de infrastructuur en het beheer van de dienst. Voor zeggenschap gaat het dan ook om het gedrag van de concrete installatie, bijvoorbeeld wie een vergadering kan starten, hoe gasten deelnemen en welke gegevens worden verwerkt. Jitsi wordt hier als vergadercomponent opgenomen. Het is een andere functie dan het whiteboard van Neoboard.",
    "classification": "Bouwsteen"
  },
  {
    "name": "CryptPad",
    "system": "Oplossingen",
    "region": "Frankrijk",
    "role": "Versleuteld samenwerken",
    "phase": "Beschikbaar",
    "source": [
      "CryptPad-documentatie",
      "https://docs.cryptpad.org/en/"
    ],
    "explanation": "CryptPad is een opensourceomgeving voor gezamenlijk werken aan onder meer documenten en andere gedeelde inhoud. Het project documenteert hoe versleuteling in de browser wordt gebruikt, zodat de server de inhoud volgens dat ontwerp niet in leesbare vorm hoeft te ontvangen. De bijdrage aan een soevereine werkplek is direct maar afgebakend: een team kan gezamenlijke bewerking organiseren met een andere verdeling van toegang tot de inhoud. Voor beheer blijven onder meer sleuteltoegang, delen met externen, herstel en export relevant. CryptPad staat als zelfstandig alternatief in het stelsel. Een integratie met een bestaande suite is niet verondersteld.",
    "classification": "Bouwsteen"
  },
  {
    "name": "Nordeck/Neoboard",
    "system": "Oplossingen",
    "region": "Duitsland",
    "role": "Digitaal whiteboard",
    "phase": "Beschikbaar",
    "parent": "openDesk",
    "source": [
      "openDesk-release met whiteboard",
      "https://www.opendesk.eu/de/blog/opendesk-1-19"
    ],
    "explanation": "NeoBoard van Nordeck is een digitaal whiteboard om ideeën en schema’s gezamenlijk uit te werken. De releasebeschrijving van openDesk behandelt de opname van het whiteboard. De werkplekfunctie is daarmee concreet: teams kunnen visueel samenwerken binnen de omgeving waarin zij ook communiceren. Dat geeft de organisatie een andere optie dan een los afgenomen whiteboarddienst. Voor zeggenschap blijft van belang waar borden worden opgeslagen, welke deelnemers ze kunnen openen en wat er bij een overstap met bestaande borden gebeurt. Nordeck staat hier bij deze specifieke softwarebijdrage. Jitsi vervult binnen openDesk de afzonderlijke vergaderfunctie.",
    "classification": "Bouwsteen"
  },
  {
    "name": "Tchap",
    "system": "Oplossingen",
    "region": "Frankrijk",
    "role": "Berichten voor publieke organisaties",
    "phase": "Beschikbaar",
    "parent": "La Suite",
    "source": [
      "Officiële Tchap-productpagina",
      "https://www.tchap.gouv.fr/"
    ],
    "explanation": "Tchap is een berichtenomgeving van de Franse overheid voor publieke medewerkers. De dienst is bedoeld voor gesprekken en samenwerking binnen een omgeving met eigen toegangsvoorwaarden. Voor een soevereine werkplek is de bijdrage direct: een publieke organisatie kan dagelijkse chat als afzonderlijke werkplekfunctie onder publiek georganiseerde dienstverlening gebruiken. Wie met externe deelnemers kan communiceren en welke gegevens rond accounts en berichten worden bewaard, moet aan de voorwaarden van de dienst worden getoetst. Tchap staat bij La Suite vanwege zijn plaats in het Franse overheidsaanbod. De vermelding bewijst geen inzet van Tchap in MijnBureau.",
    "classification": "Bouwsteen",
    "references": [
      [
        "DINUM kondigt overstap van Windows naar Linux aan",
        "https://www.numerique.gouv.fr/sinformer/espace-presse/souverainete-numerique-reduction-dependances-extra-europeennes/"
      ]
    ]
  },
  {
    "name": "La Suite Docs",
    "system": "Oplossingen",
    "region": "Frankrijk",
    "role": "Gezamenlijk schrijven",
    "phase": "Beschikbaar",
    "parent": "La Suite",
    "source": [
      "Broncode en documentatie van Docs",
      "https://github.com/suitenumerique/docs"
    ],
    "explanation": "Docs is de toepassing voor gezamenlijk schrijven van La Suite numérique. De openbare broncode en installatie-instructies maken zichtbaar hoe organisaties de toepassing zelf kunnen onderzoeken of inzetten. Voor de digitale werkplek zit de directe bijdrage in samen redigeren en delen van teksten, bijvoorbeeld voor notities en documentatie. Dat is een andere functie dan de bestandsopslag van Fichiers. De technische documentatie van openDesk noemt Docs ook als component voor gezamenlijke notities. Die hergebruikrelatie laat zien dat dezelfde toepassing in verschillende suites kan worden opgenomen, met een inrichting en beheer die per omgeving kunnen verschillen.",
    "classification": "Bouwsteen",
    "references": [
      [
        "Componentenoverzicht van openDesk",
        "https://docs.opendesk.eu/operations/introduction/"
      ]
    ]
  },
  {
    "name": "Grist",
    "system": "Oplossingen",
    "region": "Internationaal",
    "role": "Tabellen en gestructureerde gegevens",
    "phase": "Beschikbaar",
    "parent": "La Suite",
    "source": [
      "Grist in het aanbod van La Suite",
      "https://lasuite.numerique.gouv.fr/produits/grist"
    ],
    "explanation": "Grist combineert een spreadsheetachtige interface met gestructureerde tabellen die aan elkaar gekoppeld kunnen worden. La Suite biedt Grist aan voor gezamenlijke verwerking van zulke gegevens. De werkplekbijdrage is direct: medewerkers kunnen bijvoorbeeld lijsten en registraties onderhouden zonder een ongestructureerd document rond te sturen. Voor zeggenschap is vooral relevant welke rechten op de gegevens gelden en welke structuur bij export meegaat. Een platte export kan andere informatie bevatten dan een volledige toepassing met relaties en formules. De officiële productpagina bevestigt het aanbod binnen La Suite. Een gebruiksrelatie met andere suites is hier niet vastgesteld.",
    "classification": "Bouwsteen"
  },
  {
    "name": "La Suite Fichiers",
    "system": "Oplossingen",
    "region": "Frankrijk",
    "role": "Bestandsopslag en delen",
    "phase": "Beschikbaar",
    "parent": "La Suite",
    "source": [
      "Fichiers bij La Suite",
      "https://lasuite.numerique.gouv.fr/produits/fichiers"
    ],
    "explanation": "Fichiers is de dienst voor bestandsopslag en delen binnen La Suite numérique. De Franse overheid beschrijft er een eigen plek mee voor bestanden die medewerkers dagelijks gebruiken. Daarmee levert Fichiers direct de bestandslaag van de werkplek. Bij de beoordeling van zeggenschap zijn naast opslaglocatie ook gedeelde mappen, toegangsrechten en de overdracht van bestanden belangrijk. De dienst heeft een andere functie dan Docs, dat gezamenlijk schrijven ondersteunt. De publieke productinformatie bevestigt de plaats van Fichiers in La Suite. De manier waarop een afzonderlijke organisatie haar bestaande bestanden migreert, volgt niet uit deze beschrijving.",
    "classification": "Bouwsteen"
  },
  {
    "name": "L'Assistant",
    "system": "Oplossingen",
    "region": "Frankrijk",
    "role": "AI-ondersteuning binnen werkpleksoftware",
    "phase": "Beschikbaar",
    "parent": "La Suite",
    "source": [
      "DINUM over AI in La Suite",
      "https://ia.numerique.gouv.fr/outils-ia/ia-dans-lasuite/"
    ],
    "explanation": "L’Assistant is AI-ondersteuning in de Franse La Suite. DINUM beschrijft onder meer inzet binnen Docs om teksten te genereren, corrigeren of vertalen. De bijdrage aan de werkplek is direct voor die handelingen en afgebakend tot de functies waarin de assistent is geïntegreerd. Voor zeggenschap is van belang welke tekst naar een model gaat, wie de dienst beheert en welke gebruiksvoorwaarden voor gevoelige gegevens gelden. Het dossier is gekoppeld aan La Suite en Docs op basis van DINUM-documentatie. Daaruit volgt geen oordeel over de verwerking van gegevens bij iedere denkbare inzet.",
    "classification": "Bouwsteen"
  },
  {
    "name": "FranceTransfert",
    "system": "Oplossingen",
    "region": "Frankrijk",
    "role": "Overdracht van grote bestanden",
    "phase": "Beschikbaar",
    "parent": "La Suite",
    "source": [
      "Officiële FranceTransfert-FAQ",
      "https://francetransfert.numerique.gouv.fr/faq"
    ],
    "explanation": "FranceTransfert is een Franse overheidsdienst voor het verzenden van bestanden die niet geschikt zijn als gewone e-mailbijlage. De dienst regelt overdracht tussen publieke medewerkers en andere ontvangers volgens de beschreven toegangsvoorwaarden. Dat is een directe werkplekfunctie, omdat medewerkers grote bestanden kunnen versturen zonder voor elke overdracht een willekeurige externe dienst te kiezen. Het gaat om het overbrengen van bestanden. Voor duurzame opslag en gezamenlijke bewerking zijn andere functies nodig. De FAQ beschrijft het gebruik en de voorwaarden van de dienst. Organisaties moeten die toetsen aan het soort gegevens dat zij willen versturen.",
    "classification": "Bouwsteen",
    "references": [
      [
        "DINUM kondigt overstap van Windows naar Linux aan",
        "https://www.numerique.gouv.fr/sinformer/espace-presse/souverainete-numerique-reduction-dependances-extra-europeennes/"
      ]
    ]
  },
  {
    "name": "F13",
    "system": "Oplossingen",
    "region": "Duitsland",
    "role": "AI-assistent voor publieke medewerkers",
    "phase": "In gebruik",
    "parent": "SCHULE@BW",
    "source": [
      "Baden-Württemberg over F13 in het onderwijsplatform",
      "https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/f13-wird-teil-der-digitalen-bildungsplattform-1"
    ],
    "explanation": "F13 is een AI-assistent uit Baden-Württemberg voor gebruik in publieke organisaties. De deelstaat meldt dat de assistent bij ministeries wordt gebruikt en via SCHULE@BW beschikbaar komt voor leraren. Daardoor is de functie relevant voor medewerkers die AI bij tekstwerk willen gebruiken binnen een publiek georganiseerde omgeving. Voor zeggenschap telt welke modellen en verwerking achter de toepassing zitten, welke invoer is toegestaan en hoe resultaten worden gecontroleerd. F13 staat bij SCHULE@BW omdat beide onderdeel zijn van de aanpak voor digitale voorzieningen van de deelstaat. F13 draait volgens de deelstaat in de cloudomgeving van haar eigen IT-dienstverlener BITBW.",
    "classification": "Bouwsteen"
  },
  {
    "name": "Mecklenburg-Vorpommern",
    "system": "Europa",
    "region": "Duitsland",
    "role": "Deelstaatuitrol van Nextcloud",
    "phase": "In gebruik",
    "source": [
      "OSOR over de overstap van Mecklenburg-Vorpommern",
      "https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/mecklenburg-vorpommern-transitions-open-source"
    ],
    "explanation": "De Duitse deelstaat Mecklenburg-Vorpommern nam een zelfbeheerde Nextcloud-omgeving in gebruik. Het Europese Open Source Observatory meldt dat bij publicatie ongeveer vijfduizend medewerkers het platform gebruikten, vooral voor bestandsdeling. De directe werkplekbijdrage is dat opslag en delen op een door de deelstaat georganiseerde omgeving kunnen plaatsvinden. Voornemens voor meer gebruikers en functies zoals chat en videovergaderen staan los van dat gerapporteerde gebruik. De bron beschrijft bovendien samenwerking met Schleswig-Holstein, waardoor de casus laat zien hoe twee deelstaten ervaringen en kennis rond vergelijkbare werkpleklagen kunnen delen. Het dossier gaat over deze uitrol en niet over een voltooide vervanging van de hele werkplek.",
    "classification": "Kader of kennis",
    "findings": {
      "positive": "OSOR rapporteert circa vijfduizend medewerkers die de zelfbeheerde Nextcloud-omgeving gebruikten, voornamelijk voor bestandsdeling."
    }
  },
  {
    "name": "Open Productivity",
    "system": "Kennis",
    "region": "Europa",
    "role": "Samenwerking van softwareleveranciers",
    "phase": "Actief",
    "source": [
      "Open Productivity over openDesk en zijn leveranciers",
      "https://open-productivity.eu/en/solutions/"
    ],
    "explanation": "Open Productivity brengt leveranciers van software rond openDesk samen. De groep beschrijft bijvoorbeeld de bijdragen van Collabora, Open-Xchange, Nordeck en XWiki aan de suite. De rol voor de werkplek is ondersteunend: de leveranciers onderhouden afzonderlijke functies die binnen een geïntegreerde omgeving moeten samenwerken. Dat maakt het voor afnemers relevant om te weten wie een component ontwikkelt en hoe wijzigingen tussen componenten worden afgestemd. ZenDiS blijft volgens de bron de productorganisatie achter openDesk. Open Productivity staat daarom bij samenwerking tussen leveranciers. De projectinformatie onderbouwt geen gelijkstelling met Office.eu of een eigen uitrol bij een overheid.",
    "classification": "Kader of kennis"
  },
  {
    "name": "Bundesdruckerei",
    "system": "Bedrijven",
    "region": "Duitsland",
    "role": "Beoogde samenwerking voor beveiligde werkplekken",
    "phase": "Samenwerking aangekondigd",
    "source": [
      "Bundesdruckerei over de intentieverklaring met ZenDiS",
      "https://www.bundesdruckerei.de/de/newsroom/pressemitteilungen/bundesdruckerei-gruppe-und-zendis-starten-partnerschaft-fuer-digital-souveraene-verwaltung"
    ],
    "explanation": "De Duitse Bundesdruckerei-Gruppe tekende met ZenDiS een intentieverklaring voor samenwerking rond digitale infrastructuur en werkplekken. De groepspublicatie beschrijft een demonstratie die openDesk combineert met de genusecure Suite van dochterbedrijf genua om toegang in gevoelige scenario’s aanvullend te beveiligen. Daarmee is het verband met de werkplek concreet: het gaat om de beveiligde toegang tot een bestaande samenwerkomgeving, naast de softwarefuncties zelf. De rol van Bundesdruckerei is ondersteunend en gericht op samenwerking en beproeving. Een demonstratie of intentieverklaring toont op zichzelf geen brede uitrol en levert geen algemene certificering van openDesk als volledige werkplek op.",
    "classification": "Kader of kennis"
  },
  {
    "name": "DoCoNEXT",
    "system": "Kennis",
    "region": "Nederland",
    "role": "Projectpartner bij SOLID",
    "phase": "In ontwikkeling",
    "parent": "SOLID",
    "source": [
      "YourData over de SOLID-projectpartners",
      "https://yourdata.network/nl/digitale-autonomie-solid/"
    ],
    "explanation": "DoCoNEXT is genoemd als partner bij SOLID, waarin een digitale werkplek met samenwerking, opslag en AI wordt ontwikkeld en beproefd. De projectpublicatie beschrijft de gebruikte richting, waaronder Nextcloud voor samenwerking en het werken met lokaal beheerde AI. DoCoNEXT is opgenomen als partij in dat ontwikkelverband. De beschikbare projectbron specificeert onvoldoende welke afzonderlijke softwareonderdelen of resultaten aan DoCoNEXT zijn toe te schrijven. Voor de betekenis in het stelsel telt de aantoonbare projectdeelname. De publicatie onderbouwt geen zelfstandige implementatie of exploitatie van de complete werkplek door deze partner.",
    "classification": "Kader of kennis"
  },
  {
    "name": "Gemeente Valkenburg aan de Geul",
    "system": "Gemeenten",
    "region": "Nederland",
    "role": "Gemeentelijke validatiepartner",
    "phase": "Pilot",
    "parent": "SOLID",
    "source": [
      "YourData over validatie in de gemeentelijke praktijk",
      "https://yourdata.network/nl/digitale-autonomie-solid/"
    ],
    "explanation": "Valkenburg aan de Geul is praktijkpartner in SOLID. Volgens de projectbeschrijving wordt de werkplek daar gevalideerd in een gemeentelijke context. De bijdrage aan zeggenschap zit in de praktijktoets: een werkplek met lokale AI en open samenwerksoftware moet bruikbaar blijken voor medewerkers die met bestaande gemeentelijke processen en gegevens werken. Dat is een andere casus dan de DAWO-pilot, ook al onderzoeken beide hoe een alternatief in het dagelijks werk kan passen. De publieke bron noemt Valkenburg als validatiepartner. Zij beschrijft geen gemeentebrede productie-uitrol of onafhankelijke uitkomst van de proef.",
    "classification": "Kader of kennis"
  },
  {
    "name": "Jouw Advocaten",
    "system": "Kennis",
    "region": "Nederland",
    "role": "Validatiepartner uit de juridische praktijk",
    "phase": "Pilot",
    "parent": "SOLID",
    "source": [
      "YourData over validatie in de juridische praktijk",
      "https://yourdata.network/nl/digitale-autonomie-solid/"
    ],
    "explanation": "Jouw Advocaten is de juridische praktijkpartner waar het SOLID-project zijn digitale werkplek wil valideren. De projectpublicatie noemt daarnaast Valkenburg aan de Geul als gemeentelijke testomgeving. De werkplekrelevantie zit in een tweede soort gebruikerspraktijk: de organisatie moet kunnen samenwerken met bestanden en beoordelen hoe AI-ondersteuning bij haar processen past. Voor zeggenschap is vooral van belang welke documenten en invoer in de eigen beheeromgeving blijven. De openbare bron bevestigt deelname aan de validatie. Daaruit volgt geen bewijs dat cliëntgegevens in een productieomgeving worden verwerkt of dat de oplossing al aan alle eisen van de juridische praktijk voldoet.",
    "classification": "Kader of kennis"
  },
  {
    "name": "DAZM",
    "system": "Kennis",
    "region": "Nederland",
    "role": "Onderzoek naar werkplekmigratie in zorg en mkb",
    "phase": "Pilot aangekondigd",
    "source": [
      "Universiteit Maastricht over het DAZM-project",
      "https://www.maastrichtuniversity.nl/news/interdisciplinary-team-receives-funding-dazm-project"
    ],
    "explanation": "Digitale Autonomie voor Zorg en mkb is een onderzoeksproject van de Universiteit Maastricht met Mosa.cloud en BB Open. De universiteit beschrijft geplande pilots met publieke instellingen, waaronder zorgorganisaties, waarin een samenwerkomgeving op basis van La Suite wordt geëvalueerd. De bijdrage ligt bij het onderzoeken van de technische, organisatorische en financiële voorwaarden voor een overstap. Daarbij kijkt het project ook of Nederlandse IT-dienstverleners organisaties kunnen ondersteunen met open software. Het verband met La Suite betreft de aangekondigde proefopzet. De toekenning van financiering is nog geen resultaat van de pilots of bewijs van uitrol.",
    "classification": "Kader of kennis"
  }
];

// [object, tegenpartij, soort, toelichting, optioneel nummer van aanvullende bron]
const atlasAdditionRelations = [
  ["Proxmox Backup Server","Proxmox VE","Techniek","De officiële productinformatie beschrijft integratie voor back-up en herstel van virtuele machines en containers."],

  ["ONLYOFFICE Docs", "Collabora Online", "Vergelijking", "Vergelijking van online documenteditors; geen aangetoonde samenwerking."],
  ["Zimbra", "grommunio", "Vergelijking", "Vergelijking van mail- en groupwareplatforms; geen aangetoonde samenwerking."],
  ["Keycloak", "Univention Nubus", "Vergelijking", "Vergelijking van bouwstenen voor identiteit en toegang; functies en integraties verschillen."],
  ["OpenStack", "Cleura", "Techniek", "Cleura documenteert het gebruik van OpenStack voor zijn cloudinfrastructuur.", 1],
  ["Debian", "DAWO", "Vergelijking", "Vergelijking van Linux als werkplekbasis; DAWO wordt hier niet als Debian-gebaseerd aangeduid."],
  ["Seafile", "Nextcloud", "Vergelijking", "Vergelijking van platforms voor bestanden en samenwerking."],
  ["Rocket.Chat", "Element", "Vergelijking", "Vergelijking van teamcommunicatie; geen aangetoonde protocolkoppeling."],
  ["ownCloud Infinite Scale", "Nextcloud", "Vergelijking", "Vergelijking van platforms voor bestandsdeling en databeheer."],

  ["The Good Cloud","Nextcloud","Techniek","Biedt Nextcloud als beheerde dienst aan."],
  ["Office.eu","Nextcloud","Techniek","Gebruikt Nextcloud als een van zijn bouwstenen."],
  ["Bye Bye Big Tech","The Good Cloud","Samenwerking","The Good Cloud is consortiumpartner."],
  ["Thüringen","OpenTalk","Techniek","De dienst ThMeet gebruikt OpenTalk."],
  ["Franse Linux-werkplekmigratie","DINUM","Uitvoering","DINUM kondigde de overgang van Windows naar Linux aan."],
  ["Framaspace","Nextcloud","Techniek","Gebruikt Nextcloud als samenwerkplatform."],
  ["Mecklenburg-Vorpommern","Nextcloud","Implementatie","De deelstaat gebruikt een zelfbeheerde Nextcloud-omgeving."],
  ["Mecklenburg-Vorpommern","Schleswig-Holstein","Samenwerking","OSOR beschrijft samenwerking bij de overstap naar Nextcloud."],
  ["Oostenrijks BMWET","Nextcloud","Implementatie","Gebruikt Nextcloud voor de ministeriële samenwerkomgeving."],
  ["Oostenrijkse krijgsmacht","LibreOffice","Implementatie","De krijgsmacht stapte voor kantoorsoftware over op LibreOffice."],
  ["KRZN NOVA","openDesk","Hergebruik","NOVA hergebruikt bouwstenen uit openDesk."],
  ["KRZN NOVA","Nextcloud","Techniek","Bouwsteen voor bestanden en samenwerking."],
  ["KRZN NOVA","Collabora Online","Techniek","Bouwsteen voor documentbewerking in de browser."],
  ["KRZN NOVA","Univention Nubus","Techniek","UCS/Nubus verzorgt identiteits- en toegangsbeheer."],
  ["KRZN NOVA","OX App Suite","Techniek","NOVA noemt Open-Xchange als groupwarebouwsteen."],
  ["International Criminal Court","openDesk","Migratie","Het Strafhof koos openDesk als alternatief voor zijn samenwerkomgeving."],
  ["Stadt Zürich/BFH","openDesk","Evaluatie","BFH evalueerde openDesk voor de stad Zürich."],
  ["Stadt Zürich/BFH","Microsoft 365","Evaluatie","De stad onderzocht openDesk als tweede bron naast Microsoft 365."],
  ["DAZM","La Suite","Pilot","De aangekondigde pilots evalueren een omgeving op basis van La Suite."],
  ["Collabora Online","openDesk","Techniek","Onderdeel van de suite volgens de openDesk-documentatie."],
  ["OX App Suite","openDesk","Techniek","Onderdeel van de suite volgens de openDesk-documentatie."],
  ["XWiki","openDesk","Techniek","Onderdeel van de suite volgens de openDesk-documentatie."],
  ["Univention Nubus","openDesk","Techniek","Onderdeel van de suite volgens de openDesk-documentatie."],
  ["Jitsi","openDesk","Techniek","Onderdeel van de suite volgens de openDesk-documentatie."],
  ["Nordeck/Neoboard","openDesk","Techniek","Onderdeel van de suite volgens de openDesk-documentatie."],
  ["Tchap","La Suite","Techniek","Onderdeel van het Franse interministeriële werkplekaanbod.",1],
  ["La Suite Docs","La Suite","Techniek","Onderdeel van het Franse interministeriële werkplekaanbod.",0],
  ["Grist","La Suite","Techniek","Onderdeel van het Franse interministeriële werkplekaanbod.",0],
  ["La Suite Fichiers","La Suite","Techniek","Onderdeel van het Franse interministeriële werkplekaanbod.",0],
  ["L'Assistant","La Suite","Techniek","Onderdeel van het Franse interministeriële werkplekaanbod.",0],
  ["FranceTransfert","La Suite","Techniek","Onderdeel van het Franse interministeriële werkplekaanbod.",1],
  ["La Suite Docs","openDesk","Hergebruik","openDesk gebruikt Docs als component voor gezamenlijke notities.",1],
  ["L'Assistant","La Suite Docs","Techniek","DINUM beschrijft de integratie van de assistent in Docs."],
  ["F13","SCHULE@BW","Techniek","Baden-Württemberg integreert F13 in het onderwijsplatform."],
  ["Open Productivity","openDesk","Samenwerking","Verbindt leveranciers die bouwstenen voor openDesk onderhouden."],
  ["Bundesdruckerei","ZenDiS","Samenwerking","Intentieverklaring voor onder meer infrastructuur en werkplekken."],
  ["Bundesdruckerei","openDesk","Demonstratie","De aangekondigde demonstratie combineert openDesk met beveiligde toegang via genusecure."],
  ["DoCoNEXT","SOLID","Samenwerking","De projectpublicatie noemt DoCoNEXT als partner."],
  ["Gemeente Valkenburg aan de Geul","SOLID","Pilot","Beoogde validatie in de gemeentelijke praktijk."],
  ["Jouw Advocaten","SOLID","Pilot","Beoogde validatie in de juridische praktijk."],
  ["Tchap","Cnam","Migratie","De Franse overheid noemt Tchap bij de aangekondigde invoering bij Cnam.",1],
  ["FranceTransfert","Cnam","Migratie","De Franse overheid noemt FranceTransfert bij de aangekondigde invoering bij Cnam.",1],
];

// Functionele indeling binnen Oplossingen; één hoofdgroep per dossier.
const solutionGroups = new Map([
  [
    "Werkpleksuites",
    [
      "SURF Works",
      "Microsoft 365",
      "Murena",
      "Proton Workspace",
      "Infomaniak kSuite",
      "Office.eu",
      "Cloudwise"
    ]
  ],
  [
    "Documenten",
    [
      "LibreOffice",
      "Collabora Online",
      "ONLYOFFICE Docs",
      "Euro-Office",
      "La Suite Docs"
    ]
  ],
  [
    "Bestanden",
    [
      "Nextcloud",
      "Seafile",
      "ownCloud Infinite Scale",
      "La Suite Fichiers",
      "FranceTransfert"
    ]
  ],
  [
    "Communicatie",
    [
      "Element",
      "Rocket.Chat",
      "Jitsi",
      "OpenTalk",
      "La Suite Visio",
      "Tchap"
    ]
  ],
  [
    "Mail & agenda",
    [
      "Zimbra",
      "grommunio",
      "mailcow",
      "EGroupware",
      "OX App Suite",
      "GroupOffice"
    ]
  ],
  [
    "Projecten & kennis",
    [
      "OpenProject",
      "XWiki",
      "Grist",
      "CryptPad",
      "Nordeck/Neoboard",
      "L'Assistant",
      "F13"
    ]
  ],
  [
    "Identiteit",
    [
      "Keycloak",
      "Univention Nubus"
    ]
  ],
  [
    "Infrastructuur",
    [
      "OpenStack",
      "Debian",
      "Proxmox VE",
      "Proxmox Backup Server",
      "Soevereine overheidscloud",
      "Nuvem Brasileira"
    ]
  ]
]);
const infrastructureGroups = new Map([
  [
    "Virtualisatie",
    [
      "Proxmox VE"
    ]
  ],
  [
    "Cloudplatform",
    [
      "OpenStack"
    ]
  ],
  [
    "Besturingssysteem",
    [
      "Debian"
    ]
  ],
  [
    "Back-up",
    [
      "Proxmox Backup Server"
    ]
  ],
  [
    "Clouddienst",
    [
      "Soevereine overheidscloud",
      "Nuvem Brasileira"
    ]
  ]
]);
