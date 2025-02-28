// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
document.addEventListener("DOMContentLoaded", function() {
    const navText = document.querySelector(".navtext");
    
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        navText.classList.add("hidden");
      } else {
        navText.classList.remove("hidden");
      }
    });
  });