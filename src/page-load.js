import icon from './restaurant.jpg';
import navBar from './navbar.js';
import footer from './footer.js';

export default function pageLoad(){
    
    const content = document.getElementById('content');
    navBar();
    const menuHome = document.getElementById('menuHome');
    menuHome.style.textDecoration = 'underline';


    // Header    
    const headLine = document.createElement('h1');
    headLine.classList.add('title');

    headLine.innerHTML = "Ristorante";
    content.appendChild(headLine);
    
    // Image
    const image = new Image();
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');
    image.src= icon;
    
    imageContainer.appendChild(image);
    content.appendChild(imageContainer);

    // Credit for the image
    const imageCredit = document.createElement('p');
    imageCredit.innerHTML = `Photo taken by `;
    imageCredit.classList.add('credit');
    
    const creditLink = document.createElement('a')
    creditLink.href = "https://unsplash.com/@jaywennington";
    creditLink.classList.add('link');
    creditLink.innerHTML = "Jay Wennington";
    imageCredit.appendChild(creditLink);
    
    const imageLocation = document.createElement('span');    
    imageLocation.innerHTML = " on ";
    imageCredit.appendChild(imageLocation);

    const unsplash = document.createElement('a');
    unsplash.classList.add('link');
    unsplash.href = "https://unsplash.com/";
    unsplash.innerHTML = "Unsplash"; 
    imageCredit.appendChild(unsplash);

    content.appendChild(imageCredit);

    // Costumer Quote
    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('quoteContainer');
    const quoteTitle = document.createElement('h3');
    quoteTitle.innerHTML = "Here's a quote from one of our many satisfied customers:";
    quoteContainer.appendChild(quoteTitle);

    const customerQuote = document.createElement('p');
    customerQuote.innerHTML = `"<em>When I saw my plate I knew I was inside a gourmet restaurant,
    after all, the plate could fit <strong>five</strong> times the food that was there!"<em>
    <p></p><p> - Random Customer</p>`
    quoteContainer.appendChild(customerQuote);

    content.appendChild(quoteContainer);
    footer();
}