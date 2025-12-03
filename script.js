// ...existing code...

// Efeito de animação ao scroll para a seção "Como Funciona"
document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.circuit-step');
  
  if (steps.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
        }
      });
    }, { threshold: 0.1 });

    steps.forEach((step, index) => {
      observer.observe(step);
    });
  }
});

// ...existing code...

// Revela CTA com animação ao entrar na viewport
document.addEventListener('DOMContentLoaded', function() {
  const ctaInner = document.querySelector('.cta-inner');
  if (ctaInner) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) ctaInner.classList.add('in-view');
      });
    }, { threshold: 0.15 });
    io.observe(ctaInner);
  }
});