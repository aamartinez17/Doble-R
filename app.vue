<template>
  <div>
    <AppNavbar />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
    <ClientOnly>
      <CookieBanner />
    </ClientOnly>
  </div>

  <!-- 
    The FormDrawer component lives here.
    We pass the 'isDrawerOpen' state as a prop.
    We listen for the 'close' event to update the state.
  -->
  <ClientOnly>
    <FormDrawer :isOpen="isDrawerOpen" @close="closeDrawer" />
  </ClientOnly>
</template>
<style>
/* We use the '~/' alias, which Nuxt's <style> block understands.
  This imports your main.css file globally.
*/
@import '~/assets/main.css';
</style>
<script setup>
// --- Drawer State Management ---
// 1. Create a reactive state for the drawer
const isDrawerOpen = ref(false);

// 2. Create functions to open and close it
const openDrawer = () => {
  isDrawerOpen.value = true;
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

// 3. "Provide" the functions/state to all children
provide('openQuoteDrawer', openDrawer);
provide('isDrawerOpen', isDrawerOpen); // Provides the state for the Navbar to watch

// 4. Watch for changes to the drawer state
watch(isDrawerOpen, (isOpen) => {
  if (isOpen) {
    // Add class to body when drawer opens to prevent scrolling
    document.body.classList.add('drawer-open');
  } else {
    // Remove class from body when drawer closes
    document.body.classList.remove('drawer-open');
  }
});
// --- End Drawer State Management ---
</script>