export default function footer(){
    const content = document.getElementById('content');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    const backgroundCredit = document.createElement('a');
    backgroundCredit.classList.add('link');
    backgroundCredit.href = "https://www.freepik.com/";
    backgroundCredit.innerHTML = "Background image from Freepik";
    footer.appendChild(backgroundCredit);

    const iconCredit = document.createElement('a');
    iconCredit.classList.add('link');
    iconCredit.href = "https://www.flaticon.com/";
    iconCredit.innerHTML = "Icon images from Flaticon";
    footer.appendChild(iconCredit);

    content.appendChild(footer);
}