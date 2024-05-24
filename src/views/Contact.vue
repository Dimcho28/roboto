<script setup>
import Hero from '../components/Hero.vue'
import PageFooter from '../components/PageFooter.vue'
</script>

<template>
    <Hero height="h-[50vh]">
        <h1 class="text-9xl">CONTACT</h1>
    </Hero>
    <div class="container mx-auto py-10 max-w-7xl flex">
        <div>
           <div class="flex flex-col">
                <span class="text-5xl font-bold text-[#19df7f]">01</span>
                <span class="text-5xl font-bold">GET IN TOUCH</span>
           </div>
            <div class="max-w-lg">
                <div class="space-x-5">
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold" placeholder="Your Name" type="text">
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold" placeholder="Your Email" type="text">
                </div>
                <div class="space-x-5">
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold" placeholder="Your Phone" type="text">
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold" placeholder="Your Subject" type="text">
                </div>
                <div>
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold w-full" placeholder="Write Something..." type="text">
                </div>
            </div>
            <div class="flex">
                <button class="text-white bg-[#19df7f] py-3 flex-1 rounded-3xl ">SUBMIT</button>
            </div>
        </div>
        <div class="bg-black">
            <span>CONTACT INFO</span>
            <ul class="text-white space-y-1 mt-2">
                <div class="flex space-x-3">
                    <img class="w-6 h-6" src="@/assets/call.png" alt="">
                    <li>(+347) 123 456 7890</li>
                </div>
                
                <div class="flex space-x-3">
                    <img class="w-6 h-6" src="@/assets/gmail.png" alt="">
                    <li>example@example.com</li>
                </div>
                <div class="flex space-x-3">
                    <img class="w-6 h-6" src="@/assets/point.png" alt="">
                    <li>Street, 3821 Ben Street. NY 14424</li>
                </div>
            </ul>
        </div>
    </div>
    <PageFooter></PageFooter>
</template>