import footer from "./footer.js";
import navBar from "./navbar.js";
import plateIcon from "./dish.png";

export default function mennu(){
    navBar();
    const menuMenu = document.getElementById('menuMenu');
    menuMenu.style.textDecoration = 'underline';
    const content = document.getElementById('content');

    // Create container for the plates
    const plateContainer = document.createElement('div');
    plateContainer.classList.add('plateContainer');
    // Create image for plate
    const platePicture = new Image();
    platePicture.src = plateIcon;
    platePicture.style.height = '100px';

    // Each plate must have a picture, a name and a price

    // Plate 1
    const plate1 = document.createElement('div');
    plate1.appendChild(platePicture);
    plate1.classList.add('plate');


    const plate1Name = document.createElement('p');
    plate1Name.innerHTML = 'Empty Glass';
    const plate1Price = document.createElement('p');
    plate1Price.innerHTML = 'Price: 30$';
    
    plate1.appendChild(plate1Name);
    plate1.appendChild(plate1Price);

    plateContainer.appendChild(plate1);


    // Plate 2
    const plate2Picture = new Image();
    plate2Picture.src = plateIcon;
    plate2Picture.style.height = '100px';

    const plate2 = document.createElement('div');
    plate2.appendChild(plate2Picture);
    plate2.classList.add('plate');


    const plate2Name = document.createElement('p');
    plate2Name.innerHTML = 'Food plate <p>(with extra space)</p>';
    plate2Name.style.textAlign = 'center';
    const plate2Price = document.createElement('p');
    plate2Price.innerHTML = 'Price: 120$';
    
    plate2.appendChild(plate2Name);
    plate2.appendChild(plate2Price);

    plateContainer.appendChild(plate2);


    // Plate 3
    const plate3Picture = new Image();
    plate3Picture.src = plateIcon;
    plate3Picture.style.height = '100px';

    const plate3 = document.createElement('div');
    plate3.appendChild(plate3Picture);
    plate3.classList.add('plate');


    const plate3Name = document.createElement('p');
    plate3Name.innerHTML = `Sauce`;
    const plate3Price = document.createElement('p');
    plate3Price.innerHTML = 'Price: 80$';
    
    plate3.appendChild(plate3Name);
    plate3.appendChild(plate3Price);

    plateContainer.appendChild(plate3);


    // Append the plate container to content
    content.appendChild(plateContainer);
    footer();
};

