<template>
  <div>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="drawer-overlay"
        @click="closeDrawer"
      ></div>
    </transition>

    <transition name="slide">
      <div v-if="isOpen" class="drawer-panel">
        
        <div class="drawer-header">
          <button @click="closeDrawer" class="close-btn" aria-label="Close">
            &times;
          </button>
        </div>

        <div class="drawer-content">
          <QuoteForm @close="closeDrawer" />
        </div>

      </div>
    </transition>
  </div>
</template>

<script setup>
import QuoteForm from './QuoteForm.vue';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close']);

const closeDrawer = () => {
  emit('close');
};
</script>

<style scoped>
/* Backdrop */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* Darker overlay for focus */
  z-index: 998;
}

/* Panel */
.drawer-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  max-width: 600px;
  height: 100vh;
  background-color: #000000; /* Hardcoded black to ensure contrast */
  border-left: 1px solid #333;
  box-shadow: -4px 0 25px rgba(0, 0, 0, 0.8);
  z-index: 1050;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.drawer-header {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  position: sticky; /* Keeps X visible when scrolling */
  top: 0;
  background-color: #000000;
  z-index: 10;
}

.close-btn {
  background: none;
  border: none;
  font-size: 3rem; /* Larger for easier clicking */
  color: #ffffff; /* White so it is visible */
  line-height: 0.7;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.3s ease;
}

.close-btn:hover {
  color: var(--color-accent); /* Turns Gold on hover */
  transform: scale(1.1);
}

.drawer-content {
  padding: 0 2rem 2rem 2rem;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>