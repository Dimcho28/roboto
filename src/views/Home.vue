<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Hero from '../components/Hero.vue'
import HeroTwo from '../components/HeroTwo.vue'
import CardBox from '../components/CardBox.vue'
import WorldHands from '../components/WorldHands.vue'
import CardBoxTwo from '../components/CardBoxTwo.vue'
import OurTeam from '../components/OurTeam.vue'
import OurHappy from '../components/OurHappy.vue'
import LatestNews from '../components/LatestNews.vue'
import GetInTouch from '../components/GetInTouch.vue'
import PageFooter from '../components/PageFooter.vue'
</script>

<template>

    <Hero height="h-[80vh]">

        <div class="container mx-auto relative z-[1]">
            <div class="text-white font-bold flex flex-col">
                <span class="">ROBOTO CREATIVE & TEMPLATE</span>
                <h1 class="text-6xl mb-10">MACHINERY COMMERCE <br>SERVICES OF <br>ROBOTO</h1>
            </div>
            <button class="bg-[#19df7f] text-white font-bold px-8 py-3 rounded-full">VIEW MORE</button>
        </div>
    </Hero>
    <HeroTwo />
    <CardBox />
    <WorldHands />
    <CardBoxTwo />
    <OurTeam />
    <OurHappy />
    <LatestNews />
    <GetInTouch />
    <PageFooter />
</template>
