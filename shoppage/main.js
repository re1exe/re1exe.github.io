// Site load
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ Page loaded!");
});


// Quality of life functions
function linkTo(url) {
  if (!url) return console.warn("linkTo() called with no URL!");
  window.open(url, '_blank', 'noopener,noreferrer');
  console.log(`🔗 linkTo() triggered for: ${url}`);
}

function scrollToID(scrollId) {
  console.log(`🔽 Trying to scroll to: ${scrollId}`);
  const element = document.getElementById(scrollId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    console.log('✅ Scroll triggered!');
  } else {
    console.warn(`⚠️ Element with id "${scrollId}" not found.`);
  }
}


// Fetch and display items from items.json
fetch("items.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(items => {
    const placeholder = document.getElementById("items");
    if (!placeholder) {
      console.warn("⚠️ No #items element found in HTML.");
      return;
    }

    let out = "";

    for (let item of items.slice(0, 6)) {
      if (!item.name || !item.image) continue;

      out += `
        <div class="item">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <img onclick="linkTo('${item.image}')" src="${item.image}" alt="${item.name}">
          <p class="price"><strong>Price:</strong> ${item.price}</p>
          <button class="buy">Buy</button>
        </div>
      `;
    }

    placeholder.innerHTML = out;
  })
  .catch(error => console.error("❌ Error fetching items:", error));
