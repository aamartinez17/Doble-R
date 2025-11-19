<template>
  <div class="quote-form-container" :class="{ 'px-lg-5': isEmbedded }">
    
    <div :class="isEmbedded ? 'text-center mb-5' : 'mb-4'">
      <h2 class="h3 text-white mb-2">Get a Free Quote</h2>
      <p class="text-light-grey small mx-auto" :style="isEmbedded ? 'max-width: 600px;' : ''">
        Tell us about your project, and we'll get back to you with a custom strategy.
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
      
      <div class="row g-4">
        
        <div :class="isEmbedded ? 'col-lg-6' : 'col-12'">
          <div class="p-0">
            <h5 v-if="isEmbedded" class="text-accent mb-3 border-bottom border-secondary pb-2">Contact Details</h5>

            <div class="mb-4">
              <label class="form-label text-accent small fw-bold">Are you a new or existing customer?</label>
              <div class="d-flex gap-3">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="customerStatus" id="statusNew" value="New Customer" v-model="form.customerStatus">
                  <label class="form-check-label text-white" for="statusNew">New Customer</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="customerStatus" id="statusExisting" value="Existing Customer" v-model="form.customerStatus">
                  <label class="form-check-label text-white" for="statusExisting">Existing Customer</label>
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="fullName" class="form-label text-white">Full Name <span class="text-accent">*</span></label>
              <input type="text" class="form-control custom-input" id="fullName" v-model="form.fullName" required :disabled="isSubmitting">
            </div>

            <div class="mb-3">
              <label for="businessName" class="form-label text-white">Business Name <span class="text-accent">*</span></label>
              <input type="text" class="form-control custom-input" id="businessName" v-model="form.businessName" required :disabled="isSubmitting">
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="phone" class="form-label text-white">Phone Number <span class="text-accent">*</span></label>
                <input type="tel" class="form-control custom-input" id="phone" v-model="form.phone" required :disabled="isSubmitting">
              </div>
              <div class="col-md-6 mb-3">
                <label for="email" class="form-label text-white">Email Address <span class="text-accent">*</span></label>
                <input type="email" class="form-control custom-input" id="email" v-model="form.email" required :disabled="isSubmitting">
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="contactMethod" class="form-label text-white">Preferred Contact</label>
                <select class="form-select custom-input" id="contactMethod" v-model="form.contactMethod" required :disabled="isSubmitting">
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                  <option value="Text">Text</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="bestTime" class="form-label text-white">Best Time to Reach</label>
                <input type="text" class="form-control custom-input" id="bestTime" placeholder="e.g. Morning" v-model="form.bestTime" required :disabled="isSubmitting">
              </div>
            </div>
          </div>
        </div>

        <div :class="isEmbedded ? 'col-lg-6' : 'col-12'">
          <div class="p-0">
            <h5 v-if="isEmbedded" class="text-accent mb-3 border-bottom border-secondary pb-2">Project Details</h5>

            <div class="mb-4">
              <label class="form-label text-white">Services of Interest <span class="text-accent">*</span></label>
              <div class="row g-2">
                <div class="col-sm-6" v-for="service in serviceOptions" :key="service">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="service" :id="service" v-model="form.selectedServices" :disabled="isSubmitting">
                    <label class="form-check-label text-light-grey small" :for="service">{{ service }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-3" v-if="form.selectedServices.includes('Other')">
              <input type="text" class="form-control custom-input" id="otherSpec" placeholder="Please specify 'Other'" v-model="form.otherDetails" :disabled="isSubmitting">
            </div>

            <div class="mb-3">
              <label for="package" class="form-label text-white">Interested Package <span class="text-accent">*</span></label>
              <select class="form-select custom-input" id="package" v-model="form.packageInterest" required :disabled="isSubmitting">
                <option value="" disabled selected>Select a package</option>
                <option value="Starter">Starter Package</option>
                <option value="Pro">Pro Package (Popular)</option>
                <option value="Premium">Premium Package</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="goals" class="form-label text-white">Business Goals / Description <span class="text-accent">*</span></label>
              <textarea class="form-control custom-input" id="goals" rows="3" v-model="form.goals" required :disabled="isSubmitting"></textarea>
            </div>

            <div class="mb-4">
              <label for="comments" class="form-label text-white">Questions / Comments</label>
              <textarea class="form-control custom-input" id="comments" rows="2" v-model="form.comments" :disabled="isSubmitting"></textarea>
            </div>

          </div>
        </div>
      
      </div> <div class="row mt-4">
        <div class="col-12">
          <div class="mb-4">
            <div v-if="hasConsented" id="recaptcha-wrapper" class="d-flex justify-content-center justify-content-lg-start">
              <ClientOnly>
                <RecaptchaV2
                  @widget-id="handleWidgetId"
                  @error-callback="handleErrorCallback"
                  @expired-callback="handleExpiredCallback"
                  @load-callback="handleLoadCallback"
                />
              </ClientOnly>
            </div>
            
            <div v-else class="alert alert-dark border-secondary text-dark small text-center">
              <i class="bi bi-shield-lock me-2 text-accent"></i>
              Please accept cookies to enable the security check and submit this form.
            </div>

            <div v-if="formMessage" class="alert mt-3" :class="formError ? 'alert-danger' : 'alert-success'">
              {{ formMessage }}
            </div>
          </div>

          <button 
            type="submit" 
            class="btn btn-primary w-100 fw-bold py-3"
            :disabled="isSubmitting || !hasConsented"
          >
            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            {{ isSubmitting ? 'Sending...' : 'Submit Request' }}
          </button>
        </div>
      </div>

    </form>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { RecaptchaV2, useRecaptcha } from 'vue3-recaptcha-v2'
import { useCookieConsent } from '~/composables/useCookieConsent.js'

// 1. Define Props to control layout
defineProps({
  isEmbedded: {
    type: Boolean,
    default: false // Default is "Drawer Mode" (stacked)
  }
})

const emit = defineEmits(['close'])
const { handleReset, handleGetResponse } = useRecaptcha()
const { hasConsented } = useCookieConsent()

const isSubmitting = ref(false)
const formError = ref(false)
const formMessage = ref('')
const recaptchaWidgetId = ref(null)

const serviceOptions = [
  "Business Card Design", "Flyer/Poster Design", "Logo Design",
  "Social Media Management", "Reels/Video Content", "Brand Consultation", "Other"
]

// Data Persistence
const form = useState('quoteFormState', () => ({
  customerStatus: 'New Customer',
  fullName: '',
  businessName: '',
  phone: '',
  email: '',
  selectedServices: [],
  otherDetails: '',
  packageInterest: '',
  goals: '',
  contactMethod: 'Phone',
  bestTime: '',
  comments: ''
}))

const handleWidgetId = (widgetId) => { recaptchaWidgetId.value = widgetId }
const handleErrorCallback = () => { formError.value = true; formMessage.value = 'Security check failed to load. Please refresh.' }
const handleExpiredCallback = () => { formMessage.value = 'Security check expired. Please verify again.' }
const handleLoadCallback = () => {}

const handleSubmit = async () => {
  isSubmitting.value = true
  formError.value = false
  formMessage.value = ''

  if (!hasConsented.value) {
    formError.value = true
    formMessage.value = 'You must accept cookies to submit this form.'
    isSubmitting.value = false
    return
  }

  if (recaptchaWidgetId.value === null) {
    formError.value = true
    formMessage.value = 'Security check not ready.'
    isSubmitting.value = false
    return
  }

  try {
    const token = await handleGetResponse(recaptchaWidgetId.value)
    if (!token) {
      formError.value = true
      formMessage.value = 'Please complete the security check.'
      isSubmitting.value = false
      return
    }

    const submissionData = { ...form.value, recaptchaToken: token }
    console.log("Sending Data:", submissionData)

    // Simulate API
    await new Promise(resolve => setTimeout(resolve, 1500))

    alert(`Thanks ${form.value.fullName}! We have received your request.`)
    emit('close')

  } catch (error) {
    formError.value = true
    formMessage.value = 'An error occurred. Please try again.'
    console.error(error)
  } finally {
    isSubmitting.value = false
    if (recaptchaWidgetId.value !== null) {
      handleReset(recaptchaWidgetId.value)
    }
  }
}
</script>

<style scoped>
.quote-form-container {
  padding-bottom: 50px;
}

.text-light-grey { color: #cccccc; }
text-dark {
    color: var(--secondary-dark-grey);
}

/* Custom Inputs */
.custom-input {
  background-color: var(--secondary-dark-grey);
  border: 1px solid #333;
  color: #ffffff;
  border-radius: 4px;
}
.custom-input:focus {
  background-color: #222;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 0.25rem rgba(225, 186, 102, 0.25);
  color: #fff;
}
.custom-input::placeholder { color: #666; }

/* Checkbox/Radio */
.form-check-input {
  background-color: var(--secondary-dark-grey);
  border-color: #555;
}
.form-check-input:checked {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
}
.form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 186, 102, 0.25);
}
.form-label {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}
</style>