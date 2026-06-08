async function sendMessage() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
    }

    const response = await fetch("/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            message
        })
    });

    const result = await response.text();

    alert(result);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function loadProjects() {

const projects = [

    {
        title: "Smart Plant Watering System",
        description: "Automatic plant watering system using sensors and IoT concepts.",
        tech_stack: "Arduino, IoT"
    },

    {
        title: "YOUR TRAVELLER SIVA",
        description: "Travel and railway vlog YouTube channel featuring train journeys and reviews.",
        tech_stack: "YouTube, Content Creation"
    },

    {
        title: "RailOne Review Project",
        description: "Detailed guide and review of the RailOne application.",
        tech_stack: "Research, Content Creation"
    },

    {
        title: "Portfolio Website",
        description: "Full Stack Portfolio Website built using modern web technologies.",
        tech_stack: "HTML, CSS, JavaScript, Node.js"
    }

];

let html = "";

projects.forEach(project => {

    html += `
    <div class="project-card">

        <h3>🚀 ${project.title}</h3>

        <p>${project.description}</p>

        <br>

        <div class="tags">

            ${project.tech_stack
                .split(",")
                .map(tag =>
                    `<span class="tag">${tag.trim()}</span>`
                )
                .join("")
            }

        </div>

    </div>
    `;
});

document.getElementById("projects").innerHTML = html;

}

loadProjects();

/* Typing Animation */

const titles = [
    "Full Stack Developer",
    "Web Developer",
    "YouTuber",
    "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
let deleting = false;

const titleElement =
document.querySelector(".gradient-text");

function typeEffect() {

    const currentWord =
    titles[index];

    if (!deleting) {

        titleElement.textContent =
        currentWord.substring(0, charIndex++);

        if (charIndex >
            currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        titleElement.textContent =
        currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            index =
            (index + 1) %
            titles.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();