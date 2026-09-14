<template>
    <section class="bg-primary h-6 overflow-hidden w-full fixed top-0 inset-x-0 flex">
        <div class="absolute h-6 w-5 left-0 top-0 z-10 from-primary via-primary via-20% to-transparent bg-linear-to-r">
        </div>
        <div class="absolute h-6 w-5 right-0 top-0 z-10 from-primary via-primary via-20% to-transparent bg-linear-to-l">
        </div>
        <div class="marquee my-auto">
            <div class="marquee__group">
                <a v-for="i in 4" :key="`group1-${i}`"
                    href="https://www.fgrsports.com.br/mes-do-cliente?utm_source=site&utm_medium=backlink_interno&utm_campaign=top-bar-mes-do-cliente"
                    class="text-white text-sm uppercase whitespace-nowrap hover:underline">
                    Clique aqui e confira as ofertas de <b>mês do cliente FGR SPORTS</b>
                </a>
            </div>
            <div aria-hidden="true" class="marquee__group">
                <a v-for="i in 4" :key="`group2-${i}`"
                    href="https://www.fgrsports.com.br/mes-do-cliente?utm_source=site&utm_medium=backlink_interno&utm_campaign=top-bar-mes-do-cliente"
                    class="text-white text-sm uppercase whitespace-nowrap hover:underline">
                    Clique aqui e confira as ofertas de <b>mês do cliente FGR SPORTS</b>
                </a>
            </div>

        </div>
    </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.marquee {
    --gap: 3rem;
    --duration: 60s;
    gap: var(--gap);
    display: flex;
    overflow: hidden;
    user-select: none;
}

@media (min-width: 768px) {
    .marquee { --gap: 6rem; }
}

@media (min-width: 1024px) {
    .marquee { --gap: 10rem; }
}

.marquee__group {
    gap: var(--gap);
    min-width: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    animation: scroll-x var(--duration) linear infinite;
}

.marquee:hover .marquee__group {
    animation-play-state: paused;
}

@keyframes scroll-x {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-100% - var(--gap)));
    }
}

@media (prefers-reduced-motion: reduce) {
    .marquee__group {
        animation-play-state: paused;
    }
}
</style>