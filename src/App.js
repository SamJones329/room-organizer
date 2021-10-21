import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, Navbar, Nav } from 'react-bootstrap'
import './App.css';
import Room from './components/Room';
import RoomForm from './components/RoomForm'

class App extends React.Component {

  static MAX_ROOM_DIM = 50;
  static MIN_ROOM_DIM = 1;

  constructor(props) {
    super(props);
    this.roomIdCounter = 1;
    this.state = {
      ...props,
      rooms: [{rows: 10, cols: 10, id: this.roomIdCounter++}]
    };
    this.addRoom = this.addRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  addRoom(rows, cols) {
    if(rows > App.MAX_ROOM_DIM || cols > App.MAX_ROOM_DIM || rows < App.MIN_ROOM_DIM || cols < App.MIN_ROOM_DIM) return;
    const rooms = this.state.rooms;
    rooms.push({rows: rows, cols: cols, id: this.roomIdCounter++});
    this.setState({
      rooms: rooms
    });
  }

  deleteRoom(id) {
    const newRooms = this.state.rooms;
    const index = newRooms.findIndex(room => room.id === id);
    
    if(index === -1) return;
    newRooms.splice(index, 1);
    //let newRooms;
    // if(index == 0) {
    //   console.log('here');
    //   console.log("0 to 0: ", rooms.slice(0,0));
    //   newRooms = rooms.slice(1);
    // } else {
      // const pt1 = rooms.slice(0, index), pt2 = rooms.slice(index+1);
      // console.log('parts: ', pt1, pt2);
      // const newRooms = pt1.concat(pt2);//rooms.slice(0, key).concat(rooms.slice(key+1));
    //}
    this.setState({
      rooms: newRooms
    });
  }

  makeRooms() {
    const rooms = this.state.rooms;
    const htmlRooms = [];
    for(let i in rooms) {
      const room = rooms[i];
      htmlRooms.push(
        <Room rows={room.rows} columns={room.cols} delete={this.deleteRoom} key={room.id} id={room.id} />
      );
    }

    return htmlRooms;
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>

        <Navbar>
          <RoomForm handleSubmit={this.addRoom} />
        </Navbar>

        <Container className="room-container">
          {this.makeRooms()}
        </Container>

      </div>
    );
  }
}

export default App;