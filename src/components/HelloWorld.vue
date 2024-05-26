<template>
  <div
    :class="{ 'bg-white z-10 sticky top-0 transition-all duration-500 max-lg:bg-white': isScrolled, 'bg-transparent z-10 sticky top-0 transition-all duration-500 max-lg:bg-white': !isScrolled }">
    <div class="flex items-center container mx-auto justify-between py-3 max-lg:px-5" id="navBar">
      <img class="max-lg:w-40" src="@/assets/logo.png" alt="">
      <img v-if="isOpen" @:click="toggleMenu" class="hidden max-lg:inline w-10" src="@/assets/menus.png" alt="">
      <img v-if="!isOpen" @:click="toggleMenu" class="hidden max-lg:inline w-10" src="@/assets/menuOn.png" alt="">
      <div class="flex space-x-10 items-center max-lg:hidden">
        <ul
          :class="{ 'text-black flex space-x-10 font-bold transition-all duration-500': isScrolled, 'text-white flex space-x-10 font-bold transition-all duration-500': !isScrolled }">
          <li>
            <RouterLink to="/">HOME</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">ABOUT</RouterLink>
          </li>
          <li>
            <RouterLink to="/services">SERVICES</RouterLink>
          </li>
          <li>
            <RouterLink to="/team">TEAM</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog">BLOG</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">CONTACT</RouterLink>
          </li>
        </ul>
        <button class="bg-[#19df7f] text-white font-bold px-8 py-3 rounded-full">LOG IN</button>
      </div>

      <div v-if="isOpen" class="absolute top-20 left-0 z-10 bg-white w-full py-5 px-5">
        <ul class="space-y-3">
          <li>
            <RouterLink @:click="toggleMenu" to="/">HOME</RouterLink>
          </li>
          <li>
            <RouterLink @:click="toggleMenu" to="/about">ABOUT</RouterLink>
          </li>
          <li>
            <RouterLink @:click="toggleMenu" to="/services">SERVICES</RouterLink>
          </li>
          <li>
            <RouterLink @:click="toggleMenu" to="/team">TEAM</RouterLink>
          </li>
          <li>
            <RouterLink @:click="toggleMenu" to="/blog">BLOG</RouterLink>
          </li>
          <li>
            <RouterLink @:click="toggleMenu" to="/contact">CONTACT</RouterLink>
          </li>
        </ul>
        <button class="bg-[#19df7f] text-white font-bold px-6 py-2 rounded-full mt-5">LOG IN</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
function toggleMenu() {
  isOpen.value = !isOpen.value;
}

const isScrolled = ref(false);

function handleScroll() {
  if (window.scrollY > 0) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
