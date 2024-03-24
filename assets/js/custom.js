let rangeMin = 1;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minRange = parseInt(rangeInput[0].value);
        let maxRange = parseInt(rangeInput[1].value);
        if (maxRange - minRange < rangeMin) {
            if (e.target.className === "min") {
                rangeInput[0].value = maxRange - rangeMin;
            } else {
                rangeInput[1].value = minRange + rangeMin;
            }
        } else {
            rangePrice[0].value = minRange.toString() + " JOD";
            rangePrice[1].value = maxRange.toString() + " JOD";
            range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
        }
    });
});


var products = [
    { image: "assets/img/products/l1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 1", price: "5.00 JOD" },
    { image: "assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 2", price: "5.00 JOD" },
    { image: "assets/img/products/single.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 3", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 4", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 5", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 6", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 7", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 8", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 9", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 10", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 11", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 12", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 13", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 14", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 15", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 16", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 17", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 18", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 19", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 20", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 21", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 22", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 23", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 24", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 25", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 26", price: "5.00 JOD" },
    { image: " assets/img/products/s1.png", name: "Freshco", description: "Lorem Ipsum is simply dummy 27", price: "5.00 JOD" },
];

function displayProducts(page) {
    var pageSize = 9;
    var startIndex = (page - 1) * pageSize;
    var endIndex = startIndex + pageSize;
    var productList = products.slice(startIndex, endIndex);

    var productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = '';

    var gridWrapper = document.createElement('div');
    gridWrapper.className = 'product-grid';

    productList.forEach(function (product, index) {
        var productCard = document.createElement('div');
        productCard.className = 'product-card';


        var img = document.createElement('img');
        img.src = product.image;
        productCard.appendChild(img);

        var productContentContainer = document.createElement('div');
        productContentContainer.classList.add('product-content');

        var h2 = document.createElement('h2');
        h2.textContent = "Freshco";
        productContentContainer.appendChild(h2);

        var p = document.createElement('p');
        p.textContent = product.description;
        productContentContainer.appendChild(p);


        var productInfoContainer = document.createElement('div');
        productInfoContainer.classList.add('product-info');

        var price = document.createElement('p');
        price.textContent = "Price: " + product.price;
        productInfoContainer.appendChild(price);

        var button = document.createElement('button');
        button.textContent = "Add to Cart ";

        var cartIcon = document.createElement('i');
        cartIcon.classList.add('fas', 'fa-shopping-cart');
        button.appendChild(cartIcon);


        productCard.appendChild(productInfoContainer);


        productInfoContainer.appendChild(price);
        productInfoContainer.appendChild(button);


        productContentContainer.appendChild(productInfoContainer);


        productCard.appendChild(productContentContainer);


        gridWrapper.appendChild(productCard);

        if ((index + 1) % 3 === 0 || index === productList.length - 1) {
            productListContainer.appendChild(gridWrapper);
            gridWrapper = document.createElement('div');
            gridWrapper.className = 'product-grid';
        }
    });
}



function generatePaginationLinks() {
    var pageSize = 9;
    var totalPages = Math.ceil(products.length / pageSize);
    var paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    var prevLink = document.createElement('a');
    prevLink.href = '#';
    prevLink.innerHTML = '<i class="fas fa-arrow-left"></i>';
    prevLink.addEventListener('click', function (event) {
        event.preventDefault();
        var currentPage = parseInt(document.querySelector('.pagination a.active').textContent);
        if (currentPage > 1) {
            displayProducts(currentPage - 1);
            updateActiveLink(currentPage - 1);
        }
    });
    var prevListItem = document.createElement('li');
    prevListItem.appendChild(prevLink);
    paginationContainer.appendChild(prevListItem);

    for (var i = 1; i <= totalPages; i++) {
        var link = document.createElement('a');
        link.href = '#';
        link.textContent = i;
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var currentPage = parseInt(event.target.textContent);
            displayProducts(currentPage);
            updateActiveLink(currentPage);
        });
        var li = document.createElement('li');
        if (i === 1) {
            li.classList.add('active');
        }
        li.appendChild(link);
        paginationContainer.appendChild(li);
    }

    var nextLink = document.createElement('a');
    nextLink.href = '#';
    nextLink.innerHTML = '<i class="fas fa-arrow-right"></i>';
    nextLink.addEventListener('click', function (event) {
        event.preventDefault();
        var currentPage = parseInt(document.querySelector('.pagination a.active').textContent);
        if (currentPage < totalPages) {
            displayProducts(currentPage + 1);
            updateActiveLink(currentPage + 1);
        }
    });
    var nextListItem = document.createElement('li');
    nextListItem.appendChild(nextLink);
    paginationContainer.appendChild(nextListItem);

    displayProducts(1);
    updateActiveLink(1);
}


function updateActiveLink(page) {
    var links = document.querySelectorAll('.pagination li a');
    links.forEach(function (link) {
        link.classList.remove('active');
        if (parseInt(link.textContent) === page) {
            link.classList.add('active');
        }
    });
}

window.onload = function () {
    generatePaginationLinks();
};


// Select the container where you want to append the button
// Select the container where you want to append the button
// Select the container where you want to append the button
// Get references to the button and side menu
var showMenuButton = document.getElementById('showMenuButton');
var sideMenu = document.querySelector('.side-menu');

// Add event listener to the button to toggle the visibility of the side menu
showMenuButton.addEventListener('click', function() {
    // Toggle the 'show' class on the side menu
    sideMenu.classList.toggle('show');
});
