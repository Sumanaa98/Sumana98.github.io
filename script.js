const projectData = [
    {
        title: "Vehicle Booking System",
        description: "A JavaFX application for managing vehicle bookings with a user-friendly GUI and real-time updates.",
        link: "#"
    },
    {
        title: "Basic Web Design Project - Portfolio Website",
        description: "Designed a responsive website with HTML, CSS, and JavaScript for a fictional business concept.",
        link: "#"
    },
    {
        title: "Advanced Web Design Project - Digital Time Capsule",
        description: "Developed a dynamic, feature-rich web application showcasing advanced frontend techniques.",
        link: "#"
    }
];

function openModal(index) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const link = document.getElementById('modal-link');

    title.textContent = projectData[index - 1].title;
    description.textContent = projectData[index - 1].description;
    link.href = projectData[index - 1].link;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Animate Skill Circles
const skillCircles = document.querySelectorAll(".circle");
skillCircles.forEach((circle) => {
    const percentage = circle.getAttribute("data-skill");
    circle.style.background = `conic-gradient(#4caf50 ${percentage}%, #e0e0e0 ${percentage}%)`;
});
// Progress Bar Animation
window.addEventListener("scroll", () => {
    const skills = document.querySelectorAll(".progress");
    skills.forEach(skill => {
        const progress = skill.style.width;
        skill.style.transition = "width 1s ease";
        skill.style.width = progress;
    });
});
// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll('.progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const value = bar.style.width;
        bar.style.transition = "width 1.5s ease";
        bar.style.width = value;
    });
}

window.addEventListener('scroll', () => {
    const section = document.getElementById('skills');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        animateSkills();
    }
});
