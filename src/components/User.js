import React, { Component } from 'react';
class User extends Component {

handleSignIn() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );

}

handleLogOut() {
  this.props.firebase.auth().signOut();
   console.log("hello")
}


  render() {
    return(
      <div>
    <button onClick={this.handleSignIn.bind(this)}>Login
    </button>

    <button onClick={this.handleLogOut.bind(this)}>Log Out
    </button>

    </div>

  )
  }

}
export default User;
