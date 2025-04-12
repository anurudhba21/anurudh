function chatbotResponse(userInput) {
  const chatBody = document.getElementById("chat-body");

  // Show typing indicator
  const typingIndicator = document.getElementById("typing-indicator");
  typingIndicator.style.display = 'flex';

  fetch("https://your-replit-name.repl.co/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question: userInput })
  })
  .then(response => response.json())
  .then(data => {
    typingIndicator.style.display = 'none';

    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot";
    botMessage.textContent = data.answer;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  })
  .catch(error => {
    typingIndicator.style.display = 'none';

    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot";
    botMessage.textContent = "Oops! The AI server didn’t respond.";
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  });
}
