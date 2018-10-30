import React, { Component } from 'react';
class MessageList extends Component {

  constructor(props) {
    super(props)
    this.state={
      message: [],
      newmessage:''
    };

 this.messageRef = this.props.firebase.database().ref('Message');
}

 componentDidMount() {
   this.messageRef.on('child_added', snapshot => {
     const message = snapshot.val();
     message.key = snapshot.key;
     this.setState ({message: this.state.message.concat( message ) })
   });
 }

 render() {
  return(
    <div>
     <ul>{this.state.message.filter( message => message.roomId === this.props.activeRoom.id).map( message => <li>{message.roomId} :: {message.content}</li>)}</ul>
  </div>

  );

 }

}
export default MessageList;
