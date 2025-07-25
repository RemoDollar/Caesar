// portfolio prjects data 
const projects = [
    {
        title: 'personal Blog',
        description: 'A mordern blog platform built with React and Node.js',
        link: '#'
    },
    {
        title: 'e-commerce Store',
        description: 'A full-featured e-commerce site with shopping cart and payment intrgration',
        link: '#',
    },
    {
        title: 'Portfolio Website',
        description: 'This porfolio site, showcasing my work and skills.',
        link: '#',
    }
]

// Inject Projects into the DOM
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML= `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectsGrid.appendChild(card);
        });
    }
    //contact form handler 
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
           formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
           contactForm.reset();
              });
    }
});