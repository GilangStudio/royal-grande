<!-- components/HeroSection.vue -->
<template>
    <div>
        <section id="home" class="elementor-section hero-title-section">
            <div class="elementor-widget-wrap">
                <h1>lebih lengkap, <br>lebih besar, lebih murah</h1>
                <p>Rasakan ketenangan, keamanan, <br>dan kemewahan dalam satu kawasan terpadu</p>
            </div>
        </section>

        <section class="elementor-section hero-image-section">
            <button @click="showModal = true" class="booking-button mt-4">Booking Now</button>
            <img src="/images/homescreen.png"
                alt="Tampak depan perumahan Royal Grande">
        </section>

        <!-- Gunakan Component Modal Terpisah -->
        <ConsultationModal 
            :isVisible="showModal" 
            :salesData="salesData" 
            @close="showModal = false" 
        />
    </div>
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
    }
}
</script>

<style scoped>
.hero-title-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero-title-section h1 {
    font-family: var(--font-primary);
    font-size: 64px;
    font-weight: 700;
    letter-spacing: -2px;
    margin: 0 0 10px 0;
    line-height: 1.2;
    text-transform: capitalize;
}

.hero-title-section p {
    color: var(--color-text-secondary);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.6;
    margin: 0;
}

.hero-image-section {
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 20px;
}

.hero-image-section .booking-button {
    position: absolute;
    top: -25px;
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 15px 30px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    z-index: 2;
    font-weight: 700;
    transition: opacity 0.3s;
}

.hero-image-section .booking-button:hover {
    opacity: 0.9;
}

.hero-image-section img {
    max-width: 100%;
    height: auto;
}

@media (max-width: 1024px) {
    .hero-title-section h1 {
        font-size: 36px;
    }

    .hero-title-section p {
        font-size: 12px;
    }
}
</style>