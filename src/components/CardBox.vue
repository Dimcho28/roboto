<script setup>
const props = defineProps(['titleNumber'])
</script>

<template>
    <div class="bg-zinc-100 pb-16">
        <div class=" flex flex-col items-center ">
            <span class="text-[#19df7f] font-bold text-6xl mt-16">{{ props.titleNumber }}</span>
            <span class="text-3xl font-bold">OUR SERVICES</span>
        </div>

        <div
            class="flex items-center justify-center space-x-10 mt-10 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-10 max-lg:px-5">
            <div class="border max-w-sm flex flex-col items-center bg-[#EDF1F5] rounded-xl p-10">
                <img class="w-20 h-20 mb-3" src="@/assets/human-brain.png" alt="">
                <h1 class="text-lg font-bold">Machine Learning</h1>
                <p class="mt-5 text-[#AEAEAE]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation </p>
            </div>

            <div class="border max-w-sm flex flex-col items-center bg-[#EDF1F5] rounded-xl p-10">
                <img class="w-20 h-20 mb-3" src="@/assets/medical.png" alt="">
                <h1 class="text-lg font-bold">Manage Analytics</h1>
                <p class="mt-5 text-[#AEAEAE]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation </p>
            </div>

            <div class="border max-w-sm flex flex-col items-center bg-[#EDF1F5] rounded-xl p-10">
                <img class="w-20 h-20 mb-3" src="@/assets/robot.png" alt="">
                <h1 class="text-lg font-bold">Industrial Robot </h1>
                <p class="mt-5 text-[#AEAEAE]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation </p>
            </div>
        </div>
    </div>
</template>