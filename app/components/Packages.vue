<script setup>
// No reactive logic needed for this static packages section.
</script>

<template>
  <section class="relative py-20 bg-white">
    <!-- Left/Right decorative iMac images -->
    <img src="../assets/images/packages-page/imac-left.png" alt="iMac left" class="hidden lg:block absolute -left-18 top-0 w-112 transform -translate-y-0 z-10 pointer-events-none" />
    <img src="../assets/images/packages-page/imac-right.png" alt="iMac right" class="hidden lg:block absolute -right-12 bottom-0 w-112 transform translate-y-2 z-10 pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Choose Your Perfect Launchpad</h2>
        <p class="mt-3 text-gray-600">Three simple packages designed to fit every need and budget.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <!-- Left Card -->
        <div class="bg-white p-8 relative border border-purple-900 rounded-[10px] shadow-card min-h-[510px] flex flex-col">
          <h3 class="text-xl font-bold text-gray-900">The Quick Start</h3>
          <p class="text-sm text-gray-500 mt-2">Entry-level, Basic Design, Quick Turnaround</p>
          <hr class="bg-[#40005C] mt-6" />
          <div class="mt-6 mb-6">
            <div class="text-3xl font-extrabold text-purple-700">R950 <span class="text-sm font-medium text-gray-500">one-time</span></div>
          </div>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">Simple, professional online card</span>
            </li>
            <li class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">Basic design template</span>
            </li>
            <li class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">Mobile responsive</span>
            </li>
            <li class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">Quick 3-5 day turnaround</span>
            </li>
          </ul>

          <div class="mt-auto flex justify-center">
            <button class="px-6 py-3 border border-orange-500 text-orange-500 font-semibold bg-white hover:bg-gray-50 transition rounded-[10px] shadow-button-orange">Get Quick for R950</button>
          </div>
        </div>

        <!-- Center Card (Most Popular) -->
        <div class="relative z-0">
          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div class="bg-purple-800 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</div>
          </div>
          <div class="bg-orange-500 rounded-lg shadow-2xl p-8 text-white flex flex-col items-start min-h-[600px]">
            <h3 class="text-2xl font-extrabold text-left">The Standard Boost</h3>
            <p class="text-sm mt-2 text-left">Custom Design, More Features</p>
            <div class="mt-6 mb-6">
              <div class="text-4xl font-extrabold text-left">R1500 <span class="text-base font-medium">one-time</span></div>
            </div>

            <ul class="space-y-3 text-left w-full max-w-xs">
              <li class="flex items-start gap-3">
                <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
                <span>Unique custom design</span>
              </li>
              <li class="flex items-start gap-3">
                <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
                <span>Multiple pages</span>
              </li>
              <li class="flex items-start gap-3">
                <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
                <span>Contact forms</span>
              </li>
              <li class="flex items-start gap-3">
                <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
                <span>Social media integration</span>
              </li>
              <li class="flex items-start gap-3">
                <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
                <span>Perfect for small businesses</span>
              </li>
            </ul>

            <div class="mt-auto w-full flex justify-center">
              <button class="px-6 py-3 bg-[#40005C] text-white font-semibold transition rounded-[10px] shadow-button-purple hover:brightness-95">Get Standard for R1500</button>
            </div>
          </div>
        </div>

        <!-- Right Card -->
        <div class="bg-white p-8 relative border border-purple-900 rounded-[10px] shadow-card min-h-[510px] flex flex-col">
          <h3 class="text-xl font-bold text-gray-900">The Premium Pro</h3>
          <p class="text-sm text-gray-500 mt-2">Advanced Features, Full Strategy Consultation</p>
          <hr class="bg-[#40005C] mt-6" />
          <div class="mt-6 mb-6">
            <div class="text-3xl font-extrabold text-purple-700">R2999 <span class="text-sm font-medium text-gray-500">one-time</span></div>
          </div>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">Everything in Standard</span>
            </li>
            <li class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">Advanced features (booking, e-commerce)</span>
            </li>
            <li class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">Full strategy consultation</span>
            </li>
            <li class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">Expert guidance for business goals</span>
            </li>
            <li class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.png" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">High-performing website</span>
            </li>
          </ul>

          <div class="mt-auto flex justify-center">
            <button class="px-6 py-3 border border-orange-500 text-orange-500 font-semibold bg-white hover:bg-gray-50 transition rounded-[10px] shadow-button-orange">Get Premium for R2999</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Custom shadow utilities */
.shadow-card { box-shadow: 0 0 25px 0 rgba(10, 10, 10, 0.25); }
.shadow-button-orange { box-shadow: 0 0 25px 0 rgba(255, 139, 16, 0.25); }
.shadow-button-purple { box-shadow: 0 0 25px 0 rgba(64, 0, 92, 0.25); }
</style>
