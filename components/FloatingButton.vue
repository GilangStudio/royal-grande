<!-- components/FloatingConsultationButton.vue -->
<template>
    <div>
        <!-- Tombol Konsultasi Floating -->
        <div class="floating-consultation" @click="openModal">
            <div class="consultation-icon">
                <i class="fas fa-comments"></i>
            </div>
            <div class="consultation-text">
                <span>Booking Now</span>
            </div>
        </div>

        <!-- Modal Konsultasi -->
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
    },
    methods: {
        openModal() {
            this.showModal = true
        }
    }
}
</script>

<style scoped>
.floating-consultation {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, var(--color-primary), #B8941F);
    border-radius: 50px;
    box-shadow: 0 4px 20px rgba(211, 175, 55, 0.4);
    overflow: hidden;
    transition: all 0.3s ease;
    animation: bounce 2s infinite;
}

.floating-consultation:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 25px rgba(211, 175, 55, 0.6);
    animation: none;
}

.consultation-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 28px;
    flex-shrink: 0;
}

.consultation-text {
    padding: 0 20px 0 10px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    white-space: nowrap;
    opacity: 0;
    width: 0;
    transition: all 0.3s ease;
    overflow: hidden;
}

.floating-consultation:hover .consultation-text {
    opacity: 1;
    width: auto;
    padding-right: 20px;
}

/* Animasi bounce */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

/* Animasi pulse untuk efek tambahan */
.floating-consultation::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: rgba(211, 175, 55, 0.3);
    border-radius: 50%;
    animation: pulse 2s infinite;
    z-index: -1;
}

@keyframes pulse {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.7;
    }
    70% {
        transform: translate(-50%, -50%) scale(1.4);
        opacity: 0;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.4);
        opacity: 0;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .floating-consultation {
        bottom: 20px;
        right: 20px;
    }
    
    .consultation-icon {
        width: 55px;
        height: 55px;
        font-size: 24px;
    }
    
    .consultation-text {
        font-size: 14px;
        padding: 0 15px 0 8px;
    }
    
    .floating-consultation::before {
        width: 55px;
        height: 55px;
        left: 27.5px;
    }
}

@media (max-width: 480px) {
    .floating-consultation {
        bottom: 15px;
        right: 15px;
    }
    
    .consultation-icon {
        width: 50px;
        height: 50px;
        font-size: 22px;
    }
    
    .consultation-text {
        font-size: 13px;
        padding: 0 12px 0 6px;
    }
    
    .floating-consultation::before {
        width: 50px;
        height: 50px;
        left: 25px;
    }
}

/* Animasi masuk saat halaman dimuat */
.floating-consultation {
    animation: slideInRight 1s ease-out, bounce 2s infinite 1s;
}

@keyframes slideInRight {
    from {
        transform: translateX(100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>