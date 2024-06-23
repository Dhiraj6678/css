document.addEventListener('DOMContentLoaded', () => {
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const colorCodeDisplay = document.getElementById('color-code');

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const color = swatch.getAttribute('data-color');
            colorCodeDisplay.textContent = color;
        });
    });
});
