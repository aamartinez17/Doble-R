<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row gy-5 justify-content-between align-items-start">
        
        <div class="col-lg-6 col-md-6">
          <div class="footer-brand mb-4">
            <img 
              src="/logos/doble-r-productions-logo-long.png" 
              alt="Doble R Productions" 
              class="img-fluid footer-logo"
            >
          </div>
          <p class="text-light-grey mb-0" style="max-width: 400px;">
            Elevating brands through strategic visuals, strong storytelling, and community-driven events.
          </p>
        </div>

        <div class="col-lg-5 col-md-6 text-lg-end text-start">
          <h5 class="text-accent mb-3">Connect With Us</h5>
          
          <div class="d-flex gap-3 mb-4 justify-content-lg-end justify-content-start">
            
            <a href="#" class="social-icon" aria-label="Instagram">
              <i class="bi bi-instagram fs-4"></i>
            </a>

            <a href="#" class="social-icon" aria-label="Facebook">
              <i class="bi bi-facebook fs-4"></i>
            </a>

            <a href="https://linktr.ee/doble_r" target="_blank" class="social-icon" aria-label="Linktree">
               <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="m13.736 5.853 4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-4.035-4.004v7.975h-3.357v-7.975l-4.035 4.004-2.325-2.334 4.229-4.108H2.208V8.12h5.908l-4.2-4.005 2.325-2.38 4.005 4.117V0h3.489v5.853z"/>
              </svg>
            </a>

          </div>

          <div>
             <a href="tel:5402827257" class="btn btn-sm btn-outline-light">
               <i class="bi bi-telephone-fill me-2"></i> Call: (540) 282-7257
             </a>
          </div>
        </div>

      </div>

      <hr class="my-3 border-secondary" />

      <div class="row align-items-center text-center">
        <div class="col-12">
          
          <p class="mb-2 small text-light-grey">
            Powered by <a href="https://casatechllc.com" target="_blank" class="text-accent text-decoration-none">Casatech LLC</a>
          </p>
          
          <p class="mb-0 small text-white">
            &copy; {{ new Date().getFullYear() }} Doble R Productions LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No specific logic needed
</script>

<style scoped>
.footer-section {
  background-color: var(--color-primary); /* Black */
  border-top: 1px solid #222;
  padding-top: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
}

.footer-logo {
  max-width: 250px;
  height: auto;
}

.text-light-grey {
  color: #b0b0b0;
}

.text-accent {
  color: var(--color-accent);
}

/* Social Icon Styling */
.social-icon {
  color: white;
  transition: var(--transition-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon:hover {
  color: var(--color-accent);
  transform: translateY(-3px);
}

/* Adjust responsiveness for text alignment */
@media (max-width: 991px) {
  .text-lg-end {
    text-align: left !important;
  }
  .justify-content-lg-end {
    justify-content: flex-start !important;
  }
}
</style>