var currentRole = "me"; // Default role

function setRole(role) {
  currentRole = role;
}

function sendMessage() {
  // Mendapatkan nilai dari textarea
  var message = document.getElementById("messageInput").value;

  // Mendapatkan elemen simpleChat
  var simpleChat = document.getElementById("simpleChat");

  // Membuat elemen chatBubble baru
  var newChatBubble = document.createElement("div");
  newChatBubble.className = "chat-bubble";

  // Mendapatkan waktu saat ini
  var currentTime = getCurrentTime();

  // Mengatur kelas chatBubble berdasarkan role
  if (currentRole === "me") {
    newChatBubble.classList.add("my-message");
  } else if (currentRole === "you") {
    newChatBubble.classList.add("your-message");
  }

  // Mengatur konten chatBubble baru
  newChatBubble.innerHTML = `
            <p>${currentRole.charAt(0).toUpperCase() + currentRole.slice(1)}</p>
            <p>${message}</p>
            <span>${currentTime}</span>
        `;

  // Menambahkan chatBubble baru ke dalam simpleChat
  simpleChat.appendChild(newChatBubble);

  // Membersihkan textarea setelah mengirim pesan
  document.getElementById("messageInput").value = "";
}

function getCurrentTime() {
  // Mendapatkan waktu saat ini
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Mengatur format waktu (HH:mm)
  var formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes;

  return formattedTime;
}
