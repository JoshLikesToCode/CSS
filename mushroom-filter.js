const cards = document.querySelectorAll('.msurhoom-guide .card');
const seasonalFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');

const currentFilters = {
    season: 'all',
    edible: 'all',
};

seasonalFilter.addEventListener('change', (event) => {
    currentFilters.season = event.target.value;
    filterCards();
});