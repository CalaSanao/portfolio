<script setup>
import spainFlag from "../assets/svg/spain.svg"

import TecnologiesList from "./tecnologies/TecnologiesList.vue"
import WebTecnologiesItems from "./tecnologies/WebTecnologiesItems.js"
import IATecnologiesItems from "./tecnologies/IATecnologiesItems.js"

</script>
<template>
  <section class="flex items-center justify-center min-h-screen">
    <div class="container my-24">
      <div class="grid grid-cols-1 md:grid-cols-5 grid-rows-5 gap-4 mt-3">

        <!-- Sección de Información Personal -->
        <div
          class="col-span-1 md:col-span-4 row-span-3 rounded-3xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-around -inset-1 bg-gradient-to-b from-base-100 to-base-200">
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
            <p class="mt-2">🥇 BalearSkills</p>
          </div>
        </div>

        <!-- Sección de Trabajo -->
        <div
          class="col-span-1 md:row-span-2 md:col-start-5 md:flex md:flex-col shadow-lg rounded-3xl p-8 items-center justify-center flex -inset-1 bg-gradient-to-b from-base-100 to-base-200">
          <div class="text-3xl font-extrabold text-center md:text-left">
            <p class="text-center">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
                Trabajando como Backend Developer
              </span>
            </p>
          </div>
        </div>

        <!-- Sección de Ubicación -->
        <div
          class="col-span-1 md:col-start-5 md:row-start-3 shadow-lg rounded-3xl p-8 flex items-center justify-center -inset-1 bg-gradient-to-b from-base-100 to-base-200">
          <div class="text-3xl font-extrabold">
            <div class="indicator">
              <p class="text-center">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
                  España
                </span>
                <span class="indicator-item">
                  <img :src="spainFlag" alt="España" class="w-8 rounded-sm">
                </span>
              </p>
            </div>
          </div>
        </div>

        <!-- Sección de Tecnologías -->
        <div
          class="col-span-1 md:col-span-4 md:row-span-2 md:col-start-2 md:row-start-4 shadow-lg rounded-3xl px-8 py-6 -inset-1 bg-gradient-to-b from-base-100 to-base-200">
          <div class="text-2xl font-extrabold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
              Tecnologías web
            </span>
          </div>
          <div class="flex items-center justify-center flex-wrap mt-3">
            <TecnologiesList :icons="WebTecnologiesItems" />
          </div>
        </div>

        <!-- Sección de Rol -->
        <div
          class="col-span-1 md:row-span-2 md:col-start-1 md:row-start-4 shadow-lg rounded-3xl p-8 flex items-center justify-center -inset-1 bg-gradient-to-b from-base-100 to-base-200">
          <div class="text-4xl font-extrabold text-center md:text-left">
            <p class="text-center">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
                Fullstack Developer
              </span>
            </p>
          </div>
        </div>


        <!-- Sección de Tecnologías -->
        <div
          class="col-span-1 md:col-span-4 md:row-span-2 md:col-start-1 md:row-start-6 shadow-lg rounded-3xl px-8 py-6 -inset-1 bg-gradient-to-b from-base-100 to-base-200">
          <div class="text-2xl font-extrabold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
              Tecnologías IA
            </span>
          </div>
          <div class="flex items-center justify-center flex-wrap mt-3">
            <TecnologiesList :icons="IATecnologiesItems" />
          </div>
        </div>


        <div
          class="col-span-1 md:row-span-2 md:col-start-5 md:flex md:flex-col shadow-lg rounded-3xl p-8 items-center justify-center -inset-1 bg-gradient-to-b from-base-100 to-base-200">
          <div class="text-4xl font-extrabold text-center md:text-left">
            <p class="text-center">

              <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
                Big data and IA estudent
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
  