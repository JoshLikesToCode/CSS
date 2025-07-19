const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const noResultsMessage = document.querySelector(".no-results-message");

const currentFilters = {
  season: "all",
  edible: "all",
};

cards.forEach((card, idx) => {
    const mushroomId = `mushroom-${idx + 1}`;
    card.style.viewTransitionName = `card-${mushroomId}`;
})

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;

  if(!document.startViewTransition) {
    // if View Transitions are not supported, fallback to a simple filter
    filterCards();
    return;
  }
  document.startViewTransition(() => filterCards());
}

function filterCards() {
  let hasVisibleCards = false;

  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    if (
      (currentFilters.season === "all" || currentFilters.season === season) &&
      (currentFilters.edible === "all" || currentFilters.edible === edible)
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }
  });
  if (hasVisibleCards) {
    noResultsMessage.hidden = true;
  } else {
    noResultsMessage.hidden = false;
  }
}

function enableFiltering() {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;
}

enableFiltering();
