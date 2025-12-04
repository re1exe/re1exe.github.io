document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Page loaded!");
});

function linkTo(url) {
      window.open(url, '_blank');
}

    function linkTo_(url) {
      window.location.href = url;
    };

function scrollToTop() {
    document.getElementById("main").scrollIntoView();
};

function scrollToProjects() {
    document.getElementById("projects").scrollIntoView();
};

function scrollToAbtMe() {
    document.getElementById("aboutme").scrollIntoView();
};

function scrollToSocials() {
    document.getElementById("main").scrollIntoView();
};

fetch("projects.json")
    .then(response => response.json())
    .then(projects => {
        let placeholder = document.getElementById("projects");
        let out = "";

        for (let project of projects.slice(0, 6)) {
            out += `
                <div class="project">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                    <img src="${project.image}" alt="${project.name}">
                    <br>
                    <a target="_blank" href="${project.github}"><i class="fa-brands fa-github" "></i></a>
                    <a target="_blank" href="${project.extLink}"><i class="fa-solid fa-external-link-alt"></i></a>
                </div>
            `;
        }

        placeholder.innerHTML = out;
    })
    .catch(error => console.error("❌ Error fetching projects:", error));
