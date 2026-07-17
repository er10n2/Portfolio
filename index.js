const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

function showSideBar(){


    const sideBar = document.getElementsByClassName("sideBar")[0];

     sideBar.style.display = 'flex';




}

function hideSideBar(){
    const sideBar = document.getElementsByClassName("sideBar")[0];

     sideBar.style.display = 'none';

}

const projects = [
    { class: "layout-flagship", category: "Full-Stack Application", title: "Cineverse: Movie discovery web app", desc: "A movie discovery web app built with Express, and EJS, featuring a stylish interface for browsing, searching movie details.", link: "https://github.com/er10n2/CineVerse", linkText: "View Source Code &rarr;", img: "/images/Cineverse.png", alt: "Cineverse Movie Discovery Platform", imgFirst: false },
    { class: "layout-flagship", category: "Full-Stack Application", title: "ELearn: Learning Management System", desc: "A full-stack educational web application built with Node.js, Express, and PostgreSQL. The database is set up to handle two types of users: <strong>Professors</strong> who can create and post courses, and <strong>Students</strong> who can enroll in them.", link: "https://github.com/er10n2/Elearn", linkText: "View Source Code &rarr;", img: "/images/Elearn.png", alt: "ELearn LMS Platform", imgFirst: false },
    { class: "layout-right", category: "Web Application", title: "DimensionDex: Rick & Morty Tracker", desc: "A web application built using the Express framework that interacts with the Rick and Morty API via Axios to pull and display real-time character information.", link: "https://lootlog.onrender.com", linkText: "Live Project ↗", img: "/images/rick.png", alt: "DimensionDex Character Tracker", imgFirst: true },
    { class: "layout-left", category: "Web Application", title: "Dynamic Blog Platform", desc: "A complete blogging web application implementing full CRUD data operations. Built with Express and EJS.", link: "https://blog-webapp-6g8b.onrender.com/", linkText: "Live Project ↗", img: "/images/blogWebApp.png", alt: "Dynamic Blog Platform", imgFirst: false },
    { class: "layout-center", category: "Frontend Project", title: "E-Commerce Interface", desc: "Built with HTML, CSS, and JavaScript. Login and Signup functionality are included. localStorage is used to store user data.", link: "https://er10n2.github.io/Ecommerce/", linkText: "Live Project ↗", img: "/images/ecommerce.png", alt: "E-Commerce Interface", imgFirst: true },
    { class: "layout-right", category: "JavaScript Game", title: "Simon Memory Game", desc: "Follow the correct sequence to win the game.", link: "https://er10n2.github.io/SimonGame/", linkText: "Live Project ↗", img: "/images/s.png", alt: "Simon Game Logic", imgFirst: false },
    { class: "layout-left", category: "Utility Tool", title: "Custom Password Generator", desc: "Generate random passwords based on desired length.", link: "https://er10n2.github.io/Password-Generator/", linkText: "Live Project ↗", img: "/images/password.png", alt: "Password Generator", imgFirst: true },
    { class: "layout-flagship", category: "Utility Tool", title: "Metric Conversion UI", desc: "Convert units of Length, Volume, and Mass.", link: "https://er10n2.github.io/Unit-Conversion/", linkText: "Live Project ↗", img: "/images/unitC.png", alt: "Metric Converter Terminal", imgFirst: false },
    { class: "layout-left", category: "JavaScript Interaction", title: "Acoustic Percussion Kit", desc: "Play Sounds by Clicking or Pressing Keys.", link: "https://er10n2.github.io/Drum-Kit/", linkText: "Live Project ↗", img: "/images/drum.png", alt: "Audio Frequency Array", imgFirst: false },
    { class: "layout-right", category: "Utility Application", title: "Basketball score board", desc: "A project built with Html, Css and JavaScript that simulates a basketball score board.", link: "https://er10n2.github.io/Basketball-score-Board/", linkText: "Live Project ↗", img: "/images/basketball.png", alt: "Score Analytics System", imgFirst: true },
    { class: "layout-center", category: "JavaScript Application", title: "Roll Dice", desc: "A dice rolling simulator built with HTML, CSS, and JavaScript.", link: "https://er10n2.github.io/Dice/", linkText: "Live Project ↗", img: "/images/roll.png", alt: "Probability Simulator", imgFirst: false },
    { class: "layout-right", category: "CSS", title: "Mondrian Canvas Layout", desc: "A project built with Html and Css inspired by the famous artist Piet Mondrian.", link: "https://er10n2.github.io/Mondrian-ProjectGrid/", linkText: "Live Project ↗", img: "/images/mmmm.png", alt: "Mondrian Canvas Layout", imgFirst: true }
];

const container = document.getElementById("projects");

projects.forEach(p => {
    const article = document.createElement("article");
    article.className = `project-item ${p.class}`;

    const metaHTML = `
        <div class="project-meta">
            <span class="project-category">${p.category}</span>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <a href="${p.link}" target="_blank" class="project-link">${p.linkText}</a>
        </div>`;

    const imgHTML = `
        <div class="project-image">
            <img src="${p.img}" alt="${p.alt}">
        </div>`;

    
    article.innerHTML = p.imgFirst ? (imgHTML + metaHTML) : (metaHTML + imgHTML);
    container.appendChild(article);
});