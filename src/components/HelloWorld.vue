<script setup>

</script>

<template>
  <!--------------------
    Header Section
  --------------------->
  <section class="bg-[#ffd4d0] relative font-montserrat px-[120px]">
    <div class="w-36 h-36 bg-red-500 rounded-full absolute top-[-60px] left-[500px]"></div>
    <div class="">
      <div class="flex justify-between items-center py-10">
        <!-- Logo -->
        <p class="text-3xl text-[#FC3314] font-semibold cursor-pointer"><span class="tracking-[-6px]"><span
              class="text-black">RR</span>F</span>&nbsp;EXAM</p>
        <!-- menu -->
        <ul class="flex justify-between gap-8 font-bold text-lg z-10">
          <li class="hover:text-[#FC3314]"><a href="#">About</a></li>
          <li class="hover:text-[#FC3314]"><a href="#">Services</a></li>
          <li class="hover:text-[#FC3314]"><a href="#">Portfolio</a></li>
          <li class="hover:text-[#FC3314]"><a href="#">Blog</a></li>
        </ul>
        <a href="#" class="bg-black text-white py-3 px-6 text-base font-bold hover:bg-[#4b413f]">Let's Talk</a>
      </div>
    </div>
    <!-- hero area -->
    <div class="flex justify-between items-center text-[#1F1F1F]">
      <div class="w-1/3 flex flex-col gap-6">
        <p class="text-xl">UX Designer</p>
        <h1 class="text-5xl font-bold leading-16">Hi There, I’m <br><span class="text-[#FC3314]">John Smith</span></h1>
        <p>Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something
          extraordinary together.</p>

        <div class="flex gap-2.5">
          <a href="#" class="bg-black text-white py-3 px-14 text-base font-bold hover:bg-[#4b413f]">Hire Me</a>
          <a href="#" class="py-3 px-14 border text-base font-bold hover:bg-[#4b413f] hover:text-white">Portfolio</a>
        </div>
      </div>

      <div>
        <img src="../assets/img/Profile & bg.png" alt="">
      </div>
    </div>
  </section>
  <!-- Header Section End -->

  <!--------------------
    About Me Section
  --------------------->
  <section class="px-[120px] bg-black pt-16 pb-20 relative">
    <div class=" absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <img src="../assets/img/semi-circle.png" alt="">
    </div>
    <div class="text-white text-center">
      <h2 class="text-4xl font-bold pb-6">About Me</h2>
      <p class="leading-6">I'm John Smith, a UI/UX designer dedicated to crafting intuitive and visually stunning
        digital <br> experiences.
        With a passion for user-centric design, I transform ideas into functional and beautiful <br> interfaces. Let's
        collaborate and shape the future of design together.</p>
    </div>

    <div class="flex justify-around pt-8">
      <div class="text-center">
        <p class="text-[#FFD4D0] text-[64px] font-bold">502</p>
        <p class="text-white font-bold text-lg">Projects Done</p>
      </div>
      <div class="text-center">
        <p class="text-[#FFD4D0] text-[64px] font-bold">10+</p>
        <p class="text-white font-bold text-lg">Years of Experience</p>
      </div>
      <div class="text-center">
        <p class="text-[#FFD4D0] text-[64px] font-bold">273+</p>
        <p class="text-white font-bold text-lg">Clients Served</p>
      </div>
    </div>
  </section>
  <!-- About Me Section End -->

  <!--------------------
    Services Section
  --------------------->
  <section class="px-[120px] z-50 bg-white">
    <div class="">
      <h2>Services</h2>
    </div>
  </section>
</template>

<style scoped></style>
