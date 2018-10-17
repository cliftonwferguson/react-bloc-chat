import React, { Component } from 'react';
class RoomList extends Component {



 constructor (props) {
   super(props)
   this.state = {
     rooms: []
   };


    this.roomsRef = this.props.firebase.database().ref('rooms');


 }


 componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
     const room = {name: snapshot.val(), key: snapshot.key}

     this.setState({ rooms: this.state.rooms.concat( room ) })
   });
 }
 render () {
   return (
     <ul>{this.state.rooms.map( (room) => return () )}</ul>
   )
 }
}

export default RoomList;
