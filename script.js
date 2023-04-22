const mobileMenuButton = document.getElementById('mobileMenuButton');
const navMobile = document.getElementById('navMobile');
const aboutmeMobileMenuLink = document.getElementById('aboutmeMobileMenuLink');
const projectsMobileMenuLink = document.getElementById('projectsMobileMenuLink');
const contactMobileMenuLink = document.getElementById('contactMobileMenuLink');

const clickButtonHandler = () => {
   mobileMenuButton.classList.toggle("change");
   navMobile.classList.toggle("navMenuTransition");

}

mobileMenuButton.addEventListener('click', clickButtonHandler)

aboutmeMobileMenuLink.addEventListener('click', clickButtonHandler)
projectsMobileMenuLink.addEventListener('click', clickButtonHandler)
contactMobileMenuLink.addEventListener('click', clickButtonHandler)