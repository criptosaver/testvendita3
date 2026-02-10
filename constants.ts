import { GuideData } from './types';

export const INITIAL_GUIDE_DATA: GuideData = {
  propertyName: "Suite",
  location: "Bari, Italy",
  address: "Via Scipione l'Africano, 29, 70126 Bari BA",
  coordinates: { lat: 41.1121, lng: 16.8903 },
  contacts: {
    phone: "+393356626901",
    whatsapp: "+393356626901",
    email: "info@dimorasorriso.it"
  },
  wifi: {
    name: "Dimora_5G",
    password: "welcomeguest"
  },
  host: {
    name: "Katia",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  taxi: {
    number: "+390805543333",
    stand: {
      name: "Piazza Moro (Stazione Centrale)",
      mapsUrl: "https://maps.app.goo.gl/9Gq4x3sJkY8zP2wR7"
    }
  },
  sections: [
    {
      id: "checkin",
      category: "checkin",
      icon: "key",
      title: {
        IT: "Check-in / Check-out",
        EN: "Check-in / Check-out",
        DE: "Check-in / Check-out",
        FR: "Check-in / Check-out",
        ES: "Check-in / Check-out"
      },
      description: {
        IT: "Il check-in è disponibile dalle ore 15:00 in poi. Le chiavi si trovano nella cassetta di sicurezza (lockbox) accanto al portone; il codice verrà inviato via WhatsApp il giorno dell’arrivo. ||| Il check-out deve essere effettuato entro le ore 10:00. Si prega di lasciare le chiavi sul tavolo prima di uscire e di chiudere la porta.",
        EN: "Check-in is from 3:00 PM. Keys are in the lockbox next to the door; the code will be sent via WhatsApp on the day of arrival. ||| Check-out is by 10:00 AM. Please leave the keys on the table before you leave and close the door.",
        DE: "Check-in ist ab 15:00 Uhr. Die Schlüssel befinden sich in der Schlüsselbox neben der Tür; der Code wird am Anreisetag per WhatsApp gesendet. ||| Check-out ist bis 10:00 Uhr. Bitte lassen Sie die Schlüssel auf dem Tisch und schließen Sie die Tür.",
        FR: "L'arrivée est à partir de 15h00. Les clés sont dans la boîte à clés à côté de la porte ; le code sera envoyé par WhatsApp le jour de l'arrivée. ||| Le départ doit se faire avant 10h00. Veuillez laisser les clés sur la table et fermer la porte.",
        ES: "El check-in es a partir de las 15:00. Las llaves están en la caja de seguridad junto a la puerta; el código se enviará por WhatsApp el día de llegada. ||| El check-out es antes de las 10:00. Por favor, deje las llaves en la mesa y cierre la puerta."
      }
    },
    {
      id: "wifi",
      category: "wifi",
      icon: "wifi",
      title: {
        IT: "Connessione WiFi",
        EN: "WiFi Connection",
        DE: "WLAN-Verbindung",
        FR: "Connexion WiFi",
        ES: "Conexión WiFi"
      },
      description: {
        IT: "Dettagli WiFi",
        EN: "WiFi Details",
        DE: "WLAN-Details",
        FR: "Détails WiFi",
        ES: "Detalles WiFi"
      }
    },
    {
      id: "rules",
      category: "rules",
      icon: "clipboard-list",
      title: {
        IT: "Regole della Casa",
        EN: "House Rules",
        DE: "Hausregeln",
        FR: "Règlement Intérieur",
        ES: "Reglas de la Casa"
      },
      description: {
        IT: "NON FUMARE: All'interno dell'appartamento è severamente vietato fumare.\nNO A FESTE: Non sono ammesse feste o eventi per rispettare la quiete del condominio.\nQUIETE NOTTURNA: Si prega di rispettare il silenzio dalle 22:00 alle 08:00.\nGESTIONE RIFIUTI: Si prega di seguire le indicazioni per la raccolta differenziata.",
        EN: "NO SMOKING: Smoking is strictly forbidden inside the apartment.\nNO PARTIES: Parties or events are not allowed to respect the quiet of the building.\nNIGHT QUIET: Please respect silence from 10:00 PM to 8:00 AM.\nWASTE MANAGEMENT: Please follow the instructions for separate waste collection.",
        DE: "RAUCHVERBOT: Das Rauchen in der Wohnung ist strengstens verboten.\nKEINE PARTYS: Partys oder Veranstaltungen sind nicht gestattet, um die Ruhe des Gebäudes zu respektieren.\nNACHTRUHE: Bitte respektieren Sie die Stille von 22:00 bis 08:00 Uhr.\nMÜLLENTSORGUNG: Bitte befolgen Sie die Anweisungen zur getrennten Müllsammlung.",
        FR: "NON-FUMEUR : Il est strictement interdit de fumer à l'intérieur de l'appartement.\nPAS DE FÊTES : Les fêtes ou événements ne sont pas autorisés pour respecter la tranquillité de l'immeuble.\nSILENCE NOCTURNE : Veuillez respecter le silence de 22h00 à 08h00.\nGESTION DES DÉCHETS : Veuillez suivre les instructions pour le tri sélectif.",
        ES: "NO FUMAR: Está estrictamente prohibido fumar dentro del apartamento.\nNO FIESTAS: No se permiten fiestas o eventos para respetar la tranquilidad del edificio.\nSILENCIO NOCTURNO: Por favor, respete el silencio de 22:00 a 08:00.\nGESTIÓN DE RESIDUOS: Por favor, siga las instrucciones para la recogida selectiva de basura."
      }
    },
    {
      id: "supermarkets",
      category: "local",
      icon: "shopping-cart",
      title: {
        IT: "Supermercati",
        EN: "Supermarkets",
        DE: "Supermärkte",
        FR: "Supermarchés",
        ES: "Supermercados"
      },
      description: {
        IT: "Supermercato Di Meglio (a 100m)\nAperto 8:30 - 20:30\nMaps: https://maps.app.goo.gl/Fk9pYhF6Q7sJt1aY9\n\nLidl (a 300m)\nAperto 8:00 - 21:30\nMaps: https://maps.app.goo.gl/PqgGg2eFwZcXsYkC6",
        EN: "Di Meglio Supermarket (100m away)\nOpen 8:30 AM - 8:30 PM\nMaps: https://maps.app.goo.gl/Fk9pYhF6Q7sJt1aY9\n\nLidl (300m away)\nOpen 8:00 AM - 9:30 PM\nMaps: https://maps.app.goo.gl/PqgGg2eFwZcXsYkC6",
        DE: "Supermarkt Di Meglio (100m entfernt)\nGeöffnet 8:30 - 20:30\nMaps: https://maps.app.goo.gl/Fk9pYhF6Q7sJt1aY9\n\nLidl (300m entfernt)\nGeöffnet 8:00 - 21:30\nMaps: https://maps.app.goo.gl/PqgGg2eFwZcXsYkC6",
        FR: "Supermarché Di Meglio (à 100m)\nOuvert 8h30 - 20h30\nMaps: https://maps.app.goo.gl/Fk9pYhF6Q7sJt1aY9\n\nLidl (à 300m)\nOuvert 8h00 - 21h30\nMaps: https://maps.app.goo.gl/PqgGg2eFwZcXsYkC6",
        ES: "Supermercado Di Meglio (a 100m)\nAbierto 8:30 - 20:30\nMaps: https://maps.app.goo.gl/Fk9pYhF6Q7sJt1aY9\n\nLidl (a 300m)\nAbierto 8:00 - 21:30\nMaps: https://maps.app.goo.gl/PqgGg2eFwZcXsYkC6"
      }
    },
    {
      id: "eat",
      category: "local",
      icon: "utensils",
      title: {
        IT: "Dove Mangiare",
        EN: "Where to Eat",
        DE: "Essen & Trinken",
        FR: "Où Manger",
        ES: "Dónde Comer"
      },
      description: {
        IT: "Ristorante Pizzeria L'Ancora\nCucina tipica pugliese e pizza.\nMaps: https://maps.app.goo.gl/3fE5d5m2cXsZk6wR7\n\nRistorante Biancofiore\nRistorante di pesce elegante.\nMaps: https://maps.app.goo.gl/9n2sJk1uX8wY7pZc8\n\nBraceria Signorile\nCarne alla brace di ottima qualità.\nMaps: https://maps.app.goo.gl/R5eYh2k7tJqX8zP1A",
        EN: "Ristorante Pizzeria L'Ancora\nTypical Apulian cuisine and pizza.\nMaps: https://maps.app.goo.gl/3fE5d5m2cXsZk6wR7\n\nRistorante Biancofiore\nElegant seafood restaurant.\nMaps: https://maps.app.goo.gl/9n2sJk1uX8wY7pZc8\n\nBraceria Signorile\nHigh-quality grilled meat.\nMaps: https://maps.app.goo.gl/R5eYh2k7tJqX8zP1A",
        DE: "Ristorante Pizzeria L'Ancora\nTypische apulische Küche und Pizza.\nMaps: https://maps.app.goo.gl/3fE5d5m2cXsZk6wR7\n\nRistorante Biancofiore\nElegantes Fischrestaurant.\nMaps: https://maps.app.goo.gl/9n2sJk1uX8wY7pZc8\n\nBraceria Signorile\nHochwertiges gegrilltes Fleisch.\nMaps: https://maps.app.goo.gl/R5eYh2k7tJqX8zP1A",
        FR: "Ristorante Pizzeria L'Ancora\nCuisine typique des Pouilles et pizza.\nMaps: https://maps.app.goo.gl/3fE5d5m2cXsZk6wR7\n\nRistorante Biancofiore\nRestaurant de fruits de mer élégant.\nMaps: https://maps.app.goo.gl/9n2sJk1uX8wY7pZc8\n\nBraceria Signorile\nViande grillée de haute qualité.\nMaps: https://maps.app.goo.gl/R5eYh2k7tJqX8zP1A",
        ES: "Ristorante Pizzeria L'Ancora\nCocina típica de Apulia y pizza.\nMaps: https://maps.app.goo.gl/3fE5d5m2cXsZk6wR7\n\nRistorante Biancofiore\nElegante restaurante de mariscos.\nMaps: https://maps.app.goo.gl/9n2sJk1uX8wY7pZc8\n\nBraceria Signorile\nCarne a la parrilla de alta calidad.\nMaps: https://maps.app.goo.gl/R5eYh2k7tJqX8zP1A"
      }
    },
    {
      id: "bus",
      category: "local",
      icon: "bus",
      title: {
        IT: "Trasporti",
        EN: "Transport",
        DE: "Transport",
        FR: "Transport",
        ES: "Transporte"
      },
      description: {
        IT: "NAVETTA AEROPORTO (Tempesta)\nServizio navetta che collega l'aeroporto al centro città. Fermata a 500m.\nInfo & Orari: https://www.autoservizitempesta.it/\n|||\nSTAZIONE CENTRALE (Treno & Bus)\nLa stazione è a 10 minuti a piedi. Da qui partono treni e bus per tutte le destinazioni.\nMaps: https://maps.app.goo.gl/9Gq4x3sJkY8zP2wR7",
        EN: "AIRPORT SHUTTLE (Tempesta)\nShuttle service connecting the airport to the city center. Stop at 500m.\nInfo & Timetables: https://www.autoservizitempesta.it/\n|||\nCENTRAL STATION (Train & Bus)\nThe station is a 10-minute walk away. Trains and buses depart from here to all destinations.\nMaps: https://maps.app.goo.gl/9Gq4x3sJkY8zP2wR7",
        DE: "FLUGHAFEN-SHUTTLE (Tempesta)\nShuttle-Service, der den Flughafen mit dem Stadtzentrum verbindet. Haltestelle in 500m Entfernung.\nInfos & Fahrpläne: https://www.autoservizitempesta.it/\n|||\nHAUPTBAHNHOF (Zug & Bus)\nDer Bahnhof ist 10 Gehminuten entfernt. Von hier fahren Züge und Busse zu allen Zielen.\nMaps: https://maps.app.goo.gl/9Gq4x3sJkY8zP2wR7",
        FR: "NAVETTE AÉROPORT (Tempesta)\nService de navette reliant l'aéroport au centre-ville. Arrêt à 500m.\nInfos & Horaires : https://www.autoservizitempesta.it/\n|||\nGARE CENTRALE (Train & Bus)\nLa gare est à 10 minutes à pied. Des trains et des bus partent d'ici vers toutes les destinations.\nMaps: https://maps.app.goo.gl/9Gq4x3sJkY8zP2wR7",
        ES: "LANZADERA AEROPUERTO (Tempesta)\nServicio de lanzadera que conecta el aeropuerto con el centro de la ciudad. Parada a 500m.\nInfo y horarios: https://www.autoservizitempesta.it/\n|||\nESTACIÓN CENTRAL (Tren y autobús)\nLa estación está a 10 minutos a pie. Desde aquí salen trenes y autobuses a todos los destinos.\nMaps: https://maps.app.goo.gl/9Gq4x3sJkY8zP2wR7"
      }
    },
    {
      id: "taxi",
      category: "local",
      icon: "taxi",
      title: {
        IT: "Taxi & Contatti Utili",
        EN: "Taxi & Useful Contacts",
        DE: "Taxi & nützliche Kontakte",
        FR: "Taxi & Contacts Utiles",
        ES: "Taxi y Contactos Útiles"
      },
      description: {
        IT: "Informazioni per chiamare un taxi.",
        EN: "Information for calling a taxi.",
        DE: "Informationen zum Rufen eines Taxis.",
        FR: "Informations pour appeler un taxi.",
        ES: "Información para llamar a un taxi."
      }
    },
    {
      id: "emergency",
      category: "local",
      icon: "siren",
      title: {
        IT: "Numeri di Emergenza",
        EN: "Emergency Numbers",
        DE: "Notrufnummern",
        FR: "Numéros d'Urgence",
        ES: "Números de Emergencia"
      },
      description: {
        IT: "Contatti rapidi per ogni emergenza.",
        EN: "Quick contacts for any emergency.",
        DE: "Schnelle Kontakte für jeden Notfall.",
        FR: "Contacts rapides pour toute urgence.",
        ES: "Contactos rápidos para cualquier emergencia."
      }
    }
  ]
};