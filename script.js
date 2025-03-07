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
        "Leveraged expertise in IBM products like Watsonx and Cognos."
      ]
    },
    {
      role: "Data Annotator Intern",
      company: "Lesoko Technology",
      duration: "August 2023 - October 2023",
      responsibilities: [
        "Worked on solar panel image annotation and object detection.",
        "Utilized libraries like NumPy, Pandas, and Matplotlib."
      ]
    }
  ],
  skills: [
    "Data Analysis & Reporting",
    "Business Intelligence & Data Visualization",
    "Data Integration & Processing"
  ],
  certifications: [
    "Agile Project Management with Jira Cloud",
    "Lean Six Sigma Foundation",
    "Watsonx.ai Sales Foundation"
  ]
};

// Chatbot response logic
function chatbotResponse(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes("education")) {
    return resumeData.education.map(edu => `${edu.degree} from ${edu.institution} (${edu.year})`).join("\n");
  } else if (input.includes("experience")) {
    return resumeData.experience.map(exp => `${exp.role} at ${exp.company} (${exp.duration}): ${exp.responsibilities.join(", ")}`).join("\n");
  } else if (input.includes("skills")) {
    return resumeData.skills.join(", ");
  } else if (input.includes("certifications")) {
    return resumeData.certifications.join(", ");
  } else if (input.includes("name")) {
    return `My name is ${resumeData.name}.`;
  } else if (input.includes("hi") || input.includes("hello")) {
    return "Hi! I'm Ruth, your resume assistant. Ask me anything about Anurudh's background.";
  } else {
    return "I'm sorry, I don't understand that question. Please ask about my education, experience, skills, or certifications.";
  }
}

// Send message function
function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatBody = document.getElementById("chat-body");

  // Display user's message
  const userMessage = document.createElement("div");
  userMessage.className = "chat-message user";
  userMessage.textContent = userInput;
  chatBody.appendChild(userMessage);

  // Clear input
  document.getElementById("user-input").value = "";

  // Show typing indicator
  const typingIndicator = document.getElementById("typing-indicator");
  typingIndicator.style.display = "flex";

  // Simulate typing delay
  setTimeout(() => {
    // Hide typing indicator
    typingIndicator.style.display = "none";

    // Get chatbot's response
    const botResponse = chatbotResponse(userInput);

    // Display chatbot's response
    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot";
    botMessage.textContent = botResponse;
    chatBody.appendChild(botMessage);

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1500); // 1.5 seconds delay
}

// Suggested questions
function askQuestion(question) {
  document.getElementById("user-input").value = question;
  sendMessage();
}

// Toggle chat visibility
function toggleChat() {
  const chatContainer = document.getElementById("chat-container");
  chatContainer.classList.toggle("active");
}

// Greet user when chat is opened
function greetUser() {
  const chatBody = document.getElementById("chat-body");
  const botMessage = document.createElement("div");
  botMessage.className = "chat-message bot";
  botMessage.textContent = "Hi! I'm Ruth, your resume assistant. Ask me anything about Anurudh's background.";
  chatBody.appendChild(botMessage);
}

// Initialize chatbot
function initChatbot() {
  const chatContainer = document.getElementById("chat-container");
  chatContainer.classList.add("active");
  greetUser();
}

// Initialize chatbot when the page loads
window.onload = initChatbot;