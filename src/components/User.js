import React, { Component } from 'react';
class User extends Component {

  <button onClick={handleSignIn}>
  
</button>

  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );

}
export default User;
