import React, { Component } from 'react';
class User extends Component {

componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
  this.props.setUser(user);
});
}

handleSignIn() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );

}

handleLogOut() {
  this.props.firebase.auth().signOut();

}


  render() {
    return(

      <div>
      <header>{this.props.user ? this.props.user.displayName : "Guest"} </header>
    <button onClick={this.handleSignIn.bind(this)}>Login
    </button>

    <button onClick={this.handleLogOut.bind(this)}>Log Out
    </button>

    </div>

  )
  }

}
export default User;
