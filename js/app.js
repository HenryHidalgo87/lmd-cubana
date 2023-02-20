window.sr = ScrollReveal();

/*-------Header------------*/
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px',
  });

sr.reveal('.banner', {
    duration: 3000,
    origin: 'right',
    distance: '-100px',
  });

  sr.reveal('.header', { 
    easing: 'ease-in',
    duration: 2000, 
    delay: 1500
  });

sr.reveal('.anexos-accordion', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
  });

sr.reveal('.header-btn', {
    duration: 2000,
    delay: 2000, 
    origin: 'bottom'
  });

/*--SEPARADOR FRASE--*/ 
sr.reveal('.autor', {
    duration: 3000,
    origin: 'left',
    distance: '-300px',
  });

  sr.reveal('#frase', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
  });


/*----------SECCION SERVICIOS-----*/
sr.reveal('.jumbotron', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    delay: 500,
    viewFactor: 0.2
  });
  sr.reveal('#h1servicios', {
    duration: 1999,
    delay: 1999, 
    origin: 'bottom'
  });

/*---------QUIENES SOMOS----------*/
sr.reveal('#tituloacerca', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});


/*----------SECCION ACERCA-----*/
sr.reveal('#h1blog', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px',
  });

  sr.reveal('#pblog', {
    duration: 1500,
    origin: 'bottom',
    distance: '100px',
    delay: 100,
  });

/*----------SECCION ACERCA-----*/

sr.reveal('.img-logo', { 
  easing: 'ease-in',
  duration: 3000, 
});

/*----------CONTACT-----------*/
sr.reveal('#contact', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px',
});

