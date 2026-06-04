const menuData = {

    organic: {

        tabs: [
            "SEO",
            "Local SEO",
            "E-Commerce SEO",
            "Technical SEO",
            "Content SEO",
            "ASO"
        ],

        cards: [

            {
                icon: "fa-chart-line",
                title: "SEO",
                desc: "Improve rankings and drive qualified organic traffic."
            },

            {
                icon: "fa-location-dot",
                title: "Local SEO",
                desc: "Dominate local search results and attract nearby customers."
            },

            {
                icon: "fa-cart-shopping",
                title: "E-Commerce SEO",
                desc: "Grow online store visibility and revenue."
            }

        ]
    },

    paid: {

        tabs: [
            "Google Ads",
            "Meta Ads",
            "YouTube Ads",
            "LinkedIn Ads",
            "Amazon Ads"
        ],

        cards: [

            {
                icon: "fa-google",
                title: "Google Ads",
                desc: "Generate high-intent leads with search campaigns."
            },

            {
                icon: "fa-meta",
                title: "Meta Ads",
                desc: "Scale customer acquisition through Meta ecosystem."
            },

            {
                icon: "fa-youtube",
                title: "YouTube Ads",
                desc: "Drive awareness and conversions with video campaigns."
            }

        ]
    },

    conversation: {

        tabs: [
            "CRO",
            "Landing Pages",
            "Heatmaps",
            "A/B Testing"
        ],

        cards: [

            {
                icon: "fa-bullseye",
                title: "CRO",
                desc: "Increase conversions through user behavior insights."
            },

            {
                icon: "fa-laptop",
                title: "Landing Pages",
                desc: "Build high-converting landing experiences."
            },

            {
                icon: "fa-chart-area",
                title: "Heatmaps",
                desc: "Understand visitor engagement visually."
            }

        ]
    },

    social: {

        tabs: [
            "Social Media",
            "Influencer Marketing",
            "Community Building",
            "Branding"
        ],

        cards: [

            {
                icon: "fa-users",
                title: "Social Media",
                desc: "Build stronger engagement and audience growth."
            },

            {
                icon: "fa-user-group",
                title: "Influencer Marketing",
                desc: "Leverage creator partnerships effectively."
            },

            {
                icon: "fa-bullhorn",
                title: "Branding",
                desc: "Strengthen brand recall and perception."
            }

        ]
    },

    retention: {

        tabs: [
            "Email Marketing",
            "WhatsApp Marketing",
            "Push Notifications",
            "Loyalty Programs"
        ],

        cards: [

            {
                icon: "fa-envelope",
                title: "Email Marketing",
                desc: "Nurture leads and retain customers."
            },

            {
                icon: "fa-comment",
                title: "WhatsApp Marketing",
                desc: "Drive engagement through direct messaging."
            },

            {
                icon: "fa-bell",
                title: "Push Notifications",
                desc: "Bring users back with personalized campaigns."
            }

        ]
    }
};


/* ===================================
   Elements
=================================== */

const serviceTabs =
    document.querySelectorAll(".service-tab");

const subTabsContainer =
    document.querySelector(".sub-tabs");

const cardsContainer =
    document.querySelector(".service-cards");


/* ===================================
   Render Cards
=================================== */

function renderCards(cards){

    cardsContainer.innerHTML = "";

    cards.forEach(card => {

        cardsContainer.innerHTML += `

            <div class="col-xl-3 col-md-6">

                <div class="service-card">

                    <div class="card-top">

                        <div class="card-icon">

                            <i class="fa-solid ${card.icon}"></i>

                        </div>

                        <a href="#">

                            <i class="fa-solid fa-arrow-right"></i>

                        </a>

                    </div>

                    <h4>${card.title}</h4>

                    <p>${card.desc}</p>

                    <a href="#" class="learn-more">

                        Learn More

                    </a>

                </div>

            </div>

        `;
    });

    cardsContainer.innerHTML += `

        <div class="col-xl-3 col-md-6">

            <div class="cta-card">

                <div class="cta-graph">

                    <i class="fa-solid fa-chart-column"></i>

                </div>

                <h4>
                    Looking for a custom strategy?
                </h4>

                <p>
                    Let's build a plan that drives measurable growth.
                </p>

                <a href="#" class="cta-btn">

                    Talk To Our Experts

                </a>

            </div>

        </div>

    `;
}


/* ===================================
   Render Sub Tabs
=================================== */

function renderSubTabs(tabs){

    subTabsContainer.innerHTML = "";

    tabs.forEach((tab,index)=>{

        subTabsContainer.innerHTML += `

            <button class="sub-tab ${index === 0 ? 'active' : ''}">

                ${tab}

            </button>

        `;
    });
}


/* ===================================
   Change Service
=================================== */

function changeService(service){

    const data = menuData[service];

    renderSubTabs(
        data.tabs
    );

    renderCards(
        data.cards
    );
}


/* ===================================
   Level 2 Events
=================================== */

serviceTabs.forEach(tab => {

    tab.addEventListener("click",function(){

        serviceTabs.forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });

        this.classList.add(
            "active"
        );

        changeService(
            this.dataset.service
        );

    });

});


/* ===================================
   Initial Load
=================================== */

changeService(
    "organic"
);