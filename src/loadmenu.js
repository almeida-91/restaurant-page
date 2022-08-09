/* import pageLoad from "./page-load";
import mennu from "./menu";
import { contact } from "./contact";

export default function navBar(){
    
    const content = document.getElementById('content');
    content.innerHTML = '';
    // Navbar
    const menu = document.createElement('div');

    // Homepage
    const menuHome = document.createElement('button');
    menuHome.innerHTML = 'Homepage';
    menuHome.addEventListener('click',pageLoad);
    menu.appendChild(menuHome);

    // Menu
    const menuMenu = document.createElement('button');
    menuMenu.innerHTML = 'Menu';
    menuMenu.addEventListener('click',mennu);
    menu.appendChild(menuMenu);

    //Contact
    const menuContact = document.createElement('button');
    menuContact.innerHTML = 'Contact';
    menuContact.addEventListener('click',contact);
    menu.appendChild(menuContact);

    content.appendChild(menu);
} */