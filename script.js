// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.getElementById('applicationForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    
    // Collect marketing channels
    const marketingChannels = [];
    document.querySelectorAll('input[name="marketing_channel"]:checked').forEach(checkbox => {
        marketingChannels.push(checkbox.value);
    });
    
    // Create application object
    const application = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        age: formData.get('age'),
        gender: formData.get('gender'),
        address: formData.get('address'),
        experience: formData.get('experience'),
        motivation: formData.get('motivation'),
        income_goal: formData.get('income_goal'),
        marketing_channels: marketingChannels,
        submitted_at: new Date().toISOString(),
        status: 'pending'
    };
    
    // Save to localStorage
    saveApplication(application);
    
    // Show success modal
    showSuccessModal();
    
    // Reset form
    this.reset();
});

// Save application to localStorage
function saveApplication(application) {
    let applications = JSON.parse(localStorage.getItem('applications') || '[]');
    applications.push(application);
    localStorage.setItem('applications', JSON.stringify(applications));
}

// Show success modal
function showSuccessModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('successModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'successModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-icon">✅</div>
                <h2>신청이 완료되었습니다!</h2>
                <p>담당자가 영업일 기준 1-2일 내로<br>연락드리겠습니다.</p>
                <p style="font-size: 1rem; color: var(--text-light); margin-top: 20px;">
                    곧 월 500만원 이상의 수익을<br>함께 만들어가실 수 있기를 기대합니다!
                </p>
                <button class="modal-button" onclick="closeModal()">확인</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    modal.style.display = 'block';
    
    // Close modal when clicking outside
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Form validation
document.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
    field.addEventListener('invalid', function(e) {
        e.preventDefault();
        this.classList.add('error');
    });
    
    field.addEventListener('input', function() {
        this.classList.remove('error');
    });
});

// Phone number formatting
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3 && value.length <= 7) {
        value = value.replace(/(\d{3})(\d+)/, '$1-$2');
    } else if (value.length > 7) {
        value = value.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
    }
    e.target.value = value;
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.benefit-card, .process-step, .target-card, .testimonial-card, .income-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Counter animation for income numbers
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('ko-KR');
    }, 16);
}

// Trigger counter animation when visible
const incomeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numberElement = entry.target.querySelector('.income-number');
            if (numberElement && !numberElement.classList.contains('animated')) {
                numberElement.classList.add('animated');
                const text = numberElement.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                if (!isNaN(number)) {
                    numberElement.textContent = '0';
                    setTimeout(() => {
                        animateCounter(numberElement, number);
                    }, 200);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.income-card').forEach(card => {
    incomeObserver.observe(card);
});

// Add floating animation to CTA buttons
document.querySelectorAll('.btn-primary, .btn-large').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// Console message
console.log('%c🚀 DNA 보험설계사 모집 페이지', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%c월 500만원 이상의 수익을 함께 만들어가세요!', 'color: #f59e0b; font-size: 14px;');
