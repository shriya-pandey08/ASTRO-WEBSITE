document.addEventListener('DOMContentLoaded', function() {
  // Initialize Typed.js
  var typed = new Typed(".element", {
    strings: ["डॉ. संजय पंत", "आयुर्वेद प्राकृतिक चिकित्सक", "ज्योतिषाचार्य"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // Gallery Image Enlargement
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      if (item.classList.contains('large')) {
        item.classList.remove('large');
      } else {
        // Remove 'large' class from all items
        galleryItems.forEach(otherItem => {
          otherItem.classList.remove('large');
        });
        // Add 'large' class to the clicked item
        item.classList.add('large');
      }
    });

    // Optional: Hover effect to enlarge image
    item.addEventListener('mouseover', function() {
      item.classList.add('large');
    });

    item.addEventListener('mouseout', function() {
      item.classList.remove('large');
    });
  });
});



  