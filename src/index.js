import pageLoad from './page-load.js';
import mennu from './menu';
import {contact} from './contact';

// Load initial page
pageLoad();
//navBar();

export function navBar(){
    
    const content = document.getElementById('content');
    content.innerHTML = '';
    // Navbar
    const menu = document.createElement('div');

    // Homepage
    const menuHome = document.createElement('a');
    menuHome.href = '#';
    menuHome.innerHTML = 'Homepage';
    menuHome.addEventListener('click',pageLoad);
    menu.appendChild(menuHome);

    // Menu
    const menuMenu = document.createElement('a');
    menuMenu.href = '#';
    menuMenu.innerHTML = 'Menu';
    menuMenu.addEventListener('click',mennu);
    menu.appendChild(menuMenu);

    //Contact
    const menuContact = document.createElement('a');
    menuContact.href = '#';
    menuContact.innerHTML = 'Contact';
    menuContact.addEventListener('click',contact);
    menu.appendChild(menuContact);

    content.appendChild(menu);
}