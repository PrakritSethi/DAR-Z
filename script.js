/* =========================================================
   DAR-Z — CLEAN COMPLETE SCRIPT
========================================================= */


/* =========================================================
   HERO VIDEO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const heroVideo = document.querySelector(".hero-video");

    if (heroVideo) {

        heroVideo.muted = true;
        heroVideo.defaultMuted = true;
        heroVideo.autoplay = true;
        heroVideo.loop = true;
        heroVideo.playsInline = true;

        heroVideo.setAttribute("muted", "");
        heroVideo.setAttribute("autoplay", "");
        heroVideo.setAttribute("loop", "");
        heroVideo.setAttribute("playsinline", "");
        heroVideo.setAttribute("preload", "auto");


        function playHeroVideo() {

            const promise = heroVideo.play();

            if (promise !== undefined) {
                promise.catch(function () {
                    /* Browser blocked autoplay.
                       It will retry after interaction. */
                });
            }

        }


        playHeroVideo();

        heroVideo.addEventListener(
            "loadeddata",
            playHeroVideo
        );

        heroVideo.addEventListener(
            "canplay",
            playHeroVideo
        );

        heroVideo.addEventListener(
            "canplaythrough",
            playHeroVideo
        );


        document.addEventListener(
            "click",
            playHeroVideo,
            { once: true }
        );

    }

});


/* =========================================================
   PAGE LOCK
========================================================= */

function lockPage() {

    document.body.classList.add("modal-active");

}


function unlockPage() {

    document.body.classList.remove("modal-active");

}


/* =========================================================
   CLOSE ALL MODALS
========================================================= */

function closeAllModals() {

    const modals =
        document.querySelectorAll(".modal");

    modals.forEach(function (modal) {

        modal.classList.remove("open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    });

    unlockPage();

}


/* =========================================================
   OUTFIT DATA
========================================================= */

const outfits = {

    competition: {

        title: "Competition Looks",

        description:
            "Looks for debates, MUNs, presentations and academic competitions.",

        looks: [

            {
                image: "assets/outfits/competition.jpeg",
                number: "01",
                title: "The Competition Look",
                text:
                    "A polished and confident look for competitions, debates and academic events."
            },

            {
                image: "assets/outfits/mun.jpeg",
                number: "02",
                title: "The MUN Look",
                text:
                    "A sharp, professional outfit designed for MUNs, conferences and formal discussions."
            },

            {
                image: "assets/outfits/presenter.jpeg",
                number: "03",
                title: "The Presentation Look",
                text:
                    "A refined look that keeps you comfortable and confident while presenting."
            }

        ]

    },


    events: {

        title: "College & Event Looks",

        description:
            "Style inspiration for college events, school functions, socials and memorable gatherings.",

        looks: [

            {
                image: "assets/outfits/college.jpeg",
                number: "01",
                title: "College Event",
                text:
                    "An effortless look for college events, fests and campus gatherings."
            },

            {
                image: "assets/outfits/party.jpeg",
                number: "02",
                title: "The Social Look",
                text:
                    "A relaxed yet stylish outfit for parties and evening social events."
            },

            {
                image: "assets/outfits/school.jpeg",
                number: "03",
                title: "The School Event",
                text:
                    "A smart and comfortable look for school functions and special events."
            }

        ]

    },


    special: {

        title: "Festive & Farewell Looks",

        description:
            "Looks for farewells, festivals, weddings, birthdays and special moments.",

        looks: [

            {
                image: "assets/outfits/festive.jpeg",
                number: "01",
                title: "The Festive Look",
                text:
                    "A celebration-ready look combining personality with a festive feel."
            },

            {
                image: "assets/outfits/farewell.jpeg",
                number: "02",
                title: "The Farewell Look",
                text:
                    "A polished look for farewell evenings, celebrations and memorable moments."
            },

            {
                image: "assets/outfits/special occasion.jpeg",
                number: "03",
                title: "The Final Look",
                text:
                    "A refined and memorable outfit for an important final celebration."
            }

        ]

    }

};


/* =========================================================
   OPEN OUTFIT MODAL
========================================================= */

window.openOutfitModal = function (category) {

    const data = outfits[category];

    if (!data) {
        console.error(
            "DAR-Z: Outfit category not found:",
            category
        );
        return;
    }


    const modal =
        document.getElementById("outfitModal");

    const content =
        document.getElementById("outfitModalContent");


    if (!modal || !content) {

        console.error(
            "DAR-Z: Outfit modal not found."
        );

        return;

    }


    closeAllModals();


    content.innerHTML = `

        <div class="outfit-modal-inner">

            <span class="modal-label">
                CURATED LOOKS
            </span>


            <h2>
                ${data.title}
            </h2>


            <p class="modal-description">
                ${data.description}
            </p>


            <div class="outfit-look-grid">

                ${data.looks.map(function (look) {

                    return `

                        <article class="outfit-look-card">

                            <div class="outfit-look-image">

                                <img
                                    src="${look.image}"
                                    alt="${look.title}"
                                >

                            </div>


                            <div class="outfit-look-content">

                                <span>
                                    ${look.number}
                                </span>


                                <h3>
                                    ${look.title}
                                </h3>


                                <p>
                                    ${look.text}
                                </p>

                            </div>

                        </article>

                    `;

                }).join("")}

            </div>

        </div>

    `;


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    lockPage();

};


/* =========================================================
   CLOSE OUTFIT MODAL
========================================================= */

window.closeOutfitModal = function () {

    const modal =
        document.getElementById("outfitModal");

    if (!modal) {
        return;
    }


    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    unlockPage();

};


/* =========================================================
   EXPERT DATA
========================================================= */

const experts = {

    annayi: {

        name: "Annayi Ghosh",

        image:
            "assets/experts/annayi-ghosh.png",

        category:
            "FASHION • PERSONAL EXPRESSION • CONTENT CREATOR",

        speciality:
            "Fashion as personal identity and creative expression",

        bio:
            "Annayi Ghosh is a content creator who is also pursuing a degree in English Literature and Film at the University of Birmingham, England. Her approach to fashion is deeply personal: she sees style as a fluid form of art and expression, where the same colour or silhouette can mean something completely different to different people.",

        background:
            "Cambridge School, Srinivaspuri",

        currently:
            "English Literature & Film — University of Birmingham",

        expertise:
            "Personal Style & Creative Expression",

        approach:
            "Individuality over fashion rules"

    },


    anu: {

        name: "Anu Thomas",

        image:
            "assets/experts/anu-thomas.png",

        category:
            "FASHION STUDIES • OCCASION STYLING",

        speciality:
            "Fashion, occasion styling and confidence",

        bio:
            "Anu Thomas brings an experience-led approach to fashion and occasion styling, focusing on how clothing can complement the setting, mood and personality of the person wearing it.",

        background:
            "Fashion & Style",

        currently:
            "Fashion Studies & Occasion Styling",

        expertise:
            "Occasion Styling",

        approach:
            "Style that works with the occasion"

    },


    bushra: {

        name: "Bushra Khan",

        image:
            "assets/experts/bushra-khan.jpeg",

        category:
            "FASHION DESIGN • PERSONAL STYLE",

        speciality:
            "Fashion design and individual expression",

        bio:
            "Bushra Khan approaches fashion through design, silhouette and personal expression, helping people understand how clothing can communicate confidence while remaining true to their individuality.",

        background:
            "Fashion Design",

        currently:
            "Fashion & Design",

        expertise:
            "Fashion Design & Styling",

        approach:
            "Individuality through thoughtful design"

    }

};


/* =========================================================
   OPEN EXPERT MODAL
   THIS IS THE ONLY EXPERT FUNCTION
========================================================= */

window.openExpertModal = function (person) {

    console.log(
        "DAR-Z: Opening expert:",
        person
    );


    const data = experts[person];


    if (!data) {

        console.error(
            "DAR-Z: No expert found for:",
            person
        );

        return;

    }


    const modal =
        document.getElementById("expertModal");

    const content =
        document.getElementById("expertModalContent");


    if (!modal) {

        console.error(
            "DAR-Z: #expertModal does not exist."
        );

        return;

    }


    if (!content) {

        console.error(
            "DAR-Z: #expertModalContent does not exist."
        );

        return;

    }


    closeAllModals();


    content.innerHTML = `

        <div class="profile-popup">


            <div class="profile-popup-image">

                <img
                    src="${data.image}"
                    alt="${data.name}"
                    onerror="this.style.display='none'"
                >

            </div>


            <div class="profile-popup-info">


                <span class="modal-label">
                    OUR EXPERT
                </span>


                <div class="profile-category">
                    ${data.category}
                </div>


                <h2>
                    ${data.name}
                </h2>


                <p class="profile-speciality">
                    ${data.speciality}
                </p>


                <p class="profile-bio">
                    ${data.bio}
                </p>


                <div class="profile-details">


                    <div class="profile-detail">

                        <span>
                            BACKGROUND
                        </span>

                        <p>
                            ${data.background}
                        </p>

                    </div>


                    <div class="profile-detail">

                        <span>
                            CURRENTLY
                        </span>

                        <p>
                            ${data.currently}
                        </p>

                    </div>


                    <div class="profile-detail">

                        <span>
                            EXPERTISE
                        </span>

                        <p>
                            ${data.expertise}
                        </p>

                    </div>


                    <div class="profile-detail">

                        <span>
                            APPROACH
                        </span>

                        <p>
                            ${data.approach}
                        </p>

                    </div>


                </div>


                <button
                    type="button"
                    class="pill-button"
                    onclick="closeExpertModal()"
                >
                    Back to Experts →
                </button>


            </div>


        </div>

    `;


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    lockPage();

};


/* =========================================================
   CLOSE EXPERT MODAL
========================================================= */

window.closeExpertModal = function () {

    const modal =
        document.getElementById("expertModal");


    if (!modal) {
        return;
    }


    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    unlockPage();

};


/* =========================================================
   THRIFT
========================================================= */

window.buyThrift = function (item) {

    const modal =
        document.getElementById("thriftModal");

    const content =
        document.getElementById("thriftModalContent");


    if (!modal || !content) {

        alert(
            "Please contact DAR-Z to enquire about this piece."
        );

        return;

    }


    closeAllModals();


    content.innerHTML = `

        <div class="outfit-modal-inner">

            <span class="modal-label">
                CURATED THRIFT
            </span>


            <h2>
                ${item}
            </h2>


            <p class="modal-description">

                This curated thrift piece is available
                through DAR-Z. Contact us to check
                availability, sizing and purchase details.

            </p>


            <button
                type="button"
                class="pill-button"
                onclick="closeThriftModal()"
            >
                Back to Thrift →
            </button>


        </div>

    `;


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    lockPage();

};


/* =========================================================
   CLOSE THRIFT
========================================================= */

window.closeThriftModal = function () {

    const modal =
        document.getElementById("thriftModal");


    if (!modal) {
        return;
    }


    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    unlockPage();

};


/* =========================================================
   MODAL CLICK HANDLING
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            event.target.closest(".modal");


        if (!modal) {
            return;
        }


        /*
         Only close when the actual dark overlay
         is clicked, not the modal content.
        */

        if (event.target !== modal) {
            return;
        }


        if (modal.id === "outfitModal") {
            closeOutfitModal();
        }


        else if (modal.id === "expertModal") {
            closeExpertModal();
        }


        else if (modal.id === "thriftModal") {
            closeThriftModal();
        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        closeOutfitModal();
        closeExpertModal();
        closeThriftModal();

    }
);