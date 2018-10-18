import React, { Component } from 'react';
class RoomList extends Component {



 constructor (props) {
   super(props)
   this.state = {
     rooms: [],
     newRoom: ''
   };


    this.roomsRef = this.props.firebase.database().ref('rooms');
    }

    };


 componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
     const room = {name: snapshot.val(), key: snapshot.key}

     this.setState({ rooms: this.state.rooms.concat( room ) })
   });
 }

   handleChange(event) {
     this.setState({newRoom: event.target.value});

   }

   newChatRoom() {
     this.roomsRef.push({
       name. newRoom
   }

 render () {
   return (
     <form onSubmit={this.handleSubmit}>
     <label>
       Name:
       <input type="text" value={this.state.value} onChange={this.handleChange} />
     </label>
     <input type="submit" value="Submit" />
   </form>
     <ul>{this.state.rooms.map( (room) => (<li>{room.name}</li>))}</ul>
   )
     <input type="text" value{this.state.newRoom} onChange={this.handleChange} />
 }
}

export default RoomList;
