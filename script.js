const mobileMenuButton = document.getElementById('mobileMenuButton');
const navMobile = document.getElementById('navMobile');
const aboutmeMobileMenuLink = document.getElementById('aboutmeMobileMenuLink');
const projectsMobileMenuLink = document.getElementById('projectsMobileMenuLink');
const contactMobileMenuLink = document.getElementById('contactMobileMenuLink');
const ageline = document.getElementById('ageline');

const clickButtonHandler = () => {
   mobileMenuButton.classList.toggle("change");
   navMobile.classList.toggle("navMenuTransition");
}

const age = () => {
   const date = new Date();
   const year = date.getFullYear();
   const month = date.getMonth();
   const day = date.getDate();
   let age;
   if (month < 5) {
      age = year - 2001;
   } else if (month === 5 && day < 7) {
      age = year - 2001;
   } else {
      age = year - 2000;
   }
   ageline.innerHTML = age + " Years Old from Rio de Janeiro";
}

age();

mobileMenuButton.addEventListener('click', clickButtonHandler)
aboutmeMobileMenuLink.addEventListener('click', clickButtonHandler)
projectsMobileMenuLink.addEventListener('click', clickButtonHandler)
contactMobileMenuLink.addEventListener('click', clickButtonHandler)