<script setup>

let props = defineProps({
    icons: Array
})

</script>
<template>
    <template v-for="icon in props.icons" :key="icon">
        <div class="mx-3 my-2">
            <div class="indicator">
                <img :src="icon.url" :alt="icon.name" class="w-12 h-12 m-4">
                <span v-if="icon.favourite" class="indicator-item indicator-bottom" aria-label="Favourite">
                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </span>
                <span v-if="icon.experience" class="indicator-item indicator-start badge badge-info font-bold"
                    aria-label="Experience">
                    {{ icon.experience }}
                </span>
            </div>
            <p class="text-1xl font-extrabold text-center">{{ icon.name }}</p>
        </div>
    </template>
</template>