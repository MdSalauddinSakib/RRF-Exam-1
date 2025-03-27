<script setup>

</script>

<template>
  <!--------------------
    Header Section
  --------------------->
  <section class="bg-[#ffd4d0] relative font-montserrat px-[124px]">
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
  <section class="px-[124px] bg-black pt-16 pb-20 relative">
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
  <section class="px-[124px] py-16 z-50 bg-white">
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-6">Services</h2>
      <p class="text-[#1F1F1F]">Explore my design services, from user interface and experience to prototyping and
        testing. Let's craft <br>exceptional digital experiences together.</p>
    </div>
    <div class="flex gap-8 mt-8">
      <div>
        <img src="../assets/img/vector.png" alt="">
        <h2 class="text-lg font-bold leading-20">Design</h2>
        <p>I specialize in web development and design, creating visually appealing, user-friendly digital experiences.
        </p>
      </div>
      <div>
        <img src="../assets/img/ellepse.png" alt="">
        <h2 class="text-lg font-bold leading-20">Branding</h2>
        <p>I'm a branding expert, crafting unique visual identities that tell your story and resonate with your
          audience.
        </p>
      </div>
      <div>
        <img src="../assets/img/search.png" alt="">
        <h2 class="text-lg font-bold leading-20">UX Research</h2>
        <p>"I specialize in user experience research, collaborating on web development, and ensuring user-friendly
          digital products.
        </p>
      </div>
      <div>
        <img src="../assets/img/task.png" alt="">
        <h2 class="text-lg font-bold leading-20">Usability Testing</h2>
        <p>I perform usability testing and optimize designs websites based on real-user feedback for seamless
          interactions.
        </p>
      </div>
    </div>
  </section>
  <!-- Services Section End -->

  <!------------------------
    My Portfolio Section
  ------------------------->
  <section>
    <div class="px-[124px] pt-12 pb-36 bg-[#ffd4d0] text-center">
      <h2 class="font-bold text-3xl mb-6">My Portfolio</h2>
      <p>Explore my design services, from user interface and experience to prototyping and testing. Let's craft <br>
        exceptional digital experiences together.</p>
    </div>
    <div class="flex justify-between px-[124px] -mt-25">
      <div>
        <img src="../assets/img/Image-1.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Educational Platform</h2>
            <p>Web Design / Usability Testing</p>
          </div>
          <img src="../assets/img/send.png" alt="">
        </div>
      </div>
      <div>
        <img src="../assets/img/Image-2.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Travel App Design</h2>
            <p>UX Research / App Design </p>
          </div>
          <img src="../assets/img/send.png" alt="">
        </div>
      </div>
      <div>
        <img src="../assets/img/Image-3.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Personal Page</h2>
            <p>Web Design</p>
          </div>
          <img src="../assets/img/send.png" alt="">
        </div>
      </div>
    </div>
    <div class="flex justify-between px-[124px] mt-16">
      <div>
        <img src="../assets/img/Image-4.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Furniture Mobile App</h2>
            <p>App Design </p>
          </div>
          <img src="../assets/img/send.png" alt="">
        </div>
      </div>
      <div>
        <img src="../assets/img/Image-5.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Coffee House Landing Page</h2>
            <p>UX Research / Web Design </p>
          </div>
          <img src="../assets/img/send.png" alt="">
        </div>
      </div>
      <div>
        <img src="../assets/img/Image-6.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Home Services Page</h2>
            <p>Web Design / Marketing</p>
          </div>
          <img src="../assets/img/send.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
