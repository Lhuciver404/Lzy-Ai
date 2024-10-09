document.getElementById('send-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    if (!userInput.trim()) return;

    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';

    const typingBubble = appendTypingBubble();

    await fetchAIResponse(userInput, typingBubble);
});

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const bubbleElement = document.createElement('div');
    bubbleElement.classList.add(sender === 'user' ? 'bubble2' : 'bubble');
    bubbleElement.innerHTML = message;

    const avatar = document.createElement('img');
    avatar.src = 'path/to/avatar.jpg'; // Ganti dengan URL avatar
    avatar.classList.add('avatar');

    messageElement.appendChild(avatar);
    messageElement.appendChild(bubbleElement);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function appendTypingBubble() {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'ai'); // Pesan Kiri

    const bubbleElement = document.createElement('div');
    bubbleElement.classList.add('bubble');
    bubbleElement.innerHTML = `<div class="typing-bubble"></div>`;
    
    const avatar = document.createElement('img');
    avatar.src = 'path/to/avatar.jpg'; // Ganti dengan URL avatar
    avatar.classList.add('avatar');

    messageElement.appendChild(avatar);
    messageElement.appendChild(bubbleElement);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    return messageElement; // Ganti Pesan Lenwy
}

async function fetchAIResponse(message, typingBubble) {
    // (Sama dengan kode yang udah kita bahas sebelumnya)
}

document.getElementById('user-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});
