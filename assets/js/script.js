// Data structure containing all book information
const books =[
    {
        id: 1,
        title: "Whispers of the Mind",
        description :'Whispers of the Mind is a thought-provoking self-help book that explores the power of conscious thinking. It invites readers to discover their inner voice, challenge negative patterns, and reshape their perception of reality. Through mindfulness and emotional awareness, it helps you find clarity and purpose in the chaos of everyday life.',
        aboutPic: 'assets/images/book1/aboutpic.jpg',
        cover: 'assets/images/book1/cover.jpg',
        icon: 'assets/images/book1/icon.jpg',
        theme: 'theme-book1',

        // The pricing plan
        pricingDescription: "Discover the version that suits your journey best — whether you prefer a digital read or the feeling of holding a book in your hands.",
        priceCards: {
            digital: {
                description: "Perfect for fast learners and readers on the go.",    
                price : "$7.99",
                btn: 'Get PDF'
            },
            hardCover: {
                description: "Premium edition for collectors and deep thinkers who cherish timeless wisdom.",    
                price : "$24.99",
                btn: 'Order Now'
            },
            paperback: {
                description: "A softcover edition designed for daily reflection and note-taking.",    
                price : "$14.99",
                btn: 'Order Now'
            }
        },

        // About Section
        author: "Written by an anonymous thinker known as “The Whisperer,” blending logic and emotion into deep reflection",
        topic: "It explores the silent power of the mind and how inner calm can reshape your outer world.",
        learnFrom: "How to find clarity, control overthoughts, and peace through mindful awareness.",
        readit: "Because understanding your inner voice is the first step to mastering your life.",
        
        // Review Section
        paragraphReview: "Readers describe Whispers of the Mind as a quiet invitation to reconnect with their thoughts. This book encourages gentle awareness and mindful reflection in a world full of distractions.",
        reviews :[
         {
            name:'Lina M',
            star: 5,
            comment: "“Peaceful and poetic. I found myself pausing more often just to breathe.”"
         },
         {
            name: 'Omar S',
            star: 4.5,
            comment: "“The writing is soft yet powerful. It helped me reframe how I talk to myself.”"
         },
         {
            name: 'Maya R',
            star: 5,
            comment: "“Every chapter feels like a whisper that wakes something calm inside you.”"
         },
         {
            name: 'hassan B',
            star: 4.5,
            comment: "“Great for people who overthink — simple but deep insights.”"
         },
         {
            name: 'Nora K',
            star: 3.5,
            comment: "“A beautiful reminder to slow down and listen to your thoughts.”"
         },
         {
            name: 'Samir A',
            star: 4.5,
            comment: "“It’s not about answers, but learning to ask the right questions.”"
         }   
        ]
    },
    {
        id: 2,
        title: "Growth Path",
        description: 'Growth Path is an empowering book about unlocking your potential through consistent personal development. It focuses on building positive habits, setting realistic goals, and developing a mindset of continuous growth. Perfect for anyone seeking to evolve mentally, emotionally, and professionally.',
        aboutPic: 'assets/images/book2/aboutpic.jpg',
        cover: 'assets/images/book2/cover.jpg',
        icon: 'assets/images/book2/icon.jpg',
        theme: 'theme-book2',   
        
        // Pricing plan
        pricingDescription: "Choose the edition that helps your growth take root and flourish — from digital simplicity to classic hardcover strength.",
        priceCards: {
            digital: {
                description: "Start your growth journey instantly with the digital edition.",   
                price : "$7.99",
                btn: 'Get PDF'
            },
            hardCover: {
                description: "A beautifully bound edition crafted for those who value depth, wisdom, and endurance.",    
                price : "$21.99",
                btn: 'Order Hardcover'
            },
            paperback: {
                description: "Lightweight and inspiring — a perfect companion for your personal development routines.",    
                price : "$12.99",
                btn: 'Buy Paperback'
            }
        },

        // About Section
        author: "Written by a mysterious mentor known only as “The Seeker,” representing the endless pursuit of personal evolution.",
        topic: "It’s about nurturing growth step by step, understanding that progress is built through patience and reflection.",
        learnFrom: "How to grow without rushing, build resilience, and find purpose in small daily improvements.",
        readit: "Because every journey begins with a single step — and this book helps you take it with confidence.",
        
        // Review Section 
        paragraphReview: "Growth Path focuses on self-discipline, consistent effort, and building habits that last. It’s not about perfection — it’s about steady progress and learning from every step.",
        reviews :[
         {
            name:'Fatima E',
            star: 5,
            comment: "“Gave me structure and hope when I needed direction.”"
         },
         {
            name: 'Amine R',
            star: 4.5,
            comment: "“Straightforward and honest. It keeps you accountable.”"
         },
         {
            name: 'Laila P',
            star: 4,
            comment: "“I applied the 5-minute rule and it completely changed my routine.”"
         },
         {
            name: 'Walid S',
            star: 4.5,
            comment: "“Simple but motivating. You’ll actually start doing things.”"
         },
         {
            name: 'Hind A',
            star: 5,
            comment: "“This is not theory — it’s action disguised as inspiration.”"
         },
         {
            name: 'Mounir N',
            star: 4.5,
            comment: "“Perfect guide for long-term growth and staying focused.”"
         }
        ]
    },
    {
        id: 3,
        title: "The Calm Within",
        description: "The Calm Within guides readers through practical exercises to achieve inner peace and emotional control. With a soft and inspiring tone, this book helps you calm your mind, manage stress, and cultivate mental strength. It’s your daily companion for finding harmony in a noisy world.",
        aboutPic: 'assets/images/book3/aboutpic.jpg',
        cover: 'assets/images/book3/cover.jpg',
        icon: 'assets/images/book3/icon.jpg',
        theme: 'theme-book3',      
        
        // pricing plan
        pricingDescription: "Find your perfect format — a book to guide you through the challenges, one page at a time.",
        priceCards: {
            digital: {
                description: "Read anywhere, anytime. Gain strength through powerful words of resilience.",      
                price : "$8.99",
                btn: 'Digital Copy'
            },
            hardCover: {
                description: "An elegant edition built to last — your lifelong companion through every chapter of growth.",    
                price : "$22.99",
                btn: 'Order Now'
            },
            paperback: {
                description: "Designed for comfort and focus — take notes, highlight lessons, and reflect deeply.",    
                price : "$13.99",
                btn: 'Purchase Now'
            }
        },

        // About Section
        author: "Authored by an anonymous observer of life — a storyteller who found peace not in words, but between them.",
        topic: "It’s a gentle guide toward inner balance, mindfulness, and the art of staying calm amid life’s chaos.",
        learnFrom: "Ways to release tension, find stability in uncertainty, and breathe through challenges.",
        readit: "Because true calm isn’t found outside you — it’s built within, one moment of awareness at a time.",
        
        // Review Section
        paragraphReview: "The Calm Within helps readers build inner peace through simple, actionable techniques. It’s a guide to finding quiet in daily chaos — practical, soothing, and deeply human.",
        reviews :[
         {
            name:'Aisha T',
            star: 5,
            comment: "“It taught me how to breathe again — both literally and mentally.”"
         },
         {
            name: 'Youssef D',
            star: 5,
            comment: "“Perfect mix of mindfulness and real-life application.”"
         },
         {
            name: 'Rania Z',
            star: 3.5,
            comment: "“Every exercise brings instant calm. I keep it on my desk for daily reference.”"
         },
         {
            name: 'Khalid M',
            star: 4,
            comment: "“A comforting book. I learned to reset instead of react.”"
         },
         {
            name: 'Sara L',
            star: 4.5,
            comment: "“Short but powerful. Ideal for stressful days.”"
         },
         {
            name: 'Ibrahim H',
            star: 5,
            comment: "“Feels like a friend reminding you to breathe.”"
         }
        ]
    }
]

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

function showBook(bookId) {
    const book = books.find(b => b.id === bookId);
    
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
    // digital card
    document.querySelector('.digital-desc').textContent = book.priceCards.digital.description;
    document.querySelector('.digital-price').textContent = book.priceCards.digital.price;
    document.querySelector('.digital-btn').textContent = book.priceCards.digital.btn;

    // paperback card
    document.querySelector('.paperback-desc').textContent = book.priceCards.paperback.description;
    document.querySelector('.paperback-price').textContent = book.priceCards.paperback.price;
    document.querySelector('.paperback-btn').textContent = book.priceCards.paperback.btn;

    // hardcover card
    document.querySelector('.hard-cover-desc').textContent = book.priceCards.hardCover.description;
    document.querySelector('.hard-cover-price').textContent = book.priceCards.hardCover.price;
    document.querySelector('.hard-cover-btn').textContent = book.priceCards.hardCover.btn;

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
    localStorage.setItem('lastViewedBook', bookId);
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
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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

// Update window load event
window.addEventListener('load', ()=>{
    // Check if there's a saved book in localStorage
    const lastBookId = localStorage.getItem('lastViewedBook');
    
    if (lastBookId) {
        showBook(parseInt(lastBookId));
    } else {
        showBook(1); // Default to first book
    }

    initValidation();
    setupPricingButtons(); 

    // year Update
     let date = new Date().getFullYear()
    document.querySelector('.year').textContent = date;
});



