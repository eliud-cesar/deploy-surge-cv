// OBTENIENDO LOS ID DE: 

// - BOTON DE VER EL CV
const verCV = document.getElementById('vr-cv')
// - CV 
const CV = document.getElementById('cv')
// - BOTON DE OCULTAR EL CV
const quitarCV = document.getElementById('rm-cv')
// - CONTAINER DEL BOTON DE VER EL CV
const body = document.getElementById('body')





// CUANDO SE DE CLICK EN EL BOTON DE VER EL CV
verCV.addEventListener('click', () => {
    // QUITAR EL LA VISTA DEL CONTIANER DEL BOTON
    verCV.style.display="none"
    body.style.display="none"
    // DARLE LA CLASE PARA QUE SE VEA EL CV, ESTO CON AYUDA DE CSS
    CV.classList.add('active')
})

// CUANDO SE DE CLICK EN EL BOTON DE CERRAR LA VISTA DEL CV
quitarCV.addEventListener('click', () => {
    // DEVOLVERLE LA VISTA DEL CONTENIDO DEL BOTON DE VER EL CV
    verCV.style.display="block"
    body.style.display="flex"
    // QUITAMOS LA CLASE PARA YA NO VER EL CV
    CV.classList.remove('active')
})