<script setup>
import Hero from '../components/Hero.vue'
import HeroTwo from '../components/HeroTwo.vue'
import OurHappy from '../components/OurHappy.vue'
import OurTeam from '../components/OurTeam.vue'
import PageFooter from '../components/PageFooter.vue'
</script>
<template>
    <Hero height="h-[50vh]">
        <div class="container mx-auto flex">
            <h1 class="text-white text-6xl font-bold z-10 text-center w-full">About Us</h1>
        </div>
    </Hero>
    <HeroTwo />
    <OurHappy />
    <OurTeam />
    <PageFooter />
</template>