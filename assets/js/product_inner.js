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


