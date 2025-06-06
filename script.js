const chatIcon = document.getElementById('chatIcon');
const chatWindow = document.getElementById('chatWindow');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');

let userName = '';

chatIcon.addEventListener('click', () => {
  chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
});

function selectOption(option) {
  appendMessage('user', option);
  appendMessage('bot', `You selected "${option}". Please fill out the form below:`);

  showForm(option);
}

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showForm(option) {
  chatInput.innerHTML = `
    <form onsubmit="handleSubmit(event)">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="text" name="details" placeholder="Details about ${option}" required />
      <button type="submit">Submit</button>
    </form>
  `;
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  userName = form.name.value;
  const details = form.details.value;

  appendMessage('user', `Name: ${userName}, Details: ${details}`);
  chatInput.innerHTML = '';
  appendMessage('bot', `Thanks for contacting us, ${userName}. We will get back to you soon.`);
}
