// The restaurant list. Descriptions are written in our own words.
// Reviews live on Google Maps (linked from each card), never copied here.
const restaurants = [
  { id: "les-2-garcons", name: "Les 2 Garçons", neighbourhood: "Crouch End", area: "North", food: "French",
    desc: "A relaxed French bistro on a quiet side street, the kind of place locals keep coming back to." },
  { id: "calong", name: "Calong", neighbourhood: "Stoke Newington", area: "North", food: "Korean",
    desc: "A casual Korean bistro on Church Street that has quickly become a neighbourhood favourite." },
  { id: "chukus", name: "Chuku's", neighbourhood: "Tottenham", area: "North", food: "Nigerian",
    desc: "Nigerian small plates made for sharing, from a brother-and-sister team on Tottenham High Road." },
  { id: "mambow", name: "Mambow", neighbourhood: "Clapton", area: "East", food: "Malaysian",
    desc: "Bright, punchy Malaysian cooking in a small spot that has turned into an east London gem." },
  { id: "hons-bbq", name: "Hon's BBQ", neighbourhood: "Hackney Wick", area: "East", food: "BBQ",
    desc: "Chinese flavours meet Texan-style barbecue, above a brewery by the canal." },
  { id: "janda-diner", name: "Janda Diner", neighbourhood: "Peckham", area: "South", food: "Malaysian",
    desc: "Unfussy Malaysian dishes with a few playful twists. Look out for the milk-fried chicken." },
  { id: "kokum", name: "Kokum", neighbourhood: "Dulwich", area: "South", food: "Indian",
    desc: "A well-loved Indian neighbourhood restaurant in Dulwich, good for an easy dinner out." },
  { id: "all-roads", name: "All Roads", neighbourhood: "Brixton", area: "South", food: "Caribbean",
    desc: "A small, newer spot near Brixton Village serving Caribbean-leaning dishes from a former supper club." },
  { id: "shikumen", name: "Shikumen", neighbourhood: "Shepherd's Bush", area: "West", food: "Chinese",
    desc: "A long-standing dim sum spot on Shepherd's Bush Green, known locally for its consistency and value." },
  { id: "ida", name: "Ida", neighbourhood: "Queen's Park", area: "West", food: "Italian",
    desc: "A family-run Italian with homemade pasta and a warm, neighbourly feel." }
];

const STORAGE_KEY = "offTheMapTried";
const areaOptions = ["All", "North", "East", "South", "West"];
const foodOptions = ["All", ...[...new Set(restaurants.map(r => r.food))].sort()];
const filters = { area: "All", food: "All" };

// "Tried it" ticks are kept in this browser only (localStorage).
function loadTried() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
  } catch (e) {
    return new Set();
  }
}

function saveTried() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...tried]));
  } catch (e) {
    // Saving isn't available (for example, private browsing). Ticks still work until the page is closed.
  }
}

const tried = loadTried();

function mapsLink(r) {
  const query = encodeURIComponent(`${r.name} ${r.neighbourhood} London`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function buildChips(containerId, options, key) {
  const container = document.getElementById(containerId);
  options.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = option;
    button.setAttribute("aria-pressed", option === filters[key]);
    button.addEventListener("click", () => {
      filters[key] = option;
      container.querySelectorAll(".chip").forEach(b =>
        b.setAttribute("aria-pressed", b.textContent === option)
      );
      render();
    });
    container.appendChild(button);
  });
}

function render() {
  const list = document.getElementById("restaurant-list");
  const shown = restaurants.filter(r =>
    (filters.area === "All" || r.area === filters.area) &&
    (filters.food === "All" || r.food === filters.food)
  );

  list.innerHTML = "";

  if (shown.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "Nothing matches both filters yet. Try a different area or type of food.";
    list.appendChild(li);
  }

  shown.forEach(r => {
    const li = document.createElement("li");
    li.className = "card" + (tried.has(r.id) ? " is-tried" : "");
    li.innerHTML = `
      <h3>${r.name}</h3>
      <p class="meta">${r.neighbourhood} · ${r.area} London &nbsp;<span class="tag">${r.food}</span></p>
      <p class="desc">${r.desc}</p>
      <div class="card-actions">
        <a href="${mapsLink(r)}" target="_blank" rel="noopener">See reviews on Google Maps<span class="visually-hidden"> for ${r.name} (opens in a new tab)</span></a>
        <label class="tried">
          <input type="checkbox" ${tried.has(r.id) ? "checked" : ""}>
          Tried it<span class="visually-hidden">: ${r.name}</span>
        </label>
      </div>`;

    li.querySelector("input").addEventListener("change", e => {
      if (e.target.checked) tried.add(r.id); else tried.delete(r.id);
      li.classList.toggle("is-tried", e.target.checked);
      saveTried();
      updateTriedCount();
    });

    list.appendChild(li);
  });

  const word = shown.length === 1 ? "place" : "places";
  document.getElementById("result-count").textContent = `Showing ${shown.length} ${word}`;
  updateTriedCount();
}

function updateTriedCount() {
  const count = restaurants.filter(r => tried.has(r.id)).length;
  document.getElementById("tried-count").textContent =
    `You've tried ${count} of ${restaurants.length}`;
}

buildChips("area-filters", areaOptions, "area");
buildChips("food-filters", foodOptions, "food");
render();
