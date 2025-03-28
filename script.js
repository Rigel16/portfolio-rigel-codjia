// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#2563eb'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#2563eb',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Animations avec GSAP
document.addEventListener('DOMContentLoaded', () => {
    // Animation du header
    gsap.to('.name', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.to('.title', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out'
    });

    // Animation des sections
    gsap.utils.toArray('.section').forEach((section, i) => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.4 + (i * 0.2),
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animation des barres de progression
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        gsap.to(bar, {
            width: width + '%',
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top bottom-=50',
                toggleActions: 'play none none reverse'
            }
        });
    });
});

// Changement de thème
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        root.style.setProperty('--primary', '#60a5fa');
        root.style.setProperty('--secondary', '#3b82f6');
        root.style.setProperty('--text', '#f3f4f6');
        root.style.setProperty('--light', '#1f2937');
        document.body.style.background = '#111827';
        themeToggle.textContent = '☀️';
    } else {
        root.style.setProperty('--primary', '#2563eb');
        root.style.setProperty('--secondary', '#1e40af');
        root.style.setProperty('--text', '#1f2937');
        root.style.setProperty('--light', '#f3f4f6');
        document.body.style.background = '#f3f4f6';
        themeToggle.textContent = '🌙';
    }
});

// Animation des compétences au survol
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Animation de la timeline d'expérience
const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach(item => {
    gsap.from(item, {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animation des contacts
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        x: -30,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: item,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animation du scroll indicator
gsap.to('.scroll-indicator', {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Masquer le scroll indicator après le défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        gsap.to('.scroll-indicator', {
            opacity: 0,
            duration: 0.3
        });
    } else {
        gsap.to('.scroll-indicator', {
            opacity: 0.7,
            duration: 0.3
        });
    }
});

// Easter egg - Animation spéciale sur triple clic du logo
let clickCount = 0;
const profileImg = document.querySelector('.profile-img');
profileImg.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 3) {
        gsap.to(profileImg, {
            rotation: 360 * 2,
            duration: 1,
            ease: 'power2.out'
        });
        clickCount = 0;
    }
});


// Nouveaux scripts
gsap.registerPlugin(ScrollTrigger);

// Initialisation de Typed.js
new Typed('.title', {
    strings: ['Développeur Web Full Stack', 'En recherche d\'alternance pour septembre 2025', 'Passionné par le code'],
    typeSpeed: 60000,     // Vitesse de frappe (en millisecondes)
    backSpeed: 60000,      // Vitesse d'effacement
    startDelay: 100,    // Délai avant le démarrage
    backDelay: 1500,    // Pause avant de supprimer le texte
    loop: true ,         // Boucle l'animation
    
});



// Animation du menu flottant
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const section = document.getElementById(item.dataset.section);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Animation des cartes de projet
gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// Système de notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    gsap.to(notification, {
        x: 0,
        duration: 0.5,
        ease: 'power2.out'
    });

    setTimeout(() => {
        gsap.to(notification, {
            x: '200%',
            duration: 0.5,
            ease: 'power2.in'
        });
    }, 3000);
}

// Changement de langue
document.getElementById('language-select').addEventListener('change', function(e) {
    const lang = e.target.value;
    // Simuler le changement de langue
    showNotification(`Langue changée en ${lang}`);
});

// Animation parallaxe pour les sections
gsap.utils.toArray('.parallax-section').forEach(section => {
    const layers = section.querySelectorAll('.parallax-layer');
    layers.forEach((layer, i) => {
        const speed = 1 + i * 0.2;
        gsap.to(layer, {
            y: `-${30 * speed}%`,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
});

// Animation des achievements
const achievements = document.querySelectorAll('.achievement-item');
achievements.forEach(achievement => {
    gsap.from(achievement, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: achievement,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// Effet de parallaxe sur le scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-layer');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animation des certificats
gsap.utils.toArray('.certificate-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Easter egg - Konami Code
let konamiCode = [];
const correctCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
window.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    if (konamiCode.length > correctCode.length) {
        konamiCode.shift();
    }
    if (JSON.stringify(konamiCode) === JSON.stringify(correctCode)) {
        activateMatrixMode();
    }
});

function activateMatrixMode() {
    document.body.style.transition = 'all 0.5s';
    const matrix = document.createElement('canvas');
    matrix.style.position = 'fixed';
    matrix.style.top = '0';
    matrix.style.left = '0';
    matrix.style.zIndex = '1';
    matrix.style.opacity = '0.1';
    document.body.prepend(matrix);

    const ctx = matrix.getContext('2d');
    matrix.width = window.innerWidth;
    matrix.height = window.innerHeight;

    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');
    const fontSize = 10;
    const columns = matrix.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, matrix.width, matrix.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > matrix.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);
    showNotification('Mode Matrix activé! 🕶️');
}

// Animation 3D des compétences
const skills3D = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

function init3DSkills() {
    const container = document.querySelector('.skill-3d-container');
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0x2563eb }),
        new THREE.MeshBasicMaterial({ color: 0x1e40af }),
        new THREE.MeshBasicMaterial({ color: 0x1d4ed8 }),
        new THREE.MeshBasicMaterial({ color: 0x2563eb }),
        new THREE.MeshBasicMaterial({ color: 0x1e40af }),
        new THREE.MeshBasicMaterial({ color: 0x1d4ed8 })
    ];
    const cube = new THREE.Mesh(geometry, materials);
    skills3D.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(skills3D, camera);
    }
    animate();
}

// Système de progression du scroll
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '3px';
progressBar.style.backgroundColor = 'var(--primary)';
progressBar.style.zIndex = '1000';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// Animation des compétences avec masque de défilement
const skillMasks = document.querySelectorAll('.skill-item');
skillMasks.forEach(mask => {
    const gradient = document.createElement('div');
    gradient.classList.add('skill-gradient');
    mask.appendChild(gradient);

    mask.addEventListener('mousemove', (e) => {
        const rect = mask.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 50%)`;
    });
});

// Initialisation des tooltips
const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = element.dataset.tooltip;
        document.body.appendChild(tooltip);

        const rect = element.getBoundingClientRect();
        tooltip.style.position = 'fixed';
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
        
        gsap.from(tooltip, {
            opacity: 0,
            y: 10,
            duration: 0.3
        });
    });

    element.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            gsap.to(tooltip, {
                opacity: 0,
                y: 10,
                duration: 0.3,
                onComplete: () => tooltip.remove()
            });
        }
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    init3DSkills();
    showNotification('CV chargé avec succès! 🚀');
});


const translations = {
    fr: {
        title: "Développeur Web Full Stack",
        subtitle: "En recherche d'alternance",
        competences: "Compétences",
        experience: "Expérience",
        formation: "Formation",
        contact: "Contact",
        projets: "Projets",
        
        frontend: "Front-end",
        backend: "Back-end", 
        frameworks: "Frameworks",
        outils: "Outils",

        projetTitle: {
            alternance: "Alternance",
            projetPersonnel: "Projets Personnels", 
            jobEtudiant: "Job étudiant"
        },
        projetDesc: {
            alternance: "Développeur Web et Community Manager en Alternance à Mackiona & Fils (2023 - 2024)",
            projetWebHeroTech: "Création du site web de WebHeroTech",
            jobBurgerKing: "Employé polyvalent chez Burger King Contrat étudiant (2021 - 2023)"
        },
        formationTitle: {
            webAcademie: "WEB@CADEMIE BY EPITECH",
            studi: "STUDI",
            euraTechnologie: "EURATECHNOLOGIE", 
            universitelille: "Université de lille Cité scientifique"
        },
        formationDesc: {
            webAcademie: "Intégrateur-développeur web 2024 - 2026",
            studi: "Devops 2023 - 2024",
            euraTechnologie: "B-TECH Mars 2024 - Avril 2024",
            universitelille: "Maths-Info 2020 - 2023"
        },
        projetsDesc: {
            webHeroTech: "Développement et déploiement du site web complet webherotech avec des technologies modernes.",
            myTwitter: "Application web inspirée de Twitter, utilisant React pour le front-end et Laravel pour le back-end, avec une fonctionnalité de messagerie privée permettant aux utilisateurs d'échanger des messages en toute confidentialité.",
            mySpotify: "Clone de Spotify créé avec React pour l'interface utilisateur et Docker pour garantir une portabilité maximale de l'application.",
            puissance4: "Jeu de Puissance 4 sous forme de plugin interactif, développé en HTML, CSS et JavaScript, facile à intégrer dans une page web.",
            myMeetic: "Plateforme de rencontres développée avec HTML, CSS, et JavaScript pour l'interface, et PHP avec MySQL pour la gestion des profils et des messages.",
            myCinema: "Site de gestion de films avec un back-end PHP et une base de données MySQL, offrant une interface responsive en HTML, CSS, et JavaScript.",
            frameworkCss: "Création d'un framework CSS personnalisé avec des composants modulaires en HTML, CSS, JavaScript et SASS pour un design responsive",
            cssGenerator: "Générateur de code CSS dynamique avec une interface intuitive en HTML, CSS, et JavaScript, et un back-end PHP pour des fonctionnalités avancées."
        },

        experienceDesc1: "Développement et maintenance de sites web (HTML, CSS, JavaScript, PHP, MySQL).",
        experienceDesc2: "Gestion des réseaux sociaux : création de contenu, animation de communauté et analyse des performances.",
        experienceDesc3: "Collaboration avec les équipes marketing et techniques pour aligner les objectifs stratégiques.",
        experienceDesc4: "Optimisation de l'expérience utilisateur (UX) et référencement naturel (SEO).",
        experienceDesc5: "Utilisation d'outils de gestion de contenu (WordPress, etc.) et de suivi des réseaux sociaux.",
        
        projetPersonnelDesc1: "Conception et développement complet du site web en autonomie (front-end et back-end).",
        projetPersonnelDesc2: "Optimisation du référencement naturel (SEO) et de l'expérience utilisateur (UX).",
        projetPersonnelDesc3: "Gestion de l'hébergement, de la maintenance et des mises à jour techniques.",
        projetPersonnelDesc4: "Projet réalisé dans le cadre de mon activité de freelance, démontrant ma capacité à mener un projet de A à Z.",
        
        jobEtudiantDesc1: "Accueil des clients et gestion de la prise de commande.",
        jobEtudiantDesc2: "Préparation des repas en respectant les normes d'hygiène et de sécurité.",
        jobEtudiantDesc3: "Gestion des stocks et réapprovisionnement des zones de travail.",

        regarderVideo: "Regarder la video",
        envoyerMessage: "Envoyer",
        nomFormulaire: "Votre Nom",
        emailFormulaire: "Votre Email", 
        messageFormulaire: "Votre Message"
    },
    en: {
        title: "Full Stack Web Developer",
        subtitle: "Looking for Work-Study Program",
        competences: "Skills",
        experience: "Experience",
        formation: "Education",
        contact: "Contact",
        projets: "Projects",
        
        frontend: "Front-end",
        backend: "Back-end", 
        frameworks: "Frameworks",
        outils: "Tools",

        projetTitle: {
            alternance: "Internship",
            projetPersonnel: "Personal Projects", 
            jobEtudiant: "Student Job"
        },
        projetDesc: {
            alternance: "Web Developer and Community Manager Internship at Mackiona & Fils (2023 - 2024)",
            projetWebHeroTech: "WebHeroTech website creation",
            jobBurgerKing: "Versatile Employee at Burger King Student Contract (2021 - 2023)"
        },

        formationTitle: {
            webAcademie: "WEB@CADEMIE BY EPITECH",
            studi: "STUDI",
            euraTechnologie: "EURATECHNOLOGIE", 
            universitelille: "University of Lille Scientific City"
        },
        formationDesc: {
            webAcademie: "Web Integrator-Developer 2024 - 2026",
            studi: "Devops 2023 - 2024",
            euraTechnologie: "B-TECH March 2024 - April 2024",
            universitelille: "Math-Info 2020 - 2023"
        },

        projetsDesc: {
            webHeroTech: "Development and deployment of complete WebHeroTech website using modern technologies.",
            myTwitter: "Web application inspired by Twitter, using React for the front-end and Laravel for the back-end, with a private messaging feature allowing users to exchange messages confidentially.",
            mySpotify: "Spotify clone created with React for the user interface and Docker to ensure maximum application portability.",
            puissance4: "Connect Four game in the form of an interactive plugin, developed in HTML, CSS and JavaScript, easy to integrate into a web page.",
            myMeetic: "Dating platform developed with HTML, CSS, and JavaScript for the interface, and PHP with MySQL for profile and message management.",
            myCinema: "Movie management site with a PHP back-end and MySQL database, offering a responsive interface in HTML, CSS, and JavaScript.",
            frameworkCss: "Creation of a custom CSS framework with modular components in HTML, CSS, JavaScript and SASS for a responsive design",
            cssGenerator: "Dynamic CSS code generator with an intuitive interface in HTML, CSS, and JavaScript, and a PHP back-end for advanced features."
        },

        experienceDesc1: "Development and maintenance of websites (HTML, CSS, JavaScript, PHP, MySQL).",
        experienceDesc2: "Social media management: content creation, community management, and performance analysis.",
        experienceDesc3: "Collaboration with marketing and technical teams to align strategic goals.",
        experienceDesc4: "Optimization of user experience (UX) and natural referencing (SEO).",
        experienceDesc5: "Use of content management tools (WordPress, etc.) and social media tracking tools.",
        
        projetPersonnelDesc1: "Complete design and development of the website autonomously (front-end and back-end).",
        projetPersonnelDesc2: "Optimization of natural referencing (SEO) and user experience (UX).",
        projetPersonnelDesc3: "Management of hosting, maintenance, and technical updates.",
        projetPersonnelDesc4: "Project carried out as part of my freelance activity, demonstrating my ability to lead a project from A to Z.",
        
        jobEtudiantDesc1: "Customer reception and order management.",
        jobEtudiantDesc2: "Meal preparation while respecting hygiene and safety standards.",
        jobEtudiantDesc3: "Stock management and restocking of work areas.",

        regarderVideo: "Watch the video",
        envoyerMessage: "Send",
        nomFormulaire: "Your Name",
        emailFormulaire: "Your Email", 
        messageFormulaire: "Your Message"
    },
    es: {
        title: "Desarrollador Web Full Stack",
        subtitle: "Buscando programa de formación dual",
        competences: "Habilidades",
        experience: "Experiencia",
        formation: "Educación",
        contact: "Contacto",
        projets: "Proyectos",
        
        frontend: "Front-end",
        backend: "Back-end", 
        frameworks: "Frameworks",
        outils: "Herramientas",

        projetTitle: {
            alternance: "Pasantía",
            projetPersonnel: "Proyectos Personales", 
            jobEtudiant: "Trabajo de Estudiante"
        },
        projetDesc: {
            alternance: "Desarrollador Web y Community Manager en Pasantía en Mackiona & Fils (2023 - 2024)",
            projetWebHeroTech: "Creación del sitio web de WebHeroTech",
            jobBurgerKing: "Empleado versátil en Burger King Contrato de Estudiante (2021 - 2023)"
        },

        formationTitle: {
            webAcademie: "WEB@CADEMIE BY EPITECH",
            studi: "STUDI",
            euraTechnologie: "EURATECHNOLOGIE", 
            universitelille: "Universidad de Lille Ciudad Científica"
        },
        formationDesc: {
            webAcademie: "Integrador-Desarrollador Web 2024 - 2026",
            studi: "Devops 2023 - 2024",
            euraTechnologie: "B-TECH Marzo 2024 - Abril 2024",
            universitelille: "Matemáticas-Informática 2020 - 2023"
        },

        projetsDesc: {
            webHeroTech: "Desarrollo e implementación del sitio web completo de WebHeroTech utilizando tecnologías modernas.",
            myTwitter: "Aplicación web inspirada en Twitter, utilizando React para el front-end y Laravel para el back-end, con una función de mensajería privada que permite a los usuarios intercambiar mensajes de forma confidencial.",
            mySpotify: "Clon de Spotify creado con React para la interfaz de usuario y Docker para garantizar la máxima portabilidad de la aplicación.",
            puissance4: "Juego de Conecta Cuatro en forma de complemento interactivo, desarrollado en HTML, CSS y JavaScript, fácil de integrar en una página web.",
            myMeetic: "Plataforma de citas desarrollada con HTML, CSS y JavaScript para la interfaz, y PHP con MySQL para la gestión de perfiles y mensajes.",
            myCinema: "Sitio de gestión de películas con back-end PHP y base de datos MySQL, que ofrece una interfaz receptiva en HTML, CSS y JavaScript.",
            frameworkCss: "Creación de un framework CSS personalizado con componentes modulares en HTML, CSS, JavaScript y SASS para un diseño responsivo",
            cssGenerator: "Generador de código CSS dinámico con una interfaz intuitiva en HTML, CSS y JavaScript, y un back-end PHP para funciones avanzadas."
        },

        experienceDesc1: "Desarrollo y mantenimiento de sitios web (HTML, CSS, JavaScript, PHP, MySQL).",
        experienceDesc2: "Gestión de redes sociales: creación de contenido, gestión de la comunidad y análisis del rendimiento.",
        experienceDesc3: "Colaboración con los equipos de marketing y técnicos para alinear los objetivos estratégicos.",
        experienceDesc4: "Optimización de la experiencia del usuario (UX) y posicionamiento SEO.",
        experienceDesc5: "Uso de herramientas de gestión de contenido (WordPress, etc.) y de seguimiento en redes sociales.",
        
        projetPersonnelDesc1: "Diseño y desarrollo completo del sitio web de forma autónoma (front-end y back-end).",
        projetPersonnelDesc2: "Optimización del posicionamiento SEO y de la experiencia del usuario (UX).",
        projetPersonnelDesc3: "Gestión de la hosting, mantenimiento y actualizaciones técnicas.",
        projetPersonnelDesc4: "Proyecto realizado dentro de mi actividad como freelance, demostrando mi capacidad para llevar a cabo un proyecto de la A a la Z.",
        
        jobEtudiantDesc1: "Recepción de clientes y gestión de pedidos.",
        jobEtudiantDesc2: "Preparación de comidas respetando las normas de higiene y seguridad.",
        jobEtudiantDesc3: "Gestión de inventarios y reposición de las zonas de trabajo.",


        regarderVideo: "Ver el video",
        envoyerMessage: "Enviar",
        nomFormulaire: "Su Nombre",
        emailFormulaire: "Su Correo Electrónico", 
        messageFormulaire: "Su Mensaje"
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    // Traduction des textes simples
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split(':');
        let translation;

        // Gestion des clés imbriquées
        if (keys.length > 1) {
            translation = translations[lang][keys[0]][keys[1]];
        } else {
            translation = translations[lang][key];
        }

        if (translation) {
            // Pour les inputs et textareas, mettre à jour l'attribut placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translation);
            } else {
                element.textContent = translation;
            }
        }
    });

    // Mise à jour du titre animé
    if (window.typedInstance) {
        window.typedInstance.destroy();
    }
    
    window.typedInstance = new Typed('.title', {
        strings: [translations[lang].title, translations[lang].subtitle],
        typeSpeed: 100,
        backSpeed: 60,
        startDelay: 500,
        backDelay: 1500,
        loop: true
    });

    // Traduction des descriptions de projets
    document.querySelectorAll('.project-info p').forEach((element, index) => {
        const projectKeys = Object.keys(translations[lang].projetsDesc);
        if (projectKeys[index]) {
            element.textContent = translations[lang].projetsDesc[projectKeys[index]];
        }
    });

    // Mise à jour des boutons et labels
    document.querySelector('#contact-form button').textContent = translations[lang].envoyerMessage;
    document.querySelectorAll('#contact-form label').forEach((label, index) => {
        const labelKeys = ['nomFormulaire', 'emailFormulaire', 'messageFormulaire'];
        label.textContent = translations[lang][labelKeys[index]];
    });

    // Mise à jour des boutons "Regarder la vidéo"
    document.querySelectorAll('.btn-success').forEach(button => {
        button.textContent = translations[lang].regarderVideo;
    });

    // Sauvegarde de la langue choisie
    localStorage.setItem('preferred-language', lang);
    
    // Notification du changement de langue
    showNotification(`Langue changée en ${lang.toUpperCase()}`);
}

// Modification du gestionnaire d'événements pour le sélecteur de langue
document.getElementById('language-select').addEventListener('change', function(e) {
    changeLanguage(e.target.value);
});

// Au chargement de la page, appliquer la langue sauvegardée ou la langue par défaut
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    document.getElementById('language-select').value = savedLang;
    changeLanguage(savedLang);
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '-300px';
    notification.style.backgroundColor = '#333';
    notification.style.color = 'white';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    notification.style.transform = 'translateX(0)';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.right = '20px';
    }, 10);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(30px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}


(function(){
    emailjs.init("6WQTxEIAx1iRePinr");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let sendBtn = document.getElementById("sendBtn");
    let responseBox = document.getElementById("response");

    // Désactiver le bouton et changer son texte
    sendBtn.disabled = true;
    sendBtn.textContent = "Envoi...";

    emailjs.send("service_vzm900c", "template_7lj9qty", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        console.log("SUCCESS!", response);

        // Afficher le message de confirmation stylisé
        responseBox.textContent = "✅ Message envoyé avec succès !";
        responseBox.className = "response-success";
        responseBox.style.opacity = "1";
        responseBox.style.transform = "translateY(0)";

        // Réinitialiser le formulaire
        document.getElementById("contact-form").reset();

        // Réactiver le bouton après 3 secondes
        setTimeout(() => {
            sendBtn.disabled = false;
            sendBtn.textContent = "Envoyer";
            responseBox.style.opacity = "0";
            responseBox.style.transform = "translateY(-10px)";
        }, 3000);

    }, function(error) {
        console.error("Erreur EmailJS :", error);

        // Afficher un message d'erreur stylisé
        responseBox.textContent = "❌ Erreur lors de l'envoi. Veuillez réessayer.";
        responseBox.className = "response-error";
        responseBox.style.opacity = "1";
        responseBox.style.transform = "translateY(0)";

        // Réactiver le bouton
        sendBtn.disabled = false;
        sendBtn.textContent = "Envoyer";

        setTimeout(() => {
            responseBox.style.opacity = "0";
            responseBox.style.transform = "translateY(-10px)";
        }, 3000);
    });
});

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/Cv.pdf';
    link.download = 'Rigel_Codjia_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
window.downloadPDF = downloadPDF;


document.addEventListener('DOMContentLoaded', () => {
    // Charger les données de vidéos
    fetch('videos.json')
        .then(response => response.json())
        .then(videos => {
            // Sélectionner tous les boutons de vidéo
            const videoButtons = document.querySelectorAll('.btn-success');
            
            videoButtons.forEach((button) => {
                // Récupérer le titre du projet à partir de l'attribut data-project-title
                const projectTitle = button.getAttribute('data-project-title');
                
                // Trouver la vidéo correspondante en fonction du titre du projet
                const matchedVideo = videos.find(video => 
                    video.title.toLowerCase().includes(projectTitle.toLowerCase().replace(' ', ''))
                );
                
                if (matchedVideo) {
                    button.addEventListener('click', () => {
                        // Mettre à jour le titre du modal
                        document.querySelector('#exampleModal .modal-title').textContent = projectTitle;
                        
                        // Mettre à jour la source de la vidéo
                        const videoElement = document.querySelector('#exampleModal video');
                        const sourceElement = videoElement.querySelector('source');
                        sourceElement.src = matchedVideo.videoUrl;
                        
                        // Recharger la vidéo
                        videoElement.load();
                    });
                }
            });
        })
        .catch(error => console.error('Erreur de chargement des vidéos:', error));
});
