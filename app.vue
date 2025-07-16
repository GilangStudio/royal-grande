<!-- app.vue -->
<template>
  <div>
    <NuxtPage />

    <FloatingWhatsappButton :salesData="salesData" />
  </div>
</template>

<script setup>
// Import sales config untuk mendapatkan data sales default
import { salesConfig } from '~/config/sales.js'

// Gunakan sales pertama sebagai default jika tidak ada sales yang spesifik
const salesData = ref(salesConfig[0] || null)

// Jika ini adalah halaman sales specific, ambil data sales yang sesuai
onMounted(() => {
  if (process.client) {
    const route = useRoute()
    if (route.params.salesId) {
      const foundSales = salesConfig.find(sales => sales.route === `/${route.params.salesId}`)
      if (foundSales) {
        salesData.value = foundSales
      }
    }
  }
})
</script>

<style>
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

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h4,
h5,
h6 {
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