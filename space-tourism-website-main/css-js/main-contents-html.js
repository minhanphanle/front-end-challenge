export const mainHTML = `        <div>
            <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
                So, you want to travel to
                <span class="d-block fs-900 ff-serif text-white">Space</span>
            </h1>
            <p class="ff-sans-normal text-accent">Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</p>
        </div>



        <div>
            <a href="#" class="large-button uppercase ff-serif text-dark bg-white">Explore</a>
        </div>`;

export const destinationHTML = `


        <h1 class="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>

        <picture id="planet-logo">
            <source srcset="starter-code/assets/destination/image-moon.webp" type="image/webp">
            <img src="starter-code/assets/destination/image-moon.png" alt="the moon">
        </picture>


        <nav class="second-nav underline-indicators" role="tablist" aria-label="destination list">

            <button aria-selected="true" tabindex="0" role="tab" id="moon"
                class="uppercase text-white letter-spacing-2 ff-sans-cond active">
                Moon
            </button>
            <button aria-selected="false" tabindex="-1" role="tab" id="mars"
                class="uppercase text-white letter-spacing-2 ff-sans-cond">
                Mars
            </button>
            <button aria-selected="false" tabindex="-1" role="tab" id="europa"
                class="uppercase text-white letter-spacing-2 ff-sans-cond">
                Europa
            </button>
            <button aria-selected="false" tabindex="-1" role="tab" id="titan"
                class="uppercase text-white letter-spacing-2 ff-sans-cond">
                Titan
            </button>
        </nav>
        <article class="destination-info" tabindex="0" id="main-content">
            <span class="ff-serif uppercase fs-900" id='planet-name'>Moon</span>

            <p class="ff-sans-normal text-accent" id='description'>
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                regain perspective and come back refreshed. While you’re there, take in some history
                by visiting the Luna 2 and Apollo 11 landing sites.
            </p>

            <div class="distance-travel-container">
                <div class="fs-500 ff-serif uppercase" id='distance'>
                    <span class="uppercase ff-sans-cond fs-400 text-accent">Avg. distance</span>
                    <span id="distance-data">
                        384,400 km </span>
                </div>

                <div class="fs-500 ff-serif uppercase" id='travel'>
                    <span class="uppercase ff-sans-cond fs-400 text-accent"> Est. travel time</span>
                    <span id="travel-data"> 3 days </span>
                </div>
            </div>
        </article>
`;
export const technologyHTML = `
        <h1 class="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>




        <picture id="tech-photo">
            <source media="(min-width:45em)" srcset="starter-code/assets/technology/image-launch-vehicle-portrait.jpg">
            <img id="tech-photo" src="starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
                alt="Technology Image">
        </picture>



        <nav class="flex dot-indicators" role="tablist" aria-label="technology list">

            <button aria-selected="true" id="0" tabindex="0" role="tab" id="launch-vehicle" aria-label="launch vehicle"
                class="uppercase text-white letter-spacing-2 ff-sans-cond active">
                1
            </button>
            <button aria-selected="false" id="1" tabindex="-1" role="tab" id="spaceport" aria-label="spaceport"
                class="uppercase text-white letter-spacing-2 ff-sans-cond">
                2
            </button>
            <button aria-selected="false" id="2" tabindex="-1" role="tab" id="space-capsule" aria-label="space-capsule"
                class="uppercase text-white letter-spacing-2 ff-sans-cond">
                3
            </button>
        </nav>

        <article class="technology-info" tabindex="0" id="main-content">
            <div>
                <span class="ff-serif uppercase text-gray">The Terminology...</span>
                <span id="tech-name" class="ff-serif uppercase"> Launch vehicle</span>
            </div>

            <p id="tech-description" class="ff-sans-normal text-accent">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                it's quite an awe-inspiring sight on the launch pad!
            </p>
        </article>`;
export const crewHTML = ` <h1 class="numbered-title header"><span aria-hidden="true">02</span> Meet your crew</h1>


        <div class="fs-600 ff-serif title-name flex-col uppercase">
            <span id="crew-role" class="text-gray fs-400 d-block ">Commander</span>
            <span id="crew-name">Douglas Hurley </span>
        </div>


        <article class="ff-sans-normal text-accent" >

            <p id='crew-description'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                and former NASA astronaut. He launched into space for the third time as
                commander of Crew Dragon Demo-2.</p>
        </article>

        <div>

        </div>
        <div role="tablist" class="dot-indicators flex">
            <button tabindex="0" role="tab" id="0" aria-selected="true"><span class="sr-only"></span></button>
            <button tabindex="-1" role="tab" id="1" aria-selected="false"><span class="sr-only"></span></button>
            <button tabindex="-1" role="tab" id="2" aria-selected="false"><span class="sr-only"></span></button>
            <button tabindex="-1" role="tab" id="3" aria-selected="false"><span class="sr-only"></span></button>
        </div>

        <picture id="crew-pic">
            <source srcset="starter-code/assets/crew/image-douglas-hurley.webp">
            <img src="starter-code/assets/crew/image-douglas-hurley.png" alt="crew member picture" />
        </picture>
`;

export const notFoundHTML = `<h1>404 Page Not Found</h1>`;
