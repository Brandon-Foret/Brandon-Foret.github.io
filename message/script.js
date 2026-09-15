const API_URL =
  "https://yap.kitty.miloashwolf.gay"; //i fixed it yw :3

const messageInput = document.getElementById("message");
const sendButton = document.getElementById("sendButton");
const status = document.getElementById("status");

async function sendMessage() {
  const message = messageInput.value.trim();
  status.textContent = "";
  status.className = "";

  if (message === "") {
    status.textContent = "Please type a message.";
    status.className = "error";

    return;
  }

  sendButton.disabled = true;
  sendButton.textContent = "Sending...";

  try {
    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: message,
      }),
    });

    if (response.ok) {
      status.textContent = "Message sent!";
      status.className = "success";
      messageInput.value = "";
    } else if (response.status === 404) {
      status.textContent =
        "The Webhook Is Either Deleted Or Unavalible, Please Contact Me On My Discord On The Links Or My Twitter.";
      status.className = "error";
    } else if (response.status === 429) {
      status.textContent = "The Webhook Is Currently Rate Limited!";
      status.className = "error";
    }
  } catch (error) {
    console.error(error);

    status.textContent = "There Was An Issue Connecting Too Discord.";
    status.className = "error";
  }

  sendButton.disabled = false;
  sendButton.textContent = "Send Message";
}

sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "Enter") {
    sendMessage();
  }
});
