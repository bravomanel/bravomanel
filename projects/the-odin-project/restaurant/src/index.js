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