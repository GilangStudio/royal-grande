<!-- components/AppFooter.vue -->
<template>
  <footer class="elementor-section footer-section">
    <div class="elementor-container logo-container">
      <img src="/images/logo-royal-grande.png" alt="Logo Royal Grande">
    </div>
    <div class="elementor-container copyright-container justify-content-end">
      <p>Copyright © 2025 Royal Grande Residences - All Right Reserved</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  padding: 100px 100px;
  justify-content: space-between;
  align-items: center;
}

.footer-section .logo-container {
  width: 33.333%;
}

.footer-section .logo-container img {
  width: 150px;
}

.footer-section .copyright-container {
  width: 66.666%;
  text-align: right;
}

.footer-section .copyright-container p {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .footer-section { 
    flex-direction: column; 
    gap: 20px; 
    text-align: center; 
    padding: 50px 20px; 
  }
  
  .footer-section .logo-container, 
  .footer-section .copyright-container { 
    width: 100%; 
    text-align: center; 
  }
  
  .footer-section .logo-container img {
    width: 120px;
  }
}

@media (max-width: 767px) {
  .footer-section {
    flex-direction: row;
    padding: 30px 15px;
    gap: 15px;
  }
  
  .footer-section .logo-container img {
    width: 100px;
  }
  
  .footer-section .copyright-container p {
    font-size: 12px;
    line-height: 1.4;
    text-align: end;
  }
}

@media (max-width: 480px) {
  .footer-section {
    padding: 25px 10px;
    gap: 12px;
  }
  
  .footer-section .logo-container img {
    width: 80px;
  }
  
  .footer-section .copyright-container p {
    font-size: 11px;
    line-height: 1.3;
    padding: 0 5px;
  }
}
</style>