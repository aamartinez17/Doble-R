import { ref, onMounted } from 'vue';

// Singleton ref to ensure server/client sync
const hasConsented = ref(false);

export function useCookieConsent() {

  onMounted(() => {
    // Check localStorage only on the client side
    hasConsented.value = localStorage.getItem('cookie_consent') === 'true';
  });

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    hasConsented.value = true;
  };

  return {
    hasConsented,
    acceptCookies
  };
}