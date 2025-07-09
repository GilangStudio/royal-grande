<!-- components/AppHeader.vue -->
<template>
    <header id="header-section" class="elementor-section mb-5">
        <div class="elementor-container logo-container">
            <a href="#">
                <img src="/images/logo-royal-grande.png"
                    alt="Logo Royal Grande">
            </a>
        </div>
        <div class="elementor-container nav-container">
            <nav>
                <ul class="main-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#testimoni">Testimoni</a></li>
                    <li><a href="#residences">Residences</a></li>
                    <li><a href="#konsultasi">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div class="elementor-container cta-container">
            <a v-if="salesData" :href="whatsappLink" class="header-cta-button">
                <i class="fas fa-phone-alt"></i>
                <span>{{ ctaText }}</span>
            </a>
        </div>
    </header>
</template>

<script>
export default {
  props: {
    salesData: {
      type: Object,
      default: null
    }
  },
  computed: {
    whatsappLink() {
      if (this.salesData) {
        const message = encodeURIComponent(`Halo ${this.salesData.name}, saya tertarik dengan Royal Grande Residences. Mohon informasi lebih lanjut.`)
        return `${this.salesData.whatsapp}?text=${message}`
      }
      return '#'
    },
    ctaText() {
      return this.salesData ? `Hubungi ${this.salesData.name}` : 'Hubungi Sales'
    }
  }
}
</script>

<style scoped>
#header-section {
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    padding: 0 50px;
}

#header-section .logo-container {
    width: 33.333%;
}

#header-section .logo-container img {
    max-width: 100%;
    height: auto;
}

#header-section .nav-container {
    width: 66.666%;
    justify-content: center;
}

#header-section .cta-container {
    width: 33.333%;
    justify-content: flex-end;
}

.main-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 25px;
}

.main-menu a {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    color: var(--color-text);
    transition: color 0.3s;
}

.main-menu a:hover {
    color: var(--color-primary);
}

.header-cta-button {
    display: inline-flex;
    align-items: center;
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
}

.header-cta-button .fa-phone-alt {
    margin-right: 8px;
}

@media (max-width: 1024px) {
    #header-section {
        padding: 0 20px;
        margin: 20px 0;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
    }

    #header-section .logo-container img {
        width: 250px;
    }

    .main-menu {
        display: none;
    }

    #header-section .logo-container {
        width: auto;
        flex: 0 0 auto;
        margin-left: 0;
    }

    #header-section .nav-container {
        display: none;
    }

    #header-section .cta-container {
        width: auto;
        flex: 0 0 auto;
        margin-right: 0;
    }
}

@media (max-width: 767px) {
    #header-section {
        padding: 0 15px;
        margin: 15px 0;
    }

    #header-section .logo-container img {
        width: 200px;
        height: auto;
    }

    .header-cta-button {
        padding: 8px 16px;
        font-size: 12px;
        white-space: nowrap;
    }

    .header-cta-button .fa-phone-alt {
        margin-right: 6px;
    }
}

@media (max-width: 480px) {
    #header-section {
        padding: 0 10px;
        margin: 10px 0;
    }

    #header-section .logo-container img {
        width: 80px;
    }

    .header-cta-button {
        padding: 6px 12px;
        font-size: 11px;
    }

    .header-cta-button span {
        display: none;
    }

    .header-cta-button .fa-phone-alt {
        margin-right: 0;
    }
}
</style>