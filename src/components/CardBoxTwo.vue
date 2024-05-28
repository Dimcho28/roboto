<script setup>
const props = defineProps(['titleNumber'])
</script>

<template>
    <div class="bg-fixed bg-cover bg-center" style="background-image: url('https://wallpaper.dog/large/10918994.jpg');">
        <div class="container mx-auto p-10">

            <div class="flex flex-col items-center mb-10 space-y-5">
                <span class="text-[#19df7f] font-bold text-6xl mt-16">{{ props.titleNumber }}</span>
                <span class="text-3xl font-bold">HOW IT WORKS</span>
            </div>

            <div class="flex justify-center space-x-10 max-lg:flex-wrap max-lg:space-x-0 max-lg:space-y-10">
                <div class="max-w-xs bg-white shadow-lg py-16 rounded-3xl ">
                    <img class="w-16 h-16 mx-auto mb-3" src="@/assets/neuron.png" alt="">
                    <h2 class="font-bold text-center text-2xl">Enter Your Detail</h2>
                    <p class="text-[#AEAEAE] text-center mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div class="max-w-xs bg-white shadow-lg py-16 rounded-3xl ">
                    <img class="w-16 h-16 mx-auto mb-3" src="@/assets/circuit.png" alt="">
                    <h2 class="font-bold text-center text-2xl">Import Data For</h2>
                    <p class="text-[#AEAEAE] text-center mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div class="max-w-xs bg-white shadow-lg py-16 rounded-3xl ">
                    <img class="w-16 h-16 mx-auto mb-3" src="@/assets/human-brain.png" alt="">
                    <h2 class="font-bold text-center text-2xl">Create Account</h2>
                    <p class="text-[#AEAEAE] text-center mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div class="max-w-xs bg-white shadow-lg py-16 rounded-3xl ">
                    <img class="w-16 h-16 mx-auto mb-3" src="@/assets/brain.png" alt="">
                    <h2 class="font-bold text-center text-2xl">Play For Handover</h2>
                    <p class="text-[#AEAEAE] text-center mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </div>
            <div class="flex justify-center">
                <button class="bg-[#19df7f] text-white font-bold px-8 py-3 rounded-full mt-10">VIEW MORE</button>
            </div>
        </div>
    </div>
</template>