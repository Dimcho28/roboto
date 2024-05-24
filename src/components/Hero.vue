<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  height: {
    type: String,
    required: true
  }
});

const computedClass = computed(() => {
  return `relative bg-[url('/src/assets/hero.jpg')] border bg-cover ${props.height} items-center flex max-lg:px-5 -mt-32 max-lg:-mt-0`;
});
</script>

<template>
    <div :class="computedClass">
      <div class="absolute bg-black w-full h-full opacity-25 left-0"></div>
      <slot></slot>
    </div>
</template>