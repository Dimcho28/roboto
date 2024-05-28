<script setup>
const props = defineProps(['titleNumber'])
</script>
<template>
    <div class="bg-zinc-100 mt-20 pb-20">
        <div class="flex flex-col items-center mb-10 space-y-5">
            <span class="text-[#19df7f] font-bold text-6xl mt-16">{{ props.titleNumber }}</span>
            <span class="text-3xl font-bold">OUR HAPPY CLIENTS</span>
        </div>

        <div class="flex justify-center space-x-10 max-lg:flex-col max-lg:items-center max-lg:space-y-10">
            <div class="bg-[#19df7f] flex w-80 h-96 rounded-3xl relative">
                <img class="w-80 h-80 rounded-xl absolute right-10 top-8" src="@/assets/1-face.jpg" alt="">
            </div>

            <div class="flex flex-col">
                <span class="text-3xl font-bold">Bratt Lee</span>
                <span class="text-[#19df7f] italic text-xl font-bold">Manager</span>
                <p class="max-w-lg text-[#AEAEAE] font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore.
                </p>
                <img class="w-24 h-24" src="@/assets/Stars.png" alt="">
            </div>
        </div>
    </div>
</template>