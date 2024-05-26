<script setup>
import Hero from '../components/Hero.vue'
import CardBox from '../components/CardBox.vue'
import CardBoxTwo from '../components/CardBoxTwo.vue'
import PageFooter from '../components/PageFooter.vue'
</script>

<template>
    <Hero height="h-[50vh]">
        <div class="container mx-auto flex">
            <h1 class="text-white text-6xl font-bold z-10 text-center w-full">Services</h1>
        </div>
    </Hero>
    <CardBox></CardBox>
    <CardBoxTwo />
    <div class="mt-10">asd</div>
    <PageFooter />
</template>