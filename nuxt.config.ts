import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    shim: false,
  },
  nitro: {},
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    head: {
      title: 'Federação de Voleibol Master do Rio de Janeiro',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          name: 'keywords',
          content: 'Federação de Voleibol Master do Estado do Rio de Janeiro',
        },
        {
          name: 'description',
          content: 'Site Ofifical da Fedeção de Voleibol Master do Estado do Rio de Janeiro',
        },
        {
          name: 'author',
          content: 'Reinaldo Barifouse - Agência Mais Resultado',
        },
      ],
      link: [
        { rel: 'shortcut icon', href: '/assets/imgs/favicon.ico' },
        // Google Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
        },
        { rel: 'stylesheet', href: '/assets/css/plugins.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
      ],
      script: [
        { src: '/assets/js/plugins.js' },
        { src: '/assets/js/TweenMax.min.js' },
        { src: '/assets/js/charming.min.js' },
        { src: '/assets/js/countdown.js' },
        { src: '/assets/js/ScrollTrigger.min.js' },
        { src: '/assets/js/gsap.min.js' },
        { src: '/assets/js/splitting.min.js' },
        { src: '/assets/js/isotope.pkgd.min.js' },
        { src: '/assets/js/imgReveal/imagesloaded.pkgd.min.js' },
        { src: '/assets/js/ScrollSmoother.min.js' },
        // { src: '/showcase/assets/js/anime.min.js' },
        { src: '/assets/js/scripts.js', defer: true },
      ],
    },
  },
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
});
