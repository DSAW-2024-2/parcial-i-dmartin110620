document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementsByClassName('share-btn');
    const shareMenu = document.getElementsByClassName('shareMenu');

    shareBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        shareMenu.style.display = shareMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
    shareMenu.style.display = 'none';
    });

    shareMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
