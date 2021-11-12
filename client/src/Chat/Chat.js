import { Component } from "react";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCb3KQqbl84r10UuidrPh360fQcItVf5EE",
  authDomain: "chat-92553.firebaseapp.com",
  databaseURL: "https://chat-92553-default-rtdb.firebaseio.com",
  projectId: "chat-92553",
  storageBucket: "chat-92553.appspot.com",
  messagingSenderId: "686409659110",
  appId: "1:686409659110:web:7a79891c6fecebc500c127",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();

// get user's data
const username = prompt("Please Tell Us Your Name");

// submit form
// listen for submit event on the form and call the postChat function
// document.getElementById("message-form").addEventListener("submit", sendMessage);

// display the messages
// reference the collection created earlier
const fetchChat = db.ref("messages/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});
// send message to db
export default class Chat extends Component {
  sendMessage(e) {
    e.preventDefault();

    // get values to be submitted
    const timestamp = Date.now();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    // clear the input box
    messageInput.value = "";

    //auto scroll to bottom
    document
      .getElementById("messages")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    // create db collection and send in the data
    db.ref("messages/" + timestamp).set({
      username,
      message,
    });
  }

  render() {
    return (
      <div id="chat">
        <ul id="messages"></ul>

        <form id="message-form" onSubmit={this.sendMessage}>
          <input id="message-input" type="text" />
          <button id="message-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}
