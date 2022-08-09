import icon from './restaurant.jpg';
import {navBar} from '.';

export default function pageLoad(){
    
    const content = document.getElementById('content');
    content.innerHTML = '';
    navBar();

    // Header    
    const headLine = document.createElement('h1');

    headLine.innerHTML = "Restaurant Name";
    content.appendChild(headLine);
    
    // Image
    const image = new Image();
    image.src= icon;
    content.appendChild(image);

    // Credit for the image
    const imageCredit = document.createElement('p');
    imageCredit.innerHTML = "Photo taken by ";
    content.appendChild(imageCredit);
    
    const creditLink = document.createElement('a')
    creditLink.href = "https://unsplash.com/@jaywennington";
    creditLink.innerHTML = "Jay Wennington";
    imageCredit.appendChild(creditLink);
    
    const imageLocation = document.createElement('span');    
    imageLocation.innerHTML = " on ";
    imageCredit.appendChild(imageLocation);

    const unsplash = document.createElement('a');
    unsplash.href = "https://unsplash.com/";
    unsplash.innerHTML = "Unsplash"; 
    imageCredit.appendChild(unsplash);

    // Costumer Quote
    const quoteTitle = document.createElement('h3');
    quoteTitle.innerHTML = "Heres a quote from one of our many satisfied customers:";
    content.appendChild(quoteTitle);

    const customerQuote = document.createElement('p');
    customerQuote.innerHTML = `<em>When I saw my plate I knew I was inside a gourmet restaurant,
    after all, the plate could fit <strong>five</strong> times the food that was there!<em>`
    content.appendChild(customerQuote);
}