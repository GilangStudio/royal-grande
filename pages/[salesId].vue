<!-- pages/[salesId].vue -->
<template>
    <div v-if="salesData">
        <AppHeader :salesData="salesData" />
        <HeroSection :salesData="salesData" />
        <WelcomeSection />
        <FeaturesSection />
        <HouseTypesSection />
        <FacilitiesSection />
        <TestimonialsSection />
        <ConsultationSection :salesData="salesData" />
        <LocationSection />
        <AppFooter />
    </div>
    <div v-else>
        <h1>Sales tidak ditemukan</h1>
        <p>Halaman yang Anda cari tidak tersedia.</p>
    </div>
</template>

<script>
import { salesConfig, getSalesByRoute } from '~/config/sales.js'

export default {
    data() {
        return {
            salesData: null
        }
    },
    async created() {
        const salesRoute = this.$route.params.salesId
        this.salesData = getSalesByRoute(salesRoute)

        // Set dynamic title
        if (this.salesData) {
            useHead({
                title: `Royal Grande Residences - ${this.salesData.name} | Perumahan di Palembang`,
                meta: [
                    { name: 'description', content: `Hubungi ${this.salesData.name} untuk konsultasi perumahan Royal Grande Residences di Palembang. WhatsApp: ${this.salesData.phone}` }
                ]
            })
        }
    },
    // Generate static routes untuk semua sales
    async generate() {
        const routes = salesConfig.map(sales => ({
            route: sales.route,
            payload: { salesData: sales }
        }))
        return routes
    }
}
</script>

<style>
/* Menggunakan style yang sama dengan app.vue */
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