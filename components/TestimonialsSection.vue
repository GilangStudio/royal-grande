<!-- components/TestimonialsSection.vue -->
<template>
    <section id="testimoni" class="elementor-section section-title-container" style="flex-wrap: wrap; gap: 20px;">
        <div class="elementor-container" style="flex-basis: 40%; flex-direction: column; align-items: flex-start;">
            <p>Dipercaya oleh 100+ Konsumen</p>
            <h2 style="font-size: 48px; margin: 0;">Apa Yang</h2>
            <h2 style="font-family: var(--font-primary); font-size: 64px; letter-spacing: -2px; margin: -10px 0;">
                Konsumen</h2>
            <h2 style="font-size: 48px; margin: 0;">Kami Katakan ?</h2>
        </div>
        <div class="elementor-container" style="flex-basis: 55%;">
            <div class="carousel-wrapper testimonial-carousel">
                <div ref="testimonialTrack" class="carousel-track">
                    <div v-for="testimonial in testimonials" :key="testimonial.id" class="carousel-slide">
                        <img :src="testimonial.image" :alt="testimonial.alt">
                    </div>
                </div>
                <button class="carousel-arrow prev" @click="prevSlide">&lt;</button>
                <button class="carousel-arrow next" @click="nextSlide">&gt;</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            autoplayInterval: null,
            testimonials: [
                {
                    id: 1,
                    image: "/images/reviews-6-agus.webp",
                    alt: "Review dari Agus"
                },
                {
                    id: 2,
                    image: "/images/reviews-5-novi.webp",
                    alt: "Review dari Novi"
                },
                {
                    id: 3,
                    image: "/images/reviews-3-rian.webp",
                    alt: "Review dari Rian"
                },
                {
                    id: 4,
                    image: "/images/reviews-4-inayah.webp",
                    alt: "Review dari Inayah"
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
            const track = this.$refs.testimonialTrack
            if (track) {
                const slideWidth = track.children[0].getBoundingClientRect().width
                const gap = 16
                const moveAmount = (slideWidth + gap) * this.currentIndex
                track.style.transform = `translateX(-${moveAmount}px)`
            }
        },
        nextSlide() {
            if (this.currentIndex < this.testimonials.length - 2) {
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
                this.currentIndex = this.testimonials.length - 2
            }
            this.updateCarousel()
        },
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.nextSlide()
            }, 3000)
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

.testimonial-carousel .carousel-slide {
    flex: 0 0 calc(100% / 2 - 8px);
}

.carousel-slide img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 24px;
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
}

@media (max-width: 767px) {
    .testimonial-carousel .carousel-slide {
        flex-basis: 100%;
    }
}
</style>