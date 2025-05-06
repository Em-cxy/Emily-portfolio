import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my achievements, education, and experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <script
            dangerouslySetInnerHTML={{
              __html: `
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Improved Carousel functionality
  function setupCarousels() {
    const carousels = document.querySelectorAll('.carousel-track');
    
    carousels.forEach(carousel => {
      const carouselId = carousel.id;
      const items = carousel.querySelectorAll('.carousel-item');
      const totalItems = items.length;
      let currentIndex = 0;
      
      // Calculate item width based on current viewport
      function getItemWidth() {
        if (items.length > 0) {
          const firstItem = items[0];
          return firstItem.offsetWidth;
        }
        return 0;
      }
      
      // Update carousel position
      function updateCarouselPosition() {
        const itemWidth = getItemWidth();
        carousel.style.transform = \`translateX(-\${currentIndex * itemWidth}px)\`;
        
        // Update active dot
        document.querySelectorAll(\`.carousel-dot[data-carousel="\${carouselId}"]\`).forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('bg-white/70');
            dot.classList.remove('bg-white/30');
          } else {
            dot.classList.add('bg-white/30');
            dot.classList.remove('bg-white/70');
          }
        });
      }
      
      // Next slide
      function nextSlide() {
        if (currentIndex < totalItems - 1) {
          currentIndex++;
        } else {
          currentIndex = 0; // Loop back to first slide
        }
        updateCarouselPosition();
      }
      
      // Previous slide
      function prevSlide() {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = totalItems - 1; // Loop to last slide
        }
        updateCarouselPosition();
      }
      
      // Set up next buttons
      const nextButtons = document.querySelectorAll(\`.carousel-next[data-carousel="\${carouselId}"]\`);
      nextButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          nextSlide();
        });
      });
      
      // Set up prev buttons
      const prevButtons = document.querySelectorAll(\`.carousel-prev[data-carousel="\${carouselId}"]\`);
      prevButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          prevSlide();
        });
      });
      
      // Set up dots
      const dots = document.querySelectorAll(\`.carousel-dot[data-carousel="\${carouselId}"]\`);
      dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          currentIndex = index;
          updateCarouselPosition();
        });
      });
      
      // Initialize first slide
      updateCarouselPosition();
      
      // Add touch support for mobile
      let touchStartX = 0;
      let touchEndX = 0;
      
      carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      
      carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });
      
      function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
          // Swipe left - go to next slide
          nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
          // Swipe right - go to previous slide
          prevSlide();
        }
      }
    });
  }
  
  // Initialize carousels after a short delay to ensure DOM is fully loaded
  setTimeout(setupCarousels, 500);
  
  // Update carousel on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupCarousels, 250);
  });
});
`,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
