// Efficiently return nigeriaLocations while retaining the IIFE for performance
const nigeriaLocations = (function () {
  const locations = {
    "lagos": { 
      state: "Lagos", 
      lgas: [   "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", 
        "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", 
        "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", 
        "Shomolu", "Surulere"
], 
      townsAndCities: [  "Ikeja", "Ikorodu", "Epe", "Badagry", "Apapa", "Oshodi", "Surulere", 
        "Yaba", "Victoria Island", "Lekki", "Ajah", "Agege", "Alimosho", 
        "Mushin", "Isolo", "Ilupeju", "Ojota", "Ogudu", "Ojodu Berger", 
        "Maryland", "Shomolu", "Bariga", "Ojo", "Amuwo Odofin", 
        "Ketu", "Aguda", "Festac Town", "Egbeda", "Ipaja", 
        "Abule Egba", "Idimu", "Iyana Ipaja", "Ibeju Lekki", "Ikoyi", 
        "Ebute Metta", "Surulere", "Obalende", "Gbagada", "Magodo", "Ojuelegba"
], 
      villagesAndCommunities: [] 
    },
    "abuja": { 
      state: "FCT", 
      lgas: [  "Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council (AMAC)"], 
      townsAndCities: [ "Abuja", "Kwali", "Kuje", "Gwagwalada", "Bwari", "Abaji", "Garki", "Wuse", 
        "Maitama", "Asokoro", "Jabi", "Gwarinpa", "Lokogoma", "Lugbe", "Utako", 
        "Mpape", "Kado", "Galadimawa", "Dakwo", "Durumi", "Wumba", "Jahi I", "Jahi II"
], 
      villagesAndCommunities: [] 
    },
    "katsina": { 
      state: "Katsina", 
      lgas: [
          "Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", 
        "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin-Ma", 
        "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", 
        "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", 
        "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", 
        "Sandamu", "Zango"

      ],
      townsAndCities: [  "Katsina", "Funtua", "Daura", "Malumfashi", "Dutsin-Ma", "Jibia", 
        "Kankara", "Bakori", "Mani", "Mashi", "Kankia", "Dandume", "Danja", 
        "Charanchi", "Kurfi", "Batagarawa", "Safana", "Rimi", "Baure", 
        "Musawa", "Matazu", "Sandamu", "Kusada", "Mai'Adua", "Ingawa", 
        "Zango", "Faskari", "Dan Musa", "Bindawa", "Kaita"
],
      villagesAndCommunities: ["Kadandani", "Kaita", "Mashi", "Kafur"]
    },
    "taraba": { 
      state: "Taraba", 
      lgas: [
        "Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", 
        "Karim Lamido", "Kurmi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", 
        "Yorro", "Zing"
      ],
      townsAndCities: [
        "Jalingo", "Wukari", "Takum", "Bali", "Ibi", "Karim Lamido", "Gassol", 
        "Donga", "Serti", "Baissa", "Zing", "Lau", "Kurmi", "Ardo Kola", 
        "Ussa", "Yorro", "Gashaka", "Mararaba", "Nguroje", "Mutum Biyu"
      ],
      villagesAndCommunities: [
        
      ]
    },
    "yobe": { 
      state: "Yobe", 
      lgas: [
        "Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", 
        "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", 
        "Yunusari", "Yusufari"
      ],
      townsAndCities: [
        "Damaturu", "Potiskum", "Nguru", "Geidam", "Gashua", "Fika", "Buni Yadi", 
        "Machina", "Goniri", "Ngelzarma", "Babban Gida"
      ],
      villagesAndCommunities: [
       
      ]
    },
    "sokoto": { 
      state: "Sokoto", 
      lgas: [
        "Binji", "Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", 
        "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", 
        "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", 
        "Tureta", "Wamako", "Wurno", "Yabo"
      ],
      townsAndCities: [
        "Sokoto", "Bodinga", "Binji", "Dange", "Shuni", "Gada", "Goronyo", 
        "Illela", "Isa", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", 
        "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"
      ],
      villagesAndCommunities: [
       
      ]
    },
    "abia": { 
      state: "Abia", 
      lgas: [
          "Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South",
        "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", 
        "Umuahia North", "Umuahia South", "Umunneochi"

      ],
      townsAndCities: [
           "Umuahia", "Aba", "Arochukwu", "Bende", "Ohafia", "Isiala Ngwa", "Osisioma", "Ikwuano", 
        "Ugwunagbo", "Isuikwuato", "Ukwa", "Obi Ngwa", "Umunneochi", "Ovim", "Nkporo"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "adamawa": { 
      state: "Adamawa", 
      lgas: [
         "Demsa", "Fufore", "Ganye", "Girei", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali",
        "Maiha", "Mayo Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", 
        "Toungo", "Yola North", "Yola South"

      ],
      townsAndCities: [
           "Yola", "Mubi", "Numan", "Jimeta", "Gombi", "Hong", "Michika", "Jada", "Girei", "Demsa", 
        "Lamurde", "Maiha", "Shelleng", "Toungo", "Song"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "bauchi": { 
      state: "Bauchi", 
      lgas: [
           "Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", 
        "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", 
        "Tafawa Balewa", "Toro", "Warji", "Zaki"

      ],
      townsAndCities: [
           "Bauchi", "Azare", "Misau", "Ningi", "Toro", "Katagum", "Alkaleri", "Dass", "Bogoro", 
        "Gamawa", "Jama'are", "Shira", "Itas", "Ganjuwa", "Giade", "Warji", "Darazo", "Kirfi"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "akwa ibom": { 
      state: "Akwa Ibom", 
      lgas: [
          "Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", 
        "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono Ibom", 
        "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat Enin", 
        "Nsit Atai", "Nsit Ibom", "Nsit Ubium", "Obot Akara", "Okobo", 
        "Onna", "Oron", "Oruk Anam", "Udung Uko", "Ukanafun", "Uruan", 
        "Urue-Offong/Oruko", "Uyo"

      ],
      townsAndCities: [
           "Uyo", "Eket", "Ikot Ekpene", "Abak", "Oron", "Itu", "Ikot Abasi", 
        "Nsit Ubium", "Mbo", "Etinan", "Ibesikpo Asutan", "Nsit Ibom", 
        "Mkpat Enin", "Ikono", "Esit Eket", "Ikot Udom", "Ikot Inyang", 
        "Ikot Edibon", "Afaha Offot", "Afaha Etok", "Ibiaku", "Ikot Akpa Nkuk", 
        "Ikot Akpan Abia", "Ikot Ekong", "Okopedi", "Ikot Ekpo", 
        "Ikot Obio Ndo", "Ikot Obio Okono", "Ikot Nkan", "Ikot Udo", 
        "Afaha Nsit", "Ikot Udo Abia", "Ikot Ebo", "Ikot Udo Esang", 
        "Ikot Ntung", "Ikot Ibiok", "Iquita", "Ibaka", "Etebi", "Uruan", 
        "Idu", "Ukat", "Afaha", "Nduo Ete"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "anambra": { 
      state: "Anambra", 
      lgas: [
         "Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", 
        "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", 
        "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", 
        "Orumba North", "Orumba South", "Oyi"

      ],
      townsAndCities: [
         "Awka", "Onitsha", "Nnewi", "Ekwulobia", "Aguleri", "Ihiala", "Oko", "Ogidi", 
        "Nkpor", "Obosi", "Atani", "Umunze", "Ekwusigo", "Amawbia", "Umuleri", "Ukpo", 
        "Nanka", "Ojoto", "Abagana", "Uli", "Umunnachi", "Enugu-Ukwu", "Nimo", "Ifite Dunu"

      ],
      villagesAndCommunities: [
        
      ]
    },
    "bayelsa": { 
      state: "Bayelsa", 
      lgas: [
         "Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", 
        "Sagbama", "Southern Ijaw", "Yenagoa"

      ],
      townsAndCities: [
          "Yenagoa", "Brass", "Nembe", "Ogbia", "Sagbama", "Ekeremor", 
        "Kaiama", "Twon-Brass", "Okpoama", "Otuoke", "Amasoma", 
        "Opokuma", "Peremabiri", "Toru-Orua", "Agbere", "Amassoma", 
        "Otueke", "Ebedebiri", "Sampou", "Angalabiri", "Gbarain", 
        "Ogbolomabiri", "Okoroma", "Okpoama", "Kolo", "Emeyal", 
        "Oloibiri", "Biseni", "Ikibiri", "Oporoma", "Igeibiri", 
        "Nembe Creek", "Egbema-Angalabiri", "Sagbagrei", "Polaku", 
        "Ogobiri", "Opu-Nembe"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "benue": { 
      state: "Benue", 
      lgas: [
          "Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", 
        "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", 
        "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", 
        "Ohimini", "Oju", "Okpokwu", "Oturkpo", "Tarka", 
        "Ukum", "Ushongo", "Vandeikya"

      ],
      townsAndCities: [
           "Makurdi", "Gboko", "Katsina-Ala", "Otukpo", "Adikpo", 
        "Aliade", "Ugbokolo", "Oju", "Vandeikya", "Buruku", 
        "Tse-Agberagba", "Naka", "Ugbema", "Okpoga", "Lessel", 
        "Obarike-Ito", "Orokam", "Owukpa", "Otukpa", "Ugba", 
        "Zaki-Biam", "Anyiin", "Tse-Ikyo", "Tse-Kucha", 
        "Wannune", "Usha", "Ikyogen", "Tse-Agber", "Abinsi", 
        "Agasha", "Ikpayongo", "Tse-Kpande", "Ningev", "Yandev"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "cross river": { 
      state: "Cross River", 
      lgas: [
          "Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", 
        "Boki", "Calabar Municipal", "Calabar South", "Etung", 
        "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", 
        "Ogoja", "Yakuur", "Yala"

      ],
      townsAndCities: [
           "Calabar", "Ikom", "Ogoja", "Ugep", "Obudu", "Akamkpa", 
        "Biase", "Boki", "Obubra", "Obanliku", "Bekwarra", 
        "Akpabuyo", "Bakassi", "Etung", "Odukpani"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "delta": { 
      state: "Delta", 
      lgas: [
         "Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ika North East", "Ika South", 
        "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", 
        "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", 
        "Warri North", "Warri South", "Warri South West"

      ],
      townsAndCities: [
         "Asaba", "Warri", "Sapele", "Ughelli", "Agbor", "Effurun", "Koko", "Kwale", "Orerokpe", 
        "Oleh", "Patani", "Ogume", "Obiaruku", "Udu", "Ughievwen", "Oshimili", "Akwukwu-Igbo", 
        "Umuaja", "Ogba", "Otujeremi", "Eku", "Aladja", "Ileje", "Esan", "Ikpide-Abraka", "Isele-Uku",
        "Oshimili South", "Issele-Azagba", "Ubulu-Uku", "Ogurude", "Ikorigho", "Okaigbo"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "ebonyi": { 
      state: "Ebonyi", 
      lgas: [
          "Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", 
        "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"

      ],
      townsAndCities: [
           "Abakaliki", "Afikpo", "Ezzamgbo", "Ishielu", "Ikwo", "Onicha", "Ohaozara", "Ezza", 
        "Amuzu", "Akaeze", "Ngbo", "Ugwulangwu", "Okposi", "Ugwulangwu", "Ivo", "Azi", 
        "Ezzama", "Okposi", "Akaeze", "Ebele", "Ebonyi"

      ],
      villagesAndCommunities: [
        
      ]
    },
   "edo": { 
  state: "Edo", 
  lgas: [
    "Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", 
    "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", 
    "Ikpoba-Okha", "Orhionmwon", "Oredo", "Ovia North-East", "Ovia South-West", 
    "Owan East", "Owan West", "Uhunmwonde"
  ],
  townsAndCities: [
    "Benin City", "Auchi", "Ekpoma", "Uromi", "Irrua", "Igueben", "Sabongida-Ora", 
    "Fugar", "Ewu", "Ubiaja", "Okada", "Abudu"
  ],
  villagesAndCommunities: [
    "Uzebba", "Igarra", "Jattu", "Ewatto", "Okpekpe", "Afuze", "Ogbona", 
    "Opoji", "Illushi", "Okaigben", "Iviukwe", "South Ibie", "Ivioghe"
  ]
},
    "ekiti": { 
      state: "Ekiti", 
      lgas: [
          "Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", 
        "Gbonyin", "Ido-Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", 
        "Moba", "Oye"

      ],
      townsAndCities: [
         "Ado Ekiti", "Ikere Ekiti", "Ijero Ekiti", "Ikole Ekiti", "Oye Ekiti", "Efon Alaaye", 
        "Aramoko Ekiti", "Ise Ekiti", "Emure Ekiti", "Iyin Ekiti", "Iworoko Ekiti", 
        "Igede Ekiti", "Omuo Ekiti", "Erio Ekiti", "Ipoti Ekiti"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "enugu": { 
      state: "Enugu", 
      lgas: [
           "Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", 
        "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", 
        "Oji River", "Udenu", "Udi", "Uzo-Uwani"

      ],
      townsAndCities: [
          "Enugu", "Nsukka", "Awgu", "Oji River", "Udi", "Ezeagu", "Agbani", "Obollo-Afor", 
        "Opi", "Ngwo", "Eke", "Iva Valley", "Neke", "Adani", "Abor", "Nike", "Mbu", 
        "Orba", "Achi", "Aguobu-Owa"

      ],
      villagesAndCommunities: [
        
      ]
    },
    "gombe": { 
      state: "Gombe", 
      lgas: [
          "Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", 
        "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"

      ],
      townsAndCities: [
                "Gombe", "Kaltungo", "Billiri", "Dukku", "Akko", "Deba", "Funakaye", 
        "Nafada", "Shongom", "Kwami", "Bajoga", "Tumu", "Pindiga", "Yamaltu", 
        "Kalmai", "Boh", "Kumo", "Talasse", "Lapan", "Gelengu", "Bamala"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "imo": { 
      state: "Imo", 
      lgas: [
             "Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", 
        "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", 
        "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", 
        "Oguta", "Ohaji/Egbema", "Okigwe", "Orlu", "Orsu", "Oru East", 
        "Oru West", "Owerri Municipal", "Owerri North", "Owerri West"

      ],
      townsAndCities: [
            "Owerri", "Orlu", "Okigwe", "Mbaise", "Mbano", "Oguta", "Ohaji", 
        "Egbema", "Nkwerre", "Ideato", "Ngor Okpala", "Njaba", "Ihitte", 
        "Obowo", "Mbaitoli", "Ikeduru", "Ezinihitte", "Isu", "Orsu", "Oru"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "jigawa": { 
      state: "Jigawa", 
      lgas: [
            "Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", 
        "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", 
        "Kaugama", "Kazaure", "Kiri Kasamma", "Kiyawa", "Maigatari", "Malam Madori", 
        "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"

      ],
      townsAndCities: [
          "Dutse", "Hadejia", "Kazaure", "Gumel", "Birnin Kudu", "Ringim", "Babura", 
        "Jahun", "Gagarawa", "Maigatari", "Kafin Hausa", "Auyo", "Buji", "Gwaram", 
        "Kaugama", "Taura", "Miga", "Biriniwa", "Sule Tankarkar", "Roni", "Kiri Kasamma"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "kaduna": { 
      state: "Kaduna", 
      lgas: [
           "Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", 
        "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", 
        "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", 
        "Soba", "Zangon Kataf", "Zaria"

      ],
      townsAndCities: [
            "Kaduna", "Zaria", "Kafanchan", "Ikara", "Sabon Gari", "Saminaka", 
        "Kachia", "Zonkwa", "Birnin Gwari", "Jere", "Kagoro", "Kajuru", 
        "Giwa", "Makarfi", "Kubau", "Kudan", "Lere", "Kaura", "Soba", 
        "Sanga", "Jaba", "Zangon Kataf", "Unguwan Rimi", "Narayi", "Tudun Wada", 
        "Barnawa", "Unguwan Dosa", "Malali", "Unguwan Sarki", "Unguwan Boro"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "zamfara": { 
      state: "Zamfara", 
      lgas: [
          "Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Gummi", "Gusau",
        "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Chafe", "Zurmi"

      ],
      townsAndCities: [
          "Gusau", "Kaura Namoda", "Talata Mafara", "Gummi", "Shinkafi", "Anka",
        "Bungudu", "Maradun", "Zurmi", "Bakura", "Maru", "Birnin Magaji", "Kiyaw", "Bukkuyum"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "kano": { 
      state: "Kano", 
      lgas: [
            "Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", 
        "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", 
        "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", 
        "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", 
        "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", 
        "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"

      ],
      townsAndCities: [
           "Kano", "Wudil", "Bichi", "Gwarzo", "Rano", "Dambatta", "Gezawa", "Karaye", 
        "Kiru", "Tofa", "Kumbotso", "Fagge", "Tarauni", "Ungogo", "Gwale", "Dala", 
        "Ajingi", "Albasu", "Bagwai", "Bunkure", "Gabasawa", "Garko", "Garun Mallam", 
        "Gaya", "Kabo", "Kibiya", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", 
        "Nasarawa", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tsanyawa", 
        "Tudun Wada", "Warawa"

      ],
      villagesAndCommunities: [
        
      ]
    },
    "kebbi": { 
      state: "Kebbi", 
      lgas: [
         "Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", 
        "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", 
        "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"

      ],
      townsAndCities: [
           "Birnin Kebbi", "Argungu", "Zuru", "Yauri", "Bagudo", "Jega", "Koko", 
        "Gwandu", "Kalgo", "Maiyama", "Sakaba", "Shanga", "Suru", "Dandi", 
        "Ngaski", "Fakai", "Arewa Dandi", "Aleiro", "Bunza", "Wasagu/Danko"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "kogi": { 
      state: "Kogi", 
      lgas: [
           "Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", 
        "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa-Muro", "Ofu", "Ogori/Magongo", 
        "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"

      ],
      townsAndCities: [
          "Lokoja", "Okene", "Kabba", "Idah", "Ankpa", "Dekina", "Ajaokuta", "Olamaboro", 
        "Bassa", "Adavi", "Ijumu", "Koton Karfe", "Ofu", "Ibaji", "Omala", 
        "Ogori-Magongo", "Yagba East", "Yagba West", "Mopa", "Igalamela-Odolu"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "kwara": { 
      state: "Kwara", 
      lgas: [
           "Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", 
        "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke-Ero", "Oyun", "Patigi"

      ],
      townsAndCities: [
          "Ilorin", "Offa", "Omu-Aran", "Patigi", "Baruten", "Jebba", "Kaiama", "Lafiagi", 
        "Ajase-Ipo", "Oro", "Igbaja", "Esie", "Shaare", "Bode Saadu", "Okuta", 
        "Kishi", "Erin-Ile", "Isanlu-Isin", "Osi", "Idofian"

      ],
      villagesAndCommunities: [
        
      ]
    },
    "nasarawa": { 
      state: "Nasarawa", 
      lgas: [
          "Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", 
        "Lafia", "Nasarawa", "Nasarawa-Eggon", "Obi", "Toto", "Wamba"

      ],
      townsAndCities: [
           "Lafia", "Keffi", "Akwanga", "Nasarawa", "Karu", "Doma", 
        "Toto", "Wamba", "Kokona", "Awe", "Keffin Wambai", 
        "Garaku", "Andaha", "Alushi", "Nunku", "Gudi", "Gitata", 
        "Uke", "New Karu", "Masaka", "Auta Balefi", "Mararaba"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "niger": { 
      state: "Niger", 
      lgas: [
          "Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", 
        "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", 
        "Mariga", "Mashegu", "Mokwa", "Muya", "Paikoro", "Rafi", "Rijau", 
        "Shiroro", "Suleja", "Tafa", "Wushishi"

      ],
      townsAndCities: [
             "Minna", "Bida", "Suleja", "Kontagora", "Lapai", "Agaie", "Mokwa", 
        "Zungeru", "Katcha", "Bosso", "Wushishi", "Paiko", "Rafi", 
        "Edati", "Mashegu", "Mariga", "Gurara", "Rijau", "Borgu", 
        "Agwara", "Tafa", "New Bussa", "Gawu Babangida", "Doko", "Lemu", 
        "Maikunkele", "Kagara", "Ibeto", "Auna", "Tegina", "Beji"

      ],
      villagesAndCommunities: [
        
      ]
    },
    "ogun": { 
      state: "Ogun", 
      lgas: [
           "Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ewekoro", "Ifo", 
        "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", 
        "Ikenne", "Imeko Afon", "Ipokia", "Obafemi-Owode", "Odeda", 
        "Odogbolu", "Ogun Waterside", "Remo North", "Sagamu (Shagamu)", "Yewa North", "Yewa South"

      ],
      townsAndCities: [
               "Abeokuta", "Ilaro", "Ijebu-Ode", "Sagamu", "Ota", "Ijebu Igbo", 
        "Ifo", "Agbara", "Ewekoro", "Owode", "Ipokia", "Imeko", 
        "Odogbolu", "Iperu", "Ago-Iwoye", "Ijebu Imushin", "Ikenne", 
        "Atan", "Makun", "Orile Ilugun", "Mowe", "Arepo"

      ],
      villagesAndCommunities: [
        "Gaidamgari", "Gujba", "Mafa", "Gashua Village", "Dapchi", "Bayamari", 
        "Mumule", "Garin Alkali", "Buni Gari", "Kumagannam"
      ]
    },
    "ondo": { 
      state: "Ondo", 
      lgas: [
          "Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West",
        "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje",
        "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West",
        "Ose", "Owo"

      ],
      townsAndCities: [
         "Akure", "Ondo City", "Owo", "Ikare Akoko", "Oka Akoko", "Idanre", 
        "Okitipupa", "Igbokoda", "Ile-Oluji", "Odigbo", "Ifon", "Bolorunduro", 
        "Irele", "Igbo Olodumare", "Iju", "Owena", "Ese Odo", "Akungba Akoko", 
        "Igbara Oke", "Ajowa Akoko", "Ugbo Nla", "Supare Akoko"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "osun": { 
      state: "Osun", 
      lgas: [
         "Atakunmosa East", "Atakunmosa West", "Ayedaade", "Ayedire", "Boluwaduro", "Boripe", 
        "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", 
        "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", 
        "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", 
        "Oriade", "Orolu", "Osogbo"

      ],
      townsAndCities: [
           "Osogbo", "Ilesa", "Ile-Ife", "Ede", "Iwo", "Ejigbo", "Ikire", 
        "Ila Orangun", "Ipetumodu", "Ibokun", "Otan Ayegbaju", "Ifetedo", 
        "Modakeke", "Iperindo", "Ipetu Ijesha", "Oke-Ila Orangun", "Inisa", 
        "Ikirun", "Ode Omu", "Ilobu", "Apomu", "Orile Owu", "Igbajo", 
        "Otan Ile", "Odeyinka", "Iresi", "Otan Ayegbaju", "Esa Oke", "Esa Odo"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "oyo": { 
      state: "Oyo", 
      lgas: [
           "Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North-East", 
        "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", 
        "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", 
        "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", 
        "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", 
        "Saki West", "Surulere"

      ],
      townsAndCities: [
          "Ibadan", "Oyo", "Ogbomoso", "Saki", "Iseyin", "Eruwa", "Igbeti", 
        "Kishi", "Igboho", "Lalupon", "Fiditi", "Okeho", "Iresa Adu", "Ilero", 
        "Ago Are", "Tede", "Sepeteri", "Igangan", "Ilora", "Otu", "Iyana Offa", 
        "Jobele", "Oke Ogun", "Akanran", "Apata", "Agodi", "Mokola", "Dugbe", 
        "Bodija", "Challenge", "Ring Road", "Eleyele", "Ojoo", "Moniya"

      ],
      villagesAndCommunities: [
      
      ]
    },
    "plateau": { 
      state: "Plateau", 
      lgas: [
          "Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", 
        "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", 
        "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"

      ],
      townsAndCities: [
           "Jos", "Barkin Ladi", "Bassa", "Bokkos", "Mangu", "Pankshin", "Langtang", 
        "Shendam", "Wase", "Riyom", "Mikang", "Kanam", "Qua'an Pan", "Kanke", 
        "Jos East", "Vom", "Heipang", "Bukuru", "Gindiri", "Dengi", "Kwall"

      ],
      villagesAndCommunities: [
       
      ]
    },
    "rivers": { 
      state: "Rivers", 
      lgas: [
         "Abua/Odual", "Ahoada East", "Ahoada West", "Akuku Toru", "Andoni", 
        "Asari-Toru", "Bonny", "Degema", "Eleme", "Emuoha", "Etche", "Gokana", 
        "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", 
        "Okrika", "Omuma", "Opobo/Nkoro", "Oyigbo", "Port Harcourt", "Tai"

      ],
      townsAndCities: [
         "Port Harcourt", "Obio", "Akpor", "Eleme", "Bonny", "Opobo", "Okrika", 
        "Ahoada", "Degema", "Bori", "Ogoni", "Omoku", "Oyigbo", "Emuoha", 
        "Etche", "Andoni", "Khana", "Gokana", "Tai", "Abua", "Odual", 
        "Akuku-Toru", "Asari-Toru", "Ogu/Bolo", "Omuma"

      ],
      villagesAndCommunities: [
        
      ]
    }
  };

  // Cache the locations object for subsequent calls
  return locations;
})();
