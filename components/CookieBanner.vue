<template>
  <div v-if="!hasConsented" class="cookie-banner-overlay">
    <div class="cookie-banner" data-aos="fade-up">
      <div class="cookie-text">
        <p class="mb-1 text-white fw-bold">We value your privacy</p>
        <p class="small mb-0 text-light-grey">
          We use cookies to enhance your browsing experience and analyze our traffic. 
          This site is protected by reCAPTCHA and the Google 
          <a href="https://policies.google.com/privacy" target="_blank" class="text-accent">Privacy Policy</a> and 
          <a href="https://policies.google.com/terms" target="_blank" class="text-accent">Terms of Service</a> apply.
        </p>
      </div>
      <div class="cookie-actions">
        <button class="btn btn-primary btn-sm" @click="acceptCookies">
          Accept
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCookieConsent } from '~/composables/useCookieConsent.js';

// Get global state
const { hasConsented, acceptCookies } = useCookieConsent();
</script>

<style scoped>
.cookie-banner-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1060; /* Higher than drawer (1050) just in case, or adjust as needed */
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5); /* Dim background slightly */
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align to bottom */
}

.cookie-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
  
  /* Dark Theme Styling */
  background-color: var(--secondary-dark-grey); 
  border: 1px solid #333;
  border-top: 2px solid var(--color-accent); /* Gold Accent Top */
  
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.5);
}

.cookie-text p {
  margin: 0;
}

.text-light-grey {
  color: #b0b0b0;
}

.text-accent {
  color: var(--color-accent);
  text-decoration: none;
}

.text-accent:hover {
  text-decoration: underline;
}

.cookie-actions .btn {
  white-space: nowrap;
  min-width: 100px;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .cookie-banner {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  
  .cookie-actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>