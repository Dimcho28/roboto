<script setup>
import Hero from '../components/Hero.vue'
import PageFooter from '../components/PageFooter.vue'
</script>

<template>
    <Hero height="h-[50vh]">
        <div class="container mx-auto flex">
            <h1 class="text-white text-6xl font-bold z-10 text-center w-full">Contact Us</h1>
        </div>
    </Hero>
    <div class="container mx-auto shadow-2xl my-20 flex w-fit max-lg:flex max-lg:flex-col max-lg:shadow-none">
        <div class="p-20 max-lg:p-5">
            <div class="flex flex-col">
                <span class="text-5xl font-bold text-[#19df7f]">01</span>
                <span class="text-5xl font-bold">GET IN TOUCH</span>
            </div>
            <div class="mt-8">
                <div class="space-x-5 max-lg:space-x-0 max-lg:space-y-5 max-lg:flex max-lg:flex-col">
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold" placeholder="Your Name" type="text">
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold" placeholder="Your Email" type="text">
                </div>
                <div class="space-x-5 mt-10 max-lg:space-x-0 max-lg:space-y-5 max-lg:flex max-lg:flex-col max-lg:mt-5">
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold" placeholder="Your Phone" type="text">
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold" placeholder="Your Subject" type="text">
                </div>
                <div class="mt-8">
                    <input class="border-b-2 border-[#19df7f] pb-2 font-bold w-full" placeholder="Write Something..."
                        type="text">
                </div>
            </div>
            <div class="flex">
                <button class="text-white bg-[#19df7f] py-3 flex-1 rounded-3xl font-bold mt-5">SUBMIT</button>
            </div>
        </div>
        <div class="bg-black p-10 max-lg:rounded-lg max-lg:mt-16">
            <span class="text-3xl text-white font-bold">CONTACT INFO</span>
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
            <div class="flex space-x-5 mt-5">
                <img class="w-8 h-8" src="@/assets/facebook.png" alt="">
                <img class="w-8 h-8" src="@/assets/twitter.png" alt="">
                <img class="w-8 h-8" src="@/assets/instagram.png" alt="">
                <img class="w-8 h-8" src="@/assets/linkedin.png" alt="">
            </div>
        </div>
    </div>
    <PageFooter></PageFooter>
</template>