<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Countdown state
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

// Target: 28th November 2025 (local time at 00:00)
const targetDate = new Date(2025, 10, 28, 0, 0, 0)

let timer = null

function updateCountdown() {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    if (timer) {
      clearInterval(timer)
      timer = null
    }
    return
  }

  const totalSeconds = Math.floor(diff / 1000)
  days.value = Math.floor(totalSeconds / (3600 * 24))
  hours.value = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  minutes.value = Math.floor((totalSeconds % 3600) / 60)
  seconds.value = totalSeconds % 60
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const two = (n) => String(n).padStart(2, '0')

const daysDisplay = computed(() => two(days.value))
const hoursDisplay = computed(() => two(hours.value))
const minutesDisplay = computed(() => two(minutes.value))
const secondsDisplay = computed(() => two(seconds.value))
</script>

<template>
  <!-- Main Hero Content -->
  <div class="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-8">
    <!-- Countdown Timer -->
    <div class="mb-8">
      <p class="text-center text-xs sm:text-sm font-light text-gray-300 mb-3 tracking-widest uppercase">
        BLACK FRIDAY STARTS IN...
      </p>
      <div class="bg-gray-800/40 backdrop-blur-md border border-gray-600/30 rounded-xl px-8 sm:px-12 py-4 flex gap-6 sm:gap-8">
        <div class="flex flex-col items-center">
          <span class="text-2xl sm:text-3xl font-bold text-white font-mono">{{ daysDisplay }}</span>
          <span class="text-xs font-semibold text-gray-400 mt-1">DAYS</span>
        </div>
        <div class="text-gray-400 text-2xl">:</div>
        <div class="flex flex-col items-center">
          <span class="text-2xl sm:text-3xl font-bold text-white font-mono">{{ hoursDisplay }}</span>
          <span class="text-xs font-semibold text-gray-400 mt-1">HRS</span>
        </div>
        <div class="text-gray-400 text-2xl">:</div>
        <div class="flex flex-col items-center">
          <span class="text-2xl sm:text-3xl font-bold text-white font-mono">{{ minutesDisplay }}</span>
          <span class="text-xs font-semibold text-gray-400 mt-1">MINS</span>
        </div>
        <div class="text-gray-400 text-2xl">:</div>
        <div class="flex flex-col items-center">
          <span class="text-2xl sm:text-3xl font-bold text-white font-mono">{{ secondsDisplay }}</span>
          <span class="text-xs font-semibold text-gray-400 mt-1">SECS</span>
        </div>
      </div>
    </div>

    <!-- Main Content (3-column layout: 25% | 50% | 25%) -->
    <div class="w-full max-w-7xl mx-auto mt-1 px-4">
      <div class="grid grid-cols-1 md:grid-cols-5 items-center gap-6">
        <!-- Left column: Rotated badge (25%) -->
        <div class="col-span-1 flex md:justify-end justify-center">
          <div class="hidden md:flex items-center relative h-64 w-80">
            <img src="~/assets/images/main-page/limited-time-offer.png" alt="Limited Time Offer" class="w-full h-full object-contain" />
            <img src="~/assets/images/icons/typcn-arrow-back.svg" alt="Arrow" class="absolute -right-8 top-34 w-20 h-20" />
          </div>
        </div>

        <!-- Center column: Main heading/content (50%) -->
        <div class="col-span-1 md:col-span-3 text-center">
          <h1 class="mt-18">
            <span class="hero-primary block">BLACK FRIDAY</span>
            <span class="hero-title block">QUICK LAUNCH<br />
            SPECIAL!</span>
          </h1>
        </div>

        <!-- Right column: empty spacer (20%) -->
        <div class="col-span-1 hidden md:block" aria-hidden="true"></div>
      </div>

      <!-- Subtitle row placed beneath the 3-column grid -->
      <div class="w-full mt-8 mb-18">
        <p class="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto text-center subtitle-text">
          launch your online presence or upgrade your existing site with our<br />
          limited-time, budget-friendly packages.<br />
          simple, fast, and professional.
        </p>

        <!-- CTA Buttons (moved here) -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button class="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded-full hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30 text-sm sm:text-base">
            Claim Deal Now
          </button>
          <button class="px-8 sm:px-10 py-3 sm:py-4 border-2 border-orange-400 text-orange-400 font-bold rounded-full hover:bg-orange-400/10 hover:border-orange-300 transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;700&display=swap');

.hero-title {
  color: #FFF;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 121.924%; /* ~1.21924 */
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.hero-primary {
  color: #FFF;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-size: 83px;
  font-style: normal;
  font-weight: 700;
  line-height: 121.924%; /* 1.21924 */
  letter-spacing: 0.83px;
  text-transform: uppercase;
}

.subtitle-text {
  color: #FFF;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-size: 25px;
  font-style: normal;
  font-weight: 200;
  line-height: 121.924%; /* ~1.21924 */
  letter-spacing: 0.25px;
  text-transform: lowercase;
}
</style>
