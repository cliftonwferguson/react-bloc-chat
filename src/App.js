import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWLBiSoaq8YaMw4IomVYtuYQunH_oz2oo",
    authDomain: "bloc-chat-7beaa.firebaseapp.com",
    databaseURL: "https://bloc-chat-7beaa.firebaseio.com",
    projectId: "bloc-chat-7beaa",
    storageBucket: "bloc-chat-7beaa.appspot.com",
    messagingSenderId: "146798977073"
  };
  firebase.initializeApp(config);




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeRoom: null,
    };
  }

  handleClick (room) {
   this.setState({
     activeRoom: room,
     console.log('Hello'),
   })
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setroom= {(e) => this.handleClick (e)}/>
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom} setroom= {(e) => this.handleClick (e)} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
