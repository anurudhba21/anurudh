// Resume data
const resumeData = {
  name: "Anurudh B.A.",
  education: [
    {
      degree: "MBA in Business Analytics",
      institution: "SRM Institute of Science and Technology",
      year: "2023"
    },
    {
      degree: "BSc in Computer Science",
      institution: "SRM Institute of Science and Technology",
      year: "2018"
    }
  ],
  experience: [
    {
      role: "Customer Success Executive",
      company: "SBA Info Solution",
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
      duration: "August 2023 - October 2023",
      responsibilities: [
        "Worked on solar panel image annotation and object detection.",
        "Utilized libraries like NumPy, Pandas, and Matplotlib.",
        "Documented annotation procedures and results.",
        "Trained data using deep learning techniques."
      ]
    }
  ],
  skills: [
    {
      category: "Data Analysis & Reporting",
      items: ["Excel", "Power Query", "DAX Calculation"],
      levels: [90, 85, 80]
    },
    {
      category: "Business Intelligence & Data Visualization",
      items: ["Tableau", "Power BI"],
      levels: [85, 90]
    },
    {
      category: "Data Integration & Processing",
      items: ["NumPy", "Pandas", "ETL"],
      levels: [75, 80, 70]
    },
    {
      category: "Data Visualization",
      items: ["Matplotlib"],
      levels: [80]
    }
  ],
  certifications: [
    "Agile Project Management with Jira Cloud",
    "Lean Six Sigma Foundation",
    "Watsonx.ai Sales Foundation",
    "Watsonx Assistant Sales Foundation",
    "Business Analytics with Digital Marketing Program"
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
  
  function checkFade() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('show');
      }
    });
  }
  
  // Initial check
  checkFade();
  
  // Check on scroll
  window.addEventListener('scroll', checkFade);
}

// Chatbot functions
function initChatbot() {
  // Toggle chat visibility
  function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.toggle('active');
  }
  
  document.querySelector('.chat-toggle-btn').addEventListener('click', toggleChat);
  document.querySelector('.chat-toggle').addEventListener('click', toggleChat);
  
  // Send message function
  function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    
    if (!userInput.value.trim()) return;
    
    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = userInput.value;
    chatBody.appendChild(userMessage);
    
    // Clear input
    userInput.value = '';
    
    // Show typing indicator
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.style.display = 'flex';
    
    // Simulate typing delay
    setTimeout(() => {
      // Hide typing indicator
      typingIndicator.style.display = 'none';
      
      // Get chatbot's response
      const botResponse = chatbotResponse(userMessage.textContent);
      
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
      
      // Scroll to bottom
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1500);
  }
  
  // Suggested questions
  function askQuestion(question) {
    document.getElementById('user-input').value = question;
    sendMessage();
  }
  
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

// Enhanced chatbot response logic
function chatbotResponse(userInput) {
  const input = userInput.toLowerCase();
  
  const responses = {
    education: `
      <strong>Education Background:</strong><br><br>
      ${resumeData.education.map(edu => `
        <div class="chat-education-item">
          <i class="fas fa-graduation-cap"></i>
          <div>
            <strong>${edu.degree}</strong><br>
            <em>${edu.institution}</em><br>
            <span class="chat-year">${edu.year}</span>
          </div>
        </div>
      `).join('<br>')}
    `,
      
    experience: `
      <strong>Professional Experience:</strong><br><br>
      ${resumeData.experience.map(exp => `
        <div class="chat-experience-item">
          <div class="chat-experience-header">
            <strong>${exp.role}</strong> at <em>${exp.company}</em><br>
            <span class="chat-duration">${exp.duration}</span>
          </div>
          <ul class="chat-experience-list">
            ${exp.responsibilities.map(resp => `
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
                ${exp.useCases.map(uc => `
                  <div class="chat-use-case-item">
                    <i class="fas fa-circle"></i>
                    <span>${uc}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div><br>
      `).join('')}
    `,
      
    skills: `
      <strong>Skills:</strong><br><br>
      <div class="chat-skills-container">
        ${resumeData.skills.map(skill => `
          <div class="chat-skill-category">
            <div class="chat-skill-category-header">
              <i class="fas fa-circle"></i>
              <strong>${skill.category}</strong>
            </div>
            <div class="chat-skill-list">
              ${skill.items.map((item, index) => `
                <div class="chat-skill-item">
                  <div class="chat-skill-name">${item}</div>
                  <div class="chat-skill-level">
                    <div class="chat-skill-progress" style="width: ${skill.levels[index]}%"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('<br>')}
      </div>
    `,
      
    certifications: `
      <strong>Certifications:</strong><br><br>
      <div class="chat-certifications-list">
        ${resumeData.certifications.map(cert => `
          <div class="chat-certification-item">
            <i class="fas fa-certificate"></i>
            <span>${cert}</span>
          </div>
        `).join('')}
      </div>
    `,
    
    name: `My name is <strong>${resumeData.name}</strong>.`,
    
    greeting: `
      Hi! I'm Ruth, your resume assistant. Ask me anything about:<br><br>
      <div class="chat-suggestions-inline">
        <button onclick="askQuestion('What is your education?')">Education</button>
        <button onclick="askQuestion('Tell me about your experience.')">Experience</button>
        <button onclick="askQuestion('What are your skills?')">Skills</button>
        <button onclick="askQuestion('What certifications do you have?')">Certifications</button>
      </div>
    `,
    
    default: `
      I'm sorry, I don't understand that question. Here are some things you can ask about:<br><br>
      <div class="chat-suggestions-inline">
        <button onclick="askQuestion('What is your education?')">Education</button>
        <button onclick="askQuestion('Tell me about your experience.')">Experience</button>
        <button onclick="askQuestion('What are your skills?')">Skills</button>
        <button onclick="askQuestion('What certifications do you have?')">Certifications</button>
      </div>
    `
  };

  if (input.includes('education') || input.includes('study') || input.includes('degree')) {
    return responses.education;
  } else if (input.includes('experience') || input.includes('work') || input.includes('job')) {
    return responses.experience;
  } else if (input.includes('skill') || input.includes('ability') || input.includes('expertise')) {
    return responses.skills;
  } else if (input.includes('certification') || input.includes('cert') || input.includes('qualification')) {
    return responses.certifications;
  } else if (input.includes('name') || input.includes('who are you')) {
    return responses.name;
  } else if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
    return responses.greeting;
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
      
      // Here you would typically send the form data to a server
      // For now, we'll just show a success message
      showAlert('Thank you for your message! I will get back to you soon.', 'success');
      
      // Reset form
      contactForm.reset();
    });
  }
}

// Show alert function
function showAlert(message, type) {
  const alertBox = document.createElement('div');
  alertBox.className = `alert alert-${type}`;
  alertBox.textContent = message;
  
  document.body.appendChild(alertBox);
  
  setTimeout(() => {
    alertBox.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    alertBox.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 300);
  }, 3000);
}

// Toggle mobile navigation
function toggleNav() {
  const navbarLinks = document.getElementById('navbar-links');
  navbarLinks.classList.toggle('active');
}