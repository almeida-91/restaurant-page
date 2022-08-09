import { navBar } from ".";

export default function mennu(){
    console.log('success!');
    const content = document.getElementById('content');
    content.innerHTML = '';
    navBar();
    const plate1 = document.createElement('p');
    plate1.innerHTML = 'Plate of the day: Sardines';
    content.appendChild(plate1); 
};

