function filterEpisodes(category) {
    const episodes = document.querySelectorAll('.episode');
    episodes.forEach(episode => {
        const categories = episode.getAttribute('data-category').split(' ');
        if (category === 'all') {
            episode.style.display = 'block';
        } else {
            if (categories.includes(category)) {
                episode.style.display = 'block';
            } else {
                episode.style.display = 'none';
            }
        }
    });
}