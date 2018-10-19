import React, {
    Component
} from 'react';
class RoomList extends Component {



    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            newroom: ''
        };


        this.roomsRef = this.props.firebase.database().ref('rooms');
    }


    this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;

        this.setState({
            rooms: this.state.rooms.concat(room)
        })
    });



    handleChange(event) {
        this.setState({
            newroom: event.target.value
        });

    }

    newChatRoom(event) {
        event.preventDefault();
        this.roomsRef.push({
            name: this.state.newroom
        });
    }

    render() {
            return ( <
                    div >
                    <
                    form onSubmit = {
                        (event) => this.newChatRoom(event)
                    } >
                    <
                    label >
                    Name:
                    <
                    input type = "text"
                    value = {
                        this.state.newroom
                    }
                    onChange = {
                        (e) => this.handleChange(e)
                    }
                    /> <
                    /label> <
                    input type = "submit"
                    value = "Submit" / >
                    <
                    /form> <
                    ul > {
                        this.state.rooms.map(room => < li > {
                                room.name
                            } < /li>)}</ul >
                            <
                            /div>
                        );

                    }

                  }
                    export default RoomList;
