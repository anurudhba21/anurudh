document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Chatbot elements
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatInput = document.getElementById('chatInput');
    const sendMessageBtn = document.getElementById('sendMessage');
    const chatbotBadge = document.getElementById('chatbotBadge');

    let hasWelcomed = false;

    // Open chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.add('active');
        chatInput.focus();
        chatbotBadge.style.display = "none";
        if (!hasWelcomed) {
            addBotMessage("Hello! I'm your Assistant. Ask me about projects, experience, or skills.");
            hasWelcomed = true;
        }
    });

    // Keyboard accessibility for toggle
    chatbotToggle.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            chatbotToggle.click();
        }
    });

    // Close chatbot
    chatbotClose.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
        // Optionally clear chat history:
        // chatbotMessages.innerHTML = "";
    });

    // Send message
    sendMessageBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const msg = chatInput.value.trim();
        if (!msg) return;
        addUserMessage(msg);
        chatInput.value = "";
        findAnswer(msg);
    }

    function addUserMessage(msg) {
        const div = document.createElement('div');
        div.className = 'message user-message';
        div.innerHTML = msg;
        chatbotMessages.appendChild(div);
        scrollToBottom();
    }

    function addBotMessage(msg, quickReplies = []) {
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>`;
        chatbotMessages.appendChild(typing);
        scrollToBottom();
        setTimeout(() => {
            typing.remove();
            const div = document.createElement('div');
            div.className = 'message bot-message';
            div.innerHTML = msg;
            chatbotMessages.appendChild(div);

            if (quickReplies.length > 0) {
                const quickDiv = document.createElement('div');
                quickDiv.className = 'quick-questions';
                quickReplies.forEach(q => {
                    const btn = document.createElement('button');
                    btn.className = 'quick-question';
                    btn.textContent = q;
                    btn.onclick = () => {
                        addUserMessage(q);
                        findAnswer(q);
                    };
                    quickDiv.appendChild(btn);
                });
                chatbotMessages.appendChild(quickDiv);
            }
            scrollToBottom();
            // Show badge if chatbot is closed
            if (!chatbotContainer.classList.contains('active')) {
                chatbotBadge.style.display = "inline-block";
            }
        }, 900);
    }

    function findAnswer(question) {
        question = question.toLowerCase();
        let response = "I'm not sure I understand. Try asking about projects, skills, or education.";
        let quickReplies = ["What are your skills?", "Tell me about your experience", "Can I see your projects?"];
        for (const item of knowledgeBase) {
            if (new RegExp(item.question, 'i').test(question)) {
                response = item.answer;
                quickReplies = item.quickReplies || [];
                break;
            }
        }
        addBotMessage(response, quickReplies);
    }

    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Optional: Welcome after delay if opened and empty
    setTimeout(() => {
        if (chatbotContainer.classList.contains('active') && chatbotMessages.children.length === 0) {
            addBotMessage("Hi again! I'm your Assistant. Feel free to ask about background or projects.");
        }
    }, 3000);

    // Example knowledgeBase (customize as needed)
    const knowledgeBase = [
        {
            question: "hello|hi|hey",
            answer: "Hello! I'm your Assistant. How can I help you today?",
            quickReplies: ["What are your skills?", "Tell me about your experience", "Can I see your projects?"]
        },
        {
            question: "download resume|download cv",
            answer: `Here is my resume:<br>
                <a href="pdf/Anurudh_resume.pdf" target="_blank" class="btn-secondary">Download Resume (PDF)</a>`,
            quickReplies: ["What are your skills?", "Tell me about your experience", "Can I see your projects?"]
        },
        {
            question: "skills|expertise|tools",
            answer: "I am skilled in SQL, Power BI, Tableau, Excel, Power Query, DAX, VBA, Python, NumPy, Pandas, and Matplotlib.",
            quickReplies: ["Tell me about your experience", "Can I see your projects?", "Download Resume"]
        },
        {
            question: "experience|background|work",
            answer: "I have 2.10 years of experience in Business Operations, Data Analytics, and Reporting Automation. I have analyzed over 100K transactions and built dashboards tracking sales and KPIs.",
            quickReplies: ["What are your skills?", "Can I see your projects?", "Download Resume"]
        },
        {
            question: "projects|portfolio|samples",
            answer: "You can view my projects on my GitHub profile:<br><a href='https://github.com/anurudhba21' target='_blank' class='btn-secondary'>GitHub Projects</a>",
            quickReplies: ["What are your skills?", "Tell me about your experience", "Download Resume"]
        },
        {
            question: "contact|email|phone",
            answer: "You can contact me at <a href='mailto:anurudhba21@gmail.com'>anurudhba21@gmail.com</a> or call +91-9486873493.",
            quickReplies: ["Download Resume", "View LinkedIn", "What are your skills?"]
        },
        {
            question: "linkedin|profile|connect",
            answer: "Connect with me on LinkedIn:<br><a href='https://linkedin.com/in/anurudh-b-a-37b121139' target='_blank' class='btn-secondary'>LinkedIn Profile</a>",
            quickReplies: ["Download Resume", "View GitHub", "What are your skills?"]
        },
        {
            question: "certification|certifications|courses|training",
            answer: "I am certified in IBM Data Science, Power BI, and Advanced Excel. I have also completed courses in Python for Data Analysis and Business Intelligence.",
            quickReplies: ["Show education", "Download Resume", "What are your skills?"]
        },
        {
            question: "education|degree|college|university",
            answer: "I graduated with a Bachelor of Engineering in Electronics and Communication from Anna University.",
            quickReplies: ["Show certifications", "Download Resume", "What are your skills?"]
        },
        {
            question: "hobbies|interests|passion",
            answer: "I enjoy solving data puzzles, automating workflows, and learning new analytics tools. Outside work, I like cricket and photography.",
            quickReplies: ["Show projects", "Download Resume", "Contact info"]
        },
        {
            question: "strengths|qualities|why hire|unique",
            answer: "My strengths are analytical thinking, attention to detail, and the ability to automate repetitive tasks. I am proactive and always eager to learn.",
            quickReplies: ["Show experience", "Download Resume", "Show skills"]
        },
        {
            question: "tools|software|platforms",
            answer: "I work with SQL, Power BI, Tableau, Excel, Python, IBM Watsonx, and Google Data Studio.",
            quickReplies: ["Show projects", "Download Resume", "Show certifications"]
        },
        {
            question: "availability|join|notice|start",
            answer: "I am available to join immediately. Please contact me for further details.",
            quickReplies: ["Download Resume", "Contact info", "Show experience"]
        },
        {
            question: "achievements|awards|recognition",
            answer: "I received the 'Best Analyst' award for automating reporting processes and saving 40+ hours per month for my team.",
            quickReplies: ["Show experience", "Download Resume", "Show certifications"]
        },
        {
            question: "location|based|city|where",
            answer: "I am based in Chennai, India, but open to remote and relocation opportunities.",
            quickReplies: ["Contact info", "Download Resume", "Show experience"]
        },
        {
            question: "salary|ctc|expectation|package",
            answer: "My salary expectations are negotiable based on the role and responsibilities. Let's discuss further!",
            quickReplies: ["Download Resume", "Contact info", "Show experience"]
        },
        {
            question: "languages|communication|english|tamil|hindi",
            answer: "I am fluent in English and Tamil, and have basic proficiency in Hindi.",
            quickReplies: ["Download Resume", "Show education", "Contact info"]
        },
        {
            question: "job title|role|position",
            answer: "My current role is Business Analyst, specializing in data analytics and reporting automation.",
            quickReplies: ["Show experience", "Download Resume", "Show skills"]
        },
        {
            question: "industry|domain|sector",
            answer: "I have worked in the technology and business operations domain, focusing on analytics and automation.",
            quickReplies: ["Show projects", "Download Resume", "Show certifications"]
        },
        {
            question: "python|sql|power bi|tableau",
            answer: "I use Python for data analysis, SQL for database queries, Power BI and Tableau for interactive dashboards.",
            quickReplies: ["Show projects", "Download Resume", "Show skills"]
        },
        {
            question: "reporting|automation|dashboard",
            answer: "I have automated reporting processes and built dashboards to track KPIs, saving significant manual effort.",
            quickReplies: ["Show experience", "Download Resume", "Show projects"]
        },
        {
            question: "team|collaboration|leadership",
            answer: "I have collaborated with cross-functional teams and led initiatives to improve data-driven decision making.",
            quickReplies: ["Show experience", "Download Resume", "Show certifications"]
        },
        {
            question: "challenge|problem|solution",
            answer: "One challenge I solved was automating monthly sales reports, reducing turnaround time from 2 days to 2 hours.",
            quickReplies: ["Show projects", "Download Resume", "Show experience"]
        },
        {
            question: "future|goal|aspiration",
            answer: "My goal is to become a lead data analyst and drive business growth through advanced analytics.",
            quickReplies: ["Show skills", "Download Resume", "Show certifications"]
        },
        {
            question: "feedback|testimonial|reference",
            answer: "My managers have praised my attention to detail and ability to deliver actionable insights quickly.",
            quickReplies: ["Show experience", "Download Resume", "Contact info"]
        },
        {
            question: "availability|remote|relocation",
            answer: "I am open to remote work and relocation opportunities for the right role.",
            quickReplies: ["Contact info", "Download Resume", "Show experience"]
        },
        {
            question: "soft skills|communication|teamwork",
            answer: "I am a strong communicator, team player, and quick learner, always eager to take on new challenges.",
            quickReplies: ["Show experience", "Download Resume", "Show skills"]
        },
        {
            question: "interview|prepare|tips",
            answer: "For interviews, I recommend reviewing your projects, practicing common questions, and being confident in your skills.",
            quickReplies: ["Show projects", "Download Resume", "Show certifications"]
        },
        {
            question: "resume format|cv format|pdf",
            answer: `My resume is available in PDF format.<br>
        <a href="pdf/Anurudh_resume.pdf" target="_blank" class="btn-secondary">Download Resume (PDF)</a>`,
            quickReplies: ["Download Resume", "Show experience", "Show skills"]
        },
        {
            question: "contact|how to reach|get in touch",
            answer: "You can reach me at anurudhba21@gmail.com or via LinkedIn for any queries.",
            quickReplies: ["Download Resume", "Show LinkedIn", "Show projects"]
        }
        // Add more Q&A pairs as needed
    ];
});
