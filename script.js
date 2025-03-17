  const items = document.querySelectorAll(".accordion button");
  
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach(item => item.addEventListener('click', toggleAccordion));
  
  




      // JavaScript to handle custom dropdown
      const dropdownButton = document.querySelector('.dropdown-button');
      const dropdownContent = document.querySelector('.dropdown-content');
      const realSelect = document.getElementById('real-select');
  
      // Toggle dropdown visibility
      dropdownButton.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      });
  
      // Handle option selection
      dropdownContent.querySelectorAll('div').forEach(option => {
        option.addEventListener('click', () => {
          const value = option.getAttribute('data-value');
          const text = option.textContent;
  
          // Update the hidden <select> element
          realSelect.value = value;
  
          // Update the dropdown button text
          dropdownButton.textContent = text;
  
          // Hide the dropdown
          dropdownContent.style.display = 'none';
        });
      });
  
      // Close dropdown when clicking outside
      window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-button')) {
          dropdownContent.style.display = 'none';
        }
      });
  
  
  
      // JavaScript to handle custom dropdown
      const dropdownButton1 = document.querySelector('.dropdown-button1');
      const dropdownContent1 = document.querySelector('.dropdown-content1');
      const realSelect1 = document.getElementById('real-select1');
  
      // Toggle dropdown visibility
      dropdownButton1.addEventListener('click', () => {
        dropdownContent1.style.display = dropdownContent1.style.display === 'block' ? 'none' : 'block';
      });
  
      // Handle option selection
      dropdownContent1.querySelectorAll('div').forEach(option => {
        option.addEventListener('click', () => {
          const value = option.getAttribute('data-value');
          const text = option.textContent;
  
          // Update the hidden <select> element
          realSelect1.value = value;
  
          // Update the dropdown button text
          dropdownButton1.textContent = text;
  
          // Hide the dropdown
          dropdownContent1.style.display = 'none';
        });
      });
  
      // Close dropdown when clicking outside
      window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-button1')) {
          dropdownContent1.style.display = 'none';
        }
      });
  
  
          // JavaScript to handle custom dropdown
          const dropdownButton2 = document.querySelector('.dropdown-button2');
          const dropdownContent2 = document.querySelector('.dropdown-content2');
          const realSelect2 = document.getElementById('real-select2');
      
          // Toggle dropdown visibility
          dropdownButton2.addEventListener('click', () => {
            dropdownContent2.style.display = dropdownContent2.style.display === 'block' ? 'none' : 'block';
          });
      
          // Handle option selection
          dropdownContent2.querySelectorAll('div').forEach(option => {
            option.addEventListener('click', () => {
              const value = option.getAttribute('data-value');
              const text = option.textContent;
      
              // Update the hidden <select> element
              realSelect2.value = value;
      
              // Update the dropdown button text
              dropdownButton2.textContent = text;
      
              // Hide the dropdown
              dropdownContent2.style.display = 'none';
            });
          });
      
          // Close dropdown when clicking outside
          window.addEventListener('click', (event) => {
            if (!event.target.matches('.dropdown-button2')) {
              dropdownContent2.style.display = 'none';
            }
          });
  
  
  
  
  
  
  
  

  
  


//           <!DOCTYPE html>
// <html>
// <head>
// <style>
// .carousel-container {
//   width: 100%;
//   overflow: hidden;
//   padding: 20px 0;
// }

// .marquee {
//   display: flex;
//   animation: scroll 10s linear infinite;
// }

// .marquee.paused {
//   animation-play-state: paused;
// }

// .image-wrapper {
//   position: relative;
//   height: 300px;
//   margin: 0 10px;
//   transition: z-index 0.3s;
//   z-index: 0;
// }

// .image-wrapper img {
//   width: 300px;
//   height: 300px;
//   object-fit: cover;
//   transition: transform 0.3s ease;
//   cursor: pointer;
// }

// .image-wrapper:hover img {
//   transform: scale(1.2);
// }

// .image-wrapper:hover {
//   z-index: 1;
// }

// @keyframes scroll {
//   from { transform: translateX(0); }
//   to { transform: translateX(-330%); }
// }
// </style>
// </head>
// <body>
//   <div class="carousel-container">
//     <div class="marquee">
//       <!-- Duplicate images to create infinite loop -->

//       <div class="image-wrapper"><img src="img1.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img2.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img3.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img4.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img5.jpg" alt=""></div>

//       <div class="image-wrapper"><img src="img1.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img2.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img3.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img4.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img5.jpg" alt=""></div>

//       <div class="image-wrapper"><img src="img1.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img2.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img3.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img4.jpg" alt=""></div>
//       <div class="image-wrapper"><img src="img5.jpg" alt=""></div>

//     </div>
//   </div>

document.querySelectorAll('.image-wrapper').forEach(imageWrapper => {
  imageWrapper.addEventListener('mouseenter', () => {
    document.querySelector('.marquee').classList.add('paused');
  });
  
  imageWrapper.addEventListener('mouseleave', () => {
    document.querySelector('.marquee').classList.remove('paused');
  });
});

  