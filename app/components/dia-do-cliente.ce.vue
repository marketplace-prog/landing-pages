<template>
  <main class="min-h-screen bg-background text-foreground">

    <section id="inicio" class="relative isolate overflow-hidden bg-secondary">
      <div class="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
        <div class="z-10 px-5 py-20 lg:px-10 lg:py-28">
          <p class="mb-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-foreground">
            DIA DO CLIENTE FGR Sports - 2026
          </p>
          <h1
            class="max-w-xl text-balance font-sans text-6xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-secondary-foreground md:text-8xl">
            Domine a <span class="text-accent">quadra.</span></h1>
          <p class="mt-8 max-w-md text-pretty text-base leading-7 text-muted-foreground">
            Soluções para montagem e manutenção de quadras para esportes de raquete. Qualidade e rentabilidade para
            condomínios, academias e arenas.
          </p>
          <a href="#colecao"
            class="mt-10 inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground transition-transform hover:-translate-y-1">
            Catálogo Atacado
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-arrow-up-right size-4" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </div>
        <div class="relative min-h-130 overflow-hidden lg:min-h-170">
          <img src="/fgr-hero.jpg" alt="Atleta FGR Sports jogando padel em ambiente urbano"
            class="absolute inset-0 size-full object-cover object-center grayscale-20">
          <div class="absolute inset-0 bg-linear-to-r from-secondary via-transparent to-transparent lg:w-2/3">
          </div>
          <span
            class="absolute bottom-8 right-8 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">O
            negócio é vencer.
          </span>
        </div>
      </div>
    </section>

    <section id="categorias" class="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <div class="mb-10 flex items-end justify-between">
        <div>
          <p class="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Expanda seu portfólio
          </p>
          <h2 class="mt-3 font-sans text-4xl font-black uppercase tracking-tighter">Modalidades</h2>
        </div>
        <a href="#colecao"
          class="hidden font-mono text-[10px] font-bold uppercase tracking-[0.15em] underline underline-offset-4 sm:block">
          Ver linhas completas
        </a>
      </div>

      <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
        <a v-for="sport in categories" :href="sport.url"
          class="group relative flex min-h-48 items-end overflow-hidden bg-primary p-5">
          <span class="font-sans text-2xl font-black uppercase tracking-[-0.06em] text-primary-foreground">
            {{ sport.label }}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-arrow-up-right absolute right-4 top-4 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-accent-foreground"
            aria-hidden="true">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </a>
        
      </div>
    </section>

    <section id="colecao" class="bg-secondary px-5 py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="mb-10 flex items-end justify-between">
          <div>
            <p class="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Giro Rápido
            </p>
            <h2 class="mt-3 font-sans text-4xl font-black uppercase tracking-tighter text-secondary-foreground">
              Mais Vendidos B2B
            </h2>
          </div>
          <a href="#newsletter"
            class="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-secondary-foreground underline underline-offset-4">
            Ver tabela de preços
          </a>
        </div>

        <div class="grid gap-5 md:grid-cols-3">

          <article v-for="collection in collections" :id="collection.label" class="group">
            <div class="relative aspect-4/5 overflow-hidden bg-muted">
              <img :src="collection.imageUrl" :alt="collection.label"
                class="size-full object-cover object-center grayscale transition duration-500 group-hover:scale-105">
              <div class="absolute left-4 top-4 flex gap-2">
                <span class="bg-accent px-2 py-1 font-mono text-[9px] font-bold uppercase text-accent-foreground">
                  {{ collection.highlightText }}
                </span>
              </div>
              <button :aria-label="`Adicionar ${collection.label} aos favoritos`"
                class="absolute right-4 top-4 bg-background/90 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-heart size-4" aria-hidden="true">
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5">
                  </path>
                </svg>
              </button>
              <button
                class="absolute bottom-0 left-0 right-0 translate-y-full bg-accent py-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-accent-foreground transition-transform group-hover:translate-y-0">
                Adicionar lote à cotação
              </button>
            </div>
            <div class="flex items-start justify-between gap-4 py-4">
              <div>
                <h3 class="font-sans text-lg font-bold uppercase">
                  {{ collection.label }}
                </h3>
                <p class="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                   {{ collection.category }}
                </p>
              </div>
              <strong class="font-mono text-xs">
                A partir de
                {{
                  collection.price.toLocaleString('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  })
                }}
              </strong>
            </div>
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
        A FGR Sports é a parceira
        estratégica definitiva para clubes, lojas e arenas esportivas. Desenvolvemos peças que unem tecnologia e
        liberdade de movimento, garantindo giro rápido e alta margem para o seu negócio — do saque ao match
        point.</p>
    </section>

    <section id="newsletter" class="bg-accent px-5 py-16 text-accent-foreground lg:px-10">
      <div class="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p class="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">Parceria B2B</p>
          <h2 class="mt-3 max-w-lg text-balance font-sans text-4xl font-black uppercase leading-none tracking-tighter">
            Receba nossas tabelas de atacado.
          </h2>
        </div>

        <form class="flex w-full max-w-md border-b border-accent-foreground/50">
          <label class="sr-only" for="email">
            E-mail corporativo
          </label>
          <input id="email" type="email" required="true" placeholder="E-mail do seu negócio"
            class="min-w-0 flex-1 bg-transparent py-3 font-mono text-xs outline-none placeholder:text-accent-foreground/60"
            value="">
          <button aria-label="Receber cotação" class="py-3 font-mono text-[10px] font-bold uppercase tracking-widest">
            Receber Tabela
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-arrow-up-right ml-2 inline size-4" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </button>
        </form>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">

const categories: Array<{
  url: string;
  label: string;
}> = [
    {
      label: 'Tênis',
      url: '#'
    }, {
      label: 'Padel',
      url: '#'
    }, {
      label: 'Beach Tennis',
      url: '#'
    }, {
      label: 'Pickleball',
      url: '#'
    }
  ]

const collections: Array<{
  label: string;
  category: string;
  imageUrl: string;
  price: number;
  highlightText: string | null;
}> = [
    {
      label: 'Kit marcação Quadra de Tênis',
      price: 1990.90,
      category: 'Monte sua Quadra',
      imageUrl: '/fgr-hero.jpg',
      highlightText: '57% OFF',
    },
    {
      label: 'Raquete Raptor Bee',
      price: 2999.90,
      category: 'Raquetes',
      imageUrl: '/fgr-hero.jpg',
      highlightText: '17% OFF',
    },
    {
      label: 'Rede de Beach Tennis Personalizada',
      price: 599.90,
      category: 'Monte sua Quadra',
      imageUrl: '/fgr-hero.jpg',
      highlightText: '57% OFF',
    },
  ]

</script>

<style>
  @import "tailwindcss";  
</style>