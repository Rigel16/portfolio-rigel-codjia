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
    typeSpeed: 100,     // Vitesse de frappe (en millisecondes)
    backSpeed: 60,      // Vitesse d'effacement
    startDelay: 500,    // Délai avant le démarrage
    backDelay: 1500,    // Pause avant de supprimer le texte
    loop: true          // Boucle l'animation
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
// Suite du code JavaScript...
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


/* const translations = {
    fr: {
        title: "Développeur Web Full Stack",
        subtitle: "En recherche d'alternance",
        competences: "Compétences",
        experience: "Expérience",
        formation: "Formation",
        contact: "Contact",
        projets: "Projets",
        certifications: "Certifications",
        frontend: "Front-end",
        backend: "Back-end",
        frameworks: "Frameworks",
        outils: "Outils",
        projetTitle: "Projets Personnels",
        projetDesc: "Développement de plusieurs applications web full stack",
        formationTitle: "Formation Développeur Web Full Stack",
        formationDesc: "En recherche d'alternance pour continuer mon parcours"
    },
    en: {
        title: "Full Stack Web Developer",
        subtitle: "Looking for Work-Study Program",
        competences: "Skills",
        experience: "Experience",
        formation: "Education",
        contact: "Contact",
        projets: "Projects",
        certifications: "Certifications",
        frontend: "Front-end",
        backend: "Back-end",
        frameworks: "Frameworks",
        outils: "Tools",
        projetTitle: "Personal Projects",
        projetDesc: "Development of several full stack web applications",
        formationTitle: "Full Stack Web Developer Training",
        formationDesc: "Looking for a work-study program to continue my journey"
    },
    es: {
        title: "Desarrollador Web Full Stack",
        subtitle: "Buscando programa de formación dual",
        competences: "Habilidades",
        experience: "Experiencia",
        formation: "Educación",
        contact: "Contacto",
        projets: "Proyectos",
        certifications: "Certificaciones",
        frontend: "Front-end",
        backend: "Back-end",
        frameworks: "Frameworks",
        outils: "Herramientas",
        projetTitle: "Proyectos Personales",
        projetDesc: "Desarrollo de varias aplicaciones web full stack",
        formationTitle: "Formación como Desarrollador Web Full Stack",
        formationDesc: "Buscando programa de formación dual para continuar mi trayectoria"
    }
}; */

// Fonction pour changer la langue
function changeLanguage(lang) {
    // Mettre à jour tous les éléments avec l'attribut data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Mettre à jour les textes typés
    if (window.typedInstance) {
        window.typedInstance.destroy();
    }
    
    window.typedInstance = new Typed('.title', {
        strings: [translations[lang].title, translations[lang].subtitle],
        typeSpeed: 100,     // Ralentit la vitesse de frappe
        backSpeed: 60,      // Ralentit l'effacement
        startDelay: 500,    // Pause avant le début de la première animation
        backDelay: 1500,    // Pause avant l'effacement
        loop: true          // Active la boucle infinie
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



