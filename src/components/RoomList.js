import React, { Component } from 'react';
class RoomList extends Component {




constructor (props) {
  super(props)
  this.state = {
    rooms: [],
    newroom: ''
  };


   this.roomsRef = this.props.firebase.database().ref('rooms');
   }






componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = this.props.activeRoom.key;

    this.setState({ rooms: this.state.rooms.concat( room ) })
  });
}

  handleChange(event) {
    this.setState({newroom: event.target.value});

  }

  newChatRoom(event) {
    event.preventDefault();
    this.roomsRef.push({
      name: this.state.newroom
  });
  this.setState({newroom: ""});
}

render () {
  return (
   <div>
    <form onSubmit={(event) => this.newChatRoom(event)}>
    <label>
      Name:
      <input type="text"  value={this.state.newroom} placeholder="Chat room name" onChange={ this.handleChange.bind(this) } />
    </label>
    <input type="submit" value="Submit" />
  </form>
    <ul>{this.state.rooms.map( room => <li onClick={(e) => this.props.setroom(room)}>{room.name}</li>)}</ul>
   </div>
  );

}
}

export default RoomList;
