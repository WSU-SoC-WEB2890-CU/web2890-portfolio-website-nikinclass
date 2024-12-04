//TODO - Your ES6 JavaScript code (if any) goes here

// javascript for portfolio
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const overlay = item.querySelector('.overlay');
        overlay.style.transform = 'translateY(0)';
    });

    item.addEventListener('mouseout', () => {
        const overlay = item.querySelector('.overlay');
        overlay.style.transform = 'translateY(100%)';
    });
});

// JavaScript for toggling the accordion
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = button.nextElementSibling;
        const isActive = accordionItem.classList.contains('active');

        // Close all other accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.display = 'none';
        });

        // Toggle the current accordion item
        if (!isActive) {
            accordionItem.classList.add('active');
            accordionContent.style.display = 'block';
        }
    });
});

// slideshow 
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n >= slides.length) { 
        slideIndex = 0; 
    } else if (n < 0) { 
        slideIndex = slides.length - 1; 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}