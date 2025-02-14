document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton');

    boton.addEventListener('mouseover', (e) => {
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 50);

        boton.style.top = `${y}px`;
        boton.style.left = `${x}px`;
    });
});