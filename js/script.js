// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    updateThemeIcon(currentTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Update theme
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        updateThemeIcon(newTheme);
        
        // Add a subtle animation effect
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
});

// Mobile Navigation Toggle and Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Cache nav links for smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });
});


// Navbar background on scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(248, 250, 252, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--background-color)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .about-content, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation for better UX
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Dynamic Time-based Greeting
document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    const tagline = document.getElementById('dynamic-tagline');
    const now = new Date();
    const hour = now.getHours();
    
    let greetingText = 'Hello';
    let dynamicMessage = '';
    
    if (hour >= 5 && hour < 12) {
        greetingText = 'Good morning';
        dynamicMessage = 'Starting the day with code and curiosity! ';
    } else if (hour >= 12 && hour < 17) {
        greetingText = 'Good afternoon';
        dynamicMessage = 'Building the future, one project at a time! ';
    } else if (hour >= 17 && hour < 22) {
        greetingText = 'Good evening';
        dynamicMessage = 'Still exploring AI and Cybersecurity! ';
    } else {
        greetingText = 'Hello';
        dynamicMessage = 'Passionate about innovation at all hours! ';
    }
    
    greeting.textContent = greetingText;
    tagline.textContent = dynamicMessage + 'I am a Junior Computer Science Student at KFUPM who is passionate about AI and Cybersecurity';
});

// Project Filtering System
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects with animation
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    
                    setTimeout(() => {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 150);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Expandable Project Details
document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectIndex = this.getAttribute('data-project');
            const projectCard = this.closest('.project-card');
            const details = projectCard.querySelector('.project-details');
            
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'Hide Details';
                this.style.backgroundColor = 'var(--primary-color)';
                this.style.color = 'white';
                
                // Smooth scroll to show details
                setTimeout(() => {
                    details.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 100);
            } else {
                details.style.display = 'none';
                this.textContent = 'Show Details';
                this.style.backgroundColor = 'transparent';
                this.style.color = 'var(--text-secondary)';
            }
        });
    });
});

// Enhanced Project Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.style.transition = 'all 0.3s ease, opacity 0.3s ease, transform 0.3s ease';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.style.display !== 'none') {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const quoteLoader = document.getElementById('quote-loader');
    const quoteContent = document.getElementById('quote-content');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    // Local list of quotes
    const localQuotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "The future belongs to those who learn more skills and combine them in creative ways.", author: "Robert Greene" },
        { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
        { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
        { text: "Don't comment bad code—rewrite it.", author: "Brian Kernighan" }
    ];

    // Show loader briefly before displaying a quote
    function showLoader() {
        quoteLoader.style.display = 'flex';
        quoteContent.style.display = 'none';
        newQuoteBtn.style.display = 'none';

        setTimeout(() => {
            const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
            displayQuote(randomQuote.text, randomQuote.author);
        }, 500); // brief delay for smooth effect
    }

    function displayQuote(text, author) {
        quoteText.textContent = text;
        quoteAuthor.textContent = author;

        quoteLoader.style.display = 'none';
        quoteContent.style.display = 'block';
        newQuoteBtn.style.display = 'flex';

        // Store last quote in localStorage
        localStorage.setItem('lastQuote', JSON.stringify({ text, author, timestamp: Date.now() }));
    }

    // Show a random local quote immediately
    function loadRandomQuote() {
        showLoader();
    }

    // Event listeners
    newQuoteBtn.addEventListener('click', loadRandomQuote);

    // Load an initial quote on page load
    loadRandomQuote();

    // Track user interactions
    const quoteInteractions = localStorage.getItem('quoteInteractions') || '0';
    localStorage.setItem('quoteInteractions', (parseInt(quoteInteractions) + 1).toString());
});

// Contact Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    const submitBtn = document.getElementById('submit-btn');
    const charCount = document.getElementById('char-count');
    const formFeedback = document.getElementById('form-feedback');
    const successMessage = document.getElementById('success-message');
    const errorFeedback = document.getElementById('error-feedback');
    const retryBtn = document.getElementById('retry-form-btn');
    
    const MAX_MESSAGE_LENGTH = 500;
    
    // Real-time validation functions
    function validateName(name) {
        const trimmed = name.trim();
        if (trimmed.length < 2) {
            return 'Name must be at least 2 characters long';
        }
        if (trimmed.length > 50) {
            return 'Name must be less than 50 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) {
            return 'Name can only contain letters, spaces, apostrophes, and hyphens';
        }
        return '';
    }
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            return 'Email is required';
        }
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    }
    
    function validateSubject(subject) {
        if (!subject) {
            return 'Please select a subject';
        }
        return '';
    }
    
    function validateMessage(message) {
        const trimmed = message.trim();
        if (trimmed.length < 10) {
            return 'Message must be at least 10 characters long';
        }
        if (trimmed.length > MAX_MESSAGE_LENGTH) {
            return `Message must be less than ${MAX_MESSAGE_LENGTH} characters`;
        }
        return '';
    }
    
    function showFieldError(field, errorElement, message) {
        field.classList.remove('success');
        field.classList.add('error');
        errorElement.textContent = message;
    }
    
    function showFieldSuccess(field, errorElement) {
        field.classList.remove('error');
        field.classList.add('success');
        errorElement.textContent = '';
    }
    
    function clearFieldState(field, errorElement) {
        field.classList.remove('error', 'success');
        errorElement.textContent = '';
    }
    
    // Real-time validation event listeners
    nameInput.addEventListener('input', function() {
        const error = validateName(this.value);
        const errorElement = document.getElementById('name-error');
        
        if (error) {
            showFieldError(this, errorElement, error);
        } else if (this.value.trim()) {
            showFieldSuccess(this, errorElement);
        } else {
            clearFieldState(this, errorElement);
        }
    });
    
    emailInput.addEventListener('input', function() {
        const error = validateEmail(this.value);
        const errorElement = document.getElementById('email-error');
        
        if (error) {
            showFieldError(this, errorElement, error);
        } else if (this.value.trim()) {
            showFieldSuccess(this, errorElement);
        } else {
            clearFieldState(this, errorElement);
        }
    });
    
    subjectSelect.addEventListener('change', function() {
        const error = validateSubject(this.value);
        const errorElement = document.getElementById('subject-error');
        
        if (error) {
            showFieldError(this, errorElement, error);
        } else {
            showFieldSuccess(this, errorElement);
        }
    });
    
    messageTextarea.addEventListener('input', function() {
        const length = this.value.length;
        const error = validateMessage(this.value);
        const errorElement = document.getElementById('message-error');
        
        // Update character count
        charCount.textContent = `${length}/${MAX_MESSAGE_LENGTH}`;
        charCount.classList.remove('warning', 'error');
        
        if (length > MAX_MESSAGE_LENGTH * 0.8) {
            charCount.classList.add('warning');
        }
        if (length >= MAX_MESSAGE_LENGTH) {
            charCount.classList.add('error');
        }
        
        // Validate message
        if (error) {
            showFieldError(this, errorElement, error);
        } else if (this.value.trim()) {
            showFieldSuccess(this, errorElement);
        } else {
            clearFieldState(this, errorElement);
        }
    });
    
    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate all fields
        const nameError = validateName(nameInput.value);
        const emailError = validateEmail(emailInput.value);
        const subjectError = validateSubject(subjectSelect.value);
        const messageError = validateMessage(messageTextarea.value);
        
        // Show errors if any
        if (nameError) showFieldError(nameInput, document.getElementById('name-error'), nameError);
        if (emailError) showFieldError(emailInput, document.getElementById('email-error'), emailError);
        if (subjectError) showFieldError(subjectSelect, document.getElementById('subject-error'), subjectError);
        if (messageError) showFieldError(messageTextarea, document.getElementById('message-error'), messageError);
        
        // Stop if there are errors
        if (nameError || emailError || subjectError || messageError) {
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await simulateFormSubmission({
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                subject: subjectSelect.value,
                message: messageTextarea.value.trim()
            });
            
            // Show success message
            form.style.display = 'none';
            formFeedback.style.display = 'block';
            successMessage.style.display = 'block';
            errorFeedback.style.display = 'none';
            
            // Store submission in localStorage
            const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
            submissions.push({
                timestamp: Date.now(),
                subject: subjectSelect.value,
                success: true
            });
            localStorage.setItem('formSubmissions', JSON.stringify(submissions.slice(-10))); // Keep last 10
            
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Show error message
            formFeedback.style.display = 'block';
            successMessage.style.display = 'none';
            errorFeedback.style.display = 'block';
            
            // Store failed submission
            const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
            submissions.push({
                timestamp: Date.now(),
                subject: subjectSelect.value,
                success: false,
                error: error.message
            });
            localStorage.setItem('formSubmissions', JSON.stringify(submissions.slice(-10)));
            
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
    
    // Retry button functionality
    retryBtn.addEventListener('click', function() {
        formFeedback.style.display = 'none';
        form.style.display = 'flex';
    });
    
    // Simulate form submission (replace with actual backend integration)
    async function simulateFormSubmission(formData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve({ success: true, message: 'Message sent successfully!' });
                } else {
                    reject(new Error('Network error: Please check your connection and try again.'));
                }
            }, 2000); // 2 second delay to show loading state
        });
    }
    
    // Auto-save form data to localStorage
    function saveFormData() {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectSelect.value,
            message: messageTextarea.value
        };
        localStorage.setItem('contactFormDraft', JSON.stringify(formData));
    }
    
    function loadFormData() {
        const saved = localStorage.getItem('contactFormDraft');
        if (saved) {
            const formData = JSON.parse(saved);
            nameInput.value = formData.name || '';
            emailInput.value = formData.email || '';
            subjectSelect.value = formData.subject || '';
            messageTextarea.value = formData.message || '';
            
            // Update character count
            if (messageTextarea.value) {
                charCount.textContent = `${messageTextarea.value.length}/${MAX_MESSAGE_LENGTH}`;
            }
        }
    }
    
    // Save form data on input
    [nameInput, emailInput, subjectSelect, messageTextarea].forEach(field => {
        field.addEventListener('input', saveFormData);
        field.addEventListener('change', saveFormData);
    });
    
    // Load saved form data on page load
    loadFormData();
    
    // Clear draft after successful submission
    form.addEventListener('submit', function() {
        setTimeout(() => {
            if (successMessage.style.display !== 'none') {
                localStorage.removeItem('contactFormDraft');
            }
        }, 100);
    });
});

// GitHub API Integration - Fetch and Display Latest Repositories
document.addEventListener('DOMContentLoaded', function() {
    const githubProjectsContainer = document.getElementById('github-projects');
    const GITHUB_API_URL = 'https://api.github.com/users/SerSane/repos?sort=updated&per_page=6';

    // Show loading state
    function showGithubLoading() {
        githubProjectsContainer.innerHTML = `
            <div class="github-loading">
                <div class="spinner"></div>
                <p>Loading latest GitHub projects...</p>
            </div>
        `;
    }

    // Show error state
    function renderGithubError(message) {
        githubProjectsContainer.innerHTML = `
            <div class="github-error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>${message}</p>
            </div>
        `;
    }

    // Format date nicely (e.g., "Updated on 29 Nov 2025")
    function formatDate(dateString) {
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `Updated on ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    // Render GitHub repositories as cards
    function renderGithubProjects(repos) {
        if (!repos || repos.length === 0) {
            renderGithubError('No repositories found at this time.');
            return;
        }

        const reposHTML = repos.map(repo => {
            const description = repo.description || 'No description provided';
            const language = repo.language ? `<span class="github-language">${repo.language}</span>` : '';
            const updatedDate = formatDate(repo.updated_at);

            return `
                <div class="github-card">
                    <div class="github-card-content">
                        <h4 class="github-card-title">
                            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
                        </h4>
                        <p class="github-card-description">${description}</p>
                        <div class="github-card-footer">
                            ${language}
                            <span class="github-date">${updatedDate}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        githubProjectsContainer.innerHTML = `<div class="github-grid">${reposHTML}</div>`;
    }

    // Fetch GitHub repositories
    async function fetchGithubRepos() {
        showGithubLoading();

        try {
            const response = await fetch(GITHUB_API_URL);

            if (!response.ok) {
                // Handle different error status codes
                if (response.status === 403) {
                    throw new Error('Rate limit exceeded. Please try again later.');
                } else if (response.status === 404) {
                    throw new Error('GitHub profile not found.');
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            }

            const repos = await response.json();

            if (!Array.isArray(repos)) {
                throw new Error('Invalid response from GitHub API.');
            }

            renderGithubProjects(repos);

        } catch (error) {
            console.error('Error fetching GitHub repos:', error);
            renderGithubError('Unable to load GitHub projects right now. Please try again later.');
        }
    }

    // Initialize GitHub repos on page load
    if (githubProjectsContainer) {
        fetchGithubRepos();
    }
});