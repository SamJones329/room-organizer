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
            furnishingUnderConstruction: new Set(),
            furnishings: [],
            occupiedNodes: new Set(),
            colorOptions: ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink'],
        };
    }

    addFurnishing(furnishingSet) {
        if(furnishingSet.size === 0) return;
        const furnishings = this.state.furnishings
        furnishings.push(furnishingSet);
        this.setState({ 
            furnishingUnderConstruction: new Set(),
            furnishings: furnishings 
        });
    }

    removeFurnishing() {

    }

    addNodeToFurnishingUnderConstruction(index) {
        const furnishingUnderConstruction = this.state.furnishingUnderConstruction;
        const occupiedNodes = this.state.occupiedNodes;
        furnishingUnderConstruction.add(index);
        occupiedNodes.add(index);
        this.setState({ 
            furnishingUnderConstruction: furnishingUnderConstruction,
            occupiedNodes: occupiedNodes
        });
    }

    onMouseDown =  (row, col) => {
        const index = row*this.state.rows + col;
        if(this.state.occupiedNodes.has(index) || this.state.mousePressed) return;
        this.setState({ mousePressed: true });

    }

    onMouseEnter = (row, col) => {
        if(this.state.mousePressed) {
            const index = row * this.state.rows + col;
            if(!this.state.occupiedNodes.has(index)) {
                this.addNodeToFurnishingUnderConstruction(index);
            }
        }
        return this.state.mousePressed;
    }

    onMouseUp = () => {
        this.setState({ mousePressed: false });
        this.addFurnishing(this.state.furnishingUnderConstruction);
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

    makeGrid = () => {
        const rows = this.state.rows, columns = this.state.columns;
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

    makeFurnishings = () => {
        const furnishings = this.state.furnishings;
        for(let furnishing of furnishings) {
            
        }
    }

    render() {
        return (
            <Container className="grid" onMouseLeave={this.onMouseUp()}>
                {this.makeGrid()}
                {this.makeFurnishings()}
            </Container>
        );
    }
}

export default Room;