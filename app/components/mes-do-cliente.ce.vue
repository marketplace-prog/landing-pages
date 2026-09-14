<template>
  <main class="min-h-screen bg-background text-foreground">

    <section id="inicio" class="relative isolate overflow-hidden bg-secondary">
      <div class="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
        <div class="z-10 px-5 py-20 lg:px-10 lg:py-28">
          <p class="mb-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-foreground">
            Mês do cliente FGR Sports 2026
          </p>
          <h1
            class="max-w-xl text-balance font-sans text-6xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-secondary-foreground md:text-8xl">
            Domine a <span class="text-accent">quadra.</span></h1>
          <p class="mt-8 max-w-md text-pretty text-base leading-7 text-muted-foreground">
            Soluções para montagem e manutenção de quadras para esportes de raquete. Qualidade e rentabilidade para
            condomínios, academias e arenas.
          </p>

          <div class="flex flex-row flex-wrap gap-2">
            <a :href="'https://www.fgrsports.com.br/beach-tennis' + utmSuffix"
              class="mt-10 inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground transition-transform hover:-translate-y-1">
              Beach Tennis
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-arrow-up-right size-4" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>

            <a :href="'https://www.fgrsports.com.br/tenis' + utmSuffix"
              class="mt-10 inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground transition-transform hover:-translate-y-1">
              Tênis
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-arrow-up-right size-4" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>

            <a :href="'https://www.fgrsports.com.br/outlet' + utmSuffix"
              class="mt-10 inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground transition-transform hover:-translate-y-1">
              Outlet
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-arrow-up-right size-4" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>

        </div>
        <div class="relative min-h-130 overflow-hidden lg:min-h-170">
          <img src="/fgr-hero.jpg" alt="Atleta FGR Sports jogando padel em ambiente urbano"
            class="absolute inset-0 size-full object-cover object-center grayscale-20">
          <div class="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-secondary via-transparent to-transparent lg:w-2/3">
          </div>
          <span
            class="absolute bottom-8 right-8 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
            O negócio é vencer.
          </span>
        </div>
      </div>
    </section>

    <section id="categorias" class="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <div class="mb-10 flex items-end justify-between">
        <div>
          <p class="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Conheça nossas
          </p>
          <h2 class="mt-3 font-sans text-4xl font-black uppercase tracking-tighter">
            Modalidades
          </h2>
        </div>
        <a :href="'https://www.fgrsports.com.br/outlet' + utmSuffix"
          class="hidden font-mono text-[10px] font-bold uppercase tracking-[0.15em] underline underline-offset-4 sm:block">
          Ver Ofertas
        </a>
      </div>

      <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
        <a v-for="sport in categories" :href="sport.url"
          class="group relative flex min-h-48 items-end overflow-hidden bg-primary p-5">
          <span class="z-10 font-sans text-2xl font-black uppercase tracking-[-0.06em] text-primary-foreground">
            {{ sport.label }}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="z-10 lucide lucide-arrow-up-right absolute right-4 top-4 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-accent"
            aria-hidden="true">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
          <img :src="sport.imageUrl" :alt="sport.label"
            class="absolute size-full object-cover object-center inset-0 z-0 opacity-25 hover:opacity-35 hover:scale-150 transition ease-in-out duration-700">
        </a>

      </div>
    </section>

    <section id="colecao" class="bg-secondary px-5 py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="mb-10 flex items-end justify-between">
          <div>
            <p class="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Conheça os
            </p>
            <h2 class="mt-3 font-sans text-4xl font-black uppercase tracking-tighter text-secondary-foreground">
              Mais Vendidos
            </h2>
          </div>
          <a :href="'https://www.fgrsports.com.br/outlet' + utmSuffix"
            class="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-secondary-foreground underline underline-offset-4">
            Ver ofertas
          </a>
        </div>

        <div class="grid gap-5 md:grid-cols-2">

          <article v-for="collection in collections" :id="collection.label" class="group">
            <div class="relative aspect-square overflow-hidden bg-muted">
              <img :src="collection.imageUrl" :alt="collection.label"
                class="size-full object-cover object-bottom md:grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0">
              <div class="absolute left-4 top-4 flex gap-2">
                <span class="bg-accent px-2 py-1 font-mono text-[9px] font-bold uppercase text-accent-foreground">
                  {{ collection.highlightText }}
                </span>
              </div>
              <a :href="collection.collectionUrl"
                class="absolute bottom-0 left-0 right-0 md:translate-y-full bg-accent py-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-accent-foreground text-center transition-transform group-hover:translate-y-0 group-focus-visible:translate-y-0 group-active:translate-y-0">
                Ver Detalhes
              </a>
            </div>
            <a :href="collection.collectionUrl" class="flex items-start justify-between gap-4 py-4">
              <div>
                <h3 class="font-sans text-lg font-bold uppercase">
                  {{ collection.label }}
                </h3>
                <p class="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {{ collection.category }}
                </p>
              </div>
              <strong class="font-mono text-xs text-center">
                Apenas
                {{
                  collection.price.toLocaleString('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  })
                }}
              </strong>
            </a>
          </article>


        </div>
      </div>
    </section>

    <section id="manifesto" class="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 lg:grid-cols-2 lg:px-10">
      <div>
        <p class="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          O diferencial FGR
        </p>
        <h2 class="mt-4 max-w-lg text-balance font-sans text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em]">
          O seu negócio no <span class="text-accent">topo.</span></h2>
      </div>
      <p class="max-w-md text-pretty text-lg leading-8 text-muted-foreground">
        A FGR Sports é a parceira estratégica definitiva para clubes, condomínios, lojas e arenas esportivas.
        Desenvolvemos produtos que vão muito além do jogo: geram valor real para a sua marca
      </p>
    </section>

  </main>
</template>

<script setup lang="ts">

const BASE_URL = 'https://landing-pages-one-kappa.vercel.app/'
const isDev = import.meta.env.DEV
const utmSuffix = '?utm_source=site&utm_medium=backlink_interno&utm_campaign=dia-do-cliente'


const categories: Array<{
  url: string;
  imageUrl: string;
  label: string;
}> = [
    {
      label: 'Tênis',
      url: 'https://www.fgrsports.com.br/tenis' + utmSuffix,
      imageUrl: isDev
        ? '/tennis-01.jpg'
        : new URL('/tennis-01.jpg', BASE_URL).href,
    }, {
      label: 'Padel',
      url: 'https://www.fgrsports.com.br/padel' + utmSuffix,
      imageUrl: isDev
        ? '/padel-01.jpg'
        : new URL('/padel-01.jpg', BASE_URL).href,
    }, {
      label: 'Beach Tennis',
      url: 'https://www.fgrsports.com.br/beach-tennis' + utmSuffix,
      imageUrl: isDev
        ? '/beach-tennis-01.jpg'
        : new URL('/beach-tennis-01.jpg', BASE_URL).href,
    }, {
      label: 'Pickleball',
      url: 'https://www.fgrsports.com.br/raquete-pickleball-redes-acessorios' + utmSuffix,
      imageUrl: isDev
        ? '/pickleball-01.jpg'
        : new URL('/pickleball-01.jpg', BASE_URL).href,
    }
  ]

const collections: Array<{
  label: string;
  category: string;
  imageUrl: string;
  collectionUrl: string;
  price: number;
  highlightText: string | null;
}> = [
    {
      price: 1999.90,
      category: 'Kits Promocionais',
      label: 'Kit Marcação Quadra de Tênis 150m Fita + 20 kg Prego',
      collectionUrl: 'https://www.fgrsports.com.br/kit-fita-de-solo-e-prego-para-quadra-de-tenis-promocional-' + utmSuffix,
      imageUrl: isDev
        ? '/mes-do-cliente/kit-marcacao.jpg'
        : new URL('/mes-do-cliente/kit-marcacao.jpg', BASE_URL).href,
      highlightText: '7% OFF',
    },
    {
      price: 1108.23,
      category: 'Rede de Tênis',
      label: 'Rede de Tênis Oficial - Classic Personalizada',
      collectionUrl: 'https://www.fgrsports.com.br/rede-para-quadra-de-tenis-oficial-personalizada-classic' + utmSuffix,
      imageUrl: isDev
        ? '/mes-do-cliente/rede-beach-tennis-classic.jpg'
        : new URL('/mes-do-cliente/rede-beach-tennis-classic.jpg', BASE_URL).href,
      highlightText: '10% OFF',
    },
    {
      price: 664.91,
      category: 'Redes de Beach Tennis',
      label: 'Rede de Beach Tennis Oficial Personalizada',
      collectionUrl: 'https://www.fgrsports.com.br/rede-de-beach-tennis-oficial-personalizada' + utmSuffix,
      imageUrl: isDev
        ? '/mes-do-cliente/rede-beach-tennis.jpg'
        : new URL('/mes-do-cliente/rede-beach-tennis.jpg', BASE_URL).href,
      highlightText: '20% OFF',
    },
    {
      price: 918.23,
      category: 'Monte sua Quadra',
      label: 'Rede de Padel Oficial - Classic Personalizada',
      collectionUrl: 'https://www.fgrsports.com.br/rede-padel-poliamida-personalizada-' + utmSuffix,
      imageUrl: isDev
        ? '/mes-do-cliente/rede-padel.jpg'
        : new URL('/mes-do-cliente/rede-padel.jpg', BASE_URL).href,
      highlightText: '12% OFF',
    },
    {
      price: 791.56,
      category: 'Redes de Tênis',
      label: 'Rede de Tênis Oficial - Classic',
      collectionUrl: 'https://www.fgrsports.com.br/rede-de-tenis-oficial-classic' + utmSuffix,
      imageUrl: isDev
        ? '/mes-do-cliente/rede-tennis-poliamida.jpg'
        : new URL('/mes-do-cliente/rede-tennis-poliamida.jpg', BASE_URL).href,
      highlightText: '27% OFF',
    },
    {
      price: 3799.05,
      category: 'Acessórios - Tênis',
      label: 'Rolo Compactador de Saibro para Quadra de Tênis',
      collectionUrl: 'https://www.fgrsports.com.br/rolo-compressor-para-quadra-de-tenis-saibro' + utmSuffix,
      imageUrl: isDev
        ? '/mes-do-cliente/rolo-compactador.jpg'
        : new URL('/mes-do-cliente/rolo-compactador.jpg', BASE_URL).href,
      highlightText: '5% OFF',
    },
    {
      price: 843.60,
      category: 'Acessórios - Tênis',
      label: 'Vassoura Rotativa para Limpar Linha de Quadra de Tênis',
      collectionUrl: 'https://www.fgrsports.com.br/vassoura-rotativa-limpa-linha-para-quadra-de-tenis' + utmSuffix,
      imageUrl: isDev
        ? '/mes-do-cliente/vassoura-rotativa.jpg'
        : new URL('/mes-do-cliente/vassoura-rotativa.jpg', BASE_URL).href,
      highlightText: '11% OFF',
    },
    {
      price: 738.15,
      category: 'Acessórios - Tênis',
      label: 'Vassourão 2,0 metros - Para Quadra de Tênis',
      collectionUrl: 'https://www.fgrsports.com.br/vassourao-para-quadra-de-tenis-200m-angelim-' + utmSuffix,
      imageUrl: isDev
        ? '/mes-do-cliente/vassourao-2-mts.jpg'
        : new URL('/mes-do-cliente/vassourao-2-mts.jpg', BASE_URL).href,
      highlightText: '14% OFF',
    },
  ]




</script>

<style>
@import "tailwindcss";
</style>