//   var mouse = {
//       x: undefined,
//       y: undefined
//    }
//     //Get mouse x and y coordinates
//    window.addEventListener('mousemove', function(event) {
//       mouse.x = event.x;
//       mouse.y = event.y;
//    });

//    var colorArray = [
//       '#220A29',
//       '#357291',
//       '#4d0839',
//       '#850d35',
//       '#39065b'
//    ];
 
// var nameArray = [
//    'Hyvää syntymäpäivää', 'Hyvää syntymäpäivää', 'Gëzuar ditëlindjen', 'عيد ميلاد سعيد', 'Շնորհավոր Ծնունդ', 'З Днём нараджэння', 'শুভ জন্মদিন', 'Sretan rođendan', 'Честит Рожден ден',
//    'Per molts d\'anys', '生日快乐', 'Všechno nejlepší k narozeninám', 'Gefeliciteerd met je verjaardag', 'Palju õnne sünnipäevaks', 'Happy Birthday', 'Feliĉan naskiĝtagon', 'Afehyia pa', 'Mvôg mgbú', 'Tillykke med fødselsdagen',
//    'Til hamingju við føðingardagin', 'Maligayang kaarawan', 'Gelukkige verjaardag', 'Roja te pîroz be', 'Joyeux anniversaire', 'Gefeliciteerd mei dyn jierdei', 'Bondye beni ou', 'Afiyet olsun', 'Feliz aniversário',
//    'გილოცავ დაბადების დღეს', 'Alles Gute zum Geburtstag', 'Χαρούμενα Γενέθλια', 'Roguéri kóga', 'Barka da ranar haihuwa', 'Bondye beni ou', 'Barka da ranar haihuwa', 'Hauʻoli lā hānau', 'יומולדת שמחה',
//    'Otjimbumba otjiwa', 'जन्मदिन मुबारक', 'Zoo siab txais tos', 'Boldog születésnapot', 'Til hamingju með afmælið', 'Selamat ulang tahun', 'ᐅᖃᐅᓯᖅᑎᑦᓯ', 'Breithlá shona dhuit', '*Buon comple',
//    '新年快乐', 'Sretna Nova godina', 'Šťastný nový rok', 'gelukkig nieuw jaar', 'Head uut aastat', 'Happy New Year', 'Feliĉan novan jaron', 'Eƒé bé dzogbenyui nami', 'Mbembe mbu', 'Godt nytår',
//    'Gott nýggjár', 'Manigong bagong taon', 'Gelukkig nieuwjaar', 'Mikudo xwe yoyo ', 'Bonne année', 'lokkich nijjier', 'bon an', 'Dioul mo wouri', 'Feliz ano novo', 'გილოცავთ ახალ წელს', 'Frohes neues Jahr',
//    'Καλή Χρονιά', 'Rogüerohory año nuévo-re', 'Sal mubarak', 'Bònn ané', 'Barka da sabuwar shekara', 'Hauoli makahiki hou', 'שנה טובה', 'Ombura ombe ombua', 'Nav varsh ki subhkamna', 'Nyob zoo xyoo tshiab',
//    'Boldog új évet', 'Gleðilegt nýtt ár', 'Selamat tahun baru', 'ᐅᑭᐅᒥ ᓄᑖᒥ ᖁᕕᐊᓱᒋᑦᓯ', 'Ath bhliain faoi mhaise', 'Felice anno nuovo', 'あけまして おめでとう ございます', 'Sugeng warsa enggal', 'Aseggas ameggaz',
//    'ಹೊಸ ವರ್ಷದ ಹಾರ್ಧಿಕ ಶುಭಾಶಯಗಳು', 'Nav reh mubarakh', 'Zhana zhiliniz kutti bolsin', 'Ngethi cya mwaka mweru', '새해 복 많이 받으세요', 'Sala we ya nû pîroz be', 'Sabai di pi mai', 'Felix sit annus novus',
//    'Laimīgu Jauno gadu', 'Weli Newiyal', 'Bón ànno nêuvo', 'Laimingų Naujųjų Metų', 'Gelükkig nyjaar', 'E gudd neit Joër', 'Среќна Нова Година', 'Selamat tahun baru', 'Is-sena t-tajba', 'Kia porotu te ano ou',
//    'नयाँ बर्षको शुभकामना', 'Godt nyttår', 'سال نو مبارک', 'Szczęśliwego nowego roku', 'Feliz ano novo', 'La mulţi ani', 'Bun di bun onn', 'С Новым Годом', 'Bliadhna mhath ur', 'Срећна Нова година',
//    'Goredzva rakanaka', 'Šťastný nový rok', 'Gott nytt år', 'Es guets Nöis', 'Es guets Nöis', 'Щасливого Нового Року', 'Ene boune anéye, ene boune sintéye', 'Nyak\'omtsha'
//  ];
 
 
//   var container = document.querySelector('#name-canvas');
//    var nameMovers = [];
//   var vHeight = window.innerHeight;
//    var vWidth = window.innerWidth;
 
//    var mover;
//    for (var i = 0; i < nameArray.length; i++) {
//       mover = createMover(nameArray[i], container);
//       nameMovers.push(mover);
//    }
 
//    animate();
 
//    function randPos(max) {
//        return Math.floor(Math.random() * max);
//    }
 
//    function randMinMax(min, max, nonZero) {
//       var value = Math.floor(Math.random() * (max - (min))) + (min);
    
//       if (nonZero && value === 0) {
//          return randMinMax(min, max, nonZero);
//       } else {
//          return value;
//       }
//    }
 
 
//    function createMover(name, container) {
//       var mover = {
//          x: randPos(vWidth),
//          y: randPos(vHeight),
//          z: randPos(100),
//          dx: randMinMax(-2, 3, true) / 1.5,
//          dy: randMinMax(-2, 3, true) / 2,
//          dz: randMinMax(-2, 3, true),
//       };
 
//       //Colors randomly from color array
//       var color = colorArray[Math.floor(Math.random() * colorArray.length)];
   
//       var el = document.createElement('div');
//       el.innerHTML = name;
//       el.classList.add('mover');
//       el.style.color = color;
//       mover.el = el;
//       container.appendChild(el);
//       return mover;
//    }
 
 
//    function updateMoverPosition(mover) {
//       mover.x += mover.dx;
//       mover.y += mover.dy;
//       mover.z += mover.dz;
    
//       // bounce back.
//       if (mover.x >= window.innerWidth || mover.x < 0) {
//          mover.dx = -mover.dx;
//       }
//       if (mover.y >= window.innerHeight || mover.y < 0) {
//         mover.dy = -mover.dy;
//       }
//       if (mover.z >= 500 || mover.z < -500) {
//          mover.dz = -mover.dz;
//       }
    
//       mover.el.style.transform = [
//          "translateX("  + mover.x + "px)",
//         "translateY("  + mover.y + "px)",
//       "translateZ("  + mover.z + "px)"
//       ].join('');
       
    
//    }
 
//   //for moving names around
//    function animate() {
    
//       for (let i = 0; i < nameMovers.length; i++) {
//         updateMoverPosition(nameMovers[i]);
//      }  
    
//       //setTimeout(animate, 1000 / 50);
//      requestAnimationFrame(animate);
//    }






var mouse = {
   x: undefined,
   y: undefined
};

// Obtener las coordenadas x e y del mouse
window.addEventListener('mousemove', function(event) {
   mouse.x = event.x;
   mouse.y = event.y;
});

var colorArray = [
   '#73138f',
   '#e0284d',
   '#de3581',
   '#29a8c4',
   '#f781b0'
];


var nameArray = [
   'Hyvää syntymäpäivää', 'Hyvää syntymäpäivää', 'Gëzuar ditëlindjen', 'عيد ميلاد سعيد', 'Շնորհավոր Ծնունդ', 'З Днём нараджэння', 'শুভ জন্মদিন', 'Sretan rođendan', 'Честит Рожден ден',
   'Per molts d\'anys', '生日快乐', 'Všechno nejlepší k narozeninám', 'Gefeliciteerd met je verjaardag', 'Palju õnne sünnipäevaks', 'Happy Birthday', 'Feliĉan naskiĝtagon', 'Afehyia pa', 'Mvôg mgbú', 'Tillykke med fødselsdagen',
   'Til hamingju við føðingardagin', 'Maligayang kaarawan', 'Gelukkige verjaardag', 'Roja te pîroz be', 'Joyeux anniversaire', 'Gefeliciteerd mei dyn jierdei', 'Bondye beni ou', 'Afiyet olsun', 'Feliz aniversário',
   'გილოცავ დაბადების დღეს', 'Alles Gute zum Geburtstag', 'Χαρούμενα Γενέθλια', 'Roguéri kóga', 'Barka da ranar haihuwa', 'Bondye beni ou', 'Barka da ranar haihuwa', 'Hauʻoli lā hānau', 'יומולדת שמחה',
   'Otjimbumba otjiwa', 'जन्मदिन मुबारक', 'Zoo siab txais tos', 'Boldog születésnapot', 'Til hamingju með afmælið', 'Selamat ulang tahun', 'ᐅᖃᐅᓯᖅᑎᑦᓯ', 'Breithlá shona dhuit', '*Buon comple',
   '新年快乐', 'Sretna Nova godina', 'Šťastný nový rok', 'gelukkig nieuw jaar', 'Head uut aastat', 'Happy New Year', 'Feliĉan novan jaron', 'Eƒé bé dzogbenyui nami', 'Mbembe mbu', 'Godt nytår',
   'Gott nýggjár', 'Manigong bagong taon', 'Gelukkig nieuwjaar', 'Mikudo xwe yoyo ', 'Bonne année', 'lokkich nijjier', 'bon an', 'Dioul mo wouri', 'Feliz ano novo', 'გილოცავთ ახალ წელს', 'Frohes neues Jahr',
   'Καλή Χρονιά', 'Rogüerohory año nuévo-re', 'Sal mubarak', 'Bònn ané', 'Barka da sabuwar shekara', 'Hauoli makahiki hou', 'שנה טובה', 'Ombura ombe ombua', 'Nav varsh ki subhkamna', 'Nyob zoo xyoo tshiab',
   'Boldog új évet', 'Gleðilegt nýtt ár', 'Selamat tahun baru', 'ᐅᑭᐅᒥ ᓄᑖᒥ ᖁᕕᐊᓱᒋᑦᓯ', 'Ath bhliain faoi mhaise', 'Felice anno nuovo', 'あけまして おめでとう ございます', 'Sugeng warsa enggal', 'Aseggas ameggaz',
   'ಹೊಸ ವರ್ಷದ ಹಾರ್ಧಿಕ ಶುಭಾಶಯಗಳು', 'Nav reh mubarakh', 'Zhana zhiliniz kutti bolsin', 'Ngethi cya mwaka mweru', '새해 복 많이 받으세요', 'Sala we ya nû pîroz be', 'Sabai di pi mai', 'Felix sit annus novus',
   'Laimīgu Jauno gadu', 'Weli Newiyal', 'Bón ànno nêuvo', 'Laimingų Naujųjų Metų', 'Gelükkig nyjaar', 'E gudd neit Joër', 'Среќна Нова Година', 'Selamat tahun baru', 'Is-sena t-tajba', 'Kia porotu te ano ou',
   'नयाँ बर्षको शुभकामना', 'Godt nyttår', 'سال نو مبارک', 'Szczęśliwego nowego roku', 'Feliz ano novo', 'La mulţi ani', 'Bun di bun onn', 'С Новым Годом', 'Bliadhna mhath ur', 'Срећна Нова година',
   'Goredzva rakanaka', 'Šťastný nový rok', 'Gott nytt år', 'Es guets Nöis', 'Es guets Nöis', 'Щасливого Нового Року', 'Ene boune anéye, ene boune sintéye', 'Nyak\'omtsha'
];

var container = document.querySelector('#name-canvas');
var nameMovers = [];
var vHeight = window.innerHeight;
var vWidth = window.innerWidth;

var mover;
for (var i = 0; i < Math.min(nameArray.length, 35); i++) {
   mover = createMover(nameArray[i], container);
   nameMovers.push(mover);
}

animate();

function randPos(max) {
   return Math.floor(Math.random() * max);
}

function randMinMax(min, max, nonZero) {
   var value = Math.floor(Math.random() * (max - (min))) + (min);

   if (nonZero && value === 0) {
      return randMinMax(min, max, nonZero);
   } else {
      return value;
   }
}

function createMover(name, container) {
   var mover = {
      x: randPos(vWidth),
      y: randPos(vHeight),
      z: randPos(100),
      dx: randMinMax(-2, 3, true) / 1.5,
      dy: randMinMax(-2, 3, true) / 2,
      dz: randMinMax(-2, 3, true),
   };

   var color = colorArray[Math.floor(Math.random() * colorArray.length)];

   var el = document.createElement('div');
   el.innerHTML = name;
   el.classList.add('mover');
   el.style.color = color;
   mover.el = el;
   container.appendChild(el);
   return mover;
}

function updateMoverPosition(mover) {
   mover.x += mover.dx;
   mover.y += mover.dy;
   mover.z += mover.dz;

   if (mover.x >= vWidth || mover.x < 0) {
      mover.dx = -mover.dx;
   }
   if (mover.y >= vHeight || mover.y < 0) {
      mover.dy = -mover.dy;
   }
   if (mover.z >= 500 || mover.z < -500) {
      mover.dz = -mover.dz;
   }

   mover.el.style.transform = [
      "translateX(" + mover.x + "px)",
      "translateY(" + mover.y + "px)",
      "translateZ(" + mover.z + "px)"
   ].join('');
}

function animate() {
   for (let i = 0; i < nameMovers.length; i++) {
      updateMoverPosition(nameMovers[i]);
   }

   requestAnimationFrame(animate);
}


