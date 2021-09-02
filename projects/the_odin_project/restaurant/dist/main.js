/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import _ from 'lodash';
// import './style.css';

// const { remove } = require("lodash")

//  function component() {
//    const element = document.createElement('div');

//   // Lodash, now imported by this script
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//    element.classList.add('hello');

//     const myIcon = new Image();
//     myIcon.src = Icon;
//     element.appendChild(myIcon);
//     const remyImg = new Image();
//     remyImg.src = remy;
//     element.appendChild(remyImg);

//    return element;
//  }

//  document.body.appendChild(component());




// Get Containers
const backgroundImgHolder = document.getElementById('backgroundImg');
const headContainer = document.getElementById('head')
const mainContainer = document.getElementById('main');
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const divHome = document.createElement('div');
const divMenu = document.createElement('div');
const divContact = document.createElement('div');
  
  function createHeader () {  
     //Create Elements for Head
     const title = document.createElement('div')
     const h1 = document.createElement('h1')
     const h2 = document.createElement('h2')
     const tower = document.createElement('img')
     
     // Manipulate Elements for Head
     headContainer.classList.add('header')
     title.classList.add('title');
     h1.innerHTML = 'Rataurant';
     h2.innerHTML = '"Anyone can cook, but only the fearless can be great"';
     tower.setAttribute('src', 'images/tower.png')
     tower.setAttribute('alt', 'Eiffel Tower')
     tower.id = 'tower';
     
     //  Append Element for Head
     headContainer.appendChild(tower);
     title.appendChild(h1);
     title.appendChild(h2);
     headContainer.appendChild(title);

      //  NavBar 
      const home = document.createElement('section')
      const homeH3 = document.createElement('h3')
      homeH3.innerHTML = 'Home';
      home.classList.add('active');
      homeH3.addEventListener('click', () => {
        displayHome();
        changeActive(home, menu, contact);
      })
      home.appendChild(homeH3);
      tab1.appendChild(home);
      
      const menu = document.createElement('section')
      const menuH3 = document.createElement('h3')
      menuH3.innerHTML = 'Menu';
      menuH3.addEventListener('click', () => {
        displayMenu();
        changeActive(menu, home, contact);
      })
      menu.appendChild(menuH3);
      tab2.appendChild(menu);
      
      const contact = document.createElement('section')
      const contactH3 = document.createElement('h3')
      contactH3.innerHTML = 'Contact';
      contactH3.addEventListener('click', () => {
        displayContact();
        changeActive(contact, menu, home);
      })
      contact.appendChild(contactH3);
      tab3.appendChild(contact);
  }
  
  function createHome() {
    const div1 = document.createElement('div');
    const p11 = document.createElement('p');
    
    p11.innerHTML = 'At the best spot of Paris, take a chair and order one of ours famous meals, from the usual Onion Soup until our finnest Layered Ratatouille!';
    div1.classList.add('container')
    
    div1.appendChild(p11);
    divHome.appendChild(div1);  
    
    const div2 = document.createElement('div')
    const h4 = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    
    h4.innerHTML = 'Hours';
    p1.innerHTML = 'Tuesday - Saturday';
    p2.innerHTML = '11am - 12pm';
    p3.innerHTML = 'Sundays and Mondays';
    p4.innerHTML = '10am - 15pm';
    div2.classList.add('container')
    
    div2.appendChild(h4);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(p4);
    divHome.appendChild(div2);  
  
    const div3 = document.createElement('div')
    const h43 = document.createElement('h4')
    const address = document.createElement('address')
    
    h43.innerHTML = 'Address';
    address.innerHTML = 'Fake Address Line 1';
    div3.classList.add('container')
    
    div3.appendChild(h43);
    div3.appendChild(address);
    divHome.appendChild(div3);  

    mainContainer.appendChild(divHome);
  }
  
  function createMenu() {

    // Creating Each Food
    
    const onionSoup = document.createElement('div');
    onionSoup.classList.add('container');
    const onionSoupH4 = document.createElement('h4');
    const onionSoupDesc = document.createElement('p');
    const onionSoupPrice = document.createElement('p');
    const onionSoupImg = document.createElement('img');
    
    onionSoupH4.innerHTML = 'Onion Soup';
    onionSoupDesc.innerHTML = 'French onion soup (French: soupe à l’oignon [sup a lɔɲɔ̃]) is a type of soup usually based on meat stock and onions, and often served gratinéed with croutons or a larger piece of bread covered with cheese floating on top. Although ancient in origin, the dish underwent a resurgence of popularity in the 1960s in the United States due to a greater interest in French cuisine. French onion soup may be served as a meal in itself or as a first course.';
    onionSoupPrice.innerHTML = 'Price: 10$';
    onionSoupImg.setAttribute('src', 'images/food/onionsoup.jpg');
    onionSoupImg.setAttribute('alt', 'Onion Soup');
    
    onionSoup.appendChild(onionSoupH4)
    onionSoup.appendChild(onionSoupDesc)
    onionSoup.appendChild(onionSoupPrice)
    onionSoup.appendChild(onionSoupImg)
    
    
    const Ratatouille = document.createElement('div');
    Ratatouille.classList.add('container');
    const RatatouilleH4 = document.createElement('h4');
    const RatatouilleDesc = document.createElement('p');
    const RatatouillePrice = document.createElement('p');
    const RatatouilleImg = document.createElement('img');
    
    RatatouilleH4.innerHTML = 'Ratatouille';
    RatatouilleDesc.innerHTML = 'Ratatouille (/ˌrætəˈtuːi/ RAT-ə-TOO-ee, French: [ʁatatuj]; Occitan: ratatolha [ʀataˈtuʎɔ]) is a French Provençal dish of stewed vegetables, originating in Nice, and sometimes referred to as ratatouille niçoise (French: [niswaz]).[1] Recipes and cooking times differ widely, but common ingredients include tomato, garlic, onion, courgette (zucchini), aubergine (eggplant), capsicum (bell pepper), and some combination of leafy green herbs common to the region.';
    RatatouillePrice.innerHTML = 'Price: 32$';
    RatatouilleImg.setAttribute('src', 'images/food/ratatouille.jpg');
    RatatouilleImg.setAttribute('alt', 'Ratatouille');
    
    Ratatouille.appendChild(RatatouilleH4)
    Ratatouille.appendChild(RatatouilleDesc)
    Ratatouille.appendChild(RatatouillePrice)
    Ratatouille.appendChild(RatatouilleImg)
    
    
    const Croissant = document.createElement('div');
    Croissant.classList.add('container');
    const CroissantH4 = document.createElement('h4');
    const CroissantDesc = document.createElement('p');
    const CroissantPrice = document.createElement('p');
    const CroissantImg = document.createElement('img');
    
    CroissantH4.innerHTML = 'Croissant';
    CroissantDesc.innerHTML = 'A croissant (UK: /ˈkrwʌsɒ̃, ˈkrwæsɒ̃/,[3] US: /krəˈsɒnt, krwɑːˈsɒ̃/, French: [kʁwasɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] but mostly associated with France. Croissants are named for its historical crescent shape and, like other viennoiserie, are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.';
    CroissantPrice.innerHTML = 'Price: 2.50$';
    CroissantImg.setAttribute('src', 'images/food/croissant.jpg');
    CroissantImg.setAttribute('alt', 'Croissant');
    
    Croissant.appendChild(CroissantH4)
    Croissant.appendChild(CroissantDesc)
    Croissant.appendChild(CroissantPrice)
    Croissant.appendChild(CroissantImg)
    
    
    const croque = document.createElement('div');
    croque.classList.add('container');
    const croqueH4 = document.createElement('h4');
    const croqueDesc = document.createElement('p');
    const croquePrice = document.createElement('p');
    const croqueImg = document.createElement('img');
    
    croqueH4.innerHTML = 'Croque Monsieur';
    croqueDesc.innerHTML = 'A croque monsieur (French pronunciation: ​[kʁɔk məsjø]) is a hot sandwich made with ham and cheese. The dish originated in French cafés and bars as a quick snack. The name comes from the French words croque ("bite”) and monsieur ("mister"). The first time this sandwich is known to have appeared on a Paris café menu was in 1910.';
    croquePrice.innerHTML = 'Price: 8$';
    croqueImg.setAttribute('src', 'images/food/croque.jpg');
    croqueImg.setAttribute('alt', 'Croque Monsieur');
    
    croque.appendChild(croqueH4)
    croque.appendChild(croqueDesc)
    croque.appendChild(croquePrice)
    croque.appendChild(croqueImg)
    
    
    const creme = document.createElement('div');
    creme.classList.add('container');
    const cremeH4 = document.createElement('h4');
    const cremeDesc = document.createElement('p');
    const cremePrice = document.createElement('p');
    const cremeImg = document.createElement('img');
    
    cremeH4.innerHTML = 'Crème brûlée';
    cremeDesc.innerHTML = 'Crème brûlée (/ˌkrɛm bruːˈleɪ/; French pronunciation: ​[kʁɛm bʁy.le]), also known as burned cream, burnt cream or Trinity cream,[1] and virtually identical to crema catalana,[2] is a dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar. It is normally served slightly chilled; the heat from the caramelizing process tends to warm the top of the custard, while leaving the center cool. The custard base is traditionally flavored with vanilla in French cuisine, but can have other flavorings. It is sometimes garnished with fruit.';
    cremePrice.innerHTML = 'Price: 6$';
    cremeImg.setAttribute('src', 'images/food/cremebrulee.jpg');
    cremeImg.setAttribute('alt', 'Creme Bruléé');
    
    creme.appendChild(cremeH4)
    creme.appendChild(cremeDesc)
    creme.appendChild(cremePrice)
    creme.appendChild(cremeImg)



    //Actual Display
    divMenu.classList.add('notshow');
    divMenu.appendChild(onionSoup);
    divMenu.appendChild(Ratatouille);
    divMenu.appendChild(Croissant);
    divMenu.appendChild(croque);
    divMenu.appendChild(creme);
    mainContainer.appendChild(divMenu);
  }
  
  function createContact() {

    const remy = document.createElement('div');
    remy.classList.add('container');
    const remyH4 = document.createElement('h4');
    const remyTitle = document.createElement('p');
    const remyTel = document.createElement('p');
    const remyMail = document.createElement('p');
    const remyImg = document.createElement('img');
    
    remyH4.innerHTML = 'Remy';
    remyTitle.innerHTML = 'Chef de cuisine';
    remyTel.innerHTML = '555-111-2222';
    remyMail.innerHTML = 'example@email.com';
    remyImg.setAttribute('src', 'images/remy.jpg');
    remyImg.setAttribute('alt', 'Remy');
    
    remy.appendChild(remyH4);
    remy.appendChild(remyTitle);
    remy.appendChild(remyTel);
    remy.appendChild(remyMail);
    remy.appendChild(remyImg);
    
    
    const colette = document.createElement('div');
    colette.classList.add('container');
    const coletteH4 = document.createElement('h4');
    const coletteTitle = document.createElement('p');
    const coletteTel = document.createElement('p');
    const coletteMail = document.createElement('p');
    const coletteImg = document.createElement('img');
    
    coletteH4.innerHTML = 'Colette';
    coletteTitle.innerHTML = 'Sous-chef';
    coletteTel.innerHTML = '555-111-2222';
    coletteMail.innerHTML = 'example@email.com';
    coletteImg.setAttribute('src', 'images/colette.jpg');
    coletteImg.setAttribute('alt', 'Colette');
    
    colette.appendChild(coletteH4);
    colette.appendChild(coletteTitle);
    colette.appendChild(coletteTel);
    colette.appendChild(coletteMail);
    colette.appendChild(coletteImg);


    const linguini = document.createElement('div');
    linguini.classList.add('container');
    const linguiniH4 = document.createElement('h4');
    const linguiniTitle = document.createElement('p');
    const linguiniTel = document.createElement('p');
    const linguiniMail = document.createElement('p');
    const linguiniImg = document.createElement('img');
    
    linguiniH4.innerHTML = 'Linguini';
    linguiniTitle.innerHTML = 'Owner/Waiter';
    linguiniTel.innerHTML = '555-111-2222';
    linguiniMail.innerHTML = 'example@email.com';
    linguiniImg.setAttribute('src', 'images/linguini.jpg');
    linguiniImg.setAttribute('alt', 'Linguini');
    
    linguini.appendChild(linguiniH4);
    linguini.appendChild(linguiniTitle);
    linguini.appendChild(linguiniTel);
    linguini.appendChild(linguiniMail);
    linguini.appendChild(linguiniImg);
    
    divContact.classList.add('notshow');
    divContact.appendChild(remy);
    divContact.appendChild(colette);
    divContact.appendChild(linguini);
    mainContainer.appendChild(divContact);
  }

  function changeActive(add1, rem1, rem2) {
    add1.classList.add('active');
    rem1.classList.remove('active');
    rem2.classList.remove('active');
  }

function displayHome() {
  removeAll()
  if (divHome.classList.contains('notshow')) {
    divHome.classList.remove('notshow');
  }
}

function displayMenu() {
  removeAll()
  if (divMenu.classList.contains('notshow')) {
    divMenu.classList.remove('notshow');
  }
}

function displayContact() {
  removeAll()
  if (divContact.classList.contains('notshow')) {
    divContact.classList.remove('notshow');
  }
}

function removeAll() {
  if (!divHome.classList.contains('notshow')) {
    divHome.classList.add('notshow');
  } else if (!divMenu.classList.contains('notshow')) {
    divMenu.classList.add('notshow');
  } else if (!divContact.classList.contains('notshow')) {
    divContact.classList.add('notshow');
  }
}

function displayContent(toDisplay) {
  toDisplay.classList.add('displayContent')
}

// Actual Code
// var backgroundImg = document.createElement('img');
// backgroundImg.src = 'images/nightParis.png';
// backgroundImgHolder.appendChild(backgroundImg);


createHeader();
createHome();
createMenu();
createContact();

document.body.style.backgroundImage = 'url(images/nightParis.png)';
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDRSQUE0UjtBQUN2VjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuLy8gY29uc3QgeyByZW1vdmUgfSA9IHJlcXVpcmUoXCJsb2Rhc2hcIilcclxuXHJcbi8vICBmdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbi8vICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbi8vICAgLy8gTG9kYXNoLCBub3cgaW1wb3J0ZWQgYnkgdGhpcyBzY3JpcHRcclxuLy8gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcbi8vICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKTtcclxuXHJcbi8vICAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIG15SWNvbi5zcmMgPSBJY29uO1xyXG4vLyAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xyXG4vLyAgICAgY29uc3QgcmVteUltZyA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgcmVteUltZy5zcmMgPSByZW15O1xyXG4vLyAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyZW15SW1nKTtcclxuXHJcbi8vICAgIHJldHVybiBlbGVtZW50O1xyXG4vLyAgfVxyXG5cclxuLy8gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5cclxuXHJcblxyXG5cclxuLy8gR2V0IENvbnRhaW5lcnNcclxuY29uc3QgYmFja2dyb3VuZEltZ0hvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kSW1nJyk7XHJcbmNvbnN0IGhlYWRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZCcpXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG5jb25zdCB0YWIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYjEnKTtcclxuY29uc3QgdGFiMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWIyJyk7XHJcbmNvbnN0IHRhYjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiMycpO1xyXG5jb25zdCBkaXZIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGRpdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgZGl2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlciAoKSB7ICBcclxuICAgICAvL0NyZWF0ZSBFbGVtZW50cyBmb3IgSGVhZFxyXG4gICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICBjb25zdCB0b3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgXHJcbiAgICAgLy8gTWFuaXB1bGF0ZSBFbGVtZW50cyBmb3IgSGVhZFxyXG4gICAgIGhlYWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcclxuICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgIGgxLmlubmVySFRNTCA9ICdSYXRhdXJhbnQnO1xyXG4gICAgIGgyLmlubmVySFRNTCA9ICdcIkFueW9uZSBjYW4gY29vaywgYnV0IG9ubHkgdGhlIGZlYXJsZXNzIGNhbiBiZSBncmVhdFwiJztcclxuICAgICB0b3dlci5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWFnZXMvdG93ZXIucG5nJylcclxuICAgICB0b3dlci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdFaWZmZWwgVG93ZXInKVxyXG4gICAgIHRvd2VyLmlkID0gJ3Rvd2VyJztcclxuICAgICBcclxuICAgICAvLyAgQXBwZW5kIEVsZW1lbnQgZm9yIEhlYWRcclxuICAgICBoZWFkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvd2VyKTtcclxuICAgICB0aXRsZS5hcHBlbmRDaGlsZChoMSk7XHJcbiAgICAgdGl0bGUuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gICAgIGhlYWRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgLy8gIE5hdkJhciBcclxuICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxyXG4gICAgICBjb25zdCBob21lSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgIGhvbWVIMy5pbm5lckhUTUwgPSAnSG9tZSc7XHJcbiAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGhvbWVIMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5SG9tZSgpO1xyXG4gICAgICAgIGNoYW5nZUFjdGl2ZShob21lLCBtZW51LCBjb250YWN0KTtcclxuICAgICAgfSlcclxuICAgICAgaG9tZS5hcHBlbmRDaGlsZChob21lSDMpO1xyXG4gICAgICB0YWIxLmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxyXG4gICAgICBjb25zdCBtZW51SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgIG1lbnVIMy5pbm5lckhUTUwgPSAnTWVudSc7XHJcbiAgICAgIG1lbnVIMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5TWVudSgpO1xyXG4gICAgICAgIGNoYW5nZUFjdGl2ZShtZW51LCBob21lLCBjb250YWN0KTtcclxuICAgICAgfSlcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChtZW51SDMpO1xyXG4gICAgICB0YWIyLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxyXG4gICAgICBjb25zdCBjb250YWN0SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgIGNvbnRhY3RIMy5pbm5lckhUTUwgPSAnQ29udGFjdCc7XHJcbiAgICAgIGNvbnRhY3RIMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5Q29udGFjdCgpO1xyXG4gICAgICAgIGNoYW5nZUFjdGl2ZShjb250YWN0LCBtZW51LCBob21lKTtcclxuICAgICAgfSlcclxuICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SDMpO1xyXG4gICAgICB0YWIzLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcDExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgXHJcbiAgICBwMTEuaW5uZXJIVE1MID0gJ0F0IHRoZSBiZXN0IHNwb3Qgb2YgUGFyaXMsIHRha2UgYSBjaGFpciBhbmQgb3JkZXIgb25lIG9mIG91cnMgZmFtb3VzIG1lYWxzLCBmcm9tIHRoZSB1c3VhbCBPbmlvbiBTb3VwIHVudGlsIG91ciBmaW5uZXN0IExheWVyZWQgUmF0YXRvdWlsbGUhJztcclxuICAgIGRpdjEuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcclxuICAgIFxyXG4gICAgZGl2MS5hcHBlbmRDaGlsZChwMTEpO1xyXG4gICAgZGl2SG9tZS5hcHBlbmRDaGlsZChkaXYxKTsgIFxyXG4gICAgXHJcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBcclxuICAgIGg0LmlubmVySFRNTCA9ICdIb3Vycyc7XHJcbiAgICBwMS5pbm5lckhUTUwgPSAnVHVlc2RheSAtIFNhdHVyZGF5JztcclxuICAgIHAyLmlubmVySFRNTCA9ICcxMWFtIC0gMTJwbSc7XHJcbiAgICBwMy5pbm5lckhUTUwgPSAnU3VuZGF5cyBhbmQgTW9uZGF5cyc7XHJcbiAgICBwNC5pbm5lckhUTUwgPSAnMTBhbSAtIDE1cG0nO1xyXG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgXHJcbiAgICBkaXYyLmFwcGVuZENoaWxkKGg0KTtcclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQocDEpO1xyXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChwMik7XHJcbiAgICBkaXYyLmFwcGVuZENoaWxkKHAzKTtcclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQocDQpO1xyXG4gICAgZGl2SG9tZS5hcHBlbmRDaGlsZChkaXYyKTsgIFxyXG4gIFxyXG4gICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBoNDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXHJcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWRkcmVzcycpXHJcbiAgICBcclxuICAgIGg0My5pbm5lckhUTUwgPSAnQWRkcmVzcyc7XHJcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9ICdGYWtlIEFkZHJlc3MgTGluZSAxJztcclxuICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcclxuICAgIFxyXG4gICAgZGl2My5hcHBlbmRDaGlsZChoNDMpO1xyXG4gICAgZGl2My5hcHBlbmRDaGlsZChhZGRyZXNzKTtcclxuICAgIGRpdkhvbWUuYXBwZW5kQ2hpbGQoZGl2Myk7ICBcclxuXHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkhvbWUpO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG5cclxuICAgIC8vIENyZWF0aW5nIEVhY2ggRm9vZFxyXG4gICAgXHJcbiAgICBjb25zdCBvbmlvblNvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG9uaW9uU291cC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGNvbnN0IG9uaW9uU291cEg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIGNvbnN0IG9uaW9uU291cERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBvbmlvblNvdXBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IG9uaW9uU291cEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgXHJcbiAgICBvbmlvblNvdXBINC5pbm5lckhUTUwgPSAnT25pb24gU291cCc7XHJcbiAgICBvbmlvblNvdXBEZXNjLmlubmVySFRNTCA9ICdGcmVuY2ggb25pb24gc291cCAoRnJlbmNoOiBzb3VwZSDDoCBs4oCZb2lnbm9uIFtzdXAgYSBsyZTJssmUzINdKSBpcyBhIHR5cGUgb2Ygc291cCB1c3VhbGx5IGJhc2VkIG9uIG1lYXQgc3RvY2sgYW5kIG9uaW9ucywgYW5kIG9mdGVuIHNlcnZlZCBncmF0aW7DqWVkIHdpdGggY3JvdXRvbnMgb3IgYSBsYXJnZXIgcGllY2Ugb2YgYnJlYWQgY292ZXJlZCB3aXRoIGNoZWVzZSBmbG9hdGluZyBvbiB0b3AuIEFsdGhvdWdoIGFuY2llbnQgaW4gb3JpZ2luLCB0aGUgZGlzaCB1bmRlcndlbnQgYSByZXN1cmdlbmNlIG9mIHBvcHVsYXJpdHkgaW4gdGhlIDE5NjBzIGluIHRoZSBVbml0ZWQgU3RhdGVzIGR1ZSB0byBhIGdyZWF0ZXIgaW50ZXJlc3QgaW4gRnJlbmNoIGN1aXNpbmUuIEZyZW5jaCBvbmlvbiBzb3VwIG1heSBiZSBzZXJ2ZWQgYXMgYSBtZWFsIGluIGl0c2VsZiBvciBhcyBhIGZpcnN0IGNvdXJzZS4nO1xyXG4gICAgb25pb25Tb3VwUHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiAxMCQnO1xyXG4gICAgb25pb25Tb3VwSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltYWdlcy9mb29kL29uaW9uc291cC5qcGcnKTtcclxuICAgIG9uaW9uU291cEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdPbmlvbiBTb3VwJyk7XHJcbiAgICBcclxuICAgIG9uaW9uU291cC5hcHBlbmRDaGlsZChvbmlvblNvdXBINClcclxuICAgIG9uaW9uU291cC5hcHBlbmRDaGlsZChvbmlvblNvdXBEZXNjKVxyXG4gICAgb25pb25Tb3VwLmFwcGVuZENoaWxkKG9uaW9uU291cFByaWNlKVxyXG4gICAgb25pb25Tb3VwLmFwcGVuZENoaWxkKG9uaW9uU291cEltZylcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBSYXRhdG91aWxsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgUmF0YXRvdWlsbGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBSYXRhdG91aWxsZUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIGNvbnN0IFJhdGF0b3VpbGxlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IFJhdGF0b3VpbGxlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBSYXRhdG91aWxsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgXHJcbiAgICBSYXRhdG91aWxsZUg0LmlubmVySFRNTCA9ICdSYXRhdG91aWxsZSc7XHJcbiAgICBSYXRhdG91aWxsZURlc2MuaW5uZXJIVE1MID0gJ1JhdGF0b3VpbGxlICgvy4xyw6Z0yZnLiHR1y5BpLyBSQVQtyZktVE9PLWVlLCBGcmVuY2g6IFvKgWF0YXR1al07IE9jY2l0YW46IHJhdGF0b2xoYSBbyoBhdGHLiHR1yo7JlF0pIGlzIGEgRnJlbmNoIFByb3ZlbsOnYWwgZGlzaCBvZiBzdGV3ZWQgdmVnZXRhYmxlcywgb3JpZ2luYXRpbmcgaW4gTmljZSwgYW5kIHNvbWV0aW1lcyByZWZlcnJlZCB0byBhcyByYXRhdG91aWxsZSBuacOnb2lzZSAoRnJlbmNoOiBbbmlzd2F6XSkuWzFdIFJlY2lwZXMgYW5kIGNvb2tpbmcgdGltZXMgZGlmZmVyIHdpZGVseSwgYnV0IGNvbW1vbiBpbmdyZWRpZW50cyBpbmNsdWRlIHRvbWF0bywgZ2FybGljLCBvbmlvbiwgY291cmdldHRlICh6dWNjaGluaSksIGF1YmVyZ2luZSAoZWdncGxhbnQpLCBjYXBzaWN1bSAoYmVsbCBwZXBwZXIpLCBhbmQgc29tZSBjb21iaW5hdGlvbiBvZiBsZWFmeSBncmVlbiBoZXJicyBjb21tb24gdG8gdGhlIHJlZ2lvbi4nO1xyXG4gICAgUmF0YXRvdWlsbGVQcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDMyJCc7XHJcbiAgICBSYXRhdG91aWxsZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWFnZXMvZm9vZC9yYXRhdG91aWxsZS5qcGcnKTtcclxuICAgIFJhdGF0b3VpbGxlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1JhdGF0b3VpbGxlJyk7XHJcbiAgICBcclxuICAgIFJhdGF0b3VpbGxlLmFwcGVuZENoaWxkKFJhdGF0b3VpbGxlSDQpXHJcbiAgICBSYXRhdG91aWxsZS5hcHBlbmRDaGlsZChSYXRhdG91aWxsZURlc2MpXHJcbiAgICBSYXRhdG91aWxsZS5hcHBlbmRDaGlsZChSYXRhdG91aWxsZVByaWNlKVxyXG4gICAgUmF0YXRvdWlsbGUuYXBwZW5kQ2hpbGQoUmF0YXRvdWlsbGVJbWcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgQ3JvaXNzYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBDcm9pc3NhbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBDcm9pc3NhbnRINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBjb25zdCBDcm9pc3NhbnREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgQ3JvaXNzYW50UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBDcm9pc3NhbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIFxyXG4gICAgQ3JvaXNzYW50SDQuaW5uZXJIVE1MID0gJ0Nyb2lzc2FudCc7XHJcbiAgICBDcm9pc3NhbnREZXNjLmlubmVySFRNTCA9ICdBIGNyb2lzc2FudCAoVUs6IC/LiGtyd8qMc8mSzIMsIMuIa3J3w6ZzyZLMgy8sWzNdIFVTOiAva3LJmcuIc8mSbnQsIGtyd8mRy5DLiHPJksyDLywgRnJlbmNoOiBba8qBd2FzyZHMg10gKEFib3V0IHRoaXMgc291bmRsaXN0ZW4pKSBpcyBhIGJ1dHRlcnksIGZsYWt5LCB2aWVubm9pc2VyaWUgcGFzdHJ5IG9mIEF1c3RyaWFuIG9yaWdpbixbMV0gYnV0IG1vc3RseSBhc3NvY2lhdGVkIHdpdGggRnJhbmNlLiBDcm9pc3NhbnRzIGFyZSBuYW1lZCBmb3IgaXRzIGhpc3RvcmljYWwgY3Jlc2NlbnQgc2hhcGUgYW5kLCBsaWtlIG90aGVyIHZpZW5ub2lzZXJpZSwgYXJlIG1hZGUgb2YgYSBsYXllcmVkIHllYXN0LWxlYXZlbmVkIGRvdWdoLiBUaGUgZG91Z2ggaXMgbGF5ZXJlZCB3aXRoIGJ1dHRlciwgcm9sbGVkIGFuZCBmb2xkZWQgc2V2ZXJhbCB0aW1lcyBpbiBzdWNjZXNzaW9uLCB0aGVuIHJvbGxlZCBpbnRvIGEgdGhpbiBzaGVldCwgaW4gYSB0ZWNobmlxdWUgY2FsbGVkIGxhbWluYXRpbmcuIFRoZSBwcm9jZXNzIHJlc3VsdHMgaW4gYSBsYXllcmVkLCBmbGFreSB0ZXh0dXJlLCBzaW1pbGFyIHRvIGEgcHVmZiBwYXN0cnkuJztcclxuICAgIENyb2lzc2FudFByaWNlLmlubmVySFRNTCA9ICdQcmljZTogMi41MCQnO1xyXG4gICAgQ3JvaXNzYW50SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltYWdlcy9mb29kL2Nyb2lzc2FudC5qcGcnKTtcclxuICAgIENyb2lzc2FudEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdDcm9pc3NhbnQnKTtcclxuICAgIFxyXG4gICAgQ3JvaXNzYW50LmFwcGVuZENoaWxkKENyb2lzc2FudEg0KVxyXG4gICAgQ3JvaXNzYW50LmFwcGVuZENoaWxkKENyb2lzc2FudERlc2MpXHJcbiAgICBDcm9pc3NhbnQuYXBwZW5kQ2hpbGQoQ3JvaXNzYW50UHJpY2UpXHJcbiAgICBDcm9pc3NhbnQuYXBwZW5kQ2hpbGQoQ3JvaXNzYW50SW1nKVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGNyb3F1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY3JvcXVlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY3JvcXVlSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgY29uc3QgY3JvcXVlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGNyb3F1ZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgY3JvcXVlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBcclxuICAgIGNyb3F1ZUg0LmlubmVySFRNTCA9ICdDcm9xdWUgTW9uc2lldXInO1xyXG4gICAgY3JvcXVlRGVzYy5pbm5lckhUTUwgPSAnQSBjcm9xdWUgbW9uc2lldXIgKEZyZW5jaCBwcm9udW5jaWF0aW9uOiDigItba8qByZRrIG3JmXNqw7hdKSBpcyBhIGhvdCBzYW5kd2ljaCBtYWRlIHdpdGggaGFtIGFuZCBjaGVlc2UuIFRoZSBkaXNoIG9yaWdpbmF0ZWQgaW4gRnJlbmNoIGNhZsOpcyBhbmQgYmFycyBhcyBhIHF1aWNrIHNuYWNrLiBUaGUgbmFtZSBjb21lcyBmcm9tIHRoZSBGcmVuY2ggd29yZHMgY3JvcXVlIChcImJpdGXigJ0pIGFuZCBtb25zaWV1ciAoXCJtaXN0ZXJcIikuIFRoZSBmaXJzdCB0aW1lIHRoaXMgc2FuZHdpY2ggaXMga25vd24gdG8gaGF2ZSBhcHBlYXJlZCBvbiBhIFBhcmlzIGNhZsOpIG1lbnUgd2FzIGluIDE5MTAuJztcclxuICAgIGNyb3F1ZVByaWNlLmlubmVySFRNTCA9ICdQcmljZTogOCQnO1xyXG4gICAgY3JvcXVlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltYWdlcy9mb29kL2Nyb3F1ZS5qcGcnKTtcclxuICAgIGNyb3F1ZUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdDcm9xdWUgTW9uc2lldXInKTtcclxuICAgIFxyXG4gICAgY3JvcXVlLmFwcGVuZENoaWxkKGNyb3F1ZUg0KVxyXG4gICAgY3JvcXVlLmFwcGVuZENoaWxkKGNyb3F1ZURlc2MpXHJcbiAgICBjcm9xdWUuYXBwZW5kQ2hpbGQoY3JvcXVlUHJpY2UpXHJcbiAgICBjcm9xdWUuYXBwZW5kQ2hpbGQoY3JvcXVlSW1nKVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGNyZW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjcmVtZS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGNvbnN0IGNyZW1lSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgY29uc3QgY3JlbWVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgY3JlbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGNyZW1lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBcclxuICAgIGNyZW1lSDQuaW5uZXJIVE1MID0gJ0Nyw6htZSBicsO7bMOpZSc7XHJcbiAgICBjcmVtZURlc2MuaW5uZXJIVE1MID0gJ0Nyw6htZSBicsO7bMOpZSAoL8uMa3LJm20gYnJ1y5DLiGxlyaovOyBGcmVuY2ggcHJvbnVuY2lhdGlvbjog4oCLW2vKgcmbbSBiyoF5LmxlXSksIGFsc28ga25vd24gYXMgYnVybmVkIGNyZWFtLCBidXJudCBjcmVhbSBvciBUcmluaXR5IGNyZWFtLFsxXSBhbmQgdmlydHVhbGx5IGlkZW50aWNhbCB0byBjcmVtYSBjYXRhbGFuYSxbMl0gaXMgYSBkZXNzZXJ0IGNvbnNpc3Rpbmcgb2YgYSByaWNoIGN1c3RhcmQgYmFzZSB0b3BwZWQgd2l0aCBhIGxheWVyIG9mIGhhcmRlbmVkIGNhcmFtZWxpemVkIHN1Z2FyLiBJdCBpcyBub3JtYWxseSBzZXJ2ZWQgc2xpZ2h0bHkgY2hpbGxlZDsgdGhlIGhlYXQgZnJvbSB0aGUgY2FyYW1lbGl6aW5nIHByb2Nlc3MgdGVuZHMgdG8gd2FybSB0aGUgdG9wIG9mIHRoZSBjdXN0YXJkLCB3aGlsZSBsZWF2aW5nIHRoZSBjZW50ZXIgY29vbC4gVGhlIGN1c3RhcmQgYmFzZSBpcyB0cmFkaXRpb25hbGx5IGZsYXZvcmVkIHdpdGggdmFuaWxsYSBpbiBGcmVuY2ggY3Vpc2luZSwgYnV0IGNhbiBoYXZlIG90aGVyIGZsYXZvcmluZ3MuIEl0IGlzIHNvbWV0aW1lcyBnYXJuaXNoZWQgd2l0aCBmcnVpdC4nO1xyXG4gICAgY3JlbWVQcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDYkJztcclxuICAgIGNyZW1lSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltYWdlcy9mb29kL2NyZW1lYnJ1bGVlLmpwZycpO1xyXG4gICAgY3JlbWVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnQ3JlbWUgQnJ1bMOpw6knKTtcclxuICAgIFxyXG4gICAgY3JlbWUuYXBwZW5kQ2hpbGQoY3JlbWVINClcclxuICAgIGNyZW1lLmFwcGVuZENoaWxkKGNyZW1lRGVzYylcclxuICAgIGNyZW1lLmFwcGVuZENoaWxkKGNyZW1lUHJpY2UpXHJcbiAgICBjcmVtZS5hcHBlbmRDaGlsZChjcmVtZUltZylcclxuXHJcblxyXG5cclxuICAgIC8vQWN0dWFsIERpc3BsYXlcclxuICAgIGRpdk1lbnUuY2xhc3NMaXN0LmFkZCgnbm90c2hvdycpO1xyXG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChvbmlvblNvdXApO1xyXG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChSYXRhdG91aWxsZSk7XHJcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKENyb2lzc2FudCk7XHJcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKGNyb3F1ZSk7XHJcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKGNyZW1lKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2TWVudSk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XHJcblxyXG4gICAgY29uc3QgcmVteSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVteS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGNvbnN0IHJlbXlINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBjb25zdCByZW15VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCByZW15VGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgcmVteU1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCByZW15SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBcclxuICAgIHJlbXlINC5pbm5lckhUTUwgPSAnUmVteSc7XHJcbiAgICByZW15VGl0bGUuaW5uZXJIVE1MID0gJ0NoZWYgZGUgY3Vpc2luZSc7XHJcbiAgICByZW15VGVsLmlubmVySFRNTCA9ICc1NTUtMTExLTIyMjInO1xyXG4gICAgcmVteU1haWwuaW5uZXJIVE1MID0gJ2V4YW1wbGVAZW1haWwuY29tJztcclxuICAgIHJlbXlJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaW1hZ2VzL3JlbXkuanBnJyk7XHJcbiAgICByZW15SW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1JlbXknKTtcclxuICAgIFxyXG4gICAgcmVteS5hcHBlbmRDaGlsZChyZW15SDQpO1xyXG4gICAgcmVteS5hcHBlbmRDaGlsZChyZW15VGl0bGUpO1xyXG4gICAgcmVteS5hcHBlbmRDaGlsZChyZW15VGVsKTtcclxuICAgIHJlbXkuYXBwZW5kQ2hpbGQocmVteU1haWwpO1xyXG4gICAgcmVteS5hcHBlbmRDaGlsZChyZW15SW1nKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBjb2xldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb2xldHRlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY29sZXR0ZUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIGNvbnN0IGNvbGV0dGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGNvbGV0dGVUZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBjb2xldHRlTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGNvbGV0dGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIFxyXG4gICAgY29sZXR0ZUg0LmlubmVySFRNTCA9ICdDb2xldHRlJztcclxuICAgIGNvbGV0dGVUaXRsZS5pbm5lckhUTUwgPSAnU291cy1jaGVmJztcclxuICAgIGNvbGV0dGVUZWwuaW5uZXJIVE1MID0gJzU1NS0xMTEtMjIyMic7XHJcbiAgICBjb2xldHRlTWFpbC5pbm5lckhUTUwgPSAnZXhhbXBsZUBlbWFpbC5jb20nO1xyXG4gICAgY29sZXR0ZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWFnZXMvY29sZXR0ZS5qcGcnKTtcclxuICAgIGNvbGV0dGVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnQ29sZXR0ZScpO1xyXG4gICAgXHJcbiAgICBjb2xldHRlLmFwcGVuZENoaWxkKGNvbGV0dGVINCk7XHJcbiAgICBjb2xldHRlLmFwcGVuZENoaWxkKGNvbGV0dGVUaXRsZSk7XHJcbiAgICBjb2xldHRlLmFwcGVuZENoaWxkKGNvbGV0dGVUZWwpO1xyXG4gICAgY29sZXR0ZS5hcHBlbmRDaGlsZChjb2xldHRlTWFpbCk7XHJcbiAgICBjb2xldHRlLmFwcGVuZENoaWxkKGNvbGV0dGVJbWcpO1xyXG5cclxuXHJcbiAgICBjb25zdCBsaW5ndWluaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGluZ3VpbmkuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBsaW5ndWluaUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIGNvbnN0IGxpbmd1aW5pVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBsaW5ndWluaVRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGxpbmd1aW5pTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGxpbmd1aW5pSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBcclxuICAgIGxpbmd1aW5pSDQuaW5uZXJIVE1MID0gJ0xpbmd1aW5pJztcclxuICAgIGxpbmd1aW5pVGl0bGUuaW5uZXJIVE1MID0gJ093bmVyL1dhaXRlcic7XHJcbiAgICBsaW5ndWluaVRlbC5pbm5lckhUTUwgPSAnNTU1LTExMS0yMjIyJztcclxuICAgIGxpbmd1aW5pTWFpbC5pbm5lckhUTUwgPSAnZXhhbXBsZUBlbWFpbC5jb20nO1xyXG4gICAgbGluZ3VpbmlJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaW1hZ2VzL2xpbmd1aW5pLmpwZycpO1xyXG4gICAgbGluZ3VpbmlJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnTGluZ3VpbmknKTtcclxuICAgIFxyXG4gICAgbGluZ3VpbmkuYXBwZW5kQ2hpbGQobGluZ3VpbmlINCk7XHJcbiAgICBsaW5ndWluaS5hcHBlbmRDaGlsZChsaW5ndWluaVRpdGxlKTtcclxuICAgIGxpbmd1aW5pLmFwcGVuZENoaWxkKGxpbmd1aW5pVGVsKTtcclxuICAgIGxpbmd1aW5pLmFwcGVuZENoaWxkKGxpbmd1aW5pTWFpbCk7XHJcbiAgICBsaW5ndWluaS5hcHBlbmRDaGlsZChsaW5ndWluaUltZyk7XHJcbiAgICBcclxuICAgIGRpdkNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbm90c2hvdycpO1xyXG4gICAgZGl2Q29udGFjdC5hcHBlbmRDaGlsZChyZW15KTtcclxuICAgIGRpdkNvbnRhY3QuYXBwZW5kQ2hpbGQoY29sZXR0ZSk7XHJcbiAgICBkaXZDb250YWN0LmFwcGVuZENoaWxkKGxpbmd1aW5pKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2Q29udGFjdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VBY3RpdmUoYWRkMSwgcmVtMSwgcmVtMikge1xyXG4gICAgYWRkMS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHJlbTEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICByZW0yLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xyXG4gIHJlbW92ZUFsbCgpXHJcbiAgaWYgKGRpdkhvbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3RzaG93JykpIHtcclxuICAgIGRpdkhvbWUuY2xhc3NMaXN0LnJlbW92ZSgnbm90c2hvdycpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lbnUoKSB7XHJcbiAgcmVtb3ZlQWxsKClcclxuICBpZiAoZGl2TWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ25vdHNob3cnKSkge1xyXG4gICAgZGl2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdub3RzaG93Jyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdCgpIHtcclxuICByZW1vdmVBbGwoKVxyXG4gIGlmIChkaXZDb250YWN0LmNsYXNzTGlzdC5jb250YWlucygnbm90c2hvdycpKSB7XHJcbiAgICBkaXZDb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoJ25vdHNob3cnKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcclxuICBpZiAoIWRpdkhvbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3RzaG93JykpIHtcclxuICAgIGRpdkhvbWUuY2xhc3NMaXN0LmFkZCgnbm90c2hvdycpO1xyXG4gIH0gZWxzZSBpZiAoIWRpdk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3RzaG93JykpIHtcclxuICAgIGRpdk1lbnUuY2xhc3NMaXN0LmFkZCgnbm90c2hvdycpO1xyXG4gIH0gZWxzZSBpZiAoIWRpdkNvbnRhY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3RzaG93JykpIHtcclxuICAgIGRpdkNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbm90c2hvdycpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQodG9EaXNwbGF5KSB7XHJcbiAgdG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlDb250ZW50JylcclxufVxyXG5cclxuLy8gQWN0dWFsIENvZGVcclxuLy8gdmFyIGJhY2tncm91bmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuLy8gYmFja2dyb3VuZEltZy5zcmMgPSAnaW1hZ2VzL25pZ2h0UGFyaXMucG5nJztcclxuLy8gYmFja2dyb3VuZEltZ0hvbGRlci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1nKTtcclxuXHJcblxyXG5jcmVhdGVIZWFkZXIoKTtcclxuY3JlYXRlSG9tZSgpO1xyXG5jcmVhdGVNZW51KCk7XHJcbmNyZWF0ZUNvbnRhY3QoKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChpbWFnZXMvbmlnaHRQYXJpcy5wbmcpJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=