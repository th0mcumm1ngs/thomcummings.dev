
const DURATION = 600;

document.querySelectorAll('.filter-logic-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        
        if (toggle.classList.contains('toggling')) return;

        toggle.classList.add('toggling');
        
        setTimeout(() => {
            toggle.dataset.state = toggle.dataset.state === 'and' ? 'or' : 'and';
        }, DURATION / 2);

        setTimeout(() => {
            toggle.classList.remove('toggling');
        }, DURATION);
    });
});
