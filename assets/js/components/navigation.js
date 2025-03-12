// Navigation Data
const navigationData = {
    days: [
        {
            title: "Tag 1",
            sessions: [
                {
                    label: "Session 02",
                    title: "Piaggio",
                    url: "/src/Session_02_Piaggio/piaggio.html"
                },
                {
                    label: "Session 03",
                    title: "Ford",
                    url: "/src/Session_03_Ford/ford.html"
                },
                {
                    label: "Session 04",
                    title: "Journey Mapping",
                    url: "/src/Session_04-Journey-Mapping/journey-mapping.html"
                }
            ]
        },
        {
            title: "Tag 2",
            sessions: [
                {
                    label: "Session 05",
                    title: "Gen AI Logo",
                    url: "/src/Session_05_GEN-AI_Logo/gen-ai-logo.html"
                },
                {
                    label: "Session 06",
                    title: "AI Growth",
                    url: "/src/Session_06_Leveraging-AI-for-Personal-Growth/leveraging-ai-growth.html"
                },
                {
                    label: "Session 07",
                    title: "AI Leadership",
                    url: "/src/Session_07_HowAICanMakeUsBetterLeaders/ai-leadership.html"
                }
            ]
        },
        {
            title: "Tag 3",
            sessions: [
                {
                    label: "Session 08",
                    title: "Pet World",
                    url: "/src/Session_08_PetWorld/pet-world.html"
                }
            ]
        }
    ]
};

// Navigation Template
const navigationTemplate = `
    <nav class="nav-menu" data-state="closed">
        <div class="nav-container">
            <!-- Brand -->
            <a href="/" class="nav-brand">
                <img src="/assets/images/HWZ-Logo.png" alt="HWZ Logo">
                <span>HWZ Case Studies</span>
            </a>

            <!-- Mobile Menu Button -->
            <button class="nav-mobile-trigger" aria-label="Menu" aria-expanded="false" aria-controls="navigation-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="close-icon">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <!-- Navigation Menu -->
            <div class="nav-content" id="navigation-menu" hidden>
                <ul class="nav-list" role="menu">
                    ${navigationData.days.map((day, index) => `
                        <li class="nav-item" role="none">
                            <button class="nav-trigger" role="menuitem" aria-expanded="false" aria-controls="tag${index + 1}-menu">
                                ${day.title}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div class="nav-dropdown" id="tag${index + 1}-menu" hidden>
                                <div class="nav-dropdown-content">
                                    <h3 class="nav-group-title">${day.title} - Sessions</h3>
                                    <ul class="nav-group-list">
                                        ${day.sessions.map(session => `
                                            <li>
                                                <a href="${session.url}" class="nav-link${window.location.pathname === session.url ? ' active' : ''}">
                                                    <span class="session-label">${session.label}:</span>
                                                    ${session.title}
                                                </a>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    </nav>
`;

// Navigation Class
class Navigation {
    constructor(container) {
        this.container = container;
        this.render();
        this.initializeEventListeners();
    }

    render() {
        this.container.innerHTML = navigationTemplate;
    }

    initializeEventListeners() {
        const nav = this.container.querySelector('.nav-menu');
        const mobileMenuButton = this.container.querySelector('.nav-mobile-trigger');
        const navigationMenu = this.container.querySelector('#navigation-menu');
        const dropdownTriggers = this.container.querySelectorAll('.nav-trigger');

        // Mobile menu toggle
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle hidden attribute
            if (isExpanded) {
                navigationMenu.setAttribute('hidden', '');
            } else {
                navigationMenu.removeAttribute('hidden');
            }
            
            nav.dataset.state = isExpanded ? 'closed' : 'open';
        });

        // Dropdown toggles
        dropdownTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                const dropdown = this.container.querySelector('#' + trigger.getAttribute('aria-controls'));
                const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
                
                // Close all other dropdowns
                dropdownTriggers.forEach(otherTrigger => {
                    if (otherTrigger !== trigger) {
                        const otherDropdown = this.container.querySelector('#' + otherTrigger.getAttribute('aria-controls'));
                        otherTrigger.setAttribute('aria-expanded', 'false');
                        if (otherDropdown) {
                            otherDropdown.setAttribute('hidden', '');
                        }
                    }
                });

                // Toggle current dropdown
                trigger.setAttribute('aria-expanded', !isExpanded);
                if (dropdown) {
                    if (isExpanded) {
                        dropdown.setAttribute('hidden', '');
                    } else {
                        dropdown.removeAttribute('hidden');
                    }
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-item') && !e.target.closest('.nav-mobile-trigger')) {
                dropdownTriggers.forEach(trigger => {
                    const dropdown = this.container.querySelector('#' + trigger.getAttribute('aria-controls'));
                    trigger.setAttribute('aria-expanded', 'false');
                    if (dropdown) {
                        dropdown.setAttribute('hidden', '');
                    }
                });
            }
        });
    }
}

// Export the Navigation class
export default Navigation; 