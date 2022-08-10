import { contact } from "./contact.js";
import mennu from "./menu.js";
import pageLoad from "./page-load.js";
import backgroundImg from "./background.jpg";

export default function navBar(){
    const content = document.getElementById('content');
    const body = document.getElementsByTagName('body');
    content.innerHTML = '';

    // Add Background
    document.body.style.backgroundImage = `url(${backgroundImg})`;
    
    const menu = document.createElement('div');
    menu.classList.add("menuContainer");

    // Homepage Link
    const menuHome = document.createElement('a');
    menuHome.href = '#';
    menuHome.innerHTML = 'Homepage';
    menuHome.addEventListener('click',pageLoad);
    menu.appendChild(menuHome);

    // Menu Link
    const menuMenu = document.createElement('a');
    menuMenu.href = '#';
    menuMenu.innerHTML = 'Menu';
    menuMenu.addEventListener('click',mennu);
    menu.appendChild(menuMenu);

    // Contact Link
    const menuContact = document.createElement('a');
    menuContact.href = '#';
    menuContact.innerHTML = 'Contact';
    menuContact.addEventListener('click', contact);
    menu.appendChild(menuContact);

    content.appendChild(menu);
}