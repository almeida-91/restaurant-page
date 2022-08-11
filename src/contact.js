import footer from "./footer.js";
import navBar from "./navbar.js";

export function contact(){
    navBar();
    const menuContact = document.getElementById('menuContact');
    menuContact.style.textDecoration = 'underline';

    const content = document.getElementById('content');
    footer();
}