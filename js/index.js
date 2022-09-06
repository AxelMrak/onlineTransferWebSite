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
 * * Extraemos del DOM
 */
const cotizacionInNavbar = document.getElementById('cotizacion-nav');


/**
 * * Hacemos aparecer una alerta que le dirá al usuario como pedir una cotizacion.
 * @param {evento} event 
 * * Colocamos el listener del evento
 */
const cotizacionEvent = event => {
    event.preventDefault();
    swal('Para solicitar una cotización por favor comunicate por Whatsapp (Adjunte el tipo de servicio y destino)', {
        icon: 'info',
        buttons: ['Salir', 'Ok'],
      });
}

cotizacionInNavbar.addEventListener('click', cotizacionEvent)