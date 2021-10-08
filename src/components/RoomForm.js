import { Button } from 'react-bootstrap';
import React from 'react';

class RoomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowsValue: 0,
            colsValue: 0
        };
        this.handleRowChange = this.handleRowChange.bind(this);
        this.handleColChange = this.handleColChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeRoom = this.props.handleSubmit;
    }
    
    handleRowChange(event) {
        this.setState({rowsValue: event.target.value});  
    }

    handleColChange(event) {
        this.setState({colsValue: event.target.value});  
    }

    handleSubmit(event) {
        this.makeRoom(this.state.rowsValue, this.state.colsValue);
        event.preventDefault();
    }
  
    render() {
      return (
        <form className="room-form" onSubmit={this.handleSubmit}>
            <label htmlFor="num-rows">Rows: </label>
            <input name="num-rows" id="num-rows" type="text" value={this.state.rowsValue} onChange={this.handleRowChange} />
            <label htmlFor="num-cols">Columns: </label>
            <input name="num-cols" id="num-cols" type="text" value={this.state.colsValue} onChange={this.handleColChange} />
            <Button type="submit">
                New Grid
            </Button>
        </form>
      );
    }
}

export default RoomForm;