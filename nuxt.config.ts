// nuxt.config.ts
import { salesConfig } from './config/sales.js'

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Generate static routes untuk semua sales pages
  nitro: {
    prerender: {
      routes: salesConfig.map(sales => sales.route)
    }
  },
  
  app: {
    head: {
      title: 'Royal Grande Residences - Perumahan di Palembang',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Perumahan modern di Palembang dengan konsep Japandi. Dikembangkan oleh Terrakon Properti dengan fasilitas lengkap dan sistem keamanan terintegrasi.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Poppins:wght@500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css', integrity: 'sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr', crossorigin: 'anonymous' }
      ]
    }
  }
})