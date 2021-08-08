import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';

import Node from './Node';

class Room extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: props.rows,
            columns: props.columns,
            mousePressed: false,

        };
    }

    addFurnishing() {

    }

    removeFurnishing() {

    }

    throwOutFurnishing() {

    }

    onMouseDown(row, col) {
        this.setState({ mousePressed: true });
    }

    onMouseEnter(row, col) {
        //if mousePressed
            //create rectangle with opposing corners as first mouse down node and current node
            //update nodes in that rectangle to be colored
            //if any node in the to-be-created rectangle is already in another shape, set that node as invalid
        return this.state.mousePressed;
    }

    onMouseUp(row, col) {
        //save whatever shape was just drawn as a furnishing
        //if there are any invalid nodes in the shape (AKA nodes already in another shape)
            //don't save the shape and reset all the nodes of that shape not in another shape
        this.setState({ mousePressed: false });
        const arr = [];
        const invalid = false;
        if(invalid) this.throwOutFurnishing(arr);
        this.addFurnishing(arr);
    }

    onMouseExitGrid() {
        // this.setState({ mousePressed: false });
    }

    makeColumns = (row, columns) => {
        const colArr = []
        for(let i = 0; i < columns; i++) {
            const id = `node-${row}-${i}`;
            colArr[i] = (
                <Node 
                key={row*columns+i}
                row={row} 
                col={i}
                onMouseDown={() => this.onMouseDown(row, i)}
                onMouseEnter={() => this.onMouseEnter(row, i)}
                onMouseUp={() => this.onMouseUp(row, i)}
                />
            )
        }
        return colArr;
    }

    makeGrid = (rows, columns) => {
        const rowArr = []
        for(let i = 0; i < rows; i++) {
            const id = `row-${i}`;
            rowArr[i] = (
                <Row className="grid-row" key={i} id={id}>
                    {this.makeColumns(i, columns)}
                </Row>
            );
        }
        return rowArr;
    }

    render() {
        return (
            <Container className="grid" onMouseLeave={() => this.onMouseExitGrid()}>
                {this.makeGrid(this.state.rows, this.state.columns)}
            </Container>
        );
    }
}

export default Room;