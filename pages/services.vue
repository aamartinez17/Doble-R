<template>
  <div>
    <section class="services-hero d-flex align-items-center justify-content-center text-center">
      <div class="container z-1">
        <h1 class="display-3 mb-3" data-aos="fade-up">Our <span class="text-accent">Services</span></h1>
        <p class="lead text-white mx-auto" style="max-width: 700px;" data-aos="fade-up" data-aos-delay="100">
          Comprehensive marketing, design, and production solutions tailored to elevate your brand and engage your community.
        </p>
      </div>
    </section>

    <section class="section-padding bg-black">
      <div class="container">
        <div class="row g-4">
          <div 
            v-for="(category, index) in serviceCategories" 
            :key="index" 
            class="col-lg-4 col-md-6"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="service-card h-100 p-4 d-flex flex-column">
              <div class="mb-4 icon-wrapper">
                <i :class="`bi ${category.icon} display-4 text-accent`"></i>
              </div>
              <h3 class="h4 text-white mb-3 border-bottom border-secondary pb-3">{{ category.title }}</h3>
              <ul class="list-unstyled text-light-grey small mb-4 flex-grow-1">
                <li v-for="(item, i) in category.items" :key="i" class="mb-2 d-flex align-items-start">
                  <i class="bi bi-check2 text-accent me-2"></i>
                  <span>{{ item }}</span>
                </li>
              </ul>
              <div class="mt-auto">
                <button @click="openDrawer" class="btn btn-primary w-100 fw-bold text-black">Inquire Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding" style="background-color: var(--secondary-dark-grey);">
      <div class="container">
        <div class="text-center mb-5">
          <h6 class="text-accent text-uppercase letter-spacing mb-2" data-aos="fade-up">Transparent Pricing</h6>
          <h2 class="text-white" data-aos="fade-up">Service Packages</h2>
          <div class="divider mx-auto mt-3"></div>
        </div>

        <div class="row g-4 justify-content-center">
          
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0">
            <div class="package-card h-100 p-4 border border-secondary rounded bg-black d-flex flex-column">
              <h3 class="text-white mb-2">Starter Package</h3>
              <p class="text-light-grey small mb-4">Perfect for businesses just getting started or needing a quick refresh.</p>
              <ul class="list-unstyled text-white mb-4 flex-grow-1">
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-star-fill text-accent me-2"></i> 1 Custom Business Card Design</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-star-fill text-accent me-2"></i> 1 Promo Flyer (digital + print)</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-star-fill text-accent me-2"></i> 3 Branded Social Media Posts</li>
              </ul>
              <button @click="openDrawer" class="btn btn-outline-light w-100">Get Started</button>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="package-card h-100 p-4 border border-accent rounded bg-black position-relative d-flex flex-column pro-card-shadow">
              
              <div class="popular-badge">
                <i class="bi bi-star-fill me-1"></i> Most Popular
              </div>

              <h3 class="text-accent mb-2">Pro Package</h3>
              <p class="text-light-grey small mb-4">For businesses ready to build a real digital presence and stay consistent.</p>
              <ul class="list-unstyled text-white mb-4 flex-grow-1">
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-check-circle-fill text-accent me-2"></i> Social Media Management (2–3 posts/week)</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-check-circle-fill text-accent me-2"></i> 1 Promo Flyer or Poster per month</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-check-circle-fill text-accent me-2"></i> Business Profile Optimization</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-check-circle-fill text-accent me-2"></i> 1 Monthly Strategy Session (1 hr)</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-check-circle-fill text-accent me-2"></i> 1 Reels Template + Caption Support</li>
              </ul>
              <button @click="openDrawer" class="btn btn-primary w-100 fw-bold text-black">Choose Pro</button>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="package-card h-100 p-4 border border-secondary rounded bg-black d-flex flex-column">
              <h3 class="text-white mb-2">Premium Package</h3>
              <p class="text-light-grey small mb-4">A complete marketing partner service with strategy, content, and design.</p>
              <ul class="list-unstyled text-white mb-4 flex-grow-1">
                <li class="mb-3 text-accent fw-bold">Everything in Pro, plus:</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-trophy-fill text-white me-2"></i> 2 Custom Reels per month</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-trophy-fill text-white me-2"></i> Branded Templates for Promotions</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-trophy-fill text-white me-2"></i> Monthly Analytics Report</li>
                <li class="mb-3 d-flex align-items-start"><i class="bi bi-trophy-fill text-white me-2"></i> On-Call Support (Mon–Fri)</li>
              </ul>
              <button @click="openDrawer" class="btn btn-outline-light w-100">Go Premium</button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section-padding bg-black">
      <div class="container text-center">
        <h2 class="text-white mb-3" data-aos="fade-up">Need a Custom Solution?</h2>
        <p class="text-light-grey mb-4 mx-auto" style="max-width: 600px;" data-aos="fade-up" data-aos-delay="100">
          We understand every project is unique. Contact us to discuss a tailored strategy that fits your specific goals and budget.
        </p>
        <button @click="openDrawer" class="btn btn-primary btn-lg" data-aos="zoom-in" data-aos-delay="200">
          Request Custom Quote
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const openDrawer = inject('openQuoteDrawer');

const siteDomain = 'https://doble-r.netlify.app/';
// const siteDomain = 'https://www.doblerproductions.com';
const siteTitle = 'Services | Doble R Productions';
const siteDescription = 'Explore our expert services.';
const siteImage = `${siteDomain}/images/doble-r-productions.png`; 

useHead({
  title: siteTitle,
  link: [{ rel: 'canonical', href: `${siteDomain}/services` }],
  meta: [
    { name: 'description', content: siteDescription },
    { property: 'og:title', content: siteTitle },
    { property: 'og:description', content: siteDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteDomain}/services` },
    { property: 'og:image', content: siteImage },
    { property: 'og:site_name', content: 'Doble R Productions' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: siteTitle },
    { name: 'twitter:description', content: siteDescription },
    { name: 'twitter:image', content: siteImage },
  ],
})

const serviceCategories = [
  { title: "Digital Marketing & Strategy", icon: "bi-lightbulb-fill", items: ["Brand development", "Campaign planning", "Audience targeting", "Community initiatives"] },
  { title: "Graphic & Digital Design", icon: "bi-palette-fill", items: ["Logo design", "Flyers & graphics", "Social media content", "Event banners", "Business cards", "Custom merchandise"] },
  { title: "Website & Digital Presence", icon: "bi-laptop-fill", items: ["Website layout", "Landing page design", "Web banners", "SEO structure", "Google Business Profile", "Brand alignment"] },
  { title: "Social Media Management", icon: "bi-phone-fill", items: ["Content creation", "Monthly calendars", "Caption writing", "Engagement strategy", "Brand storytelling", "Ad creative"] },
  { title: "Event Marketing & Promotions", icon: "bi-ticket-perforated-fill", items: ["Event branding", "Promotional materials", "Vendor outreach", "Artist booking", "Technical setup", "Signage", "Video promos", "RFID Cashless Systems", "On-site support"] },
  { title: "Photography Direction", icon: "bi-camera-fill", items: ["Shot lists", "Event photo direction", "Visual storytelling", "Creative direction"] },
  { title: "Video Content Direction", icon: "bi-camera-reels-fill", items: ["Scriptwriting", "Promo edits", "Branding consistency"] },
  { title: "Sponsorship & Business", icon: "bi-briefcase-fill", items: ["Sponsorship decks", "Company statements", "Executive summaries", "Email templates", "Presentation slides", "Pitch visuals"] },
  { title: "Consulting & Brand Guidance", icon: "bi-chat-dots-fill", items: ["Identity audits", "Marketing plans", "Strategy sessions", "Small business support", "Campaign direction", "SEO visuals"] }
]
</script>

<style scoped>
/* Styles */
.services-hero {
  height: 60vh;
  min-height: 400px;
  background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  padding-top: var(--spacing-top);
}

.section-padding { padding: var(--spacing-xl) 0; }
.text-light-grey { color: #cccccc; }

/* Icons */
.icon-wrapper i {
  text-shadow: 0 0 15px rgba(225, 186, 102, 0.3);
  transition: var(--transition-default);
}

/* Cards */
.service-card {
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid #333;
  border-radius: 8px;
  transition: all 0.4s ease;
}
.service-card:hover {
  background: rgba(0, 0, 0, 1);
  border-color: var(--color-accent);
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(225, 186, 102, 0.15);
}
.service-card:hover .icon-wrapper i {
  transform: scale(1.1);
  text-shadow: 0 0 25px rgba(225, 186, 102, 0.6);
}
.service-card ul li, .package-card ul li { line-height: 1.6; }

/* Package Card */
.package-card {
  transition: var(--transition-default);
  position: relative; 
}
.package-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent) !important;
}

/* Pro Card Shadow */
.pro-card-shadow {
  box-shadow: 0 0 20px rgba(225, 186, 102, 0.15);
}

/* POPULAR BADGE STYLING */
.popular-badge {
  position: absolute;
  top: 20px;
  right: -10px; /* Overhangs slightly */
  background-color: var(--color-accent); /* Gold Background */
  color: #000000; /* Black Text */
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  z-index: 10;
  transform: rotate(5deg);
}

/* Button Text Color */
.text-black { color: #000 !important; }
.divider { height: 2px; width: 60px; background-color: var(--color-accent); }
.letter-spacing { letter-spacing: 2px; }
</style>