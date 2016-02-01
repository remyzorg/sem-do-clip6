var sessions_data = [
    {
        "date": "3 Février 2016",
        "hide" : false,
        "room": "25-26 105",
        "past" : false,
        "talks" : [
            {
                "name" : "Matthieu Dien",
                "title" :"Analyse sta(tis)tiques de programmes concurrents",
                "duration" : "20",
                "description" : "Le model checking est une technique éprouvée de vérification statique pouvant s'appliquer aux programmes concurrents. Elle consiste à parcourir l'ensemble des exécutions possibles du programme et de vérifier des propriétés logiques correspondant à sa spécification formelle. L'exhaustivité induite par le parcours de cet ensemble entraîne un énorme besoin mémoire. Pour parer à ce problème, une possibilité est de ne parcourir qu'une petite partie de l'ensemble de ces exécutions de façon aléatoire. Dans cet exposé, nous présenterons deux méthodes répondant à ce dernier problème."
            },
            {
                "name" : "Youen Lesparre",
                "duration" : "10",
                "title" : "Mapping à l'aide du modèle Dataflow",
                "description" : "Les modèles dataflow permettent de modéliser des applications de flux de données et de prédire leurs comportements. Cette présentation propose une modélisation du problème de mapping à partir d'un dataflow sur une architecture à mémoire distribuée avec comme objectif une minimisation de la mémoire consommée."
            },
            {
                "name" : "Benjamin Baron",
                "duration" : "10",
                "title" : "Data Haulage",
                "description" : "With over 64 billions vehicle trips made in France per year, roads and highways give the opportunity for network operators to offload large amounts of delay-tolerant traffic. The road network can be turned into a large-capacity transmission system, if we equip conventional vehicles with wireless and storage capacities. We leverage the stops the vehicles make at specific locations, called offloading spots, to load and unload data. In this talk, we are interested in studying the forwarding at the offloading spots, that is, which data to load on the vehicles that are stopped. We propose a centralized architecture in charge of allocating and assigning the flows of vehicles travelling the roads to requests to offload data traffic. We finally simulate the performance of our system with a simple topology and on the French roads, with reported road traffic counts."
            },
            {
                "title" : "Coffee Break",
                "duration" : "20"
            },
            {
                "name" : "Romain Picot",
                "duration" : "20",
                "title" : "Arithmétique stochastique et Algorithmes compensés",
                "description" : "L'arithmétique stochastique permet grâce à plusieurs exécutions d'un programme en modifiant aléatoirement les modes d'arrondis de mesurer la précisions d'un code de calcul. Certains algorithmes sont construits de manière à fonctionner avec le mode d'arrondi au plus proche, les algorithmes compensés en font partis. La question est donc de savoir ce qu'il se passe lorsque l'on utilise les algorithmes compensés avec l'arithmétique stochastique."
            },
            {
                "name" : "Noé Gaumont",
                "duration" : "20",
                "title" : "Bringing density to link streams reveals meaningful groups in contact traces.",
                "description" : "A link stream is a sequence of quadruplets (b,e,u,v) meaning that a link exists between u and v from time b to time e. Link streams model many real-world situations like contacts between individuals, connections between devices, and others. Much work is currently devoted to the generalization of classical graph and network concepts to link streams. We explore here the notion of dense sub-streams of link streams, capturing specific groups of nodes both structurally and temporally densely connected during specific periods of time. We propose a method to find such sub-streams using graph community detection algorithms, and an assessment of obtained sub-streams. We apply them to several real-world contact traces (captured by sensors) and demonstrate the relevance of obtained structures."
            },
            {
                "name" : "Siao-Lieu Phouratsamay",
                "duration" : "10",
                "hide" : false,
                "description" : "Les problèmes de lot-sizing à deux niveaux avec une capacité de stockage limitée apparaît dans une chaîne logistique à deux acteurs: un fournisseur et un distributeur. Le distributeur doit satisfaire une demande pour un unique produit sur un horizon de temps discret de périodes. Afin de satisfaire cette demande, il détermine un plan d'approvisionnement auprès du fournisseur, i.e. il détermine à quelle période produire et en quelle quantité produire. Le fournisseur détermine de son côté un plan de production dans le but de satisfaire le plan d'approvisionnement du distributeur. Le but est alors de satisfaire cette demande à moindre coût. Des résultats de complexité ont été obtenus en distinguant les cas suivants: le stockage est limité pour le fournisseur, le distributeur ou les deux acteurs."
            }
            {
                "name" : "Ana-Maria Vintescu",
                "duration" : "10",
                "hide" : true,
            },

        ]
    },




    // exemple de description d'une session
    {
        "date": "3 Février 2016",
        "hide" : true,
        "room": "303 36-00",
        "past" : false,
        "talks" : [
            {
                "name" : "Rémy El Sibaïe",
                "duration" : "20",
                "hide" : true,
                "link" : "https://www-apr.lip6.fr/~elsibaie/",
                "title" : "Programmation Web réactive pour l'orchestration de multimédias riche dans un cadre typé",
                "description" : "mon résumé"

            },
            {
                "name" : "Michel et Michel",
                "duration" : "10",
                "link" : "www.perdu.com",
                "title" : "Une thèse perdue",
                "description" : "Une super thèse trop bien ",
            }
        ]
    },

]
