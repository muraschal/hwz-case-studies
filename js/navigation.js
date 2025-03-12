// Navigation data
const navigationData = [
    {
        title: "Tag 1",
        links: [
            { title: "Einführung", url: "/src/Session_01_Introduction/introduction.html" },
            { title: "Digitale Transformation", url: "/src/Session_02_Digital-Transformation/digital-transformation.html" }
        ]
    },
    {
        title: "Tag 2",
        links: [
            { title: "Digitale Geschäftsmodelle", url: "/src/Session_03_Digital-Business-Models/digital-business-models.html" },
            { title: "Digitale Innovation", url: "/src/Session_04_Digital-Innovation/digital-innovation.html" }
        ]
    },
    {
        title: "Tag 3",
        links: [
            { title: "GEN AI Logo Creation", url: "/src/Session_05_GEN-AI_Logo/gen-ai-image-creation.html" },
            { title: "AI for Personal Growth", url: "/src/Session_06_Leveraging-AI-for-Personal-Growth/leveraging-ai-growth.html" },
            { title: "AI Leadership", url: "/src/Session_07_HowAICanMakeUsBetterLeaders/how-ai-leaders.html" },
            { title: "PetWorld", url: "/src/Session_08_PetWorld/pet-world.html" }
        ]
    }
];

// Build navigation HTML
const navList = document.querySelector('.nav-list');
if (navList) {
    const navHtml = navigationData.map(day => `
        <li class="nav-item">
            <div class="nav-day-title">${day.title}</div>
            <ul class="nav-links">
                ${day.links.map(link => `
                    <li><a href="${link.url}">${link.title}</a></li>
                `).join('')}
            </ul>
        </li>
    `).join('');
    
    navList.innerHTML = navHtml;
} 