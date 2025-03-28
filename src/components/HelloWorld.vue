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
  <section class="px-[124px] py-16 z-50 bg-[#f7f7f7]">
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
  <section class="bg-[#f7f7f7] pb-16">
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
          <a href="#"><img src="../assets/img/send.png" alt=""></a>
        </div>
      </div>
      <div>
        <img src="../assets/img/Image-2.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Travel App Design</h2>
            <p>UX Research / App Design </p>
          </div>
          <a href="#"><img src="../assets/img/send.png" alt=""></a>
        </div>
      </div>
      <div>
        <img src="../assets/img/Image-3.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Personal Page</h2>
            <p>Web Design</p>
          </div>
          <a href="#"><img src="../assets/img/send.png" alt=""></a>
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
          <a href="#"><img src="../assets/img/send.png" alt=""></a>
        </div>
      </div>
      <div>
        <img src="../assets/img/Image-5.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Coffee House Landing Page</h2>
            <p>UX Research / Web Design </p>
          </div>
          <a href="#"><img src="../assets/img/send.png" alt=""></a>
        </div>
      </div>
      <div>
        <img src="../assets/img/Image-6.jpg" alt="">
        <div class="flex items-end justify-between mt-8">
          <div>
            <h2 class="font-bold text-xl mb-4">Home Services Page</h2>
            <p>Web Design / Marketing</p>
          </div>
          <a href="#"><img src="../assets/img/send.png" alt=""></a>
        </div>
      </div>
    </div>
  </section>
  <!-- My Portfolio Section End -->

  <!-----------------------------
    Core Design Skills Section
  ------------------------------->
  <section class="px-[124px] pt-20 pb-24 bg-[#f7f7f7]">
    <div class="text-center">
      <h2 class="font-bold text-4xl mb-6">Core Design Skills</h2>
      <p class="text-base mb-16">I excel in essential design skills, creating visually stunning and functional digital
        experiences. From UI <br>
        design to UX research, my passion is to craft effective and memorable digital solutions.</p>
    </div>

    <!-- horizontal chart -->
    <div class="flex justify-around">
      <div class="w-full max-w-lg space-y-2 p-4">
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-bold">Interaction Design</span>
          </div>
          <div class="flex gap-4 items-center">
            <div class="w-full bg-gray-200 h-[5px] flex gap-2">
              <div class="bg-[#1F1F1F] h-[5px] w-[60%]"></div>
            </div>
            <p class="text-base font-bold">60%</p>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-bold">Usability Testing</span>
          </div>
          <div class="flex gap-4 items-center">
            <div class="w-full bg-gray-200 h-[5px] flex gap-2">
              <div class="bg-[#1F1F1F] h-[5px] w-[70%]"></div>
            </div>
            <p class="text-base font-bold">70%</p>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-bold">User Research</span>
          </div>
          <div class="flex gap-4 items-center">
            <div class="w-full bg-gray-200 h-[5px] flex gap-2">
              <div class="bg-[#1F1F1F] h-[5px] w-[45%]"></div>
            </div>
            <p class="text-base font-bold">45%</p>
          </div>
        </div>
      </div>

      <div class="w-full max-w-lg space-y-2 p-4">
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-bold">Figma</span>
          </div>
          <div class="flex gap-4 items-center">
            <div class="w-full bg-gray-200 h-[5px] flex gap-2">
              <div class="bg-[#1F1F1F] h-[5px] w-[95%]"></div>
            </div>
            <p class="text-base font-bold">95%</p>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-bold">Prototyping</span>
          </div>
          <div class="flex gap-4 items-center">
            <div class="w-full bg-gray-200 h-[5px] flex gap-2">
              <div class="bg-[#1F1F1F] h-[5px] w-[80%]"></div>
            </div>
            <p class="text-base font-bold">80%</p>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-bold">Information Architecture</span>
          </div>
          <div class="flex gap-4 items-center">
            <div class="w-full bg-gray-200 h-[5px] flex gap-2">
              <div class="bg-[#1F1F1F] h-[5px] w-[50%]"></div>
            </div>
            <p class="text-base font-bold">50%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Core Design Skills Section End -->

  <!-----------------------------
    Testemonials Section Start
  ------------------------------->
  <section class="px-[124px] bg-[#FFD4D0] relative pb-16">
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-red-500 rounded-b-full"></div>
    <div class="slider text-center">
      <div class="single-slide-item">
        <h1 class="text-4xl font-bold pt-24 mb-8">Testemonials</h1>
        <p class="text-base mb-8">Sara Jones's designs are both visually captivating and highly effective. She
          transformed our <br> website,
          enhancing user engagement and conversions. Her attention to detail and creative <br> approach are top-notch.
          Highly
          recommended!</p>
        <div class="flex justify-center items-center gap-4">
          <img src="../assets/img/testimonials.png" alt="">
          <p class="text-base"><span class="font-bold">John Smith </span>/ CEO of XYZ Company</p>
        </div>
      </div>
      <div class="single-slide-item">
        <h1 class="text-4xl font-bold pt-24 mb-8">Testemonials</h1>
        <p class="text-base mb-8">Sara Jones's designs are both visually captivating and highly effective. She
          transformed our <br> website,
          enhancing user engagement and conversions. Her attention to detail and creative <br> approach are top-notch.
          Highly
          recommended!</p>
        <div class="flex justify-center items-center gap-4">
          <img src="../assets/img/testimonials.png" alt="">
          <p class="text-base"><span class="font-bold">John Smith </span>/ CEO of XYZ Company</p>
        </div>
      </div>
      <div class="single-slide-item">
        <h1 class="text-4xl font-bold pt-24 mb-8">Testemonials</h1>
        <p class="text-base mb-8">Sara Jones's designs are both visually captivating and highly effective. She
          transformed our <br> website,
          enhancing user engagement and conversions. Her attention to detail and creative <br> approach are top-notch.
          Highly
          recommended!</p>
        <div class="flex justify-center items-center gap-4">
          <img src="../assets/img/testimonials.png" alt="">
          <p class="text-base"><span class="font-bold">John Smith </span>/ CEO of XYZ Company</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Testemonials Section End -->

  <!----------------------------------------------
    Design Insights and Inspiration Section Start
  ------------------------------------------------>
  <section class="px-[124px] py-[90px] bg-[#f7f7f7]">
    <div class="text-center">
      <h2 class="font-bold text-4xl mb-4">Design Insights and Inspiration</h2>
      <p class="text-base mb-12">Discover industry insights, expert tips, and design inspiration. Stay updated with the
        latest trends in <br>web
        design and user experience.</p>
    </div>
    <!-- cart -->
    <div class="flex justify-between gap-7">
      <!-- cart 1 -->
      <div class="bg-white overflow-hidden w-[336px]">
        <div>
          <img src="../assets/img/design-1.jpg" alt="">
        </div>
        <div class="p-4">
          <p class="font-normal text-sm">August 15, 2023 / UX</p>
          <h2 class="font-bold py-2">Typography Tips for Design Success</h2>
          <p>Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling
            and readable digital designs.</p>
          <a href="#" class="flex items-center gap-2 py-4 font-bold">Read More <img src="../assets/img/arrow-right.png"
              class="w-6" alt=""></a>
        </div>
      </div>
      <!-- cart 2 -->
      <div class="bg-white overflow-hidden w-[336px]">
        <div>
          <img src="../assets/img/design-2.jpg" alt="">
        </div>
        <div class="p-4 flex flex-col gap-2">
          <p class="font-normal text-sm">August 15, 2023 / UX</p>
          <h2 class="font-bold py-2">Color Psychology in UX</h2>
          <p>Explore how color choices impact user emotions and decision-making in UX design.</p>
          <a href="#" class="flex items-center gap-2 py-4 font-bold">Read More <img src="../assets/img/arrow-right.png"
              class="w-6" alt=""></a>
        </div>
      </div>
      <!-- cart 3 -->
      <div class="bg-white overflow-hidden w-[336px]">
        <div>
          <img src="../assets/img/design-3.jpg" alt="">
        </div>
        <div class="p-4 flex flex-col gap-2">
          <p class="font-normal text-sm">August 15, 2023 / UX</p>
          <h2 class="font-bold py-2">Boosting UX with Microinteractions</h2>
          <p>Discover the power of microinteractions in enhancing user experience and engagement.</p>
          <a href="#" class="flex items-center gap-2 py-4 font-bold">Read More <img src="../assets/img/arrow-right.png"
              class="w-6" alt=""></a>
        </div>
      </div>
    </div>
  </section>
  <!-- Design Insights and Inspiration Section End -->

  <!----------------------------
    Get in Touch Section Start
  ------------------------------>
  <section class="p-[124px] bg-[#ffd4d0] relative">
    <div class="absolute left-0 top-1/2 transform -translate-y-1/2"><img src="../assets/img/left-semicircle.png" alt="">
    </div>
    <div class="flex justify-between gap-[60px]">
      <div class="flex flex-col justify-between">
        <h2 class="text-4xl font-bold mb-4">Get in Touch</h2>
        <p class="text-base mb-16">Have a question or a project in mind? I'd love to hear from you. Let's <br>chat and
          make
          something amazing
          together.</p>
        <address>
          <div class="mb-8 text-base">
            <i class="fa-solid fa-phone-volume"></i>&nbsp;&nbsp;&nbsp; +1205 5872 321
          </div>
          <div class="mb-8 text-base">
            <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp; contact@sarajonesdesign.com
          </div>
          <div class="mb-8 text-base">
            <i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp; 1234 Design Street,Creativeville,
            Webland,Imaginary State, 98765
          </div>
        </address>
        <!-- icon -->
        <div class="flex gap-4">
          <a href="#" class="bg-white px-4 py-3 rounded-full text-3xl text-black hover:text-[#fc3314]"><i
              class="fa-brands fa-twitter"></i></a>
          <a href="#" class="bg-white px-4 py-3 rounded-full text-3xl text-black hover:text-[#fc3314]"><i
              class="fa-brands fa-instagram"></i></a>
          <a href="#" class="bg-white px-4 py-3 rounded-full text-3xl text-black hover:text-[#fc3314]"><i
              class="fa-solid fa-basketball"></i></a>
          <a href="#" class="bg-white px-5 py-2 rounded-full text-3xl text-black hover:text-[#fc3314]"><i
              class="fa-brands fa-facebook-f"></i></a>
        </div>
      </div>

      <!-- form -->
      <div>
        <form action="">
          <input type="text"
            class="placeholder-[#8D8D8D] p-4 w-[566px] bg-white mb-6 focus:outline-none focus:ring-2 focus:ring-[#fc3314]"
            placeholder="First Name"> <br>
          <input type="email"
            class="placeholder-[#8D8D8D] p-4 w-[566px] bg-white mb-6 focus:outline-none focus:ring-2 focus:ring-[#fc3314]"
            placeholder="Email"> <br>
          <input type="tel"
            class="placeholder-[#8D8D8D] p-4 w-[566px] bg-white mb-6 focus:outline-none focus:ring-2 focus:ring-[#fc3314]"
            placeholder="Phone Number">
          <br>
          <textarea class="w-full h-32 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#fc3314]"
            placeholder="Your message"></textarea>
          <button class=" mt-8"><a href="#"
              class="bg-black text-white py-3 px-6 text-base font-bold hover:bg-[#4b413f]">Send Message</a></button>
        </form>
      </div>
    </div>
  </section>
  <!-- Get in Touch Section End -->

  <!----------------------------
    Footer Section Start
  ------------------------------>

</template>

<style scoped></style>
