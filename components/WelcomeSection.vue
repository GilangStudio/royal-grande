<!-- components/WelcomeSection.vue -->
<template>
    <section class="elementor-section welcome-section">
        <div class="elementor-container image-container">
            <img src="/images/ecstatic-dt.png"
                alt="Rumah tipe Ecstatic">
        </div>
        <div class="elementor-container text-container flex-column">
            <h2>Selamat Datang di Royal Grande​</h2>
            <p>
                Perumahan modern di Palembang yang dikembangkan oleh Terrakon Properti, developer terpercaya di Sumatera
                Selatan. <br><br>
                Mengusung konsep Japandi pertama di Ulu Palembang, Royal Grande menghadirkan hunian elegan dengan
                jaringan listrik bawah tanah, taman luas, clubhouse eksklusif, dan sistem keamanan terintegrasi.
                <br><br>
                Pilihan ideal untuk Anda yang mencari rumah nyaman, modern, dan bernilai investasi tinggi.
            </p>
        </div>
    </section>
</template>

<style scoped>
.welcome-section {
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    margin: 100px 0;
    padding: 0;
}

.welcome-section .image-container,
.welcome-section .text-container {
    flex: 1;
}

.welcome-section .image-container img {
    width: 100%;
    height: auto;
    display: block;
}

.welcome-section .text-container {
    padding-right: 100px;
}

.welcome-section .text-container h2 {
    font-family: var(--font-primary);
    font-size: 64px;
    line-height: 1.1;
    letter-spacing: -2px;
    margin: 0 0 20px 0;
}

.welcome-section .text-container p {
    color: var(--color-text-secondary);
    font-size: 16px;
    line-height: 1.8;
    font-weight: 500;
    letter-spacing: 1px;
}

@media (max-width: 1024px) {
    .welcome-section {
        flex-direction: column;
        margin: 50px 0;
        padding: 0 20px;
    }

    .welcome-section .text-container {
        padding-right: 0;
        order: -1;
    }

    .welcome-section .text-container h2 {
        font-size: 36px;
    }
}
</style>