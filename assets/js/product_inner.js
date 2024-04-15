var textList = document.getElementById('textList');
var imageDisplay = document.getElementById('imageDisplay');

var textElements = textList.getElementsByTagName('a');
textElements[0].classList.add('selected-text');

for (var i = 0; i < textElements.length; i++) {
    textElements[i].addEventListener('click', function(event) {
        event.preventDefault();

        for (var j = 0; j < textElements.length; j++) {
            textElements[j].classList.remove('selected-text');
        }

        this.classList.add('selected-text');

        var imageUrl = this.getAttribute('data-image');

        imageDisplay.src = imageUrl;
    });
}










var toggleButtons = document.querySelectorAll('#toggleButton');

toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var table = button.nextElementSibling; 
        if (table.style.display === 'none' || table.style.display === '') {
            table.style.display = 'block'; 
        } else {
            table.style.display = 'none'; 
        }
    });
});

const input = document.querySelector('.quantity-input');
const decrementBtn = document.querySelector('.decrement-btn');
const incrementBtn = document.querySelector('.increment-btn');

decrementBtn.addEventListener('click', function() {
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1; 
    }
});

// Add event listener to the increment button
incrementBtn.addEventListener('click', function() {
    input.value = parseInt(input.value) + 1; 
});

const smallImages = document.querySelectorAll('.small-img');

const bigImg = document.querySelector('.big-img img');

smallImages.forEach(function(smallImgContainer) {
    smallImgContainer.addEventListener('click', function() {
        const smallImgSrc = this.querySelector('img').src;

        bigImg.src = smallImgSrc;

        smallImages.forEach(function(smallImg) {
            smallImg.classList.remove('selected-img');
        });

        this.classList.add('selected-img');
    });
});

window.addEventListener('DOMContentLoaded', function() {
    var carousel = document.getElementById('carousel');
    var carouselInner = carousel.querySelector('.carousel-inner');

    function adjustCarouselItems() {
        var screenWidth = window.innerWidth;

        if (screenWidth <= 1036) {
            var carouselItems = carouselInner.querySelectorAll('.carousel-item');

            carouselItems.forEach(function(item) {
                var cards = item.querySelectorAll('.grid-card');
                if (screenWidth <= 527) {
                    if (cards.length > 1) {
                        for (var i = 1; i < cards.length; i++) {
                            cards[i].style.display = 'none';
                        }
                    } else {
                        cards.forEach(function(card) {
                            card.style.display = 'block';
                        });
                    }
                } else if (screenWidth <= 780) {
                   
                    if (cards.length > 2) {
                        for (var i = 2; i < cards.length; i++) {
                            cards[i].style.display = 'none';
                        }
                    } else {
                        cards.forEach(function(card) {
                            card.style.display = 'block';
                        });
                    }
                } else {
                    
                    if (cards.length > 3) {
                        for (var i = 3; i < cards.length; i++) {
                            cards[i].style.display = 'none';
                        }
                    } else {
                        cards.forEach(function(card) {
                            card.style.display = 'block';
                        });
                    }
                }
            });
        } else {
            var hiddenCards = carouselInner.querySelectorAll('.grid-card[style="display: none;"]');
            hiddenCards.forEach(function(card) {
                card.style.display = 'block';
            });
        }
    }

    window.addEventListener('resize', adjustCarouselItems);
    adjustCarouselItems();
});



