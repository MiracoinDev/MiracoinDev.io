document.addEventListener('DOMContentLoaded', function() {
    // Наблюдатель для плавного появления контент-секций
    const sections = document.querySelectorAll('.content-section');
    const observerOptions = { threshold: 0.2 };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    sections.forEach(section => observer.observe(section));
  
    // Скрытие навигации при прокрутке
    let lastScrollTop = 0;
    const nav = document.getElementById('fixedNav');
  
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 70) {
        // Скроллим вниз — скрываем навигацию
        nav.classList.add('nav-hidden');
      } else {
        // Скроллим вверх — показываем навигацию
        nav.classList.remove('nav-hidden');
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  });
  