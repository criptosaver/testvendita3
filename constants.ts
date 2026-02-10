import { GuideData, Language } from './types';

export const INITIAL_GUIDE_DATA: GuideData = {
  propertyName: "Wonderful Suite",
  location: "Roma, Italy",
  address: "Via Roma, 1, 00184 Roma RM, Italy",
  coordinates: { lat: 41.9028, lng: 12.4964 },
  contacts: {
    phone: "+393330000000",
    whatsapp: "+393330000000",
    email: "info@example.com"
  },
  wifi: {
    name: "Suite_Guest_WiFi",
    password: "welcome_guest"
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
        IT: "Il check-in è disponibile dalle ore 15:00 in poi. Le chiavi si trovano nella cassetta di sicurezza (lockbox) accanto al portone; il codice verrà inviato il giorno dell’arrivo. ||| Il check-out deve essere effettuato entro le ore 10:00. Si prega di lasciare le chiavi nella cassetta di sicurezza o sul tavolo prima di uscire.",
        EN: "Check-in is available from 3:00 PM onwards. Keys are located in the lockbox next to the main door; the code will be sent on the day of arrival. ||| Check-out must be done by 10:00 AM. Please leave the keys in the lockbox or on the table before leaving.",
        DE: "Der Check-in ist ab 15:00 Uhr möglich. Die Schlüssel befinden sich in der Schlüsselbox neben der Eingangstür; der Code wird am Anreisetag gesendet. ||| Der Check-out muss bis 10:00 Uhr erfolgen. Bitte lassen Sie die Schlüssel in der Box oder auf dem Tisch.",
        FR: "L'arrivée est possible à partir de 15h00. Les clés se trouvent dans la boîte sécurisée à côté de la porte ; le code sera envoyé le jour de l'arrivée. ||| Le départ doit se faire avant 10h00. Merci de laisser les clés dans la boîte ou sur la table.",
        ES: "El check-in está disponible a partir de las 15:00. Las llaves están en la caja de seguridad junto a la puerta; el código se enviará el día de llegada. ||| El check-out debe realizarse antes de las 10:00. Por favor, deje las llaves en la caja o sobre la mesa."
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
        IT: "NON FUMARE: È vietato fumare all'interno.\nNO FESTE: Non sono ammesse feste o eventi.\nSILENZIO: Rispettare la quiete dalle 22:00 alle 8:00.\nRIFIUTI: Si prega di differenziare i rifiuti negli appositi contenitori.",
        EN: "NO SMOKING: Smoking is prohibited inside.\nNO PARTIES: Parties or events are not allowed.\nQUIET HOURS: Please respect quiet hours from 10 PM to 8 AM.\nTRASH: Please sort your trash in the provided bins.",
        DE: "RAUCHVERBOT: Im Haus ist das Rauchen verboten.\nKEINE PARTYS: Partys sind nicht gestattet.\nRUHEZEITEN: Bitte Ruhezeiten von 22:00 bis 8:00 Uhr einhalten.\nMÜLL: Bitte Müll trennen.",
        FR: "NE PAS FUMER : Interdiction de fumer à l'intérieur.\nPAS DE FÊTES : Les fêtes ne sont pas autorisées.\nSILENCE : Respectez le silence de 22h à 8h.\nDÉCHETS : Merci de trier vos déchets.",
        ES: "NO FUMAR: Prohibido fumar dentro.\nNO FIESTAS: No se permiten fiestas.\nSILENCIO: Respete el silencio de 22:00 a 8:00.\nBASURA: Por favor separe la basura."
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
        IT: "Supermercato Express (Via Roma 10)\nAperto 8:00 - 20:00\nMaps: https://maps.google.com",
        EN: "Supermarket Express (Via Roma 10)\nOpen 8:00 AM - 8:00 PM\nMaps: https://maps.google.com",
        DE: "Supermarkt Express (Via Roma 10)\nGeöffnet 8:00 - 20:00\nMaps: https://maps.google.com",
        FR: "Supermarché Express (Via Roma 10)\nOuvert 8h00 - 20h00\nMaps: https://maps.google.com",
        ES: "Supermercado Express (Via Roma 10)\nAbierto 8:00 - 20:00\nMaps: https://maps.google.com"
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
        IT: "Ristorante Pizzeria 'Da Mario' (Piazza Centrale)\nOttima pizza e cucina locale.\nMaps: https://maps.google.com\n\nTrattoria Antica (Via dei Fiori 5)\nCucina tradizionale a prezzi onesti.\nMaps: https://maps.google.com",
        EN: "Pizzeria 'Da Mario' (Central Square)\nGreat pizza and local cuisine.\nMaps: https://maps.google.com\n\nTrattoria Antica (Via dei Fiori 5)\nTraditional food at fair prices.\nMaps: https://maps.google.com",
        DE: "Pizzeria 'Da Mario' (Zentralplatz)\nTolle Pizza und lokale Küche.\nMaps: https://maps.google.com\n\nTrattoria Antica (Via dei Fiori 5)\nTraditionelle Küche.\nMaps: https://maps.google.com",
        FR: "Pizzeria 'Da Mario' (Place Centrale)\nExcellente pizza et cuisine locale.\nMaps: https://maps.google.com\n\nTrattoria Antica (Via dei Fiori 5)\nCuisine traditionnelle.\nMaps: https://maps.google.com",
        ES: "Pizzeria 'Da Mario' (Plaza Central)\nGran pizza y cocina local.\nMaps: https://maps.google.com\n\nTrattoria Antica (Via dei Fiori 5)\nCocina tradicional.\nMaps: https://maps.google.com"
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
        IT: "Fermata Bus Centrale\nLinee 1, 5, 10 per il centro e stazione.\nBiglietti acquistabili a bordo o in tabaccheria.",
        EN: "Central Bus Stop\nLines 1, 5, 10 to center and station.\nTickets available on board or at tobacco shops.",
        DE: "Zentrale Bushaltestelle\nLinien 1, 5, 10 zum Zentrum und Bahnhof.\nTickets an Bord oder im Tabakladen erhältlich.",
        FR: "Arrêt de Bus Central\nLignes 1, 5, 10 vers le centre et la gare.\nBillets disponibles à bord ou dans les bureaux de tabac.",
        ES: "Parada de Autobús Central\nLíneas 1, 5, 10 al centro y estación.\nBilletes disponibles a bordo o en estancos."
      }
    },
    {
      id: "taxi",
      category: "local",
      icon: "taxi",
      title: {
        IT: "Taxi",
        EN: "Taxi",
        DE: "Taxi",
        FR: "Taxi",
        ES: "Taxi"
      },
      description: {
        IT: "Chiama un taxi",
        EN: "Call a taxi",
        DE: "Taxi rufen",
        FR: "Appeler un taxi",
        ES: "Llamar a un taxi"
      }
    },
    {
      id: "emergency",
      category: "local",
      icon: "siren",
      title: {
        IT: "Emergenza",
        EN: "Emergency",
        DE: "Notfall",
        FR: "Urgence",
        ES: "Emergencia"
      },
      description: {
        IT: "Numeri di emergenza",
        EN: "Emergency numbers",
        DE: "Notrufnummern",
        FR: "Numéros d'urgence",
        ES: "Números de emergencia"
      }
    }
  ]
};