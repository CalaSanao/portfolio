<script setup>

const proyects = [
    {
        name: 'Proyecto 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni eius eaque? Pariatur numquam, odio quod nobis ipsum ex cupiditate?',
        image: 'https://via.placeholder.com/300x200',
        link: 'https://www.google.com',
        tecnologies: ['HTML', 'CSS', 'JavaScript'],
    }
]

</script>
<template>
    <div id="projects" class="min-h-screen flex items-center justify-center bg-black">
        <div>
            <div class="text-center">
            <h2 class="text-4xl font-bold mb-4">Proyectos</h2>
                <p class="text-gray-300">WIP</p>
                <!-- Agrega más contenido según tus necesidades -->
            </div>
            <div class="mockup-code">
                <pre>{{ proyects[0] }}</pre>
            </div>
        </div>
    </div>
</template>