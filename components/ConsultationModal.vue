<template>
    <div>
        <!-- Modal Form -->
        <div v-if="isVisible" class="modal-overlay" @click="closeModal">
            <div class="modal-container" @click.stop>
                <div class="modal-header">
                    <h2>Booking Now</h2>
                    <button class="modal-close" @click="closeModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-content">
                    <!-- <div class="modal-image">
                        <img src="/images/konsultasi-gratis-img.png" alt="Booking Now dengan Sales">
                    </div> -->
                    <div class="modal-form">
                        <form @submit.prevent="submitForm">
                            <div class="form-field">
                                <label for="modal-name">Nama</label>
                                <input type="text" id="modal-name" v-model="form.name" placeholder="Cth. Johnson" required>
                            </div>
                            <div class="form-field">
                                <label for="modal-phone">Phone</label>
                                <input type="tel" id="modal-phone" v-model="form.phone" placeholder="Cth. 08123456789"
                                    pattern="08[0-9]{7,11}" minlength="9" maxlength="13" required>
                                <small v-if="phoneError" class="error-text">{{ phoneError }}</small>
                            </div>

                            <div class="form-field">
                                <label for="modal-province">Provinsi</label>
                                <select id="modal-province" v-model="form.province_id" @change="onProvinceChange" required>
                                    <option value="">Pilih Provinsi</option>
                                    <option v-for="province in provinces" :key="province.id" :value="province.id">
                                        {{ province.province }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-field" v-show="form.province_id">
                                <label for="modal-city">Kota/Kabupaten</label>
                                <select id="modal-city" v-model="form.city_id" @change="onCityChange"
                                    :disabled="!form.province_id || loadingCities" required>
                                    <option value="">{{ loadingCities ? 'Loading...' : 'Pilih Kota/Kabupaten' }}</option>
                                    <option v-for="city in cities" :key="city.id" :value="city.id">
                                        {{ city.city }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-field" v-show="form.city_id">
                                <label for="modal-district">Kecamatan (Opsional)</label>
                                <select id="modal-district" v-model="form.district_id" @change="onDistrictChange"
                                    :disabled="!form.city_id || loadingDistricts">
                                    <option value="">{{ loadingDistricts ? 'Loading...' : 'Pilih Kecamatan' }}</option>
                                    <option v-for="district in districts" :key="district.id" :value="district.id">
                                        {{ district.kecamatan }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-field" v-show="form.district_id">
                                <label for="modal-subdistrict">Kelurahan/Desa (Opsional)</label>
                                <select id="modal-subdistrict" v-model="form.subdistrict_id"
                                    :disabled="!form.district_id || loadingSubdistricts">
                                    <option value="">{{ loadingSubdistricts ? 'Loading...' : 'Pilih Kelurahan/Desa' }}</option>
                                    <option v-for="subdistrict in subdistricts" :key="subdistrict.id" :value="subdistrict.id">
                                        {{ subdistrict.kelurahan }}
                                    </option>
                                </select>
                            </div>

                            <button type="submit" :disabled="isSubmitting" @click="trackLeadEvent">
                                {{ isSubmitting ? 'Mengirim...' : 'Kirim' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Notification Modal -->
        <div v-if="showNotification" class="notification-overlay" @click="hideNotification">
            <div class="notification-modal" :class="notificationType" @click.stop>
                <div class="notification-icon">
                    <i v-if="notificationType === 'success'" class="fas fa-check-circle"></i>
                    <i v-if="notificationType === 'error'" class="fas fa-exclamation-circle"></i>
                </div>
                <div class="notification-content">
                    <h3>{{ notificationType === 'success' ? 'Berhasil!' : 'Oops!' }}</h3>
                    <p>{{ notificationMessage }}</p>
                </div>
                <button class="notification-close" @click="hideNotification">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
        salesData: {
            type: Object,
            default: null
        }
    },
    emits: ['close'],
    data() {
        return {
            form: {
                name: '',
                phone: '',
                province_id: '',
                city_id: '',
                district_id: '',
                subdistrict_id: ''
            },
            provinces: [],
            cities: [],
            districts: [],
            subdistricts: [],
            loadingCities: false,
            loadingDistricts: false,
            loadingSubdistricts: false,
            isSubmitting: false,
            phoneError: '',
            urlParams: {
                full_path_ref: '',
                utm_campaign: '',
                utm_medium: '',
                utm_source: ''
            },
            showNotification: false,
            notificationMessage: '',
            notificationType: 'success'
        }
    },
    async mounted() {
        this.extractUrlParams()
        await this.fetchProvinces()
    },
    methods: {
          trackLeadEvent() {

            const currency = document.querySelector('meta[name="currency"]')?.content || 'IDR';
            const value = parseFloat(document.querySelector('meta[name="price"]')?.content || '0');

            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead Form', {
                    cs_est: true,
                    currency: currency,
                    value: value
                });
            }
            if (typeof gtag !== 'undefined') {
                gtag('event', 'generate_lead', {
                    currency: currency,
                    value: value,
                    lead_source: 'whatsapp_widget',
                    content_name: 'Royal Grande Residence',
                    custom_parameter_1: 'cs_est_true'
                });
            }
        },
        closeModal() {
            this.$emit('close')
        },
        extractUrlParams() {
            if (process.client) {
                const url = new URL(window.location.href)
                const searchParams = url.searchParams
                
                this.urlParams = {
                    full_path_ref: url.href,
                    utm_campaign: searchParams.get('utm_campaign') || '',
                    utm_medium: searchParams.get('utm_medium') || '',
                    utm_source: searchParams.get('utm_source') || ''
                }
            }
        },
        showSuccessNotification(message) {
            this.notificationMessage = message
            this.notificationType = 'success'
            this.showNotification = true
            setTimeout(() => this.hideNotification(), 5000)
        },
        showErrorNotification(message) {
            this.notificationMessage = message
            this.notificationType = 'error'
            this.showNotification = true
            setTimeout(() => this.hideNotification(), 5000)
        },
        hideNotification() {
            this.showNotification = false
            setTimeout(() => this.notificationMessage = '', 300)
        },
        async fetchProvinces() {
            try {
                const response = await fetch('https://crm.exanara.id/api/province')
                const provinces = await response.json()

                this.provinces = provinces.sort((a, b) => {
                    if (a.id === 3) return -1
                    if (b.id === 3) return 1
                    return a.province.localeCompare(b.province)
                })
            } catch (error) {
                console.error('Error fetching provinces:', error)
                this.showErrorNotification('Gagal memuat data provinsi. Silakan refresh halaman.')
            }
        },
        async onProvinceChange() {
            this.form.city_id = ''
            this.form.district_id = ''
            this.form.subdistrict_id = ''
            this.cities = []
            this.districts = []
            this.subdistricts = []

            if (!this.form.province_id) return

            this.loadingCities = true
            try {
                const response = await fetch(`https://crm.exanara.id/api/city/${this.form.province_id}`)
                this.cities = await response.json()
            } catch (error) {
                console.error('Error fetching cities:', error)
                this.showErrorNotification('Gagal memuat data kota. Silakan coba lagi.')
            } finally {
                this.loadingCities = false
            }
        },
        async onCityChange() {
            this.form.district_id = ''
            this.form.subdistrict_id = ''
            this.districts = []
            this.subdistricts = []

            if (!this.form.city_id) return

            this.loadingDistricts = true
            try {
                const response = await fetch(`https://crm.exanara.id/api/getkecamatan/${this.form.city_id}`)
                this.districts = await response.json()
            } catch (error) {
                console.error('Error fetching districts:', error)
                this.showErrorNotification('Gagal memuat data kecamatan. Silakan coba lagi.')
            } finally {
                this.loadingDistricts = false
            }
        },
        async onDistrictChange() {
            this.form.subdistrict_id = ''
            this.subdistricts = []

            if (!this.form.district_id) return

            this.loadingSubdistricts = true
            try {
                const response = await fetch(`https://crm.exanara.id/api/getkelurahan/${this.form.district_id}`)
                this.subdistricts = await response.json()
            } catch (error) {
                console.error('Error fetching subdistricts:', error)
                this.showErrorNotification('Gagal memuat data kelurahan. Silakan coba lagi.')
            } finally {
                this.loadingSubdistricts = false
            }
        },
        validatePhone() {
            const phone = this.form.phone
            this.phoneError = ''

            if (!phone) {
                this.phoneError = 'Nomor telepon wajib diisi'
                return false
            }

            if (!phone.startsWith('08')) {
                this.phoneError = 'Nomor telepon harus dimulai dengan 08'
                return false
            }

            if (phone.length < 9 || phone.length > 13) {
                this.phoneError = 'Nomor telepon harus antara 9-13 digit'
                return false
            }

            if (!/^08[0-9]+$/.test(phone)) {
                this.phoneError = 'Nomor telepon hanya boleh berisi angka'
                return false
            }

            return true
        },
        async submitForm() {
            if (!this.validatePhone()) {
                return
            }

            this.isSubmitting = true

            try {
                const response = await fetch('https://crm.exanara.id/api/prospect/website', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sales_id: this.salesData ? this.salesData.id : null,
                        project_id: 48,
                        nama_prospect: this.form.name,
                        hp: this.form.phone,
                        province_id: parseInt(this.form.province_id),
                        city_id: parseInt(this.form.city_id),
                        district_id: parseInt(this.form.district_id),
                        subdistrict_id: parseInt(this.form.subdistrict_id),
                        full_path_ref: this.urlParams.full_path_ref,
                        utm_campaign: this.urlParams.utm_campaign,
                        utm_medium: this.urlParams.utm_medium,
                        utm_source: this.urlParams.utm_source
                    })
                })

                response.json().then(data => {
                    if (data?.meta?.status === 'success') {
                        this.showSuccessNotification('Terima kasih! Data Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda.')

                        // Reset form dan tutup modal
                        this.form = {
                            name: '',
                            phone: '',
                            province_id: '',
                            city_id: '',
                            district_id: '',
                            subdistrict_id: ''
                        }
                        this.cities = []
                        this.districts = []
                        this.subdistricts = []
                        this.closeModal()
                    } else {
                        this.showErrorNotification(data?.meta?.message || 'Terjadi kesalahan saat mengirim data.')
                    }
                })
            } catch (error) {
                console.error('Error submitting form:', error)
                this.showErrorNotification('Terjadi kesalahan saat mengirim data. Silakan coba lagi.')
            } finally {
                this.isSubmitting = false
            }
        }
    },
    watch: {
        'form.phone'() {
            if (this.phoneError) {
                this.validatePhone()
            }
        }
    }
}
</script>

<style scoped>
/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease;
}

.modal-container {
    background: white;
    border-radius: 20px;
    max-width: 900px;
    width: 40%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 1px solid #eee;
}

.modal-header h2 {
    font-family: var(--font-primary);
    font-size: 32px;
    letter-spacing: -2px;
    text-transform: capitalize;
    margin: 0;
}

.modal-close {
    background: none;
    border: none;
    font-size: 24px;
    color: #999;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.modal-close:hover {
    background-color: #f5f5f5;
    color: #333;
}

.modal-content {
    display: flex;
    padding: 30px;
    gap: 30px;
}

.modal-image {
    flex: 1;
}

.modal-image img {
    width: 100%;
    height: auto;
    border-radius: 12px;
}

.modal-form {
    flex: 1;
}

.modal-form form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-field {
    display: flex;
    flex-direction: column;
}

.form-field label {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 10px;
}

.form-field input,
.form-field select {
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #E2E2E2;
    font-family: var(--font-secondary);
    font-size: 14px;
}

.form-field select:disabled {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
}

.modal-form button[type="submit"] {
    background-color: var(--color-primary);
    color: white;
    padding: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
}

.modal-form button[type="submit"]:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.modal-form button[type="submit"]:hover:not(:disabled) {
    opacity: 0.9;
    transition: opacity 0.3s;
}

.error-text {
    color: #e74c3c;
    font-size: 12px;
    margin-top: 5px;
}

/* Notification Styles */
.notification-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.notification-modal {
  background: white;
  border-radius: 20px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  text-align: center;
}

.notification-modal.success {
  border-top: 4px solid #27AE60;
}

.notification-modal.error {
  border-top: 4px solid #E74C3C;
}

.notification-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.notification-modal.success .notification-icon {
  color: #27AE60;
}

.notification-modal.error .notification-icon {
  color: #E74C3C;
}

.notification-content h3 {
  font-family: var(--font-primary);
  font-size: 24px;
  margin: 0 0 15px 0;
  color: var(--color-text);
}

.notification-content p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}

.notification-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.notification-close:hover {
  background-color: #f5f5f5;
  color: #333;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
    .modal-container {
        width: 60%;
        margin: 20px
    }

    .modal-content {
        flex-direction: column;
        padding: 20px;
    }

    .modal-header h2 {
        font-size: 24px;
    }
}

@media (max-width: 768px) {
    .modal-container {
        width: 90%;
        margin: 20px;
        max-height: 85vh;
    }

    .modal-header {
        padding: 15px 20px;
    }

    .modal-content {
        padding: 15px;
    }

    .notification-modal {
        padding: 20px;
        margin: 20px;
    }
}
</style>