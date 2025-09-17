

window.onload = function greet() {
    alert("Hello! I am an alert box!!");
}
greet();

document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

function getstock(id) {
    let check = document.getElementById(id).textContent;


    if (check.includes('In stock')) {
        alert("Item is in stock");
    } else {
        alert("Item is out of stock");
    }
}
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "") {
    alert("Please enter your name");
    return false;
  }

  if (email === "") {
    alert("Please enter your email");
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Email is not valid");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
function sendMessage() {
  let input = document.getElementById("user-input").value.toLowerCase();
  let chatLog = document.getElementById("chat-log");

  
  let userMsg = document.createElement("p");
  userMsg.textContent = "You: " + input;
  chatLog.appendChild(userMsg);

  
  let botResponse = getBotResponse(input);

  let botMsg = document.createElement("p");
  botMsg.textContent = "Bot: " + botResponse;
  chatLog.appendChild(botMsg);

  
  document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (input.includes("price")) {
    return "You can check our Products page for prices.";
  } else if (input.includes("contact")) {
    return "You can reach us at BSCS25130@itu.edu.pk.";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a nice day!";
  } else {
    return "Sorry, I don’t understand. Please try asking something else.";
  }
}

