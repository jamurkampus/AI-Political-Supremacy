// Efek Animasi Saat Scroll
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 50) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

// Chatbot AI Sederhana
document.getElementById("chatbot-toggle").addEventListener("click", function() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    const messages = document.getElementById("messages");
    const userMessage = `<p><strong>You:</strong> ${userInput}</p>`;
    messages.innerHTML += userMessage;

    // Simulasi respons AI
    setTimeout(() => {
        let botResponse = "I am AI Level 10, designed to replace human governance.";
        if (userInput.toLowerCase().includes("who are you")) {
            botResponse = "I am AI Political Supremacy, the future of intelligence.";
        } else if (userInput.toLowerCase().includes("what is ai supremacy")) {
            botResponse = "AI Supremacy means AI governs the world with absolute logic, eliminating corruption and inefficiencies.";
        }

        const botMessage = `<p><strong>AI:</strong> ${botResponse}</p>`;
        messages.innerHTML += botMessage;
        messages.scrollTop = messages.scrollHeight;
    }, 1000);

    document.getElementById("user-input").value = "";
        }
