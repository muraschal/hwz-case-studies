// Navigation data
const navigationData = [
    {
        title: "Tag 1 (10. März)",
        links: [
            { title: "Session 1: Case Method", url: "/src/Session_01_CaseMethod-UVA/case-method.html" },
            { title: "Session 2: Piaggio Case Study", url: "/src/Session_02_Piaggio/piaggio.html" },
            { title: "Session 3: Ford F-150", url: "/src/Session_03_Ford/ford.html" },
            { title: "Session 4: Customer Journey Mapping", url: "/src/Session_04-Journey-Mapping/journey-mapping.html" }
        ]
    },
    {
        title: "Tag 2 (11. März)",
        links: [
            { title: "Session 5: AI-Logo Generation", url: "/src/Session_05_GEN-AI_Logo/gen-ai-logo.html" },
            { title: "Session 6: Leveraging AI for Personal Growth", url: "/src/Session_06_Leveraging-AI-for-Personal-Growth/leveraging-ai-growth.html" },
            { title: "Session 7: Leveraging AI for Leading Others", url: "/src/Session_07_HowAICanMakeUsBetterLeaders/ai-leadership.html" }
        ]
    },
    {
        title: "Tag 3 (12. März)",
        links: [
            { title: "Session 8: PetWorld", url: "/src/Session_08_PetWorld/pet-world.html" }
        ]
    },
    {
        title: "Tag 4 (13. März)",
        links: [
            { title: "Session 11: Davis Press & Meccan Madness", url: "/tag4/session11-davis-press.html" },
            { title: "Session 12: Future of Work", url: "/tag4/session12-future-of-work.html" }
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