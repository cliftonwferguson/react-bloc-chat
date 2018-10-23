import React, { Component } from 'react';
class MessageList extends Component {

  constructor(props) {
    super(props)
    this.state={
      message: [];
      newmessage:"";
    };

 this.roomsRef = this.props.firebase.database().ref('rooms');
}

}
