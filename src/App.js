import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, Navbar, Nav } from 'react-bootstrap'
import Room from './components/Room';
import RoomForm from './components/RoomForm'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      rooms: [{rows: 10, cols: 10}]
    };

    this.addRoom = this.addRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  addRoom(rows, cols) {
    const rooms = this.state.rooms;
    rooms.push({rows: rows, cols: cols});
    this.setState({
      rooms: rooms
    });
  }

  deleteRoom(key) {
    const rooms = this.state.rooms;
    let newRooms;
    if(key == 0) newRooms = rooms.slice(1, rooms.length);
    else newRooms = rooms.slice(0, key).concat(rooms.slice(key+1));
    console.log(key, newRooms);
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
        <Room rows={room.rows} columns={room.cols} delete={this.deleteRoom} key={i} id={i} />
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