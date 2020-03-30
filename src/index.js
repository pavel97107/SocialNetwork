import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'

let dialogsData = [
    { id: 1, name: "Jack" },
    { id: 2, name: "Pavel" },
    { id: 3, name: "Jason" },
    { id: 4, name: "Stas" },
    { id: 5, name: "Dima" }
];

let messagesData = [
    { id: 1, message: "hi, how are you?" },
    { id: 2, message: "Hello world" },
    { id: 3, message: "Good Moorning" },
    { id: 4, message: "I can't believe" },
    { id: 5, message: "She is beaty" }
];

let posts = [
    { id: 1, message: "this is good", likeCount: 12 },
    { id: 2, message: "I am learn javascript", likeCount: 10 },
    { id: 2, message: "I am learn javascript", likeCount: 10 },
    { id: 2, message: "I am learn javascript", likeCount: 10 }
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
