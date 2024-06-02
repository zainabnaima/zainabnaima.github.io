$(document).ready(function() {
    // Initially hideS the main content and prevent scrolling
    $('.main-content').hide();
    $('.main-page-content').hide();
    $('body').css('overflow', 'hidden');

    // Handle "Shop Now" button click
    $('#shop-now').on('click', function() {
        $('.landing-page').hide();
        $('.main-content').show();
        $('.main-page-content').show();
        $('body').css('overflow', 'auto'); // Enable scrolling
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    // Handle navigation links click
    $('nav ul li a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Handle "Go Back" button click
    $('.back-button-container').on('click', function() {
        $('.main-content').hide();
        $('.main-page-content').hide();
        $('.landing-page').show();
        $('body').css('overflow', 'hidden'); // Disable scrolling
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    // Handle favorite icon click
    $('.favorite-icon').on('click', function() {
        $(this).toggleClass('heart');
    });

    // Handle cart icon click
    $('.cart-icon').on('click', function() {
        $(this).toggleClass('cart');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide img");

    function updateHoveredImage() {
        const sliderRect = slider.getBoundingClientRect();
        const sliderCenter = sliderRect.left + sliderRect.width / 2;

        let closestSlide = null;
        let closestDistance = Infinity;

        slides.forEach(img => {
            const imgRect = img.getBoundingClientRect();
            const imgCenter = imgRect.left + imgRect.width / 2;
            const distance = Math.abs(imgCenter - sliderCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestSlide = img;
            }
        });

        slides.forEach(img => img.classList.remove("hovered"));
        if (closestSlide) {
            closestSlide.classList.add("hovered");
        }
    }

    updateHoveredImage();
    setInterval(updateHoveredImage, 400); 
    document.querySelector(".slide-track").addEventListener("animationiteration", updateHoveredImage);
});




