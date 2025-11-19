<script setup>
// No reactive logic needed for this static services section.
</script>

<template>
  <section id="services" class="relative py-20 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="~/assets/images/services/services-bg-01.jpg"
        alt="Services Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-purple-900/70 to-slate-900/80"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Heading Section -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          What You Get: Simple, Clear, and Effective
        </h2>
        <p class="text-lg md:text-xl text-white">
          Each package is designed with your success in mind.
        </p>
      </div>

      <!-- Three Package Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1: Your Online Business Card -->
        <div class="bg-white rounded-[10px] p-8 shadow-lg flex flex-col">
          <h3 class="text-xl font-bold text-purple-700 mb-4">Your Online Business Card</h3>
          <div class="text-lg font-bold text-gray-900 mb-3">Quick Start (R950):</div>
          <p class="text-gray-700 mb-6 leading-relaxed">
            A clean, basic website built fast. Great for getting your name out there without the fuss. Perfect for freelancers, consultants, and small service providers.
          </p>
          <ul class="space-y-2 mt-auto">
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">Fast turnaround</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">Professional look</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">Mobile friendly</span>
            </li>
          </ul>
        </div>

        <!-- Card 2: Your Custom Showcase -->
        <div class="bg-white rounded-[10px] p-8 shadow-lg flex flex-col">
          <h3 class="text-xl font-bold text-purple-700 mb-4">Your Custom Showcase</h3>
          <div class="text-lg font-bold text-gray-900 mb-3">Standard Boost (R1500):</div>
          <p class="text-gray-700 mb-6 leading-relaxed">
            A unique design that matches your brand. Includes more pages and features to impress your visitors. Ideal for small businesses needing a unique look and more functionality.
          </p>
          <ul class="space-y-2 mt-auto">
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">Custom design</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">Multiple pages</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">Contact forms</span>
            </li>
          </ul>
        </div>

        <!-- Card 3: Your Full Strategy Partner -->
        <div class="bg-white rounded-[10px] p-8 shadow-lg flex flex-col">
          <h3 class="text-xl font-bold text-purple-700 mb-4">Your Full Strategy Partner</h3>
          <div class="text-lg font-bold text-gray-900 mb-3">Premium Pro (R2999):</div>
          <p class="text-gray-700 mb-6 leading-relaxed">
            Everything you need to dominate online. Advanced features, full strategy consultation, and expert guidance to turn your website into a business growth engine.
          </p>
          <ul class="space-y-2 mt-auto">
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">Advanced features</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">Strategy consultation</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">Expert guidance</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
