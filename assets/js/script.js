let books = [];
// Fetch book data from JSONBlob and initialize the page
const API_URL = 'https://api.jsonblob.com/019ca9d7-9771-7802-b6fa-371e7f73330a'; 
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
        books = data;
        } else if (data.books) {
            books = data.books;  // If data is { books: [...] }
        } else {
            books = [];  // Fallback
        }
        
        // Load last viewed book
        const lastBookId = localStorage.getItem('lastViewedBook');
        if (lastBookId && books.some(b => b.id === parseInt(lastBookId))) {
            showBook(parseInt(lastBookId));
        } else {
            showBook(1);
        }
        // Set the current year in the footer
        document.querySelector('.year').textContent = new Date().getFullYear();

        // Initialize contact form validation
        initValidation();
        // Setup pricing buttons
        setupPricingButtons();
    })
    .catch(error => {
        console.error('Error loading books:', error);
        showBook(1);
    });

    
// Switch between books and close the sidebar
function switchBook(bookId) {
    // Close offcanvas when book is selected
    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('otherbooksSideNav'));
    if (offcanvas) {
        offcanvas.hide();
    }
    // Show the selected book
    showBook(bookId);
    
}

function updatePricingCard(type, cardData) {
    document.querySelector(`.${type}-desc`).textContent = cardData.description;
    document.querySelector(`.${type}-price`).textContent = cardData.price;
    document.querySelector(`.${type}-btn`).textContent = cardData.btn;
}

function showBook(bookId) {
    const book = books.find(b => b.id === bookId);

    if (!book) return;
    
    // Update title 
    document.title = `${book.title} | MindNest`;
    
    // Update theme
    document.body.className = book.theme;
    
    // Update favicon (icons)
    updateFavicon(book.icon);
    
    // Update the hero-section content
    document.querySelector('.heading').textContent = book.title;
    document.querySelector('.text-muted').textContent = book.description;
    document.querySelector('.img-cover').src = book.cover;

    // Update the pricing content
    document.querySelector('.pricing-description').textContent = book.pricingDescription;

    updatePricingCard('digital', book.priceCards.digital);
    updatePricingCard('paperback', book.priceCards.paperback);
    updatePricingCard('hard-cover', book.priceCards.hardCover);

    // Update the about section content
    document.querySelector('.about-pic').src = book.aboutPic;
    document.querySelector('.topic').textContent = book.topic;
    document.querySelector('.author').textContent = book.author;
    document.querySelector('.learn-from').textContent = book.learnFrom;
    document.querySelector('.read-it').textContent = book.readit;
    
    // update the review section
    document.querySelector('.review-para').textContent = book.paragraphReview;
    updateReview(book.reviews);

    // Save to localStorage
    try{
        localStorage.setItem('lastViewedBook', bookId);
    }catch(e){
        console.error('Could not save to localStorage', e);
    }
}

// Fuction favicon update
function updateFavicon(iconUrl) {
    let link = document.querySelector("link[rel='shortcut icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.type = 'image/x-icon';
        document.head.appendChild(link);
    }
    link.href = iconUrl;
}

// the reviews section function
function updateReview(review){
    const listGroup =document.querySelector('.list-group');
    listGroup.innerHTML = ''
    
    review.forEach(r => {

        const listGroupItem = document.createElement('li');
        listGroupItem.className ='list-group-item py-3';

        // Create the review stars
        const starsHTML = stars(r.star);
        
        // Create h5 for the reviwers name
        const reviewerName = document.createElement('h5');
        reviewerName.textContent = r.name;

        // the paragraph for comment
        const comment = document.createElement('p');
        comment.textContent = r.comment;

        // Append all the create element 
        listGroupItem.innerHTML = starsHTML
        listGroupItem.appendChild(reviewerName);
        reviewerName.after(comment);
        listGroup.appendChild(listGroupItem);
    });
    
}

// the review stars
function stars(rating){
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating){
            starsHTML += '<i class="bi bi-star-fill text-warning"></i>';
        }else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        starsHTML += '<i class="bi bi-star-half text-warning"></i>';
        } else{
            starsHTML += '<i class="bi bi-star text-warning"></i>';
        }
    }
    return starsHTML;
}


// CONTACT SECTION
// Validation rules for contact form fields  
const validationRules = {
    name: {
        regex: /^[A-Za-z\s]{2,40}$/,
        event: 'input',
        message: 'Full Name must be between 2-40 letters only and no numbers'
    },
    email: {
        regex: /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/,
        event: 'input',
        message: 'Please enter a valid email address'
    },
    location: {
        regex: /^[A-Za-z\s,]{2,80}$/,
        event: 'input', 
        message: 'Please enter a valid location'
    },
    format: {
        regex: /.+/, // at least one character
        event: 'change',
        message: 'Please select a book format'
    }
}

// find the field(input) and get it rules and make test on it 
function validate(fieldId, value) {
    if (!validationRules[fieldId]) {
        return true;
    }
    const rule = validationRules[fieldId];
    return rule.regex.test(value);
}

// show message error 
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.style.border = '2px solid #ff0000ff';
    
    // Create or update error message
    let errorElement = document.getElementById(fieldId + '-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = fieldId + '-error';
        errorElement.style.color = 'red';
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    errorElement.textContent = message;
}

// hide the error message
function hideError(fieldId) {
    const field = document.getElementById(fieldId);
    field.style.border = '';

    const errorElement = document.getElementById(fieldId + '-error');
    if (errorElement) {
        errorElement.remove();
    }    
}

// Connect validation to fields
function setupFieldValidation(fieldId) {
    const field = document.getElementById(fieldId);
    const rule = validationRules[fieldId];
    
    field.addEventListener(rule.event, function() {
        const isValid = validate(fieldId, this.value);
        
        if (isValid) {
            hideError(fieldId);
        } else {
            showError(fieldId, rule.message);
        }
    });
}

// Validate entire form on submit
function validateForm() {
    let isValid = true;
    
    Object.keys(validationRules).forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!validate(fieldId, field.value)) {
            showError(fieldId, validationRules[fieldId].message);
            isValid = false;
        }
    });
    
    return isValid;
}

// Initialize
function initValidation() {
    // Setup validation for each field in our rules
    Object.keys(validationRules).forEach(fieldId => {
        setupFieldValidation(fieldId);
    });
    
    // form submit handler
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Show Bootstrap toast
            const toastElement = document.getElementById('liveToast');
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
            this.reset();
        }
    });
}

// Function to handle pricing button clicks
function setupPricingButtons() {
    // Digital button
    document.querySelector('.digital-btn').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToContactAndSelect('digital');
    });
    
    // Paperback button  
    document.querySelector('.paperback-btn').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToContactAndSelect('paperback');
    });
    
    // Hardcover button
    document.querySelector('.hard-cover-btn').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToContactAndSelect('deluxe');
    });
}

// Function to scroll to contact and select format
function scrollToContactAndSelect(format) {
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Select the format in the dropdown
    const formatSelect = document.getElementById('format');
    formatSelect.value = format;
    
    //  Highlight the selected option
    formatSelect.focus();
}



