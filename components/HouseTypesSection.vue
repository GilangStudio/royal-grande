<!-- components/HouseTypesSection.vue -->
<template>
    <div>
        <!-- Section Title -->
        <section id="residences" class="elementor-section section-title-container">
            <div class="elementor-container" style="flex:1;">
                <h2>tipe rumah</h2>
            </div>
            <div class="elementor-container" style="flex:1;">
                <p>Rasakan ketenangan, keamanan, dan kemewahan dalam satu kawasan terpadu</p>
            </div>
        </section>

        <!-- Tabs Content -->
        <section class="elementor-section">
            <div class="tabs-container">
                <div class="tabs-nav">
                    <button v-for="tab in houseTypes" :key="tab.id"
                        :class="['tab-link', { active: activeTab === tab.id }]" @click="setActiveTab(tab.id)">
                        {{ tab.name }}
                    </button>
                </div>

                <div class="tabs-content">
                    <div v-for="tab in houseTypes" :key="tab.id" :id="tab.id"
                        :class="['tab-pane', { active: activeTab === tab.id }]">
                        <div class="tab-content-layout">
                            <div class="image-container">
                                <img :src="tab.image" :alt="`Tipe ${tab.name}`">
                            </div>
                            <div class="specs-container">
                                <div class="specs-header">
                                    <h3>{{ tab.name }}</h3>
                                    <span class="type-badge">{{ tab.type }}</span>
                                </div>
                                <div class="specs-icons">
                                    <div class="spec-item" v-if="tab.bathrooms">
                                        <img src="/images/ic-kamar-mandi.svg"
                                            alt="Kamar Mandi">
                                        <span>{{ tab.bathrooms }}</span>
                                    </div>
                                    <div class="spec-item" v-if="tab.bedrooms">
                                        <img src="/images/ic-kamar-tidur.svg"
                                            alt="Kamar Tidur">
                                        <span>{{ tab.bedrooms }}</span>
                                    </div>
                                    <div class="spec-item">
                                        <img src="/images/icon-lb.svg"
                                            alt="Luas Bangunan">
                                        <span>{{ tab.buildingArea }}</span>
                                    </div>
                                    <div class="spec-item">
                                        <img src="/images/icon-lt.svg"
                                            alt="Luas Tanah">
                                        <span>{{ tab.landArea }}</span>
                                    </div>
                                </div>
                                <div class="specs-details">
                                    <div class="column">
                                        <div v-for="detail in tab.details.column1" :key="detail" class="detail-item">
                                            <img src="/images/all-done.svg"
                                                alt="check icon">
                                            <p>{{ detail }}</p>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div v-for="detail in tab.details.column2" :key="detail" class="detail-item">
                                            <img src="/images/all-done.svg"
                                                alt="check icon">
                                            <p>{{ detail }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
  <script>
export default {
    data() {
        return {
            activeTab: 'ecstatic',
            houseTypes: [
                {
                    id: 'ecstatic',
                    name: 'ECSTATIC',
                    type: 'Tipe 85/84',
                    image: '/images/ecstatic-dt.png',
                    bathrooms: 2,
                    bedrooms: 2,
                    buildingArea: 'LB 85+30',
                    landArea: 'LT 84',
                    details: {
                        column1: [
                            'Pondasi: Tapak Beton',
                            'Lantai : Gramiks 60x60',
                            'Dinding : Batu Bata',
                            'Plafond : Gypsum Board',
                            'Rangka Plafond : Hollow Galvalum',
                            'Atap : Genteng Beton / Setara',
                            'Rangka Atap : Baja Ringan Ex Tasso / setara'
                        ],
                        column2: [
                            'Sanitair : Closet Duduk Enchanting',
                            'Pintu : Engineering door /setara',
                            'Kusen : Alumunium Alexindo / setara',
                            'Cat : Dulux / setara',
                            'Carport : Rabat Beton + Keramik',
                            'Air : PDAM',
                            'Listrik 2200 W'
                        ]
                    }
                },
                {
                    id: 'prosperity',
                    name: 'PROSPERITY',
                    type: 'Tipe 69/104',
                    image: '/images/Frame-290-scaled.webp',
                    bathrooms: 1,
                    bedrooms: 3,
                    buildingArea: 'LB 69',
                    landArea: 'LT 104',
                    details: {
                        column1: [
                            'Pondasi: Tapak Beton',
                            'Lantai : Gramiks 60x60',
                            'Dinding : Batu Bata',
                            'Plafond : Gypsum Board',
                            'Rangka Plafond : Hollow Galvalum',
                            'Atap : Genteng Beton / Setara',
                            'Rangka Atap : Baja Ringan Ex Tasso / setara'
                        ],
                        column2: [
                            'Sanitair : Closet Duduk Europe Enchanting',
                            'Pintu : Engineering door /setara',
                            'Kusen : Alumunium Alexindo / setara',
                            'Cat : Nippon Paint / setara',
                            'Carport : Rabat Beton + Keramik',
                            'Air : PDAM',
                            'Listrik : 1300 W'
                        ]
                    }
                },
                {
                    id: 'serenity',
                    name: 'SERENITY',
                    type: 'Tipe 59/91',
                    image: '/images/Frame-292-scaled.webp',
                    bathrooms: 1,
                    bedrooms: 2,
                    buildingArea: 'LB 59',
                    landArea: 'LT 91',
                    details: {
                        column1: [
                            'Pondasi: Tapak Beton',
                            'Lantai : Gramiks 60x60',
                            'Dinding : Batu Bata',
                            'Plafond : Gypsum Board',
                            'Rangka Plafond : Hollow Galvalum',
                            'Atap : Genteng Beton / Setara',
                            'Rangka Atap : Baja Ringan Ex Tasso / setara'
                        ],
                        column2: [
                            'Sanitair : Closet Duduk Europe Enchanting',
                            'Pintu : Engineering door /setara',
                            'Kusen : Alumunium Alexindo / setara',
                            'Cat : Nippon Paint / setara',
                            'Carport : Rabat Beton + Keramik',
                            'Air : PDAM',
                            'Listrik : 1300 W'
                        ]
                    }
                },
                {
                    id: 'harmony',
                    name: 'HARMONY',
                    type: 'Tipe 49/78',
                    image: '/images/Frame-291-scaled.webp',
                    bathrooms: 1,
                    bedrooms: 2,
                    buildingArea: 'LB 49',
                    landArea: 'LT 78',
                    details: {
                        column1: [
                            'Pondasi: Tapak Beton',
                            'Lantai : Gramiks 60x60',
                            'Dinding : Batu Bata',
                            'Plafond : Gypsum Board',
                            'Rangka Plafond : Hollow Galvalum',
                            'Atap : Genteng Beton / Setara',
                            'Rangka Atap : Baja Ringan Ex Tasso / setara'
                        ],
                        column2: [
                            'Sanitair : Closet Duduk Europe Enchanting',
                            'Pintu : Engineering door /setara',
                            'Kusen : Alumunium Alexindo / setara',
                            'Cat : Nippon Paint / setara',
                            'Carport : Rabat Beton + Keramik',
                            'Air : PDAM',
                            'Listrik : 1300 W'
                        ]
                    }
                },
                {
                    id: 'lucky',
                    name: 'LUCKY',
                    type: 'Tipe 39/72',
                    image: '/images/dt-lucky.png',
                    bathrooms: 1,
                    bedrooms: 2,
                    buildingArea: 'LB 39',
                    landArea: 'LT 72',
                    details: {
                        column1: [
                            'Pondasi: Tapak Beton',
                            'Lantai : Gramiks 60x60',
                            'Dinding : Batu Bata',
                            'Plafond : Gypsum Board',
                            'Rangka Plafond : Hollow Galvalum',
                            'Atap : Genteng Beton / Setara',
                            'Rangka Atap : Baja Ringan Ex Tasso / setara'
                        ],
                        column2: [
                            'Sanitair : Closet Duduk Europe Enchanting',
                            'Pintu : Engineering door /setara',
                            'Kusen : Alumunium Alexindo / setara',
                            'Cat : Nippon Paint / setara',
                            'Carport : Rabat Beton + Keramik',
                            'Air : PDAM',
                            'Listrik : 1300 W'
                        ]
                    }
                },
                {
                    id: 'ruko',
                    name: 'RUKO',
                    type: 'Ruko 100/75',
                    image: '/images/ruko-scaled.webp',
                    bathrooms: null,
                    bedrooms: null,
                    buildingArea: 'LB 100',
                    landArea: 'LT 75',
                    details: {
                        column1: [
                            'Pondasi: Tapak Beton',
                            'Lantai : Gramiks 60x60',
                            'Dinding : Batu Bata',
                            'Plafond : Gypsum Board',
                            'Rangka Plafond : Hollow Galvalum',
                            'Atap : Genteng Beton / Setara',
                            'Rangka Atap : Baja Ringan Ex Tasso / setara'
                        ],
                        column2: [
                            'Sanitair : Closet Duduk Europe Enchanting',
                            'Pintu : Engineering door /setara',
                            'Kusen : Alumunium Alexindo / setara',
                            'Cat : Nippon Paint / setara',
                            'Carport : Rabat Beton + Keramik',
                            'Air : PDAM',
                            'Listrik 2200 W'
                        ]
                    }
                }
            ]
        }
    },
    methods: {
        setActiveTab(tabId) {
            this.activeTab = tabId
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

.tabs-container {
    width: 100%;
}

.tabs-nav {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 36px;
    flex-wrap: wrap;
}

.tabs-nav button {
    background-color: #f1e9cd;
    color: var(--color-primary);
    border: none;
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
    font-family: var(--font-secondary);
    font-weight: 700;
    font-size: 16px;
    transition: all 0.3s ease;
}

.tabs-nav button.active {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.tab-pane {
    display: none;
}

.tab-pane.active {
    display: block;
}

.tab-content-layout {
    display: flex;
    gap: 50px;
    padding: 0 100px;
    align-items: flex-start;
}

.tab-content-layout .image-container {
    flex: 1;
}

.tab-content-layout .image-container img {
    width: 100%;
    height: auto;
}

.tab-content-layout .specs-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.tab-content-layout .specs-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tab-content-layout .specs-header h3 {
    font-family: var(--font-primary);
    font-size: 36px;
    letter-spacing: -2px;
    margin: 0;
}

.tab-content-layout .specs-header .type-badge {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 500;
}

.specs-icons {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.specs-icons .spec-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.specs-icons .spec-item img {
    width: 40px;
    height: 40px;
}

.specs-icons .spec-item span {
    font-size: 24px;
    font-weight: 700;
}

.specs-details {
    display: flex;
    gap: 16px;
}

.specs-details .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.specs-details .detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.specs-details .detail-item img {
    width: 24px;
    height: 24px;
}

.specs-details .detail-item p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
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

    .tab-content-layout {
        flex-direction: column;
        padding: 0 20px;
    }
}

@media (max-width: 767px) {
    .specs-icons {
        justify-content: space-around;
    }

    .specs-details {
        flex-direction: column;
    }

    .tabs-nav button {
        font-size: 14px;
        padding: 8px 12px;
    }
}
</style>