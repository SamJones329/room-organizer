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
  }

  addRoom(rows, cols) {
    const rooms = this.state.rooms;
    rooms.push({rows: rows, cols: cols});
    this.setState({
      rooms: rooms
    });
  }

  makeRooms() {
    const rooms = this.state.rooms;
    const htmlRooms = [];
    for(let room of rooms) {
      htmlRooms.push(
        <Room rows={room.rows} columns={room.cols} />
      );
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>

        <Navbar>
          <RoomForm handleSubmit={() => {}} />
        </Navbar>

        <Container className="room-container">
          {this.makeRooms()}
        </Container>

      </div>
    );
  }
}

export default App;