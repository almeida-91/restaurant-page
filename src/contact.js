import footer from "./footer.js";
import navBar from "./navbar.js";
import icon1 from "./chef.svg";
import icon2 from "./waiter.svg";
import icon3 from "./treasurekeeper.svg";

export function contact(){
    navBar();
    const menuContact = document.getElementById('menuContact');
    menuContact.style.textDecoration = 'underline';

    const content = document.getElementById('content');

    // Each contact has a Function, email and phone number
    const contactContainer = document.createElement('div');

    // Contact 1:
    const contact1 = document.createElement('div');
    contact1.classList.add('contact');
    const contact1Image = new Image();
    contact1Image.style.height = '100px';
    contact1Image.src = icon1;
    contact1Image.classList.add('contactImage');
    contact1.innerHTML = "<p>The Chef</p><p>Phone: 123456789</p><p>E-mail: chefoftherestaurant@mail.com</p>";
    contact1.appendChild(contact1Image);

    contactContainer.appendChild(contact1);

    // Contact 2:
    const contact2 = document.createElement('div');
    contact2.classList.add('contact');
    const contact2Image = new Image();
    contact2Image.style.height = '100px';
    contact2Image.src = icon2;
    contact2Image.classList.add('contactImage');
    contact2.innerHTML = '<p>The Waiter</p><p>Phone: 012345678</p><p>E-mail: waiteroftherestaurant@mail.com</p>';
    contact2.appendChild(contact2Image);

    contactContainer.appendChild(contact2);

    // Contact 3:
    const contact3 = document.createElement('div');
    contact3.classList.add('contact');
    const contact3Image = new Image();
    contact3Image.style.height = '100px';
    contact3Image.src = icon3;
    contact3Image.classList.add('contactImage');
    contact3.innerHTML = '<p>The Treasurekeeper</p><p>Phone: 234567890</p><p>E-mail: treasurekeeperoftherestaurant@mail.com</p>';
    contact3.appendChild(contact3Image);

    contactContainer.appendChild(contact3);

    // Add contact container to content div
    content.appendChild(contactContainer);
    footer();
}