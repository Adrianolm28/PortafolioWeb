document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll('.skill-icon');
    icons.forEach((icon, i) => {
        icon.style.opacity = 0;
        icon.style.transform = "translateY(30px)";
        setTimeout(() => {
            icon.style.transition = "all 0.7s cubic-bezier(.68,-0.55,.27,1.55)";
            icon.style.opacity = 1;
            icon.style.transform = "translateY(0)";
        }, 200 + i * 180);
    });

    document.querySelectorAll('.skill-icon img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.classList.add('glow');
        });
        img.addEventListener('mouseleave', () => {
            img.classList.remove('glow');
        });
    });
});