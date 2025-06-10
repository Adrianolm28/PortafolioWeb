document.querySelectorAll('.product-img').forEach(img => {
    img.onload = function() {
        const container = img.closest('.articles-container');
        if (img.height > container.clientHeight * 0.6) {
            img.style.height = (container.clientHeight * 0.6) + 'px';
            img.style.width = 'auto';
        }
        if (img.width > container.clientWidth * 0.9) {
            img.style.width = (container.clientWidth * 0.9) + 'px';
            img.style.height = 'auto';
        }
    };
});