<!-- components/LocationSection.vue -->
<template>
    <section id="lokasi" class="elementor-section">
        <div class="location-info-card">
            <div class="location-icon">
                <img src="/images/icon-lokasi-kami.svg"
                    alt="Ikon Lokasi">
            </div>
            <a href="https://maps.app.goo.gl/9uAHbeBCQ5WbYUaQ6" class="map-button" target="_blank">
                Lihat di Google Map
            </a>
            <p>atau</p>
            <h3>Kunjungi Sekarang</h3>
            <p>Jl. Lkr. Selatan, Pangkalan Gelebak, Kec. Rambutan, Kab. Banyuasin, Sumatera Selatan, 30967</p>
            <div class="social-icons">
                <a href="https://www.facebook.com/royalgrande.id" target="_blank">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.youtube.com/@royalgrande.id2023" target="_blank">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/royalgrande.id/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@royalgrande.id" target="_blank">
                    <i class="fab fa-tiktok"></i>
                </a>
            </div>
        </div>
        <div class="location-image-container">
            <img src="/images/chating-with-sales.png"
                alt="Chat dengan Sales">
        </div>
    </section>
</template>

<style scoped>
#lokasi {
    justify-content: center;
    align-items: center;
    margin: 100px 0;
    padding: 0 100px;
    gap: 30px;
}

#lokasi .location-info-card {
    background-color: var(--color-white);
    box-shadow: 0 0 35px -5px rgba(0, 0, 0, 0.1);
    border-radius: 36px;
    padding: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
    width: 30%;
}

#lokasi .location-info-card .location-icon img {
    width: 100px;
    margin-bottom: 10px;
}

#lokasi .location-info-card .map-button {
    display: inline-block;
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 500;
    transition: opacity 0.3s;
}

#lokasi .location-info-card .map-button:hover {
    opacity: 0.9;
}

#lokasi .location-info-card h3 {
    font-size: 24px;
    margin: 10px 0 5px 0;
}

#lokasi .location-info-card p {
    margin: 0;
    font-size: 14px;
    color: var(--color-text-secondary);
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}

.social-icons a {
    color: var(--color-primary);
    font-size: 20px;
    transition: transform 0.3s;
}

.social-icons a:hover {
    transform: scale(1.1);
}

#lokasi .location-image-container {
    flex: 1;
}

#lokasi .location-image-container img {
    width: 100%;
}

@media (max-width: 1024px) {
    #lokasi {
        flex-direction: column;
        padding: 50px 20px;
    }

    #lokasi .location-info-card {
        width: 100%;
    }
}
</style>