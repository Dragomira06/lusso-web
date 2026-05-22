const container = document.getElementById('sliderContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Бутон за НАПРЕД (Дясна стрелка)
nextBtn.addEventListener('click', () => {
    container.scrollLeft += container.offsetWidth;
});

// Бутон за НАЗАД (Лява стрелка)
prevBtn.addEventListener('click', () => {
    container.scrollLeft -= container.offsetWidth;
});