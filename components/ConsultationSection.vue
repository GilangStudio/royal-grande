<!-- components/ConsultationSection.vue -->
<template>
    <section id="konsultasi" class="elementor-section">
        <div class="elementor-container image-container">
            <img src="/images/konsultasi-gratis-img.png"
                alt="Konsultasi Gratis dengan Sales">
        </div>
        <div class="elementor-container cta-container-wrapper">
            <div class="elementor-widget-wrap">
                <h2>Booking Now</h2>
                <p class="cta-description">
                    Dapatkan konsultasi gratis dari tim ahli kami untuk membantu Anda memilih hunian impian di Royal Grande Residences.
                </p>
                <div class="cta-buttons">
                    <button @click="showModal = true" class="primary-cta-button">
                        Booking Now
                    </button>
                    <!-- <a v-if="salesData" :href="whatsappQuickLink" class="whatsapp-cta-button" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                        Chat {{ salesData.name }}
                    </a>
                    <a v-else href="https://wa.me/6285195080000" class="whatsapp-cta-button" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                        Chat Sales
                    </a> -->
                </div>
            </div>
        </div>

        <!-- Gunakan Component Modal Terpisah -->
        <ConsultationModal 
            :isVisible="showModal" 
            :salesData="salesData" 
            @close="showModal = false" 
        />
    </section>
</template>

<script>
export default {
    props: {
        salesData: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            showModal: false
        }
    },
    computed: {
        whatsappQuickLink() {
            if (this.salesData) {
                const message = encodeURIComponent(`Halo ${this.salesData.name}, saya ingin konsultasi tentang Royal Grande Residences.`)
                return `${this.salesData.whatsapp}?text=${message}`
            }
            return 'https://wa.me/6285195080000'
        }
    }
}
</script>

<style scoped>
#konsultasi {
    align-items: center;
    padding: 0 100px;
}

#konsultasi .image-container,
#konsultasi .cta-container-wrapper {
    flex: 1;
}

#konsultasi .image-container img {
    width: 100%;
}

#konsultasi h2 {
    font-family: var(--font-primary);
    font-size: 48px;
    letter-spacing: -2px;
    text-transform: capitalize;
    margin: 0 0 20px 0;
}

.cta-container-wrapper .elementor-widget-wrap {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.cta-description {
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-text-secondary);
    margin: 0;
}

.cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.primary-cta-button {
    background-color: var(--color-primary);
    color: white;
    padding: 18px 30px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.primary-cta-button:hover {
    background-color: #B8941F;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(211, 175, 55, 0.3);
}

.whatsapp-cta-button {
    background-color: #25D366;
    color: white;
    padding: 15px 30px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.whatsapp-cta-button:hover {
    background-color: #128C7E;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
    color: white;
}

@media (max-width: 1024px) {
    #konsultasi {
        flex-direction: column;
        padding: 50px 20px;
        gap: 30px;
    }
}

@media (max-width: 768px) {
    .primary-cta-button {
        padding: 15px 25px;
        font-size: 16px;
    }

    .whatsapp-cta-button {
        padding: 12px 25px;
        font-size: 14px;
    }
}
</style>