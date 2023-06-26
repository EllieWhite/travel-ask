const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const addBtn = document.querySelector('.button-submit')
const textarea = document.querySelectorAll('.chat__textarea')
const chat1 = document.querySelector('.chat1')
const chat2 = document.querySelector('.chat2')
const lists = document.querySelectorAll('.list')
const chatWithUser = document.getElementById('chatWithUser')
const chatWithAdmin = document.getElementById('chatWithAdmin')
let messagesData = {}
const state = {}
let value 


chat1.addEventListener('input', e => {
  value = e.target.value
  state['writer'] = 'chat1'
});

chat2.addEventListener('input', e => {
  value = e.target.value
  state['writer'] = 'chat2'
});

function writeMessage(userId, time, message, avatar) {

  messages_count = Object.keys(messagesData).length

  if (messages_count == 0) {
    messagesData[1] = {"userId": userId, "time": time, "message": message, "avatar": avatar}

  }else {
    messagesData[messages_count+1] = {"userId": userId, "time": time, "message": message, "avatar": avatar}
  }
  
}

function readMessage() {
  let last_message = Object.keys(messagesData)[Object.keys(messagesData).length-1];
  const userId = messagesData[last_message].userId
  const time = messagesData[last_message].time
  const message = messagesData[last_message].message
  const avatar = messagesData[last_message].avatar
  
  const container = document.createElement('div')
  const newMassageItem = document.createElement('div')
  newMassageItem.classList.add('chat__message')

  const newAvatarItem = document.createElement('img')
  newAvatarItem.classList.add('chat__image')
  newAvatarItem.src = avatar;


  const newTextItem = document.createElement('p')
  newTextItem.classList.add('chat__text')

  const newTimeItem = document.createElement('time')
  newTimeItem.classList.add('chat__time')
  newTimeItem.innerHTML = time;

  newTextItem.textContent = message

  newMassageItem.appendChild( newAvatarItem);
  container.appendChild(newTextItem);
  newMassageItem.appendChild(container);
  container.appendChild(newTimeItem);

  if (userId == 1){
    chatWithAdmin.appendChild(newMassageItem);
  
  }else{

    chatWithUser.appendChild(newMassageItem);  
 
  }
  newMassageItem.classList.add('is-incoming')
}

function createMessage(chat) {
  
  const container = document.createElement('div')
  const newMassageItem = document.createElement('div')
  newMassageItem.classList.add('chat__message')

  // time
  let today = new Date();
  let now = "Сегодня в  " + today.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const newAvatarItem = document.createElement('img')
  newAvatarItem.classList.add('chat__image')
  if (chat === "chat1") {
    newAvatarItem.src = './img/avatar/avatar-1@1x.png';
  } else {
    newAvatarItem.src = './img/avatar/avatar-2@1x.png';
  }

  const newTextItem = document.createElement('p')
  newTextItem.classList.add('chat__text')

  const newTimeItem = document.createElement('time')
  newTimeItem.classList.add('chat__time')
  newTimeItem.innerHTML = now;

  newTextItem.textContent = value

  newMassageItem.appendChild( newAvatarItem);
  container.appendChild(newTextItem);
  newMassageItem.appendChild(container);
  container.appendChild(newTimeItem);
  if (chat == 'chat1'){
    chatWithUser.appendChild(newMassageItem);
    writeMessage(1, now, value, './img/avatar/avatar-1@1x.png')
    chat1.value = ''
    readMessage()

  } else{
    writeMessage(2, now, value, './img/avatar/avatar-2@1x.png')
    chatWithAdmin.appendChild(newMassageItem);
    chat2.value = ''
    readMessage()
  }
}

function printMessage() {

  if(state['writer'] == 'chat1'){
      createMessage('chat1')
  } else {
      createMessage('chat2')
      
  }
}

button1.addEventListener('click', printMessage);
button2.addEventListener('click', printMessage);

chat1.addEventListener( 'keyup', event => {
  if( event.code === 'Enter' ) printMessage();
});


chat2.addEventListener( 'keyup', event => {
  if( event.code === 'Enter' ) printMessage();
});


//изменяет размер поля ввода
for (let cols of textarea) {
  cols.onfocus = () => {
    cols.rows = 4
  }
  
  cols.onblur = () => {
    cols.rows = 1
  }
}
