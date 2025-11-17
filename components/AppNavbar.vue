<template>
  <nav ref="navbarRef" class="navbar navbar-expand-lg fixed-top custom-navbar">
    <div class="container">
      
      <NuxtLink class="navbar-brand d-flex align-items-center" to="/" @click="closeMenu">
        <img 
          src="/logos/doble-r-productions-logo-long.png" 
          alt="Doble R Productions" 
          class="navbar-logo"
        >
      </NuxtLink>

      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div ref="collapseRef" class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/" @click="closeMenu">Home</NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" to="/#about" @click="closeMenu">About</NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/services" @click="closeMenu">Services</NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" to="/#faq" @click="closeMenu">FAQ</NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" to="/#contact" @click="closeMenu">Contact Us</NuxtLink>
          </li>

          <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
            <a href="tel:5402827257" class="btn btn-primary" @click="closeMenu">
              <i class="bi bi-telephone-fill me-2"></i> (540) 282-7257
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// References to DOM elements
const navbarRef = ref(null)
const collapseRef = ref(null)

// Function to close the Bootstrap menu
const closeMenu = () => {
  // Check if window exists (client-side) and if bootstrap is loaded
  if (typeof window !== 'undefined' && window.bootstrap && collapseRef.value) {
    
    // Only attempt to hide if the menu is actually open (has class 'show')
    if (collapseRef.value.classList.contains('show')) {
      // Get the existing Bootstrap Collapse instance or create a new one
      const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.value) || new window.bootstrap.Collapse(collapseRef.value)
      bsCollapse.hide()
    }
  }
}

// Event Listener: Detect clicks outside the navbar
const handleClickOutside = (event) => {
  // If navbarRef exists AND the clicked element is NOT inside the navbar
  if (navbarRef.value && !navbarRef.value.contains(event.target)) {
    closeMenu()
  }
}

// Add listeners when component mounts
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Clean up listeners when component is removed
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Navbar specific overrides */
.custom-navbar {
  background-color: var(--color-primary); /* Black */
  border-bottom: 1px solid var(--secondary-dark-grey);
  padding: 0.5rem 0;
  transition: var(--transition-default);
}

/* Logo Sizing */
.navbar-logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.navbar-brand {
  padding: 0;
}

/* Navigation Links */
.nav-link {
  color: var(--color-secondary);
  font-family: var(--font-family-body);
  font-weight: 500;
  margin: 0 10px;
  transition: var(--transition-color);
}

/* ONLY Hover state triggers the accent color */
.nav-link:hover {
  color: var(--color-accent);
}

/* Custom Toggler (Hamburger) Coloring */
.navbar-toggler {
  border-color: var(--color-accent);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(225, 186, 102, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>