const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1547277222401015838/4EfaP8FtQQljjE6z%7C3Pu5%D1%833TdZ-bq%7C7YjXFLFgWmFdJPt2ao6sB_MivsCij29G_pEu7w"; // ik this is really insecure but i kinda dont care much, its supposed too just be a message system anyway, please dont nuke it <3

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
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        content: message,
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
