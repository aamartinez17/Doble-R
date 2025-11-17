<template>
  <div>
    <section class="services-hero d-flex align-items-center justify-content-center text-center">
      <div class="container z-1">
        <h1 class="display-3 mb-3" data-aos="fade-up">Our <span class="text-accent">Services</span></h1>
        <p class="lead text-light-grey mx-auto" style="max-width: 700px;" data-aos="fade-up" data-aos-delay="100">
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
              
              <h3 class="h4 text-light-grey mb-3 border-bottom border-secondary pb-3">
                {{ category.title }}
              </h3>
              
              <ul class="list-unstyled text-light-grey small mb-4 flex-grow-1">
                <li v-for="(item, i) in category.items" :key="i" class="mb-2 d-flex align-items-start">
                  <i class="bi bi-check2 text-accent me-2"></i>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <div class="mt-auto">
                <a href="tel:5402827257" class="btn btn-primary w-100 fw-bold text-black">Inquire Now</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section-padding" style="background-color: var(--secondary-dark-grey);">
      <div class="container text-center">
        <h2 class="text-light-grey mb-3" data-aos="fade-up">Need a Custom Package?</h2>
        <p class="text-light-grey mb-4 mx-auto" style="max-width: 600px;" data-aos="fade-up" data-aos-delay="100">
          We understand every project is unique. Contact us to discuss a tailored strategy that fits your specific goals and budget.
        </p>
        <a href="tel:5402827257" class="btn btn-primary btn-lg" data-aos="zoom-in" data-aos-delay="200">
          Call for Consultation
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
// Page Metadata
// --- Configuration ---
// ! IMPORTANT: Change this to your live domain name!
const siteDomain = 'https://www.doblerproductions.com';
// const siteDomain = 'https://www.doblerproductions.com';
const siteTitle = 'Services | Doble R Productions';
const siteDescription = 'Explore our expert services: Digital Marketing, Event Production, Graphic Design, Web Presence, Social Media Management, and Brand Consulting.';
const siteImage = `${siteDomain}/images/doble-r-productions.png`; // User-specified image

// --- useHead ---
useHead({
  title: siteTitle,
  link: [
    {
      rel: 'canonical',
      href: `${siteDomain}/services`,
    },
  ],
  meta: [
    // --- Standard Meta ---
    { name: 'description', content: siteDescription },
    
    // --- Open Graph (Facebook, LinkedIn, etc.) ---
    { property: 'og:title', content: siteTitle },
    { property: 'og:description', content: siteDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteDomain}/services` },
    { property: 'og:image', content: siteImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Doble R Productions' },

    // --- Twitter Card ---
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: siteTitle },
    { name: 'twitter:description', content: siteDescription },
    { name: 'twitter:image', content: siteImage },
  ],
})

// Data Source for Services
const serviceCategories = [
  {
    title: "Digital Marketing & Strategy",
    icon: "bi-lightbulb-fill",
    items: [
      "Brand development and positioning",
      "Marketing campaign planning",
      "Audience targeting strategies",
      "Community-focused initiatives"
    ]
  },
  {
    title: "Graphic & Digital Design",
    icon: "bi-palette-fill",
    items: [
      "Logo design and branding systems",
      "Flyers, posters, and promotional graphics",
      "Social media content design",
      "Event banners, signs, and print materials",
      "Business cards and brochures",
      "Custom merchandise (shirts, hats, etc.)"
    ]
  },
  {
    title: "Website & Digital Presence",
    icon: "bi-laptop-fill",
    items: [
      "Website layout design (1-page & multi-page)",
      "Landing page design",
      "Web banners and graphics",
      "SEO-friendly content structure",
      "Google Business Profile setup",
      "Brand alignment across platforms"
    ]
  },
  {
    title: "Social Media Management",
    icon: "bi-phone-fill",
    items: [
      "Content creation (Reels, posts, stories)",
      "Monthly content calendars",
      "Caption writing (English & Spanish)",
      "Engagement strategy",
      "Brand storytelling",
      "Social media ads creative"
    ]
  },
  {
    title: "Event Marketing & Promotions",
    icon: "bi-ticket-perforated-fill",
    items: [
      "Full event branding (logos, flyers)",
      "Promotional materials for festivals",
      "Vendor and sponsor outreach design",
      "Artist booking & talent coordination",
      "Sound engineer & lighting coordination",
      "Stage banners, yard signs, parking signs",
      "Video promos for events",
      "Layout design (RFID cards, maps)",
      "RFID Cashless Systems setup & training",
      "On-site event production support",
      "Creative direction for stages & flow"
    ]
  },
  {
    title: "Photography Direction",
    icon: "bi-camera-fill",
    items: [
      "Shot lists & Photography guidelines",
      "Event photo direction",
      "Visual storytelling for brands",
      "Creative direction (Not shooting)"
    ]
  },
  {
    title: "Video Content Direction",
    icon: "bi-camera-reels-fill",
    items: [
      "Scriptwriting for promos",
      "Short promo edits for social media",
      "Branding consistency in video content"
    ]
  },
  {
    title: "Sponsorship & Business",
    icon: "bi-briefcase-fill",
    items: [
      "Sponsorship decks & Media kits",
      "Company capability statements",
      "Executive summaries",
      "Professional email templates",
      "Branded presentation slides",
      "Pitch visuals"
    ]
  },
  {
    title: "Consulting & Brand Guidance",
    icon: "bi-chat-dots-fill",
    items: [
      "Visual identity audits",
      "Marketing plan development",
      "Content strategy sessions",
      "Small business marketing support",
      "Creative direction for campaigns",
      "SEO best practices for visuals"
    ]
  }
]
</script>

<style scoped>
/* Hero Styling */
.services-hero {
  height: 60vh;
  min-height: 400px;
  background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  /* padding-top: var(--spacing-top); */
  margin-top: var(--spacing-top);
}

.section-padding {
  padding: var(--spacing-xl) 0;
}

.text-light-grey {
  color: var(--color-secondary);
}

/* Icon Styling - Making it stand out */
.icon-wrapper i {
  text-shadow: 0 0 15px rgba(225, 186, 102, 0.3); /* Subtle gold glow */
  transition: var(--transition-default);
}

/* Service Card Styling */
.service-card {
  background: rgba(20, 20, 20, 0.5); /* Darker, cleaner background */
  border: 1px solid #333;
  border-radius: 8px;
  transition: all 0.4s ease;
}

/* Hover Effects: Make it stand out! */
.service-card:hover {
  background: rgba(0, 0, 0, 1);
  border-color: var(--color-accent);
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(225, 186, 102, 0.15); /* Gold Glow */
}

.service-card:hover .icon-wrapper i {
  transform: scale(1.1);
  text-shadow: 0 0 25px rgba(225, 186, 102, 0.6); /* Intense glow on hover */
}

/* List Item spacing */
.service-card ul li {
  line-height: 1.6;
}

/* Ensure button text is readable on gold background */
.text-black {
  color: #000 !important;
}

.text-accent {
    color: var(--color-accent) !important;
}
</style>