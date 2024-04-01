var media = [
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
    { image: "assets/img/cold-press-juice-scaled.png"},
    { image: "assets/img/gallery_item.png"},
];



function displayMedia(page) {
    var pageSize = 6;
    var startIndex = (page - 1) * pageSize;
    var endIndex = startIndex + pageSize;
    var mediaList = media.slice(startIndex, endIndex);

    var mediaListContainer = document.getElementById('media-list');
    mediaListContainer.innerHTML = '';

    var gridWrapper = document.createElement('div');
    gridWrapper.className = 'media-grid';

    var isFirstImageProcessed = false; // Flag to track whether the first image on the first page has been processed

    mediaList.forEach(function (media, index) {
        var mediaCardLink = document.createElement('div');
        mediaCardLink.href = 'news_inner.html';
        mediaCardLink.classList.add('media-card-link');
        mediaCardLink.setAttribute('data-media-id', index);

        var mediaCard = document.createElement('div');
        mediaCard.className = 'media-card';

        var img = document.createElement('img');
        img.src = media.image;
        img.style.width = '100%'; 
        img.style.height = '100%'; 
        img.style.objectFit = 'cover'; 
        mediaCard.appendChild(img);

      
       // Create overlay for the first image on the first page

    
    // Create overlay container
    // Create overlay container
var overlay = document.createElement('div');
overlay.className = 'overlay';

// Create container for calendar icon and date
var dateContainer = document.createElement('div');

// Create calendar icon
var calendarIcon = document.createElement('i');
calendarIcon.className = "fa fa-calendar"; // Font Awesome class for the calendar icon
dateContainer.appendChild(calendarIcon);

// Create date element
var dateElement = document.createElement('p');
dateElement.textContent = '7/05/2022'; // Replace 'Your Date Here' with your desired date
dateContainer.appendChild(dateElement);

// Append the date container to the overlay
overlay.appendChild(dateContainer);

// Create additional text element
var additionalTextElement = document.createElement('h6');
additionalTextElement.textContent = 'Contrary to popular belief, Lorem Ipsum is not. It has roots in a piece'; // Replace with your additional text
overlay.appendChild(additionalTextElement);

// Create button
// Create button
var buttonAnchor = document.createElement('a');
buttonAnchor.textContent = 'Read More'; // Replace 'Your Button Text' with your desired button text
buttonAnchor.href = 'news_inner.html'; // Set the href attribute to navigate to 'news_inner.html'
overlay.appendChild(buttonAnchor);


// Append the overlay to the media card
mediaCard.appendChild(overlay);




        mediaCardLink.appendChild(mediaCard);
        gridWrapper.appendChild(mediaCardLink);

        if ((index + 1) % 2 === 0 || index === mediaList.length - 1) {
            mediaListContainer.appendChild(gridWrapper);
            gridWrapper = document.createElement('div');
            gridWrapper.className = 'media-grid';
        }
    });
}








function generatePaginationLinks() {
    var pageSize = 9;
    var totalPages = Math.ceil(media.length / pageSize);
    var paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return; 
    paginationContainer.innerHTML = '';

    var currentPage = 1;
    var startPage, endPage;

    function displayPages() {
        paginationContainer.innerHTML = '';

        var prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.innerHTML = '<i class="fa fa-arrow-left"></i>';
        prevLink.addEventListener('click', function (event) {
            event.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                displayPages();
                displayMedia(currentPage);
                updatePagination(currentPage);
            }
        });
        var prevListItem = document.createElement('li');
        prevListItem.appendChild(prevLink);
        paginationContainer.appendChild(prevListItem);

        if (currentPage <= 2 || totalPages <= 3) {
            startPage = 1;
            endPage = Math.min(totalPages, 3);
        } else if (currentPage >= totalPages - 1) {
            startPage = Math.max(1, totalPages - 2);
            endPage = totalPages;
        } else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
        }

        if (startPage > 1) {
            var firstLink = document.createElement('a');
            firstLink.href = '#';
            firstLink.textContent = 1;
            firstLink.addEventListener('click', function (event) {
                event.preventDefault();
                currentPage = 1;
                displayPages();
                displayMedia(currentPage);
                updatePagination(currentPage);
            });
            var firstListItem = document.createElement('li');
            firstListItem.appendChild(firstLink);
            paginationContainer.appendChild(firstListItem);

            if (startPage > 2) {
                var ellipsis = document.createElement('li');
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
            }
        }

        for (var i = startPage; i <= endPage; i++) {
            var link = document.createElement('a');
            link.href = '#';
            link.textContent = i;
            link.addEventListener('click', function (event) {
                event.preventDefault();
                currentPage = parseInt(event.target.textContent);
                displayPages();
                displayMedia(currentPage);
                updatePagination(currentPage);
            });
            var li = document.createElement('li');
            if (i === currentPage) {
                li.classList.add('active');
            }
            li.appendChild(link);
            paginationContainer.appendChild(li);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                var ellipsis = document.createElement('li');
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
            }

            var lastLink = document.createElement('a');
            lastLink.href = '#';
            lastLink.textContent = totalPages;
            lastLink.addEventListener('click', function (event) {
                event.preventDefault();
                currentPage = totalPages;
                displayPages();
                displayMedia(currentPage);
                updatePagination(currentPage);
            });
            var lastListItem = document.createElement('li');
            lastListItem.appendChild(lastLink);
            paginationContainer.appendChild(lastListItem);
        }

        var nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.innerHTML = '<i class="fa fa-arrow-right"></i>';
        nextLink.addEventListener('click', function (event) {
            event.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                if (currentPage > endPage) {
                    startPage = currentPage - 1;
                    displayPages();
                }
                displayMedia(currentPage);
                updatePagination(currentPage);
            }
        });
        var nextListItem = document.createElement('li');
        nextListItem.appendChild(nextLink);
        paginationContainer.appendChild(nextListItem);
    }

    displayPages();

    displayMedia(currentPage); 
    updatePagination(currentPage); 
}








function updatePagination(currentPage) {
    var paginationLinks = document.querySelectorAll('#pagination li a');
    paginationLinks.forEach(function (link) {
        link.classList.remove('active');
        if (parseInt(link.textContent) === currentPage) {
            link.classList.add('active');
        }
    });
}




window.onload = function () {
    generatePaginationLinks();
};