//  F.A.Q
 
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
  

document.querySelectorAll('.image-wrapper').forEach(imageWrapper => {
  imageWrapper.addEventListener('mouseenter', () => {
    document.querySelector('.marquee').classList.add('paused');
  });
  
  imageWrapper.addEventListener('mouseleave', () => {
    document.querySelector('.marquee').classList.remove('paused');
  });
});

// BACK TO TOP

const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    
    if (pageHeight - scrollPosition < 50) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// DROPDOWN

function toggleDropdown(type) {
  const panels = document.querySelectorAll('.dropdown-panel');
  panels.forEach(panel => panel.style.display = 'none');
  document.getElementById(`${type}-dropdown`).style.display = 'block';
}

function toggleSection(header) {
  const content = header.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
  header.querySelector('.arrow').style.transform = content.style.display === 'block' 
      ? 'rotate(180deg)' 
      : 'rotate(0deg)';
}

function toggleCheck(item) {
  const checkbox = item.querySelector('.checkbox');
  checkbox.classList.toggle('checked');
}

function closeAll() {
  document.querySelectorAll('.dropdown-panel').forEach(panel => {
      panel.style.display = 'none';
  });
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.border-container')) {
      closeAll();
  }
});

