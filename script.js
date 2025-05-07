// Enhanced Resume data with more detailed information
const resumeData = {
  name: "Anurudh B.A.",
  title: "Business Analytics & Data Analysis Specialist",
  email: "anurudhba21@gmail.com",
  phone: "+919486873493",
  linkedin: "https://in.linkedin.com/in/anurudh-b-a-37b121139",
  github: "https://github.com/anurudhba21",
  summary: "An analytical and detail-oriented professional with a strong foundation in Business Analytics, Data Analysis, and Business Intelligence. Experienced in gathering business requirements, analyzing large datasets using SQL, NumPy, Pandas and building insightful dashboards with Power BI and Tableau.",
  education: [
    {
      degree: "MBA in Business Analytics",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      year: "2023",
      achievements: [
        "Specialized in Advanced Data Analytics and Decision Sciences",
        "Thesis: 'Implementing AI-driven Decision Support Systems in Retail'"
      ]
    },
    {
      degree: "BSc in Computer Science",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      year: "2018",
      achievements: [
        "Focus on Data Structures, Algorithms and Database Management",
        "Capstone Project: 'Predictive Analytics for Consumer Behavior'"
      ]
    }
  ],
  experience: [
    {
      role: "Customer Success Executive",
      company: "SBA Info Solution",
      location: "Chennai, India",
      duration: "April 2024 - October 2024",
      responsibilities: [
        "Oversaw the entire sales cycle, from prospecting to deal closure.",
        "Leveraged expertise in IBM products like Watsonx and Cognos.",
        "Managed the entire sales process by gathering use cases from clients.",
        "Provided tailored solutions to address specific client needs."
      ],
      useCases: [
        "Taxonomy: Developed structured classification systems",
        "AI Chatbot Solutions: Implemented AI-driven chatbots",
        "Transcription and Content Classification",
        "Business Process Automation",
        "Text Classification",
        "Cognos: Advanced analytics and BI reporting"
      ]
    },
    {
      role: "Data Annotator Intern",
      company: "Lesoko Technology",
      location: "Chennai, India",
      duration: "August 2023 - October 2023",
      responsibilities: [
        "Worked on solar panel image annotation and object detection.",
        "Utilized libraries like NumPy, Pandas, and Matplotlib.",
        "Documented annotation procedures and results.",
        "Trained data using deep learning techniques."
      ]
    }
  ],
  projects: [
    {
      title: "Walmart Superstore Sales Analysis",
      description: "Designed and developed an interactive dashboard using Power BI to visualize and analyze key business metrics, enhancing data-driven decision-making.",
      link: "https://github.com/anurudhba21/Walmart-Superstore-Sales-Analysis"
    },
    {
      title: "Data Driven Insights on Cyclistic Bike Share Usage",
      description: "Analyzed Cyclistic bike-share data to uncover user behavior patterns. Using Power BI and DAX, segmented casual riders and annual members, revealing key insights like ride duration and usage trends. Recommendations include targeted marketing and electric bike promotions to boost memberships.",
      link: "https://github.com/anurudhba21/Data-Driven-Insights-on-Cyclistic-Bike-Share-Usage-Casual-vs.-Member-Riders"
    },
    {
      title: "Edutech Lead Conversion",
      description: "This project predicts lead conversion for an Edu-Tech firm using Python. Includes data cleaning, EDA, and a Random Forest model with 91.94% accuracy. Key insights guide marketing strategy. Visuals and reports included.",
      link: "https://github.com/anurudhba21/Edutech-lead-convertion-"
    },
    {
      title: "Spotify Trend Analysis",
      description: "Analyzed global Spotify streaming data using Excel and Tableau. Identified top artists, tracks, and country-wise trends. Created interactive dashboards and uncovered insights into user behavior, peak streaming periods, and future growth opportunities.",
      link: "https://github.com/anurudhba21/sportify-trend-analysis-"
    }
  ],
  skills: [
    {
      category: "Data Analysis & Reporting",
      icon: "fas fa-chart-line",
      items: ["Excel", "Power Query", "DAX Calculation"],
      levels: [90, 85, 80]
    },
    {
      category: "Business Intelligence & Data Visualization",
      icon: "fas fa-chart-pie",
      items: ["Tableau", "Power BI"],
      levels: [85, 90]
    },
    {
      category: "Data Integration & Processing",
      icon: "fas fa-database",
      items: ["NumPy", "Pandas", "ETL"],
      levels: [75, 80, 70]
    },
    {
      category: "Data Visualization",
      icon: "fas fa-chart-bar",
      items: ["Matplotlib"],
      levels: [80]
    }
  ],
  certifications: [
    {
      name: "Agile Project Management with Jira Cloud",
      link: "https://www.linkedin.com/learning/certificates/1b0a7091f2fc8117db40c2957c3e3f58bb68802aa80c1fbf7096760e3d6261e0"
    },
    {
      name: "Lean Six Sigma Foundation",
      link: "https://www.linkedin.com/learning/certificates/62309fa422fdbf48f78cd08127919461c886887a3ffa5f0119557ca509d87531"
    },
    {
      name: "Business Analytics with Digital Marketing Program",
      link: "https://www.guvi.in/verify-certificate?id=77543xc9132ig3UoO2"
    },
    {
      name: "Watsonx.ai Sales Foundation",
      link: ""
    },
    {
      name: "Watsonx Assistant Sales Foundation",
      link: ""
    }
  ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize scroll events
  initScroll();
  
  // Initialize animations
  initAnimations();
  
  // Initialize chatbot
  initChatbot();
  
  // Initialize contact form
  initContactForm();
  
  // Initialize skill animations
  initSkillAnimations();
  
  // Initialize certifications slider
  initCertificationsSlider();
  
  // Add theme toggle
  initThemeToggle();
  
  // Initialize typing effect
  initTypingEffect();
  
  // Initialize counters
  initCounters();
});

// Scroll functions
function initScroll() {
  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
    
    // Add navbar active class on scroll
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Add active class to menu items based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if(window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbarLinks = document.getElementById('navbar-links');
        navbarLinks.classList.remove('active');
      }
    });
  });
}

// Animation functions
function initAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const slideElements = document.querySelectorAll('.slide-in');
  
  function checkInView() {
    const windowHeight = window.innerHeight;
    const windowTop = window.pageYOffset;
    const windowBottom = windowTop + windowHeight;
    
    // Check fade animations
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + windowTop;
      const elementBottom = elementTop + element.offsetHeight;
      
      if (elementBottom > windowTop && elementTop < windowBottom) {
        element.classList.add('show');
      }
    });
    
    // Check slide animations
    slideElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + windowTop;
      const elementBottom = elementTop + element.offsetHeight;
      
      if (elementBottom > windowTop && elementTop < windowBottom) {
        element.classList.add('show');
      }
    });
  }
  
  // Initial check
  checkInView();
  
  // Check on scroll
  window.addEventListener('scroll', checkInView);
}

// Enhanced chatbot functions
function initChatbot() {
  // Add greeting message
  setTimeout(() => {
    const chatBody = document.getElementById('chat-body');
    const greeting = document.createElement('div');
    greeting.className = 'chat-message bot';
    greeting.innerHTML = getBotGreeting();
    chatBody.appendChild(greeting);
  }, 500);
  
  // Toggle chat visibility
  function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.toggle('active');
  }
  
  document.querySelector('.chat-toggle-btn').addEventListener('click', toggleChat);
  document.querySelector('.chat-toggle').addEventListener('click', toggleChat);
  
  // Send message function
  window.sendMessage = function() {
    const userInput = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    
    if (!userInput.value.trim()) return;
    
    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = userInput.value;
    chatBody.appendChild(userMessage);
    
    // Clear input
    const message = userInput.value;
    userInput.value = '';
    
    // Show typing indicator
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.style.display = 'flex';
    
    // Simulate typing delay
    setTimeout(() => {
      // Hide typing indicator
      typingIndicator.style.display = 'none';
      
      // Get chatbot's response
      const botResponse = chatbotResponse(message);
      
      // Display chatbot's response
      const botMessage = document.createElement('div');
      botMessage.className = 'chat-message bot';
      
      // Check if response contains HTML tags
      if (/<[a-z][\s\S]*>/i.test(botResponse)) {
        botMessage.innerHTML = botResponse;
      } else {
        botMessage.textContent = botResponse;
      }
      
      chatBody.appendChild(botMessage);
      
      // Add event listeners for any in-chat links
      botMessage.querySelectorAll('a.chat-section-link').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
            
            // Highlight the section briefly
            targetElement.classList.add('highlight');
            setTimeout(() => {
              targetElement.classList.remove('highlight');
            }, 1500);
            
            // Close chat after navigation
            document.getElementById('chat-container').classList.remove('active');
          }
        });
      });
      
      // Scroll to bottom
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds for more natural feeling
  };
  
  // Suggested questions
  window.askQuestion = function(question) {
    document.getElementById('user-input').value = question;
    sendMessage();
  };
  
  // Set up event listeners
  document.querySelector('.chat-input button').addEventListener('click', sendMessage);
  document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Set up suggested questions
  document.querySelectorAll('.chat-suggestions button').forEach(button => {
    button.addEventListener('click', function() {
      askQuestion(this.textContent);
    });
  });
}

// Get Bot Greeting
function getBotGreeting() {
  const hour = new Date().getHours();
  let greeting = '';
  
  if (hour < 12) {
    greeting = 'Good morning!';
  } else if (hour < 18) {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }
  
  return `
    <div class="chat-greeting">
      <strong>${greeting}</strong> I'm Ruth, ${resumeData.name}'s personal assistant. 
      I can help you explore information about Anurudh's background and expertise. 
      What would you like to know?
    </div>
    <div class="chat-suggestions-inline">
      <button onclick="askQuestion('Tell me about your education')">Education</button>
      <button onclick="askQuestion('What experience do you have?')">Experience</button>
      <button onclick="askQuestion('What projects have you worked on?')">Projects</button>
      <button onclick="askQuestion('What skills do you have?')">Skills</button>
    </div>
  `;
}

// Enhanced chatbot response logic
function chatbotResponse(userInput) {
  const input = userInput.toLowerCase();
  
  // Create internal links to sections
  const createSectionLink = (sectionId, text) => {
    return `<a href="#${sectionId}" class="chat-section-link">${text}</a>`;
  };
  
  const responses = {
    // Education response with links
    education: `
      <div class="chat-section-response">
        <div class="chat-section-header">
          <i class="fas fa-graduation-cap"></i>
          <strong>Education Background:</strong>
        </div>
        ${resumeData.education.map(edu => `
          <div class="chat-education-item">
            <div class="chat-education-content">
              <div class="chat-education-degree">${edu.degree}</div>
              <div class="chat-education-institution">${edu.institution}</div>
              <div class="chat-education-year">${edu.year}</div>
              ${edu.achievements ? `
                <ul class="chat-achievement-list">
                  ${edu.achievements.map(achievement => `
                    <li>${achievement}</li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          </div>
        `).join('')}
        <div class="chat-section-link-container">
          View more details in the ${createSectionLink('education', 'Education Section')}
        </div>
      </div>
    `,
      
    // Experience response with links
    experience: `
      <div class="chat-section-response">
        <div class="chat-section-header">
          <i class="fas fa-briefcase"></i>
          <strong>Professional Experience:</strong>
        </div>
        ${resumeData.experience.map(exp => `
          <div class="chat-experience-item">
            <div class="chat-experience-header">
              <strong>${exp.role}</strong> at <em>${exp.company}</em>
              <div class="chat-duration">${exp.duration}</div>
            </div>
            <ul class="chat-experience-list">
              ${exp.responsibilities.slice(0, 2).map(resp => `
                <li>
                  <i class="fas fa-check-circle"></i>
                  <span>${resp}</span>
                </li>
              `).join('')}
            </ul>
            ${exp.useCases ? `
              <div class="chat-use-cases">
                <strong>Key Use Cases:</strong>
                <div class="chat-use-cases-grid">
                  ${exp.useCases.slice(0, 3).map(uc => `
                    <div class="chat-use-case-item">
                      <i class="fas fa-circle"></i>
                      <span>${uc}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
        <div class="chat-section-link-container">
          View more details in the ${createSectionLink('experience', 'Experience Section')}
        </div>
      </div>
    `,
      
    // Projects response with links
    projects: `
      <div class="chat-section-response">
        <div class="chat-section-header">
          <i class="fas fa-project-diagram"></i>
          <strong>Projects:</strong>
        </div>
        ${resumeData.projects.map(project => `
          <div class="chat-project-item">
            <div class="chat-project-title">${project.title}</div>
            <div class="chat-project-description">${project.description}</div>
            <div class="chat-project-links">
              <a href="${project.link}" target="_blank" class="chat-project-link">
                <i class="fas fa-external-link-alt"></i>
                View Project
              </a>
            </div>
          </div>
        `).join('')}
        <div class="chat-section-link-container">
          View more details in the ${createSectionLink('projects', 'Projects Section')}
        </div>
      </div>
    `,
      
    // Skills response with links
    skills: `
      <div class="chat-section-response">
        <div class="chat-section-header">
          <i class="fas fa-tools"></i>
          <strong>Skills:</strong>
        </div>
        <div class="chat-skills-container">
          ${resumeData.skills.map(skill => `
            <div class="chat-skill-category">
              <div class="chat-skill-category-header">
                <i class="${skill.icon}"></i>
                <strong>${skill.category}</strong>
              </div>
              <div class="chat-skill-items">
                ${skill.items.map((item, index) => `
                  <div class="chat-skill-item">
                    <span class="chat-skill-name">${item}</span>
                    <div class="chat-skill-level-container">
                      <div class="chat-skill-level" style="width: ${skill.levels[index]}%"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="chat-section-link-container">
          View more details in the ${createSectionLink('skills', 'Skills Section')}
        </div>
      </div>
    `,
      
    // Certifications response with links
    certifications: `
      <div class="chat-section-response">
        <div class="chat-section-header">
          <i class="fas fa-certificate"></i>
          <strong>Certifications:</strong>
        </div>
        <div class="chat-certifications-list">
          ${resumeData.certifications.map(cert => `
            <div class="chat-certification-item">
              <i class="fas fa-award"></i>
              <span>${cert.name}</span>
              ${cert.link ? `
                <a href="${cert.link}" target="_blank" class="chat-cert-link">
                  <i class="fas fa-external-link-alt"></i>
                  View Credential
                </a>
              ` : ''}
            </div>
          `).join('')}
        </div>
        <div class="chat-section-link-container">
          View more details in the ${createSectionLink('certifications', 'Certifications Section')}
        </div>
      </div>
    `,
    
    // Contact information with links
    contact: `
      <div class="chat-section-response">
        <div class="chat-section-header">
          <i class="fas fa-address-card"></i>
          <strong>Contact Information:</strong>
        </div>
        <div class="chat-contact-grid">
          <div class="chat-contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:${resumeData.email}">${resumeData.email}</a>
          </div>
          <div class="chat-contact-item">
            <i class="fas fa-phone"></i>
            <a href="tel:${resumeData.phone}">${resumeData.phone}</a>
          </div>
          <div class="chat-contact-item">
            <i class="fab fa-linkedin-in"></i>
            <a href="${resumeData.linkedin}" target="_blank">LinkedIn Profile</a>
          </div>
          <div class="chat-contact-item">
            <i class="fab fa-github"></i>
            <a href="${resumeData.github}" target="_blank">GitHub Profile</a>
          </div>
        </div>
        <div class="chat-section-link-container">
          Get in touch through the ${createSectionLink('contact', 'Contact Form')}
        </div>
      </div>
    `,
    
    // Summary/About response
    about: `
      <div class="chat-section-response">
        <div class="chat-section-header">
          <i class="fas fa-user"></i>
          <strong>About ${resumeData.name}:</strong>
        </div>
        <div class="chat-about-content">
          <p>${resumeData.summary}</p>
          <p>As a ${resumeData.title}, Anurudh has experience with various data analysis tools and technologies.</p>
        </div>
        <div class="chat-section-link-container">
          Learn more in the ${createSectionLink('home', 'About Section')}
        </div>
      </div>
    `,
    
    // Name response
    name: `My name is <strong>${resumeData.name}</strong>. I'm a ${resumeData.title}.`,
    
    // Greeting response
    greeting: `
      <div class="chat-greeting">
        Hi there! I'm Ruth, ${resumeData.name}'s personal assistant. 
        I can help you explore information about Anurudh's background and expertise. 
        What would you like to know?
      </div>
      <div class="chat-suggestions-inline">
        <button onclick="askQuestion('Tell me about yourself')">About</button>
        <button onclick="askQuestion('What experience do you have?')">Experience</button>
        <button onclick="askQuestion('What projects have you worked on?')">Projects</button>
        <button onclick="askQuestion('How can I contact you?')">Contact</button>
      </div>
    `,
    
    // Help response
    help: `
      <div class="chat-help">
        <div class="chat-section-header">
          <i class="fas fa-question-circle"></i>
          <strong>How can I help you?</strong>
        </div>
        <p>You can ask me about Anurudh's:</p>
        <div class="chat-help-grid">
          <div class="chat-help-item">
            <i class="fas fa-user"></i>
            <button onclick="askQuestion('Tell me about yourself')">Background</button>
          </div>
          <div class="chat-help-item">
            <i class="fas fa-graduation-cap"></i>
            <button onclick="askQuestion('What is your education?')">Education</button>
          </div>
          <div class="chat-help-item">
            <i class="fas fa-briefcase"></i>
            <button onclick="askQuestion('Tell me about your experience')">Experience</button>
          </div>
          <div class="chat-help-item">
            <i class="fas fa-project-diagram"></i>
            <button onclick="askQuestion('What projects have you worked on?')">Projects</button>
          </div>
          <div class="chat-help-item">
            <i class="fas fa-tools"></i>
            <button onclick="askQuestion('What skills do you have?')">Skills</button>
          </div>
          <div class="chat-help-item">
            <i class="fas fa-certificate"></i>
            <button onclick="askQuestion('What certifications do you have?')">Certifications</button>
          </div>
          <div class="chat-help-item">
            <i class="fas fa-envelope"></i>
            <button onclick="askQuestion('How can I contact you?')">Contact Info</button>
          </div>
        </div>
      </div>
    `,
    
    // Default response
    default: `
      <div class="chat-default">
        <p>I'm sorry, I don't understand that question. Here are some things you can ask about:</p>
        <div class="chat-suggestions-inline">
          <button onclick="askQuestion('Tell me about yourself')">About</button>
          <button onclick="askQuestion('What is your education?')">Education</button>
          <button onclick="askQuestion('Tell me about your experience')">Experience</button>
          <button onclick="askQuestion('What skills do you have?')">Skills</button>
          <button onclick="askQuestion('What certifications do you have?')">Certifications</button>
          <button onclick="askQuestion('How can I contact you?')">Contact</button>
        </div>
      </div>
    `
  };

  // Determine the response based on user input
  if (input.includes('education') || input.includes('study') || input.includes('degree') || input.includes('college') || input.includes('university')) {
    return responses.education;
  } else if (input.includes('experience') || input.includes('work') || input.includes('job') || input.includes('career') || input.includes('professional')) {
    return responses.experience;
  } else if (input.includes('skill') || input.includes('ability') || input.includes('expertise') || input.includes('know')) {
    return responses.skills;
  } else if (input.includes('certification') || input.includes('cert') || input.includes('qualification') || input.includes('courses')) {
    return responses.certifications;
  } else if (input.includes('project') || input.includes('portfolio') || input.includes('showcase') || input.includes('work')) {
    return responses.projects;
  } else if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('linkedin') || input.includes('github') || input.includes('reach')) {
    return responses.contact;
  } else if (input.includes('about') || input.includes('who') || input.includes('background') || input.includes('tell me about') || input.includes('yourself')) {
    return responses.about;
  } else if (input.includes('name') || input.includes('who are you')) {
    return responses.name;
  } else if (input.includes('hi') || input.includes('hello') || input.includes('hey') || input.includes('greetings')) {
    return responses.greeting;
  } else if (input.includes('help') || input.includes('what can you') || input.includes('how to') || input.includes('what should') || input.includes('options')) {
    return responses.help;
  } else {
    return responses.default;
  }
}

// Contact form functions
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Validate form
      if (!validateForm(name, email, message)) {
        return;
      }
      
      // Here you would typically send the form data to a server
      // For now, we'll just show a success message
      showAlert(`Thank you ${name}! Your message has been sent successfully. I will get back to you soon.`, 'success');
      
      // Reset form
      contactForm.reset();
    });
  }
}

// Form validation
function validateForm(name, email, message) {
  // Simple validation
  if (name.trim() === '') {
    showAlert('Please enter your name.', 'error');
    return false;
  }
  
  if (email.trim() === '') {
    showAlert('Please enter your email.', 'error');
    return false;
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showAlert('Please enter a valid email address.', 'error');
    return false;
  }
  
  if (message.trim() === '') {
    showAlert('Please enter your message.', 'error');
    return false;
  }
  
  return true;
}

// Show alert function with improved animation
function showAlert(message, type) {
  // Remove any existing alerts
  const existingAlerts = document.querySelectorAll('.alert');
  existingAlerts.forEach(alert => {
    document.body.removeChild(alert);
  });
  
  // Create new alert
  const alertBox = document.createElement('div');
  alertBox.className = `alert alert-${type}`;
  
  // Add icon based on alert type
  const icon = document.createElement('i');
  if (type === 'success') {
    icon.className = 'fas fa-check-circle';
  } else if (type === 'error') {
    icon.className = 'fas fa-exclamation-circle';
  } else if (type === 'info') {
    icon.className = 'fas fa-info-circle';
  } else if (type === 'warning') {
    icon.className = 'fas fa-exclamation-triangle';
  }
  
  // Create message element
  const messageElement = document.createElement('span');
  messageElement.textContent = message;
  
  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className = 'alert-close';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    alertBox.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 300);
  });
  
  // Append elements to alert box
  alertBox.appendChild(icon);
  alertBox.appendChild(messageElement);
  alertBox.appendChild(closeButton);
  
  // Add to DOM
  document.body.appendChild(alertBox);
  
  // Show alert with animation
  setTimeout(() => {
    alertBox.classList.add('show');
  }, 10);
  
  // Auto dismiss after 5 seconds
  setTimeout(() => {
    if (document.body.contains(alertBox)) {
      alertBox.classList.remove('show');
      setTimeout(() => {
        if (document.body.contains(alertBox)) {
          document.body.removeChild(alertBox);
        }
      }, 300);
    }
  }, 5000);
}

// Toggle mobile navigation
function toggleNav() {
  const navbarLinks = document.getElementById('navbar-links');
  navbarLinks.classList.toggle('active');
}

// Initialize skill animations
function initSkillAnimations() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  function animateSkills() {
    skillItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight) && (rect.bottom >= 0);
      
      if (isVisible) {
        item.classList.add('animate');
      }
    });
  }
  
  // Initial check
  animateSkills();
  
  // Check on scroll
  window.addEventListener('scroll', animateSkills);
}

// Initialize certifications slider
function initCertificationsSlider() {
  const slider = document.querySelector('.certifications-slider');
  if (!slider) return;
  
  let isDown = false;
  let startX;
  let scrollLeft;
  
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}

// Initialize theme toggle
function initThemeToggle() {
  const themeToggle = document.createElement('div');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(themeToggle);
  
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
}

// Initialize typing effect
function initTypingEffect() {
  const elements = document.querySelectorAll('.typing-effect');
  
  elements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
  });
}

// Initialize counters
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  
  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animateCounters, 1);
      } else {
        counter.innerText = target;
      }
    });
  }
  
  // Start animation when counters are in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}