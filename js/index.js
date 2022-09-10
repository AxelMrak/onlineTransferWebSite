/**
 * * Extraemos del DOM las secciones con la clase to-appear
 */
const sections = document.querySelectorAll(`.to-appear`);

/**
 * * Luego recorremos todos los elementos y por cada uno, junto con sus respectivos calculos, vamos calculando cuando la ventana esta a punto de llegar para cambiarle el estilo.
 * * Luego agregamos el evento scroll y lo enlazamos a lo anterior.
 */
sections.forEach(section => {
    const appearSections = event => {
        let positionSection = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight / 1;
        if (positionSection < screenHeight) {
            section.style.transition = `all 0.5s`; //Set transition for smooth effect
            section.style.opacity = `1`; //Appear
        } else {
            section.style.transition = `all 1s`;
            section.style.opacity = `0`;
        }
    };
    window.addEventListener(`scroll`, appearSections);
});

/** 
 * * Traduccion
 * ? Esto realiza la traduccion de la pagina, depende de que bandera toques.
 * ? Se hace un reemplazo de la etiqueta HTML con los datos del JSON correspondiente al idioma.
*/

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async lang => {
    const requestJson = await fetch(`./languages/${lang}.json`);
    const texts = await requestJson.json();

    for(const text of textsToChange){
        const section = text.dataset.section;
        const value = text.dataset.value;

        text.innerHTML = texts[section][value];
    }
    
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language)
})

/**
 * 
 * 
 */

const quotationAnchor = document.getElementById('price-quotation');
const alert = document.getElementById('alert-price-quotation');
const closeButton = document.getElementById('close-btn');

const alertAppear = e => {
    e.preventDefault();
    alert.style.display = 'unset';
}

const alertDisappear = e => {
    e.preventDefault();
    alert.style.display='none';
}

quotationAnchor.addEventListener('click', alertAppear);
closeButton.addEventListener('click', alertDisappear);