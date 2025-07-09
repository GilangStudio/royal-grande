<!-- components/FacilitiesSection.vue -->
<template>
    <div>
        <!-- Section Title -->
        <section class="elementor-section section-title-container">
            <div class="elementor-container" style="flex:1;">
                <h2>fasilitas</h2>
            </div>
            <div class="elementor-container" style="flex:1;">
                <p>Nikmati berbagai fasilitas eksklusif yang dirancang untuk menunjang kenyamanan dan gaya hidup modern
                    Anda.</p>
            </div>
        </section>

        <!-- Carousel -->
        <section class="elementor-section carousel-section">
            <div class="carousel-wrapper">
                <div ref="carouselTrack" class="carousel-track">
                    <div v-for="facility in facilities" :key="facility.id" class="carousel-slide">
                        <img :src="facility.image" :alt="facility.title">
                        <div class="carousel-caption">{{ facility.title }}</div>
                    </div>
                </div>
                <button class="carousel-arrow prev" @click="prevSlide">&lt;</button>
                <button class="carousel-arrow next" @click="nextSlide">&gt;</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            autoplayInterval: null,
            facilities: [
                {
                    id: 1,
                    image: "/images/musholla-atas-danau.png",
                    title: "Musholla Atas Danau"
                },
                {
                    id: 2,
                    image: "/images/lapangan-basket-fig.png",
                    title: "Lapangan Basket"
                },
                {
                    id: 3,
                    image: "/images/kolam-renang-fig.png",
                    title: "Kolam Renang"
                },
                {
                    id: 4,
                    image: "/images/outdoor-gym-fig.png",
                    title: "Outdoor Gym"
                },
                {
                    id: 5,
                    image: "/images/kiddy-garden-fig.png",
                    title: "Kiddy Garden"
                },
                {
                    id: 6,
                    image: "/images/club-house-fig.png",
                    title: "Club House"
                }
            ]
        }
    },
    mounted() {
        this.startAutoplay()
    },
    beforeUnmount() {
        this.stopAutoplay()
    },
    methods: {
        updateCarousel() {
            const track = this.$refs.carouselTrack
            if (track) {
                const slideWidth = track.children[0].getBoundingClientRect().width
                const gap = 16
                const moveAmount = (slideWidth + gap) * this.currentIndex
                track.style.transform = `translateX(-${moveAmount}px)`
            }
        },
        nextSlide() {
            if (this.currentIndex < this.facilities.length - 3) {
                this.currentIndex++
            } else {
                this.currentIndex = 0
            }
            this.updateCarousel()
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--
            } else {
                this.currentIndex = this.facilities.length - 3
            }
            this.updateCarousel()
        },
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.nextSlide()
            }, 2000)
        },
        stopAutoplay() {
            if (this.autoplayInterval) {
                clearInterval(this.autoplayInterval)
            }
        }
    }
}
</script>

<style scoped>
.section-title-container {
    justify-content: space-between;
    align-items: center;
    margin: 100px 0 50px 0;
    padding: 0 100px;
}

.section-title-container h2 {
    font-family: var(--font-primary);
    font-size: 64px;
    letter-spacing: -2px;
    margin: 0;
    text-transform: capitalize;
}

.section-title-container p {
    color: var(--color-text-secondary);
    text-align: right;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
}

.carousel-section {
    padding: 50px 100px;
}

.carousel-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    gap: 16px;
}

.carousel-slide {
    flex: 0 0 calc(100% / 3 - 11px);
    position: relative;
}

.carousel-slide img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 24px;
}

.carousel-caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -2px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 10;
    font-size: 20px;
    color: var(--color-primary);
}

.carousel-arrow.prev {
    left: 10px;
}

.carousel-arrow.next {
    right: 10px;
}

@media (max-width: 1024px) {
    .section-title-container {
        flex-direction: column;
        text-align: center;
        gap: 10px;
        padding: 0 20px;
        margin: 50px 0 30px 0;
    }

    .section-title-container p {
        text-align: center;
    }

    .section-title-container h2 {
        font-size: 36px;
    }

    .carousel-section {
        padding: 30px 20px;
    }

    .carousel-slide {
        flex-basis: calc(100% / 2 - 8px);
    }
}

@media (max-width: 767px) {
    .carousel-slide {
        flex-basis: 100%;
    }
}
</style>