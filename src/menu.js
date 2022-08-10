import footer from "./footer.js";
import navBar from "./navbar.js";

export default function mennu(){
    navBar();
    const content = document.getElementById('content');
    const plate1 = document.createElement('p');
    plate1.classList.add('plate');
    plate1.innerHTML = 'Plate of the day: Sardines';
    content.appendChild(plate1);
    footer();
};

