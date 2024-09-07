document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const video = card.querySelector('.video');
        const closeBtn = card.querySelector('.close-btn');

        card.addEventListener('click', () => {
            video.style.display = 'block';
            closeBtn.style.display = 'block';
        });

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            video.style.display = 'none';
            closeBtn.style.display = 'none';
            video.pause();
        });
    });

    document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const query = document.getElementById('artist-search').value.toLowerCase();
    const artistItems = document.querySelectorAll('.artist-item');

    let hasResults = false;

    artistItems.forEach(function(item) {
        const artistName = item.querySelector('h3').textContent.toLowerCase();

        if (artistName.includes(query)) {
            item.style.display = 'block'; 
            hasResults = true;
        } else {
            item.style.display = 'none'; 
        }
    });

    if (!hasResults) {
        alert('Nenhum artista encontrado.');
    }
});
});