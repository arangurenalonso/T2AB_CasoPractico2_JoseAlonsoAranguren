const seccionesPag = new fullpage('#fullpage', {
    // ──────────────────────────────────────────────────
    //   :::::: Opciones Básicas
    // ──────────────────────────────────────────────────
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 400,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: true,
    // ──────────────────────────────────────────────────
    //   :::::: Barra de navegación
    // ──────────────────────────────────────────────────
    navigation: true,
    menu: '#menu',
    anchors: ['inicio', 'nosotros', 'servicios', 'contacto', ],
    navigationTooltips: ['Inicio', 'Nosotros', 'Servicio', 'Contacto'],
    showActiveTooltip: false,
    // ──────────────────────────────────────────────────
    //   :::::: Secciones
    // ──────────────────────────────────────────────────
    sectionsColor: ['#c2c2c2', '#c2c2c2', '#c2c2c2', 'white'], // Color de fondo de cada seccion.
    verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
    // ──────────────────────────────────────────────────
    //   :::::: Slides
    // ──────────────────────────────────────────────────
    controlArrows: true, 
    slidesNavigation: true, 
    // ──────────────────────────────────────────────────
    //   :::::: Animaciones (Callbacks de FullPage.js)
    // ──────────────────────────────────────────────────
    afterLoad: function (origin, destination) {
        if (destination.anchor == 'contacto') {
            document.querySelector('.footer-Titutlo').style.opacity = 1;
        }
    }

});