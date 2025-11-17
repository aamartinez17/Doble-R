<template>
  <div>
    <section id="home" class="hero-section d-flex align-items-center justify-content-center text-center position-relative">
      
      <div class="animated-strips">
        <img src="/images/strip-white.png" alt="White Strip" class="strip-white">
        <img src="/images/strip-black.png" alt="Black Strip" class="strip-black">
        <img src="/images/strip-gold.png" alt="Gold Strip" class="strip-gold">
      </div>

      <div class="container position-relative z-1">
        <div class="mb-4" data-aos="fade-up" data-aos-duration="1500">
          <img 
            src="/images/doble-r-productions-trim.png" 
            alt="Doble R Productions" 
            class="img-fluid hero-logo"
          >
        </div>
        <p class="lead text-white mb-5 mx-auto" style="max-width: 700px;" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
          Digital Marketing & Creative Strategy. We help businesses and community organizations stand out through strategic visuals and strong storytelling.
        </p>
        <div data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1500">
          <a href="tel:5402827257" class="btn btn-primary btn-lg me-3">Call Now</a>
          <NuxtLink to="/services" class="btn btn-outline-light btn-lg">View Services</NuxtLink>
        </div>
      </div>
    </section>

    <section id="about" class="section-padding bg-black">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <h6 class="text-accent text-uppercase letter-spacing mb-3">Who We Are</h6>
            <h2 class="mb-4 text-white">Modern Design. Community Driven.</h2>
            <div class="text-light-grey">
              <p class="mb-4">
                Doble R Productions is a creative marketing studio specializing in digital design, branding, and event-focused marketing solutions. We help businesses and community organizations stand out through strategic visuals, strong storytelling, and high-quality promotional content. From logos and social media design to full event branding and sponsorship materials, we bring ideas to life with clarity, creativity, and purpose.
              </p>
              <p class="mb-0">
                Our work blends modern design with community-driven strategy, delivering visuals that connect with audiences and elevate local brands. Whether building a new identity, promoting an event, or creating digital content, Doble R Productions brings a professional, hands-on approach tailored to each client’s goals.
              </p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <div class="about-image-placeholder position-relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team working on design" 
                class="img-fluid rounded shadow-lg border border-secondary"
              >
              <div class="border-offset"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding" style="background-color: var(--secondary-dark-grey);">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="text-white" data-aos="fade-up">Our Expertise</h2>
          <div class="divider mx-auto mt-3"></div>
        </div>
        <div class="row g-4">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="0">
            <div class="service-card h-100 p-4">
              <h3 class="h4 text-accent mb-3">Digital Marketing</h3>
              <p class="text-white small">Brand development, audience targeting, and community-focused marketing initiatives that drive engagement.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="service-card h-100 p-4">
              <h3 class="h4 text-accent mb-3">Event Production</h3>
              <p class="text-white small">Full event branding, stage banners, RFID cashless systems, and on-site production support for festivals and shows.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="service-card h-100 p-4">
              <h3 class="h4 text-accent mb-3">Creative Content</h3>
              <p class="text-white small">Photography direction, video content strategy, logo design, and comprehensive visual identity audits.</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-5" data-aos="fade-up">
          <NuxtLink to="/services" class="btn btn-outline-light">Explore All Services</NuxtLink>
        </div>
      </div>
    </section>

    <section id="faq" class="section-padding bg-black">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="text-white" data-aos="fade-up">Frequently Asked Questions</h2>
          <div class="divider mx-auto mt-3"></div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="accordion accordion-flush" id="faqAccordion" data-aos="fade-up">
              <div class="accordion-item bg-transparent border-bottom border-secondary">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Do you serve customers at your location?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-light-grey">
                    We primarily operate remotely and travel to our clients. Whether your business is local to New Market, VA or further afield, we come to you to ensure we capture your brand's authentic environment.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent border-bottom border-secondary">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Do you handle printing for events?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-light-grey">
                    Yes. We design and coordinate print materials including event banners, yard signs, flyers, posters, and custom merchandise (shirts, hats, etc.).
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent border-bottom border-secondary">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    How do I get in touch?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-light-grey">
                    The best way to reach us is by calling <strong>(540) 282-7257</strong> or messaging us directly on Google. We are available Mon-Fri from 8am-5pm.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section-padding" style="background-color: var(--secondary-dark-grey);">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <h6 class="text-uppercase letter-spacing mb-2 text-white">Get in Touch</h6>
            <h2 class="text-accent mb-4">Contact Us</h2>
            <p class="text-light-grey mb-4">
              Ready to elevate your brand visuals or plan your next big event? 
              Reach out to Doble R Productions today.
            </p>
            <div class="d-flex align-items-start mb-3">
              <div class="text-accent fs-4 me-3"><i class="bi bi-geo-alt-fill"></i></div>
              <div>
                <h5 class="text-white mb-0">Location</h5>
                <p class="text-light-grey">125 Tyler Dr. New Market, VA</p>
              </div>
            </div>
            <div class="d-flex align-items-start mb-3">
              <div class="text-accent fs-4 me-3"><i class="bi bi-telephone-fill"></i></div>
              <div>
                <h5 class="text-white mb-0">Phone</h5>
                <p class="text-light-grey"><a href="tel:5402827257" class="text-decoration-none text-light-grey">(540) 282-7257</a></p>
              </div>
            </div>
            <div class="d-flex align-items-start mb-4">
              <div class="text-accent fs-4 me-3"><i class="bi bi-clock-fill"></i></div>
              <div>
                <h5 class="text-white mb-0">Hours</h5>
                <p class="text-light-grey">Mon - Fri: 8:00am - 5:00pm</p>
              </div>
            </div>
            <div class="d-flex gap-3">
              <a href="tel:5402827257" class="btn btn-primary">Call Now</a>
              <a href="#" target="_blank" class="btn btn-outline-light">Message on Google</a>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <div class="ratio ratio-4x3 border border-secondary rounded overflow-hidden">
              <iframe src="https://maps.google.com/maps?q=125%20Tyler%20Dr%20New%20Market%20VA&t=&z=13&ie=UTF8&iwloc=&output=embed" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// --- Configuration ---
// ! IMPORTANT: Change this to your live domain name!
const siteDomain = 'https://www.doblerproductions.com';
// const siteDomain = 'https://www.doblerproductions.com';
const siteTitle = 'Home | Doble R Productions';
const siteDescription = 'Doble R Productions specializes in Digital Marketing, Event Production, and Branding in New Market, VA. We help businesses stand out with strategic visuals and storytelling.';
const siteImage = `${siteDomain}/images/doble-r-productions.png`; // User-specified image

// --- useHead ---
useHead({
  title: siteTitle,
  link: [
    {
      rel: 'canonical',
      href: `${siteDomain}/`,
    },
  ],
  meta: [
    // --- Standard Meta ---
    { name: 'description', content: siteDescription },
    
    // --- Open Graph (Facebook, LinkedIn, etc.) ---
    { property: 'og:title', content: siteTitle },
    { property: 'og:description', content: siteDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteDomain}/` },
    { property: 'og:image', content: siteImage },
    { property: 'og:image:width', content: '1200' }, // Standard width
    { property: 'og:image:height', content: '630' },  // Standard height (1.91:1 ratio)
    { property: 'og:site_name', content: 'Doble R Productions' },

    // --- Twitter Card ---
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: siteTitle },
    { name: 'twitter:description', content: siteDescription },
    { name: 'twitter:image', content: siteImage },
  ],
})
</script>

<style scoped>
/* Hero Styling */
.hero-section {
  height: 100vh;
  /* min-height: 600px; */
  background: #000000;
  background: linear-gradient(180deg,rgba(0, 0, 0, 1) 60%,
   rgba(75, 62, 34, 1) 100%,
    rgba(132, 109, 60, 1) 100%,
     rgba(188, 156, 85, 1) 100%,
      rgba(225, 186, 102, 1) 100%);
  background-size: cover;
  background-position: center;
  padding-top: var(--spacing-top);
  overflow: hidden; /* Important for containing the animations */
}

/* Hero Logo Styling */
.hero-logo {
  max-width: 800px;
  width: 100%;
  height: auto;
}

/* Animated Strips Container */
.animated-strips {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Ensures strips don't cause scrollbars during animation */
  pointer-events: none; /* Allows clicks to pass through to content below */
}

/* Individual Strip Styling */
.animated-strips img {
  position: absolute;
  width: 250px; /* Adjust as needed */
  height: auto;
  opacity: 0; /* Start invisible */
  animation-fill-mode: forwards; /* Keep final state */
}

.strip-white {
  top: 15%;
  right: -250px; /* Start off-screen right */
  /* transform: rotate(15deg); Slight angle */
  animation: slideInRightWhite 2s ease-out 0.5s forwards;
}

.strip-black {
  top: 20%; /* Below white strip */
  right: -250px; /* Start off-screen right */
  /* transform: rotate(15deg); Slight angle */
  animation: slideInRightBlack 2s ease-out 0.8s forwards;
}

.strip-gold {
  bottom: 10%;
  left: -250px; /* Start off-screen left */
  /* transform: rotate(15deg); Slight angle */
  animation: slideInLeftGold 2s ease-out 0.6s forwards;
}

/* Keyframe Animations */
@keyframes slideInRightWhite {
  0% {
    right: -250px;
    opacity: 0;
  }
  100% {
    right: 10%; /* Adjust this value for how far towards the center it goes */
    opacity: 1;
  }
}

@keyframes slideInRightBlack {
  0% {
    right: -250px;
    opacity: 0;
  }
  100% {
    right: 5%; /* Further right than white strip */
    opacity: 1;
  }
}

@keyframes slideInLeftGold {
  0% {
    left: -250px;
    opacity: 0;
  }
  100% {
    left: 5%; /* Adjust this value for how far from the corner it goes */
    opacity: 1;
  }
}

/* Responsive Adjustments for Strips */
@media (max-width: 768px) {
  .animated-strips img {
    width: 150px; /* Smaller strips on mobile */
  }

  .strip-white {
    top: 20%;
    right: -150px;
    animation: slideInRightWhiteMobile 2s ease-out 0.8s forwards;
  }

  .strip-black {
    top: 25%;
    right: -150px;
    animation: slideInRightBlackMobile 2s ease-out 1.2s forwards;
  }

  .strip-gold {
    bottom: 15%;
    left: -150px;
    animation: slideInLeftGoldMobile 2s ease-out 1.6s forwards;
  }

  @keyframes slideInRightWhiteMobile {
    0% { right: -150px; opacity: 0; }
    100% { right: 15%; opacity: 1; }
  }

  @keyframes slideInRightBlackMobile {
    0% { right: -150px; opacity: 0; }
    100% { right: 5%; opacity: 1; }
  }

  @keyframes slideInLeftGoldMobile {
    0% { left: -150px; opacity: 0; }
    100% { left: 5%; opacity: 1; }
  }
}


/* Other Sections - Keep existing styles */
.section-padding {
  padding: var(--spacing-xl) 0;
}

.text-light-grey {
  color: #cccccc;
}

.letter-spacing {
  letter-spacing: 2px;
}

.about-image-placeholder {
  position: relative;
  padding: 20px 0 0 20px;
}

.border-offset {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-accent);
  z-index: 0;
  transform: translate(-20px, -20px);
}

.about-image-placeholder img {
  position: relative;
  z-index: 1;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  transition: var(--transition-default);
}

.service-card:hover {
  background: rgba(225, 186, 102, 0.1);
  border-color: var(--color-accent);
  transform: translateY(-5px);
}

.accordion-button {
  box-shadow: none;
}

.accordion-button:not(.collapsed) {
  color: var(--color-accent);
  background-color: transparent;
  box-shadow: none;
}

.accordion-button::after {
  filter: invert(1);
}

.accordion-button:not(.collapsed)::after {
  filter: sepia(100%) saturate(300%) hue-rotate(0deg);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23E1BA66'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.divider {
  height: 2px;
  width: 60px;
  background-color: var(--color-accent);
}

/* Fix for Map Container overflowing on mobile */
.ratio {
  width: 100%;
  max-width: 100%;
  overflow: hidden; /* Ensures the map iframe never pushes width */
}

iframe {
  max-width: 100%;
}
</style>