export default function footer(){
    const content = document.getElementById('content');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    const backgroundCredit = document.createElement('a');
    backgroundCredit.classList.add('link');
    backgroundCredit.href = "https://www.freepik.com/";
    backgroundCredit.innerHTML = "Background image from Freepik";
    footer.appendChild(backgroundCredit);

    content.appendChild(footer);
}