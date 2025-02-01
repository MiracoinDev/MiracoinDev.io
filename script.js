document.addEventListener('DOMContentLoaded', function() {
    // Наблюдатель для плавного появления контент-секций
    const sections = document.querySelectorAll('.content-section');
    const observerOptions = {
      threshold: 0.2
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    sections.forEach(section => observer.observe(section));
  
    // Изменение фона навигации при прокрутке
    const nav = document.querySelector('.fixed-nav');
    window.addEventListener('scroll', function() {
      nav.style.background = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)';
    });
  });
  