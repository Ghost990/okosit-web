/**
 * Hungarian translations for OkosIT website
 * This file contains all user-facing text to make translations easier
 */

export const translations = {
  // Common elements
  common: {
    company: 'OkosIT',
    tagline: 'Az Ön okos IT partnere',
    description: 'Rugalmas, megbízható és skálázható IT megoldások vállalkozások számára.',
    cta: {
      title: 'Kész a következő lépésre?',
      subtitle: 'Vegye fel velünk a kapcsolatot még ma!',
      description: 'Segítünk megtalálni a tökéletes IT megoldást az Ön vállalkozása számára.',
      whyChooseUs: 'Miért válasszon minket?',
      benefits: [
        'Szakmai tapasztalat és szakértelem',
        'Személyre szabott megoldások',
        'Gyors és hatékony szolgáltatás',
        'Versenyképes árak',
        'Megbízható ügyfélszolgálat'
      ]
    },
    contactUs: 'Kapcsolatfelvétel',
    learnMore: 'Tudjon meg többet',
    or: 'vagy',
    theme: {
      switchToLight: 'Váltás világos módra',
      switchToDark: 'Váltás sötét módra',
      theme: 'Téma'
    },
  },

  // Navigation
  navigation: {
    home: 'Főoldal',
    services: 'Szolgáltatások',
    about: 'Rólunk',
    partners: 'Partnereink',
    help: 'Segítség',
    contact: 'Kapcsolat',
  },

  // Header
  header: {
    freeConsultation: 'Ingyenes konzultáció',
  },

  // Footer
  footer: {
    quickLinks: 'Gyors linkek',
    services: 'Szolgáltatások',
    contactInfo: 'Kapcsolat',
    copyright: (year: string) => `© ${year} OkosIT. Minden jog fenntartva.`,
    privacyPolicy: 'Adatvédelmi irányelvek',
    termsOfService: 'Általános szerződési feltételek',
  },

  // Testimonials section
  testimonials: {
    badge: 'Vélemények',
    title: 'Mit mondanak rólunk',
    subtitle: 'Ügyfél vélemények',
    description: 'Lássa, mit mondanak rólunk elégedett ügyfeleink.',
    items: [
      {
        name: 'Nagy Péter',
        position: 'IT Vezető',
        company: 'ABC Kft.',
        text: 'Az OkosIT csapata kiváló munkát végzett a rendszerüzemeltetésünk optimalizálásában. Ajánlom minden vállalkozásnak, amely megbízható IT partnert keres.',
      },
      {
        name: 'Kiss Anna',
        position: 'Ügyvezető Igazgató',
        company: 'XYZ Zrt.',
        text: 'A weboldal, amit az OkosIT csapata készített számunkra, tökéletesen tükrözi cégünk értékeit és szolgáltatásainkat. Professzionális és hatékony együttműködés volt.',
      },
      {
        name: 'Kovács János',
        position: 'Marketing Vezető',
        company: 'Delta Kft.',
        text: 'Az OkosIT által készített webshop megoldás jelentősen növelte online értékesítésünket. Rugalmasak és segítőkészek voltak a projekt minden fázisában.',
      },
    ],
  },

  // Home page
  home: {
    hero: {
      title: 'Okos IT',
      subtitle: 'Digitalizálja üzletét szakértő segítséggel',
      description: 'Az OkosIT professzionális IT szolgáltatásokat nyújt, amelyek segítenek vállalkozásának növekedésében és hatékonyságának javításában.',
      badge: 'Professzionális IT',
      highlight: 'megoldások vállalkozásoknak',
      featuresTitle: 'Szolgáltatásaink',
      primaryCTA: 'Ingyenes konzultáció',
      secondaryCTA: 'Szolgáltatások',
    },
    partners: {
      title: 'Partnereink, akik megbíznak bennünk',
      logos: {
        title: 'Partnereink, akik megbíznak bennünk',
      },
    },
    stats: {
      clients: 'Elégedett ügyfelek',
      support: 'Támogatás',
      availability: 'Rendelkezésre állás',
      experience: 'Év tapasztalat',
    },
  },

  // Services page
  services: {
    meta: {
      title: 'Szolgáltatások - OkosIT',
      description: 'Fedezze fel teljes körű IT szolgáltatásainkat: rendszerüzemeltetés, webfejlesztés, PC javítás és további megoldások vállalkozások számára.',
    },
    title: 'Szolgáltatásaink',
    subtitle: 'Komplex IT megoldások',
    description: 'Teljes körű IT szolgáltatások vállalkozások számára, a rendszerüzemeltettől a webfejlesztésig.',
    badge: 'Professzionális szolgáltatások',
    details: 'Részletek',
    moreFeatures: '+ további {count} szolgáltatás',
    hero: {
      title: 'Szolgáltatásaink',
      subtitle: 'Komplex IT megoldások',
      description: 'Teljes körű IT szolgáltatások vállalkozások számára, a rendszerüzemeltettéstől a webfejlesztésig.',
    },
    categories: {
      systemOperation: 'Rendszerüzemeltetés',
      pcRepair: 'PC és laptop javítás',
      webDevelopment: 'Webfejlesztés',
      webshop: 'Webshop készítés',
      itImplementation: 'IT kivitelezés',
      deviceRental: 'Eszközbérbeadás',
      rendszeruzemeltetes: 'Rendszerüzemeltetés',
      pcjavitas: 'PC és laptop javítás',
      webfejlesztes: 'Webfejlesztés',
      webshop: 'Webshop készítés',
      itkivitelezes: 'IT kivitelezés',
      eszkozberbeadas: 'Eszközbérbeadás',
    },
    descriptions: {
      rendszeruzemeltetes: 'Teljes körű IT infrastruktúra menedzsment és monitoring szolgáltatások.',
      pcjavitas: 'Gyors és megbízható számítógép javítási szolgáltatások helyszínen vagy műhelyben.',
      webfejlesztes: 'Modern, reszponzív weboldalak és webalkalmazások fejlesztése.',
      webshop: 'Teljes körű e-kereskedelmi megoldások kis- és középvállalkozások számára.',
      itkivitelezes: 'Komplex IT projektek tervezése és megvalósítása.',
      eszkozberbeadas: 'IT eszközök bérlése rugalmas feltételekkel.',
    },
    features: {
      rendszeruzemeltetes: [
        '24/7 monitoring és támogatás',
        'Proaktív karbantartás',
        'Biztonsági mentések',
        'Hálózati infrastruktúra kezelés',
        'Szerver adminisztráció'
      ],
      pcjavitas: [
        'Hardver diagnosztika és javítás',
        'Szoftver telepítés és konfiguráció',
        'Vírusirtás és tisztítás',
        'Adatmentés és helyreállítás',
        'Teljesítmény optimalizálás'
      ],
      webfejlesztes: [
        'Egyedi weboldal tervezés',
        'Reszponzív design',
        'SEO optimalizálás',
        'Tartalomkezelő rendszerek',
        'E-commerce megoldások'
      ],
      webshop: [
        'Egyedi webshop design',
        'Fizetési rendszer integráció',
        'Készletkezelés',
        'Rendeléskezelő rendszer',
        'Marketing eszközök'
      ],
      itkivitelezes: [
        'Hálózat kiépítés',
        'Szerver telepítés',
        'Biztonsági rendszerek',
        'Infrastruktúra tervezés',
        'Projekt menedzsment'
      ],
      eszkozberbeadas: [
        'Laptop és PC bérlés',
        'Szerver bérlés',
        'Hálózati eszközök',
        'Rugalmas bérleti időszakok',
        'Teljes körű támogatás'
      ]
    },
    prices: {
      rendszeruzemeltetes: 'Egyedi árajánlat',
      pcjavitas: '15.000 Ft-tól',
      webfejlesztes: '150.000 Ft-tól',
      webshop: '250.000 Ft-tól',
      itkivitelezes: 'Egyedi árajánlat',
      eszkozberbeadas: '5.000 Ft/hó-tól'
    },
    cta: {
      title: 'Egyedi igényei vannak?',
      description: 'Vegye fel velünk a kapcsolatot és személyre szabott megoldást kínálunk az Ön vállalkozása számára.',
      button: 'Kapcsolatfelvétel'
    },
    pricing: {
      title: 'Áraink',
      subtitle: 'Átlátható árak, rugalmas csomagok',
      basic: 'Alap',
      standard: 'Standard',
      premium: 'Prémium',
      custom: 'Egyedi',
      perMonth: '/hó',
      contactUs: 'Kérjen ajánlatot',
    },
  },

  // About page
  about: {
    meta: {
      title: 'Rólunk - OkosIT',
      description: 'Ismerje meg az OkosIT csapatát és történetünket. Több mint 10 éves szakmai tapasztalat az IT szektorban.',
    },
    hero: {
      title: 'Rólunk',
      subtitle: 'Tapasztalt IT csapat',
      description: 'Több mint 10 éves szakmai tapasztalattal nyújtunk megbízható IT szolgáltatásokat.',
    },
    values: {
      title: 'Értékeink',
      subtitle: 'Amiben hiszünk',
      reliability: {
        title: 'Megbízhatóság',
        description: 'Mindig betartjuk az ígéreteinket és határidőinket.'
      },
      flexibility: {
        title: 'Rugalmasság',
        description: 'Alkalmazkodunk az ügyfelek egyedi igényeihez.'
      },
      transparency: {
        title: 'Átláthatóság',
        description: 'Világos és egyértelmű kommunikáció minden helyzetben.'
      },
      expertise: {
        title: 'Szakértelem',
        description: 'Naprakész tudás és több éves szakmai tapasztalat.'
      },
      innovation: {
        title: 'Innováció',
        description: 'Folyamatosan keressük a legújabb technológiai megoldásokat.'
      },
      customerFocus: {
        title: 'Ügyfélközpontúság',
        description: 'Az ügyfelek igényei és elégedettsége az első számunkra.'
      },
    },
    team: {
      title: 'Csapatunk',
      subtitle: 'Szakembereink',
      founder: {
        name: 'Nagy János',
        position: 'Alapitó & Ügyvezető',
        description: 'Több mint 15 éves tapasztalattal rendelkezik az IT szektorban. Szakmai tudása és vezetői képességei biztosítják a cég sikereit.',
        expertise: ['Rendszerüzemeltetés', 'Projektmenedzsment', 'IT Stratégia']
      }
    },
    stats: {
      clients: {
        value: '500+',
        label: 'Elégedett ügyfél'
      },
      availability: {
        value: '99.9%',
        label: 'Rendelkezésre állás'
      },
      support: {
        value: '24/7',
        label: 'Támogatás'
      },
      experience: {
        value: '10+',
        label: 'Év tapasztalat'
      },
    },
    timeline: {
      title: 'Történetünk',
      subtitle: 'Fontos mérföldkövek',
      founding: {
        title: 'Az OkosIT alapítása',
        description: 'Cégünk 2020-ban alakult azzal a céllal, hogy minőségi IT szolgáltatásokat nyújtson a hazai vállalkozások számára.'
      },
      clients50: {
        title: '50 elégedett ügyfél',
        description: 'Egy év alatt elértük az 50 ügyfél mérföldkövet, ami igazolta szolgáltatásaink minőségét.'
      },
      expansion: {
        title: 'Szolgáltatások bővítése',
        description: 'Szolgáltatási portfóliónkat kibővítettük webfejlesztéssel és webshop készítéssel.'
      },
      support: {
        title: '24/7 támogatás bevezetése',
        description: 'Bevezettük a nonstop ügyfélszolgálatot, hogy ügyfeleink bármikor számíthassanak ránk.'
      },
      present: {
        title: 'Jelenlegi helyzet',
        description: 'Ma már több mint 500 elégedett ügyféllel rendelkezünk és folyamatosan bővülünk.'
      },
      clients200: {
        title: '200 ügyfél elérése',
        description: '2024-ben elértük a 200 ügyfél mérföldkövet, ami jelentős növekedést jelent az előző évhez képest.'
      }
    },
  },

  // Partners page
  partners: {
    meta: {
      title: 'Partnereink - OkosIT',
      description: 'Ismerje meg az OkosIT partnereit és együttműködéseit. Megbízható partnerekkel dolgozunk a legjobb szolgáltatás érdekében.',
    },
    companies: {
      profimed: {
        name: 'ProfiMed Egészségügyi Szolgáltató',
        industry: 'Egészségügy',
        services: ['IT infrastruktúra', 'Rendszerüzemeltetés', 'Biztonsági audit'],
        testimonial: 'Az OkosIT segítségével sikeresen digitalizáltuk egészségügyi rendszerünket, ami jelentősen növelte hatékonyságunkat.',
        partnership: '2020 óta'  
      },
      visualPower: {
        name: 'Visual Power Design Stúdió',
        industry: 'Kreatív ipar',
        services: ['Felhasználói felület tervezés', 'Webfejlesztés'],
        testimonial: 'Az OkosIT-vel való együttműködés lehetővé tette, hogy a design munkánkra koncentráljunk, míg ők biztosítják a technikai hátteret.',
        partnership: '2021 óta'  
      },
      shopBuilder: {
        name: 'ShopBuilder E-commerce',
        industry: 'Kiskereskedelem',
        services: ['Webshop fejlesztés', 'Rendszer integráció'],
        testimonial: 'Az OkosIT szakemberei segítettek optimalizálni webshopunk teljesítményét, ami 40%-os forgalomnovekedést eredményezett.',
        partnership: '2022 óta'  
      },
      techStart: {
        name: 'TechStart Innovációs Központ',
        industry: 'Technológia',
        services: ['Felhő szolgáltatások', 'Adatbázis kezelés'],
        testimonial: 'Az OkosIT-vel közösen fejlesztettünk ki egy innovatvív felhőalapu megoldást, amely ma már több startup sikereit támogatja.',
        partnership: '2021 óta'  
      },
      greenOffice: {
        name: 'GreenOffice Fenntarthatósági Tanácsadó',
        industry: 'Környezetvédelem',
        services: ['Energiahatékonysági szoftverek', 'Monitoring rendszerek'],
        testimonial: 'Az OkosIT által fejlesztett monitoring rendszer segítségével ügyfeleink 25%-kal csökkentették energiafogyasztásukat.',
        partnership: '2023 óta'  
      },
      dataFlow: {
        name: 'DataFlow Elemző Központ',
        industry: 'Adatelemzés',
        services: ['Big Data megoldások', 'Adatvizualizáció'],
        testimonial: 'Az OkosIT szakemberei nélkülözhetetlenek voltak az adatelemző platformunk kiépítésében, amely ma már vezető szerepet tölt be a piacon.',
        partnership: '2022 óta'  
      }
    },
    logos: {
      title: 'Partnereink, akik megbíznak bennünk',
    },
    hero: {
      title: 'Partnereink',
      subtitle: 'Együttműködéseink',
      description: 'Megbízható partnerekkel dolgozunk együtt, hogy a legjobb szolgáltatást nyújthassuk ügyfeleinknek.',
    },
    featured: {
      title: 'Kiemelt partnereink',
      subtitle: 'Akikkel együtt dolgozunk',
    },
    stats: {
      clients: {
        value: '100+',
        label: 'Elégedett partner'
      },
      projects: {
        value: '250+',
        label: 'Sikeres projekt'
      },
      satisfaction: {
        value: '98%',
        label: 'Elégedettségi arány'
      },
      retention: {
        value: '95%',
        label: 'Partnermegmaradási arány'
      }
    },
    industries: {
      title: 'Iparágak',
      subtitle: 'Szektorok, amelyekben dolgozunk',
      description: 'Széles körű tapasztalattal rendelkezünk különböző iparágakban.',
      healthcare: {
        name: 'Egészségügy',
        count: '25+ partner',
        icon: 'H'
      },
      education: {
        name: 'Oktatás',
        count: '30+ partner',
        icon: 'E'
      },
      commerce: {
        name: 'Kereskedelem',
        count: '40+ partner',
        icon: 'C'
      },
      services: {
        name: 'Szolgáltatások',
        count: '35+ partner',
        icon: 'S'
      },
      manufacturing: {
        name: 'Gyártás',
        count: '15+ partner',
        icon: 'M'
      },
      tech: {
        name: 'Technológia',
        count: '20+ partner',
        icon: 'T'
      },
      items: [
        {
          title: 'Pénzügy',
          description: 'Bankok, biztosítók és pénzügyi szolgáltatók IT infrastruktúrájának támogatása.',
        },
        {
          title: 'Egészségügy',
          description: 'Kórházak, rendelők és egészségügyi szolgáltatók rendszereinek üzemeltetése.',
        },
        {
          title: 'Oktatás',
          description: 'Iskolák, egyetemek és oktatási intézmények IT megoldásai.',
        },
        {
          title: 'Kiskereskedelem',
          description: 'Üzletek, webshopok és kiskereskedelmi láncok technológiai támogatása.',
        },
      ],
    },
    benefits: {
      title: 'Partneri előnyök',
      subtitle: 'Miért érdemes velünk együttműködni?',
      description: 'Fedezze fel, milyen előnyökkel jár az OkosIT-vel való együttműködés.',
      longTerm: {
        title: 'Hosszú távú együttműködés',
        description: 'Partnereinkkel hosszú távú kapcsolatra törekszünk, hogy folyamatosan támogathassuk üzleti céljaikat.'
      },
      quality: {
        title: 'Kiemelkedő minőség',
        description: 'Minden projektben a legmagasabb minőségi standardokat követjük, hogy partnereink elégedettek legyenek.'
      },
      personal: {
        title: 'Személyre szabott megoldások',
        description: 'Minden partnerhez egyéni megközelítést alkalmazunk, figyelembe véve speciális igényeiket és céljaikat.'
      },
      items: [
        {
          title: 'Szakértelem',
          description: 'Több mint 10 éves tapasztalat az IT szektorban.',
        },
        {
          title: 'Rugalmasság',
          description: 'Személyre szabott megoldások és rugalmas együttműködési modellek.',
        },
        {
          title: 'Megbízhatóság',
          description: '99.9% rendelkezésre állás és gyors reagálás.',
        },
        {
          title: 'Innováció',
          description: 'Folyamatosan fejlődő technológiai megoldások.',
        },
      ],
    },
    cta: {
      title: 'Legyen Ön is partnerünk!',
      description: 'Vegye fel velünk a kapcsolatot és beszéljük meg az együttműködés lehetőségeit.',
      button: 'Kapcsolatfelvétel',
    },
  },

  // Contact page
  contact: {
    meta: {
      title: 'Kapcsolat - OkosIT',
      description: 'Vegye fel velünk a kapcsolatot. Telefon, e-mail és szemlélyes ügyfélszolgálat.',
    },
    hero: {
      title: 'Kapcsolat',
      subtitle: 'Vegye fel velünk a kapcsolatot',
      description: 'Kérdése van? Vegye fel velünk a kapcsolatot az alábbi módok bármelyikén.',
    },
    phone: {
      label: 'Telefonszám',
      value: '+36 30 123 4567'
    },
    email: {
      label: 'E-mail cím',
      value: 'info@okosit.hu'
    },
    contact: {
      title: 'Kapcsolatfelvétel',
      description: 'Kérdése van? Vegye fel velünk a kapcsolatot a következő módon:',
      email: 'info@okosit.hu',
      phone: '+36 30 123 4567',
      address: 'Budapest, Példa utca 1.',
    },
    hours: {
      label: 'Nyitvatartás',
      value: 'H-P: 9:00-17:00'
    },
    callUs: 'Hívjon minket',
    form: {
      title: 'Kérjen ajánlatot',
      description: 'Töltse ki az alábbi űrlapot és munkatársunk hamarosan felveszi Önnel a kapcsolatot.',
      cta: 'Ajánlatkérés',
      name: 'Név',
      email: 'E-mail cím',
      phone: 'Telefonszám',
      message: 'Üzenet',
      submit: 'Küldés',
      success: 'Köszönjük! Üzenete sikeresen elküldve.',
      error: 'Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.'
    },
    meta: {
      title: 'Kapcsolat - OkosIT',
      description: 'Lépjen kapcsolatba az OkosIT csapatával. Elérhetőségeink és kapcsolatfelvételi űrlap.',
    },
    methods: {
      title: 'Elérhetőségeink',
      description: 'Válassza az Önnek legmegfelelőbb kapcsolatfelvételi módot.',
      phone: {
        title: 'Telefon',
        primary: '+36 30 123 4567',
        secondary: 'Munkanapokon 9:00-17:00',
        description: 'Hívjon minket bármilyen IT kérdéssel kapcsolatban.'
      },
      email: {
        title: 'E-mail',
        primary: 'info@okosit.hu',
        secondary: 'Általában 24 órán belül válaszolunk',
        description: 'Küldjön e-mailt bármikor, és mi hamarosan válaszolunk.'
      },
      location: {
        title: 'Cím',
        primary: '1234 Budapest, Példa utca 123.',
        secondary: 'Előzetes egyeztetés szükséges',
        description: 'Személyes konzultációhoz kérjük, egyeztessen időpontot.'
      },
      remote: {
        title: 'Távoli segítség',
        primary: 'TeamViewer',
        secondary: 'Gyors és hatékony',
        description: 'Távolról is segítünk megoldani a problémákat.'
      },
    },
    hours: {
      title: 'Nyitvatartás',
      description: 'Az alábbi időpontokban állunk rendelkezésre.',
      weekdays: 'Hétfő - Péntek',
      weekdaysHours: '9:00 - 17:00',
      weekdaysType: 'Teljes nyitvatartás',
      saturday: 'Szombat',
      saturdayHours: '10:00 - 14:00',
      saturdayType: 'Csak előzetes egyeztetéssel',
      sunday: 'Vasárnap',
      sundayHours: 'Zárva',
      sundayType: 'Sürgős esetben hívjon',
      weekend: 'Hétvégén zárva',
    },
    form: {
      title: 'Kapcsolatfelvételi űrlap',
      description: 'Töltse ki az alábbi űrlapot és munkatársunk hamarosan felveszi Önnel a kapcsolatot.',
      firstName: 'Keresztnév',
      lastName: 'Vezetéknév',
      company: 'Cég neve',
      name: 'Név',
      email: 'E-mail cím',
      phone: 'Telefonszám',
      subject: 'Tárgy',
      message: 'Üzenet',
      send: 'Küldés',
      submit: 'Küldés',
      required: 'Kötelező mező',
      invalidEmail: 'Érvénytelen e-mail cím',
      success: 'Köszönjük! Üzenetét megkaptuk, hamarosan válaszolunk.',
      error: 'Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.',
      privacy: 'Az űrlap elküldésével elfogadom az adatvédelmi irányelveket.',
    },
    response: {
      title: 'Válaszidő',
      description: 'Általában az alábbi időkereten belül válaszolunk a megkeresésekre.',
      emergency: 'Sürgős eset',
      emergencyTime: '2 órán belül',
      email: 'E-mail',
      emailTime: '24 órán belül',
      quote: 'Árajánlat',
      quoteTime: '48 órán belül',
      general: 'Általános kérdés',
      generalTime: '24-48 órán belül',
    },
  },

  // Support page
  support: {
    hero: {
      title: 'Segítség',
      subtitle: 'Támogatás és információk',
      description: 'Segítségére vagyunk bármilyen IT probléma esetén. Nézze meg a gyakori kérdéseket vagy vegye fel velünk a kapcsolatot.',
    },
    meta: {
      title: 'Segítség - OkosIT',
      description: 'IT támogatás és segítségnyújtás vállalkozások számára.',
    },
    options: {
      title: 'Támogatási lehetőségek',
      description: 'Válassza az Önnek legmegfelelőbb támogatási módot.',
      phone: {
        title: 'Telefonos támogatás',
        description: 'Hívjon minket munkanapokon 9:00 és 17:00 között.',
        action: 'Hívás most',
        availability: 'Munkanapokon 9:00-17:00'
      },
      email: {
        title: 'E-mail támogatás',
        description: 'Küldjön e-mailt a support@okosit.hu címre.',
        action: 'E-mail küldése',
        availability: '24/7, válasz 24 órán belül'
      },
      remote: {
        title: 'Távoli segítségnyújtás',
        description: 'Távolról is megoldjuk a problémákat, ha szükséges.',
        action: 'TeamViewer letöltése',
        availability: 'Előzetes egyeztetés alapján'
      },
      onsite: {
        title: 'Helyszíni támogatás',
        description: 'Súlyosabb problémák esetén helyszíni segítséget nyújtunk.',
        action: 'Időpont foglalása',
        availability: 'Munkanapokon, egyeztetés szerint'
      },
    },
    emergency: {
      title: 'Sürgős segítség',
      description: 'Kritikus IT problémák esetén hívja sürgősségi vonalunkat:',
      phone: '+36 30 123 4567',
      steps: [
        'Hívja a sürgősségi vonalat',
        'Adja meg ügyfélkódját',
        'Írja le röviden a problémát',
        'Szakértőnk 30 percen belül visszahívja',
      ],
    },
    emergencySteps: {
      title: 'Sürgősségi eljárás',
      description: 'Kövesse ezeket a lépéseket sürgős IT probléma esetén:',
      steps: {
        urgent: {
          title: 'Hívja a sürgősségi vonalat',
          description: 'Kritikus IT probléma esetén azonnal hívja a +36301234567 számot.',
          action: 'Hívás most'
        },
        describe: {
          title: 'Írja le a problémát',
          description: 'Röviden és pontosan írja le a tapasztalt hibát és annak körülményeit.',
          action: 'Probléma leírása'
        },
        solution: {
          title: 'Megoldás',
          description: 'Szakembereink a lehető leghamarabb megoldják a problémát, szükség esetén távoli segítségnyújtással vagy helyszíni kiszerepléssel.',
          action: 'További információk'
        }
      }
    },
    faq: {
      title: 'Gyakori kérdések',
      description: 'A leggyakrabban feltett kérdések és válaszaink.',
      categories: {
        general: {
          title: 'Általános kérdések',
          questions: {
            coverage: {
              question: 'Milyen szolgáltatásokat nyújt az OkosIT?',
              answer: 'Az OkosIT teljes körű IT szolgáltatásokat nyújt, beleértve a rendszerüzemeltetést, PC és laptop javítást, webfejlesztést, webshop készítést, IT kivitelezést és eszközbérbeadást.'
            },
            response: {
              question: 'Mennyi idő alatt kapok választ a megkeresésemre?',
              answer: 'Általában 24 órán belül válaszolunk minden megkeresésre. Sürgős esetben próbálja meg telefonon felvenni velünk a kapcsolatot.'
            },
            payment: {
              question: 'Milyen fizetési módokat fogadnak el?',
              answer: 'Elfogadunk készpénzes, banki átutalásos és bankkrtyás fizetést is. Nagyobb projektek esetén részletfizetési lehetőséget is biztosítunk.'
            }
          },
        },
        technical: {
          title: 'Technikai kérdések',
          questions: {
            computer: {
              question: 'Mit tegyek, ha nem működik a számítógépem?',
              answer: 'Először próbálja újraindítani a készüléket. Ha ez nem segít, ellenőrizze a kábeleket és csatlakozásokat. Ha továbbra is fennáll a probléma, hívja ügyfélszolgálatunkat.'
            },
            backup: {
              question: 'Hogyan készíthetek biztonsági mentést az adataimról?',
              answer: 'Több lehetőség is rendelkezésre áll: használhat külső merevlemezt, felhőalapú tárhely szolgáltatást, vagy akár a céges szerveren is tárolhatja az adatait. Személyre szabott megoldásért forduljon hozzánk.'
            },
            virus: {
              question: 'Hogyan védekezhetem a vírusok ellen?',
              answer: 'Javasoljuk megbízható vírusírtó használatát, rendszeres frissítését, valamint a gyanús e-mailek és weboldalak kerülését. Szolgáltatásaink között szerepel a komplex IT biztonság kialakítása is.'
            }
          },
        },
        services: {
          title: 'Szolgáltatások',
          questions: {
            website: {
              question: 'Mennyi idő alatt készül el egy weboldal?',
              answer: 'Egy egyszerűbb weboldal általában 2-4 hét alatt elkészül, míg egy összetettebb webshop vagy egyedi funkciókkal rendelkező oldal 1-3 hónapot is igénybe vehet. A pontos időtartamot az Ön igényei alapján határozzuk meg.'
            },
            urgent: {
              question: 'Mit tegyek sürgős IT probléma esetén?',
              answer: 'Sürgős esetben hívja a sürgősségi vonalunkat a +36301234567 számon, amely munkaidőn kívül is elérhető. Szakembereink a lehető leghamarabb segítenek a probléma megoldásában.'
            },
            warranty: {
              question: 'Milyen garanciát vállalnak a szolgáltatásokra?',
              answer: 'Minden szolgáltatásunkra és javításunkra 1 év garanciát vállalunk. Az általunk forgalmazott termékekre a gyártói garancia érvényes, amely terméktől függően 1-3 év lehet.'
            }
          }
        }
      },
    },
    resources: {
      title: 'Hasznos források',
      description: 'Oktatóanyagok és útmutatók a gyakori problémák megoldásához.',
      items: [
        {
          title: 'IT biztonság alapjai',
          description: 'Útmutató a biztonságos internethasználathoz.',
          link: '/segitseg/it-biztonsag',
        },
        {
          title: 'Adatmentés lépései',
          description: 'Mit tegyen, ha elvesztek az adatai?',
          link: '/segitseg/adatmentes',
        },
      ],
    },
    contactForm: {
      title: 'Kapcsolatfelvételi űrlap',
      description: 'Kérdése van? Töltse ki az alábbi űrlapot, és munkatársunk hamarosan felveszi Önnel a kapcsolatot.',
      firstName: 'Keresztnév',
      lastName: 'Vezetéknév',
      email: 'E-mail cím',
      phone: 'Telefonszám',
      subject: 'Tárgy',
      message: 'Üzenet',
      submit: 'Küldés',
      success: 'Köszönjük! Üzenetét megkaptuk, hamarosan válaszolunk.',
      error: 'Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.',
      privacy: 'Az űrlap elküldésével elfogadom az adatvédelmi irányelveket.',
      company: 'Cég neve (opcionális)',
      urgency: 'Sürgősség',
      urgencyOptions: {
        low: 'Nem sürgős',
        medium: 'Normál',
        high: 'Sürgős'
      }
    },
    contact: {
      title: 'Kapcsolatfelvétel',
      description: 'Ha nem találja a választ a kérdésére, vegye fel velünk a kapcsolatot.',
      button: 'Kapcsolatfelvétel',
    },
  },
};
