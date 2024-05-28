<script setup>
const props = defineProps(['titleNumber'])
</script>

<template>
    <div class="container mx-auto">
        <div class="flex flex-col items-center mb-10 space-y-5">
            <span class="text-[#19df7f] font-bold text-6xl mt-16">{{ props.titleNumber }}</span>
            <span class="text-3xl font-bold">OUR TEAM</span>
        </div>
        <div
            class="flex justify-center space-x-10 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-10 max-lg:items-center">
            <div class="bg-white rounded-3xl shadow-lg p-3 max-w-xs">
                <img class="rounded-3xl" src="@/assets/face-1.jpg" alt="">
                <div class="flex justify-between items-center mt-3">
                    <div class="flex flex-col">
                        <h1 class="text-2xl font-bold">Bratt Lee</h1>
                        <span class="text-[#19df7f] italic">Manager</span>
                    </div>
                    <div class="flex justify-end">
                        <img class="w-8 h-8" src="@/assets/share.png" alt="">
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-3xl shadow-lg p-3 max-w-xs">
                <img class="rounded-3xl" src="@/assets/face-2.jpg" alt="">
                <div class="flex justify-between items-center mt-3">
                    <div class="flex flex-col">
                        <h1 class="text-2xl font-bold">Jacks Kallis</h1>
                        <span class="text-[#19df7f] italic">Manager</span>
                    </div>
                    <div class="flex justify-end">
                        <img class="w-8 h-8" src="@/assets/share.png" alt="">
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-3xl shadow-lg p-3 max-w-xs">
                <img class="rounded-3xl" src="@/assets/face-3.jpg" alt="">
                <div class="flex justify-between items-center mt-3">
                    <div class="flex flex-col">
                        <h1 class="text-2xl font-bold">Jhon Deo</h1>
                        <span class="text-[#19df7f] italic">Manager</span>
                    </div>
                    <div class="flex justify-end">
                        <img class="w-8 h-8" src="@/assets/share.png" alt="">
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-3xl shadow-lg p-3 max-w-xs">
                <img class="rounded-3xl" src="@/assets/face-4.jpg" alt="">
                <div class="flex justify-between items-center mt-3">
                    <div class="flex flex-col">
                        <h1 class="text-2xl font-bold">Robin Albert</h1>
                        <span class="text-[#19df7f] italic">Manager</span>
                    </div>
                    <div class="flex justify-end">
                        <img class="w-8 h-8" src="@/assets/share.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>