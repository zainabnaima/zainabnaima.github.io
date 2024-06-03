$(document).ready(function() {
    $('.back-button').click(function() {
        window.location.href = 'index.html#home';
    });

    $('a[href^="#"], .back-button').on('click', function(event) {
        var target;
        if (this.hash !== "") {
            event.preventDefault();
            target = this.hash;
        } else if ($(this).hasClass('back-button')) {
            event.preventDefault();
            target = '#home';
        }

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800, function(){
            window.location.hash = target;
        });
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

    if (slider && slides.length > 0) {
        updateHoveredImage();
        setInterval(updateHoveredImage, 200);
        document.querySelector(".slide-track").addEventListener("animationiteration", updateHoveredImage);
    }

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const inputFields = contactForm.querySelectorAll('input, textarea');

            inputFields.forEach(function(field) {
                field.value = '';
            });
            alert('Your message has been sent!');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {

    document.body.classList.add('fade-in');
    

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
        
            if (link.hostname === window.location.hostname) {
                event.preventDefault();
                const href = link.href;

                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});

