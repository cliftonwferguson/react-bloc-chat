import React, { Component } from 'react';
class MessageList extends Component {

  constructor(props) {
    super(props)
    this.state={
      message: [],
      newMessage:''
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

 handleChange(event) {
   this.setState({newMessage: event.target.value});

 }

   newMessage(event) {
     event.preventDefault();
    this.messageRef.push({
      username: this.props.user.displayName,
      content: this.state.newMessage,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId: this.props.activeRoom.key,
     });
     this.setState({newMessage: "" });
   }



 render() {
   console.log(this.state.message);
   console.log(this.state.message.filter( message => message.roomId === this.props.activeRoom.key));
   console.log(this.props.activeRoom);
  return(

    <div>
    <input type="text" value={this.state.newMessage} placeholder="New Chat Message" onChange={this.handleChange.bind(this)} />
    <input type='submit' />

     <ul>{this.state.message.filter( message => message.roomId === this.props.activeRoom.key).map( message => <li>{message.content}</li>)}</ul>
  </div>

  );

 }

}
export default MessageList;
