<script setup>
// No reactive logic needed for this static about section.
</script>

<template>
  <section id="about" class="relative py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column: Content -->
        <div class="space-y-8">
          <!-- Heading -->
          <h2 class="text-3xl md:text-4xl font-extrabold text-purple-700">Who Are We?</h2>
          
          <!-- Introductory Paragraph -->
          <p class="text-gray-700 leading-relaxed text-base md:text-lg">
            Pixel Crayon Media is a dynamic, 100% black-owned visual communications company dedicated to transforming ideas into compelling visual experiences. We specialize in creating innovative design solutions that help businesses communicate effectively, build strong brand identities, and connect meaningfully with their audiences.
          </p>

          <!-- Service Categories Grid (2x2) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <!-- Web Design -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <img src="~/assets/images/icons/web-design-icon.png" alt="Web Design" class="w-12 h-12" />
                <h3 class="text-lg font-bold text-purple-700">Web Design</h3>
              </div>
              <ul class="space-y-2 pl-16">
                <li class="text-gray-700">Responsive website design</li>
                <li class="text-gray-700">E-commerce solutions</li>
                <li class="text-gray-700">UX and UI design</li>
                <li class="text-gray-700">Website maintenance</li>
              </ul>
            </div>

            <!-- Graphic Design -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <img src="../assets/images/icons/graphic-design-icon.png" alt="Graphic Design" class="w-12 h-12" />
                <h3 class="text-lg font-bold text-purple-700">Graphic Design</h3>
              </div>
              <ul class="space-y-2 pl-16">
                <li class="text-gray-700">Marketing collateral design</li>
                <li class="text-gray-700">Publication design</li>
                <li class="text-gray-700">Packaging design</li>
                <li class="text-gray-700">Social media graphics</li>
              </ul>
            </div>

            <!-- Animation -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <img src="../assets/images/icons/animation-icon.png" alt="Animation" class="w-12 h-12" />
                <h3 class="text-lg font-bold text-purple-700">Animation</h3>
              </div>
              <ul class="space-y-2 pl-16">
                <li class="text-gray-700">2D and 3D animation</li>
                <li class="text-gray-700">Character animation</li>
                <li class="text-gray-700">Product visualization</li>
                <li class="text-gray-700">Animated presentations</li>
              </ul>
            </div>

            <!-- Skills Training -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <img src="../assets/images/icons/skills-training-icon.png" alt="Skills Training" class="w-12 h-12" />
                <h3 class="text-lg font-bold text-purple-700">Skills Training</h3>
              </div>
              <ul class="space-y-2 pl-16">
                <li class="text-gray-700">Design software training</li>
                <li class="text-gray-700">Digital marketing workshops</li>
                <li class="text-gray-700">Creative skills development</li>
                <li class="text-gray-700">Professional development programs</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right Column: Image and Logos -->
        <div class="relative flex flex-col h-full">
          <!-- Main Image -->
          <div class="mb-8">
            <img 
              src="../assets/images/about-page/main-content.png" 
              alt="Pixel Crayon Media Team" 
              class="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <!-- Partner Logos -->
          <div class="flex flex-wrap items-end justify-end gap-4 mt-auto">
            <!-- 
            <img 
              src="~/assets/images/about-page/logos/ab4ir-logo.png" 
              alt="AB4IR" 
              class="h-12 object-contain opacity-80 hover:opacity-100 transition"
            />
            <img 
              src="~/assets/images/about-page/logos/small-business-development-logo.png" 
              alt="Small Business Development" 
              class="h-12 object-contain opacity-80 hover:opacity-100 transition"
            />
            <img 
              src="~/assets/images/about-page/logos/seda-logo.png" 
              alt="SEDA" 
              class="h-12 object-contain opacity-80 hover:opacity-100 transition"
            />
            <img 
              src="~/assets/images/about-page/logos/tshwane-south-tvet-logo.png" 
              alt="Tshwane South TVET College" 
              class="h-12 object-contain opacity-80 hover:opacity-100 transition"
            />
            <img 
              src="~/assets/images/logo/White-PIXEL-CRAYON-MEDIA-Logo.png" 
              alt="Pixel Crayon Media" 
              class="h-12 object-contain opacity-80 hover:opacity-100 transition"
            />
            -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>

