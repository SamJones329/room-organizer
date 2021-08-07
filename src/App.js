import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, Navbar, Nav } from 'react-bootstrap'
import Room from './components/Room';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <Navbar>
        <form>
          <label for="num-rows">Rows: </label>
          <input name="num-rows" id="num-rows" type="text"></input>
          <label for="num-cols">Columns: </label>
          <input name="num-cols" id="num-cols" type="text"></input>
          <Button type="submit">
            New Grid
          </Button>
        </form>
      </Navbar>

      <Room rows={10} columns={10}></Room>

    </div>
  );
}

export default App;