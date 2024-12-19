function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const name = document.getElementById('name').value;
    alert(`Merci, ${name} ! Votre message a été envoyé.`);
    document.getElementById('contact-form').reset(); // Réinitialise le formulaire
    return false;
}
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
const sections = document.querySelectorAll('.section');

function handleScroll() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Pour afficher les sections déjà visibles
