// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
// Global variables, if you need any, declared here
let question = 1;
// Functions declared here
const userReply = () => {
  showMessage(`${nameInput.value}`, "user")
}
const botReply = (botReply) => {
  showMessage(botReply, "bot");
}

const reason = () => {
  inputWrapper.innerHTML  = `
  <button class="send-btn" id="teeth-problem" type="submit">Problems with teeth</button>

  <button class="send-btn" id="eye-problem" type="submit">Problems with eyes</button>

  `
}
const clearInput = () =>  nameInput.value=""
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, "bot");
}
  // Just to check it out, change 'bot' to 'user' here 👆


  //EVENTLISTENER
    form.addEventListener("submit" , (event) => {
    event.preventDefault();
    const inputValue = nameInput.value;
    userReply();
    clearInput();
    botReply(`So ${inputValue}, what problems do you have?`)
    reason();
  })


// Conditional

// Timeout when website loads until first question
setTimeout(greeting, 1000);

// //SEND button pressed
// sendBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   nextQuestion(input.value);
// });