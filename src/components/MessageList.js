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

   newMessage(event) {
     event.preventDefault();
    this.messageRef.push({
      username: this.props.user.displayName,
      content: this.state.newMessage,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId: this.props.activeRoom.Key,
     });
     this.setState({newMessage: "" });
   }



 render() {
   console.log(this.state.message);
   console.log(this.state.message.filter( message => message.roomId === this.props.activeRoom.key));
   console.log(this.props.activeRoom);
  return(

    <div>
    <form onSubmit={(event) => this.newMessage(event)}>
     <label>
       Message:
         <textarea></textarea>
    </label>
        <input type='submit' />
    </form>
     <ul>{this.state.message.filter( message => message.roomId === this.props.activeRoom.key).map( message => <li>{message.content}</li>)}</ul>
  </div>

  );

 }

}
export default MessageList;
