<!-- components/FeaturesSection.vue -->
<template>
    <section class="elementor-section features-section">
        <div v-for="feature in features" :key="feature.id" class="feature-card">
            <div class="icon">
                <img :src="feature.icon" :alt="feature.title">
            </div>
            <div class="text">
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {
                    id: 1,
                    icon: "/images/Vector-2.svg",
                    title: "Area Sunrise Property",
                    description: "Ulu Palembang, Pusat pemerintahan & aktivitas masyarakat"
                },
                {
                    id: 2,
                    icon: "/images/Vector-1.svg",
                    title: "Fasilitas Lengkap",
                    description: "Clubhouse, taman 4.000 m², musholla, Kiddy Garden, lapangan basket, dll"
                },
                {
                    id: 3,
                    icon: "/images/Union-1.svg",
                    title: "Konsep Japandi",
                    description: "Gaya Jepang & Scandinavian yang elegan"
                },
                {
                    id: 4,
                    icon: "/images/security-free-material-svgrepo-com-1.svg",
                    title: "Keamanan 24 Jam",
                    description: "One-gate system, CCTV, access card."
                },
                {
                    id: 5,
                    icon: "/images/legal-svgrepo-com-1.svg",
                    title: "Legalitas Aman",
                    description: "Dijamin oleh Terrakon Properti."
                }
            ]
        }
    }
}
</script>

<style scoped>
.features-section {
    justify-content: center;
    gap: 24px;
    padding: 0 20px;
    flex-wrap: wrap;
}

.feature-card {
    background-color: var(--color-white);
    border-radius: 24px;
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-basis: calc(50% - 12px);
    max-width: 500px;
    min-height: 122px;
    box-shadow: 0 0 35px -5px rgba(0, 0, 0, 0.1);
}

.feature-card .icon {
    flex-shrink: 0;
}

.feature-card .icon img {
    width: 59px;
    height: 59px;
}

.feature-card h3 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0 0 5px 0;
}

.feature-card p {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    color: var(--color-text-secondary);
    margin: 0;
}

@media (max-width: 1024px) {
    .feature-card {
        flex-basis: 100%;
    }
}
</style>