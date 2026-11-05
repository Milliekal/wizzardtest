// The restaurant list. Descriptions are written in our own words.
// Photos and reviews live on Google Maps (linked from each card), never copied here.
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

// Hand-drawn illustrations, one per type of food. Colours come from styles.css.
// T = orange accent, O = black, C = white fill.
const T = 'var(--accent)', O = 'var(--ink)', C = 'var(--card)';
const steam = `<path d="M26 10c-3 4 3 6 0 10M32 8c-3 4 3 6 0 10M38 10c-3 4 3 6 0 10" fill="none" stroke="${O}" stroke-width="2" stroke-linecap="round"/>`;
const illustrations = {
  French: `<path d="M8 40c4-14 14-22 24-22s20 8 24 22c-6-3-10-2-12 2-4-6-8-8-12-8s-8 2-12 8c-2-4-6-5-12-2z" fill="${T}"/>
    <path d="M22 30l4 8M32 26v10M42 30l-4 8" stroke="${C}" stroke-width="2" stroke-linecap="round"/>`,
  Korean: `${steam}<path d="M10 30h44c0 12-10 20-22 20S10 42 10 30z" fill="${T}"/>
    <path d="M40 28L56 8M44 28L60 12" stroke="${O}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M24 54h16" stroke="${T}" stroke-width="3" stroke-linecap="round"/>`,
  Nigerian: `${steam}<rect x="12" y="26" width="40" height="24" rx="6" fill="${T}"/>
    <rect x="10" y="22" width="44" height="6" rx="3" fill="${O}"/>
    <path d="M6 34h6M52 34h6" stroke="${O}" stroke-width="3" stroke-linecap="round"/>`,
  Malaysian: `<path d="M6 46C14 22 46 18 58 26 50 48 20 54 6 46z" fill="${O}"/>
    <path d="M10 44L54 28" stroke="${C}" stroke-width="1.5" opacity=".6"/>
    <path d="M20 42c0-8 6-12 12-12s12 4 12 12z" fill="${C}"/>
    <circle cx="42" cy="44" r="5" fill="${C}" stroke="${T}" stroke-width="2"/><circle cx="42" cy="44" r="2" fill="${T}"/>`,
  BBQ: `<path d="M22 22c-3-5 2-8 0-14M32 22c-3-5 2-8 0-14M42 22c-3-5 2-8 0-14" fill="none" stroke="${T}" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="10" y="26" width="44" height="5" rx="2.5" fill="${O}"/>
    <path d="M14 31c2 10 10 16 18 16s16-6 18-16z" fill="${T}"/>
    <path d="M24 47l-6 10M40 47l6 10" stroke="${O}" stroke-width="3" stroke-linecap="round"/>`,
  Indian: `${steam}<path d="M8 32h34c0 10-7 16-17 16S8 42 8 32z" fill="${T}"/>
    <path d="M12 32c4-3 8 1 12-1s8-2 14 1" fill="none" stroke="${C}" stroke-width="2"/>
    <path d="M46 22c8 2 12 14 8 28-6 2-10-2-12-8 0-8 1-16 4-20z" fill="${O}"/>
    <circle cx="50" cy="34" r="1.5" fill="${C}"/><circle cx="48" cy="42" r="1.5" fill="${C}"/>`,
  Caribbean: `<ellipse cx="32" cy="44" rx="26" ry="8" fill="${O}"/>
    <path d="M20 40c-4-10 4-22 16-20s14 14 6 20c-6 4-16 4-22 0z" fill="${T}"/>
    <path d="M24 42l-8 6" stroke="${C}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="14" cy="49" r="3" fill="${C}"/>`,
  Chinese: `${steam}<ellipse cx="32" cy="28" rx="22" ry="6" fill="${O}"/>
    <path d="M10 28v14c0 4 10 8 22 8s22-4 22-8V28c0 4-10 6-22 6s-22-2-22-6z" fill="${T}"/>
    <path d="M10 38c0 4 10 6 22 6s22-2 22-6" fill="none" stroke="${C}" stroke-width="2"/>`,
  Italian: `<path d="M32 8L10 54c14 6 30 6 44 0z" fill="${O}"/>
    <path d="M32 14L14 52c12 4 24 4 36 0z" fill="${T}"/>
    <circle cx="30" cy="32" r="3.5" fill="${C}"/><circle cx="24" cy="44" r="3.5" fill="${C}"/><circle cx="38" cy="44" r="3.5" fill="${C}"/>`
};

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
      <div class="card-title">
        <span class="art" aria-hidden="true"><svg viewBox="0 0 64 64" focusable="false">${illustrations[r.food] || ""}</svg></span>
        <h3>${r.name}</h3>
      </div>
      <p class="meta">${r.neighbourhood} · ${r.area} London &nbsp;<span class="tag">${r.food}</span></p>
      <p class="desc">${r.desc}</p>
      <div class="card-actions">
        <a href="${mapsLink(r)}" target="_blank" rel="noopener">See photos and reviews on Google Maps<span class="visually-hidden"> for ${r.name} (opens in a new tab)</span></a>
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
