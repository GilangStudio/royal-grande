<!-- pages/index.vue -->
<template>
    <div>
      <!-- Google Tag Manager (noscript) - Immediately after opening body tag -->
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-MZN4Z376"
          height="0" 
          width="0" 
          style="display:none;visibility:hidden">
        </iframe>
      </noscript>
      <!-- End Google Tag Manager (noscript) -->
      
      <AppHeader />
      <HeroSection />
      <WelcomeSection />
      <FeaturesSection />
      <HouseTypesSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <ConsultationSection />
      <LocationSection />
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  // Nuxt 3 composables
  useHead({
    title: 'Royal Grande Residences - Perumahan Mewah di Palembang',
    meta: [
      {
        name: 'description',
        content: 'Royal Grande Residences - Perumahan modern dengan konsep Japandi di Ulu Palembang. Fasilitas lengkap, keamanan 24 jam, dan investasi terpercaya.'
      },
      {
        name: 'keywords',
        content: 'perumahan palembang, rumah dijual palembang, royal grande, terrakon properti, japandi style, ulu palembang'
      },
      {
        property: 'og:title',
        content: 'Royal Grande Residences - Perumahan Mewah di Palembang'
      },
      {
        property: 'og:description',
        content: 'Perumahan modern dengan konsep Japandi di Ulu Palembang. Fasilitas lengkap, keamanan 24 jam.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
    ],
    script: [
      // Google Tag Manager - As high in head as possible
      {
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MZN4Z376');`,
        type: 'text/javascript'
      },
      // Meta Pixel Code
      {
        innerHTML: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1282019076820799');
          fbq('track', 'PageView');
        `,
        type: 'text/javascript'
      }
    ],
    noscript: [
      // Meta Pixel noscript
      {
        innerHTML: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1282019076820799&ev=PageView&noscript=1" />`
      }
    ]
  })
  
  // Track homepage visit when component is mounted
  onMounted(() => {
    trackHomepageVisit()
  })
  
  // Track homepage visit with custom events
  const trackHomepageVisit = () => {
    if (process.client) {
      // Google Tag Manager custom event
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view_homepage',
          page_title: 'Royal Grande Residences Homepage',
          page_location: window.location.href
        })
      }
      
      // Facebook Pixel custom event
      if (window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_name: 'Royal Grande Homepage',
          content_category: 'Real Estate Landing Page',
          content_type: 'website'
        })
      }
    }
  }
  </script>
  
  <style>
  /* Global styles untuk homepage */
  :root {
    --color-primary: #D3AF37;
    --color-text: #4A4A68;
    --color-text-secondary: #8C8CA1;
    --color-background: #FAFCFE;
    --color-white: #FFFFFF;
    --font-primary: 'Cinzel', serif;
    --font-secondary: 'Poppins', sans-serif;
  }
  
  body {
    margin: 0;
    font-family: var(--font-secondary);
    color: var(--color-text);
    background-color: var(--color-background);
    overflow-x: hidden;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  h1, h2, h4, h5, h6 {
    color: var(--color-primary);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  .elementor-section {
    display: flex;
    position: relative;
    width: 100%;
  }
  
  .elementor-container {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
  }
  
  .elementor-widget-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .elementor-widget {
    position: relative;
  }
  </style>