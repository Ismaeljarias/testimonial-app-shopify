/**
 * Testimonials Slider - Minimal JavaScript
 * Features: scroll snap navigation, gooey indicators, a11y support
 */

class TestimonialsSlider {
  constructor(element) {
    this.slider = element;
    this.track = this.slider.querySelector('.testimonials-track');
    this.cards = Array.from(this.slider.querySelectorAll('.testimonial-card'));
    this.prevBtn = this.slider.querySelector('[data-nav="prev"]');
    this.nextBtn = this.slider.querySelector('[data-nav="next"]');
    this.indicatorsWrapper = this.slider.querySelector('[data-indicators]');
    
    this.currentIndex = 0;
    this.autoplayInterval = null;
    this.autoplayDelay = 5000;
    
    // Respect reduced motion preference
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (this.cards.length === 0) return;
    
    this.init();
  }

  init() {
    this.createIndicators();
    this.attachEventListeners();
    this.updateIndicators();
    
    // Start autoplay if motion is not reduced
    if (!this.prefersReducedMotion) {
      this.startAutoplay();
    }
  }

  createIndicators() {
    this.cards.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'indicator-dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
      dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      dot.dataset.index = index;
      
      dot.addEventListener('click', () => {
        this.goToSlide(index);
        this.stopAutoplay();
      });
      
      this.indicatorsWrapper.appendChild(dot);
    });
    
    this.indicators = Array.from(this.indicatorsWrapper.querySelectorAll('.indicator-dot'));
  }

  attachEventListeners() {
    // Navigation buttons
    this.prevBtn?.addEventListener('click', () => {
      this.prev();
      this.stopAutoplay();
    });
    
    this.nextBtn?.addEventListener('click', () => {
      this.next();
      this.stopAutoplay();
    });

    // Keyboard navigation
    this.slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prev();
        this.stopAutoplay();
      } else if (e.key === 'ArrowRight') {
        this.next();
        this.stopAutoplay();
      }
    });

    // Observe scroll position for manual scrolling
    let scrollTimeout;
    this.track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.updateCurrentIndex();
        this.updateIndicators();
      }, 150);
    }, { passive: true });

    // Pause autoplay on hover/focus
    this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
    this.slider.addEventListener('mouseleave', () => {
      if (!this.prefersReducedMotion) this.startAutoplay();
    });
    
    this.slider.addEventListener('focusin', () => this.stopAutoplay());
    this.slider.addEventListener('focusout', () => {
      if (!this.prefersReducedMotion) this.startAutoplay();
    });

    // Handle visibility change (pause when tab hidden)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopAutoplay();
      } else if (!this.prefersReducedMotion) {
        this.startAutoplay();
      }
    });
  }

  updateCurrentIndex() {
    const scrollLeft = this.track.scrollLeft;
    const cardWidth = this.cards[0].offsetWidth;
    this.currentIndex = Math.round(scrollLeft / cardWidth);
  }

  goToSlide(index) {
    if (index < 0 || index >= this.cards.length) return;
    
    this.currentIndex = index;
    const cardWidth = this.cards[0].offsetWidth;
    
    this.track.scrollTo({
      left: cardWidth * index,
      behavior: this.prefersReducedMotion ? 'auto' : 'smooth'
    });
    
    this.updateIndicators();
  }

  prev() {
    const newIndex = this.currentIndex === 0 ? this.cards.length - 1 : this.currentIndex - 1;
    this.goToSlide(newIndex);
  }

  next() {
    const newIndex = this.currentIndex === this.cards.length - 1 ? 0 : this.currentIndex + 1;
    this.goToSlide(newIndex);
  }

  updateIndicators() {
    this.indicators.forEach((dot, index) => {
      const isActive = index === this.currentIndex;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Initialize all sliders on the page
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('[data-testimonials-slider]');
  sliders.forEach(slider => new TestimonialsSlider(slider));
});

// Re-initialize on Shopify section/block load (theme editor)
if (window.Shopify?.designMode) {
  document.addEventListener('shopify:section:load', () => {
    const sliders = document.querySelectorAll('[data-testimonials-slider]');
    sliders.forEach(slider => new TestimonialsSlider(slider));
  });
}
