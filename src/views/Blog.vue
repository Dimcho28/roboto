<script setup>
import Hero from '../components/Hero.vue'
import PageFooter from '../components/PageFooter.vue'
</script>

<template>
    <Hero height="h-[50vh]">
        <div class="container mx-auto flex">
            <h1 class="text-white text-6xl font-bold z-10 text-center w-full">Blog</h1>
        </div>
    </Hero>

    <div class="flex justify-center gap-24 max-lg:flex-col max-lg:max-w-96 max-lg:mx-auto max-sm:px-5 mt-10">
        <div class="flex flex-col">
            <img class="w-96" src="@/assets/world.jpg" alt="">
            <div class="bg-white max-w-xs shadow-xl rounded-xl -mt-14 relative z-[1] self-end p-6">
                <span class="text-[#19df7f]">15 FEB 2024</span>
                <p class="font-bold">
                    Facing problem to get solution of your queries? Here is the solution
                </p>
            </div>
        </div>
        <div class="flex flex-col">
            <img class="w-96" src="@/assets/girl.jpg" alt="">
            <div class="bg-white max-w-xs shadow-xl rounded-xl -mt-14 relative z-[1] self-end p-6">
                <span class="text-[#19df7f]">15 FEB 2024</span>
                <p class="font-bold">
                    Better solution to make your business more effective
                </p>
            </div>
        </div>
        <div class="flex flex-col">
            <img class="w-96" src="@/assets/eye.jpg" alt="">
            <div class="bg-white max-w-xs shadow-xl rounded-xl  -mt-14 relative z-[1] self-end p-6">
                <span class="text-[#19df7f]">15 FEB 2024</span>
                <p class="font-bold">
                    Platform where your problems meet with their solution
                </p>
            </div>
        </div>
    </div>

    <div class="flex justify-center gap-24 max-lg:flex-col max-lg:max-w-96 max-lg:mx-auto max-sm:px-5 my-10">
        <div class="flex flex-col">
            <img class="w-96" src="@/assets/robo-1.jpg" alt="">
            <div class="bg-white max-w-xs shadow-xl rounded-xl -mt-14 relative z-[1] self-end p-6">
                <span class="text-[#19df7f]">15 FEB 2024</span>
                <p class="font-bold">
                    Facing problem to get solution of your queries? Here is the solution
                </p>
            </div>
        </div>
        <div class="flex flex-col">
            <img class="w-96" src="@/assets/robo-2.jpg" alt="">
            <div class="bg-white max-w-xs shadow-xl rounded-xl -mt-14 relative z-[1] self-end p-6">
                <span class="text-[#19df7f]">15 FEB 2024</span>
                <p class="font-bold">
                    Better solution to make your business more effective
                </p>
            </div>
        </div>
        <div class="flex flex-col">
            <img class="w-96" src="@/assets/robo-3.jpg" alt="">
            <div class="bg-white max-w-xs shadow-xl rounded-xl  -mt-14 relative z-[1] self-end p-6">
                <span class="text-[#19df7f]">15 FEB 2024</span>
                <p class="font-bold">
                    Platform where your problems meet with their solution
                </p>
            </div>
        </div>
    </div>
    <PageFooter></PageFooter>
</template>