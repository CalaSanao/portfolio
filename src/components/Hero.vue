<script setup>
import spainFlag from "../assets/svg/spain.svg"
import laravelImg from "../assets/svg/laravel.svg"
import vueImg from "../assets/svg/vue.svg"
import inertiaImg from "../assets/svg/inertia.png"
import reactImg from "../assets/svg/react.svg"
import mysqlImg from "../assets/svg/mysql.svg"
import mongodbImg from "../assets/svg/mongodb.png"
import vitejsImg from "../assets/svg/vitejs.svg"
import dockerImg from "../assets/svg/docker.svg"

let icons = [
  { name: 'Vue 3', url: vueImg, favourite: true },
  { name: 'React', url: reactImg },
  { name: 'ViteJs', url: vitejsImg },
  { name: 'Laravel', url: laravelImg, favourite: true },
  { name: 'InertiaJs', url: inertiaImg },
  { name: 'MySQL', url: mysqlImg },
  { name: 'MongoDB', url: mongodbImg },
  { name: 'docker', url: dockerImg },
]
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-base-300">
    <div class="container my-24 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-5 grid-rows-5 gap-4">

        <!-- Sección de Información Personal -->
        <div
          class="col-span-1 md:col-span-4 row-span-3 shadow-lg rounded-lg p-8 bg-base-100 flex flex-col md:flex-row items-center justify-around">
          <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            alt="Foto de perfil" class="w-32 h-32 md:w-48 md:h-auto object-cover rounded-full mb-4 md:mb-0">
          <div class="md:ml-4 text-center md:text-left">
            <h1 class="text-3xl font-bold mb-2">Adrián Colom Palacios</h1>
            <div class="text-1xl font-extrabold">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
                Adaptabilidad | Comunicación | Trabajo en Equipo
              </span>
            </div>
            <p class="mt-2">En búsqueda de oportunidades para crecer y mejorar como profesional</p>
          </div>
        </div>

        <!-- Sección de Trabajo -->
        <div
          class="col-span-1 md:row-span-2 md:col-start-5 md:flex md:flex-col shadow-lg rounded-lg p-8 bg-base-100 items-center justify-center">
          <div class="text-3xl font-extrabold text-center md:text-left mb-4 md:mb-0">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
              Trabajando como Backend Developer
            </span>
          </div>
        </div>

        <!-- Sección de Ubicación -->
        <div
          class="col-span-1 md:col-start-5 md:row-start-3 shadow-lg rounded-lg p-8 bg-base-100 flex items-center justify-center">
          <div class="text-3xl font-extrabold">
            <div class="indicator">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
                España
              </span>
              <span class="indicator-item">
                <img :src="spainFlag" alt="España" class="w-8 rounded-lg">
              </span>
            </div>
          </div>
        </div>

        <!-- Sección de Tecnologías -->
        <div
          class="col-span-1 md:col-span-4 md:row-span-2 md:col-start-2 md:row-start-4 shadow-lg rounded-lg px-8 py-6 bg-base-100">
          <div class="text-2xl font-extrabold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
              Tecnologías web
            </span>
          </div>
          <div class="flex items-center justify-center flex-wrap">
            <template v-for="icon in icons" :key="icon">
              <div class="mx-2">
                <div class="indicator">
                  <img :src="icon.url" :alt="icon.name" class="w-12 h-12 m-4">
                  <span v-if="icon.favourite" class="indicator-item indicator-bottom" aria-label="Favourite">
                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 22 20">
                      <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </span>
                </div>
                <p class="text-1xl font-extrabold text-center">{{ icon.name }}</p>
              </div>
            </template>
          </div>
        </div>

        <!-- Sección de Rol -->
        <div
          class="col-span-1 md:row-span-2 md:col-start-1 md:row-start-4 shadow-lg rounded-lg p-8 bg-base-100 flex items-center justify-center">
          <div class="text-3xl font-extrabold text-center md:text-left">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
              Fullstack Developer & IA and big data estudent
            </span>
          </div>
        </div>

      </div>
    </div>
  </div></template>
  