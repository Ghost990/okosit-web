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
      reliability: 'Megbízhatóság',
      expertise: 'Szakértelem',
      innovation: 'Innováció',
      customerFocus: 'Ügyfélközpontuság',
    },
    team: {
      title: 'Csapatunk',
      subtitle: 'Szakembereink',
    },
  },

  // Partners page
  partners: {
    meta: {
      title: 'Partnereink - OkosIT',
      description: 'Ismerje meg az OkosIT partnereit és együttműködéseit. Megbízható partnerekkel dolgozunk a legjobb szolgáltatás érdekében.',
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
    industries: {
      title: 'Iparágak',
      subtitle: 'Szektorok, amelyekben dolgozunk',
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
      description: 'Lépjen kapcsolatba az OkosIT csapatával. Elérhetőségeink és kapcsolatfelvételi űrlap.',
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
      phone: 'Telefon',
      email: 'E-mail',
      address: 'Cím',
    },
    hours: {
      title: 'Nyitvatartás',
      weekdays: 'Hétfő - Péntek: 9:00 - 17:00',
      weekend: 'Hétvégén zárva',
    },
    form: {
      title: 'Kapcsolatfelvételi űrlap',
      name: 'Név',
      email: 'E-mail cím',
      phone: 'Telefonszám',
      subject: 'Tárgy',
      message: 'Üzenet',
      send: 'Küldés',
      required: 'Kötelező mező',
      invalidEmail: 'Érvénytelen e-mail cím',
      success: 'Köszönjük! Üzenetét megkaptuk, hamarosan válaszolunk.',
      error: 'Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.',
    },
    response: {
      title: 'Válaszidő',
      description: 'Általában 24 órán belül válaszolunk a megkeresésekre.',
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
      items: [
        {
          title: 'Telefonos támogatás',
          description: 'Hívjon minket munkanapokon 9:00 és 17:00 között.',
        },
        {
          title: 'E-mail támogatás',
          description: 'Küldjön e-mailt a support@okosit.hu címre.',
        },
        {
          title: 'Távoli segítségnyújtás',
          description: 'Távolról is megoldjuk a problémákat, ha szükséges.',
        },
        {
          title: 'Helyszíni támogatás',
          description: 'Súlyosabb problémák esetén helyszíni segítséget nyújtunk.',
        },
      ],
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
    faq: {
      title: 'Gyakori kérdések',
      description: 'A leggyakrabban feltett kérdések és válaszaink.',
      categories: {
        general: {
          title: 'Általános kérdések',
          questions: [
            {
              question: 'Milyen szolgáltatásokat nyújt az OkosIT?',
              answer: 'Az OkosIT teljes körű IT szolgáltatásokat nyújt, beleértve a rendszerüzemeltetést, PC és laptop javítást, webfejlesztést, webshop készítést, IT kivitelezést és eszközbérbeadást.',
            },
            {
              question: 'Hogyan kérhetek árajánlatot?',
              answer: 'Árajánlatot kérhet a kapcsolatfelvételi űrlapon keresztül, e-mailben vagy telefonon. Minden ajánlatot személyre szabunk az Ön igényei alapján.',
            },
          ],
        },
        technical: {
          title: 'Technikai kérdések',
          questions: [
            {
              question: 'Mit tegyek, ha nem működik a számítógépem?',
              answer: 'Először próbálja újraindítani a készüléket. Ha ez nem segít, ellenőrizze a kábeleket és csatlakozásokat. Ha továbbra is fennáll a probléma, hívja ügyfélszolgálatunkat.',
            },
            {
              question: 'Hogyan védekezhetem a vírusok ellen?',
              answer: 'Javasoljuk megbízható vírusirtó használatát, rendszeres frissítését, valamint a gyanús e-mailek és weboldalak kerülését. Szolgáltatásaink között szerepel a komplex IT biztonság kialakítása is.',
            },
          ],
        },
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
    contact: {
      title: 'Kapcsolatfelvétel',
      description: 'Ha nem találja a választ a kérdésére, vegye fel velünk a kapcsolatot.',
      button: 'Kapcsolatfelvétel',
    },
  },
};
