<script setup>
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';
import Timeline from './components/Timeline.vue';
import Contact from './components/Contact.vue';

</script>
<template>
  <Navbar />

  <main class="bg-base-300">
    <Hero />
    
    <section class="flex flex-wrap justify-around bg-gray-100 dark:bg-gray-800">
      <Timeline />
      <Timeline />
    </section>
    
    <Projects />
  </main>



  <Contact />
</template>
