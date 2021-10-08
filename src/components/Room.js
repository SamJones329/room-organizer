import { Button, Col, Container, Row } from 'react-bootstrap';
import React from 'react';

import Node from './Node';
import Furnishing from './Furnishing';

class Room extends React.Component {

    static colorOptions = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink'];

    constructor(props) {
        super(props);
        this.state = {
            rows: props.rows,
            cols: props.columns,
            mousePressed: false,
            furnishingUnderConstruction: new Set(),
            furnishings: [],
            occupiedNodes: new Set(),
        };
        this.key = props.id;
        this.deleteSelf = props.delete;
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
        this.addNodeToFurnishingUnderConstruction(index);
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
        const furnishingSet = this.state.furnishingUnderConstruction;
        if(furnishingSet.size === 0) {
            this.setState({ mousePressed: false });
            return;
        }
        const furnishings = this.state.furnishings
        furnishings.push(furnishingSet);
        this.setState({ 
            mousePressed: false,
            furnishingUnderConstruction: new Set(),
            furnishings: furnishings 
        });
    }

    makeCols = (row, cols) => {
        const colArr = []
        for(let i = 0; i < cols; i++) {
            const id = `node-${row}-${i}`;
            const index = row*cols+i;
            colArr[i] = (
                <Node 
                key={index}
                row={row} 
                col={i}
                filled={this.state.furnishingUnderConstruction.has(index)}
                onMouseDown={this.onMouseDown}
                onMouseEnter={this.onMouseEnter}
                />
            )
        }
        return colArr;
    }

    makeGrid = () => {
        const rows = this.state.rows, cols = this.state.cols;
        const rowArr = []
        for(let i = 0; i < rows; i++) {
            const id = `row-${i}`;
            rowArr[i] = (
                <div className="grid-row" key={i} id={id}>
                    {this.makeCols(i, cols)}
                </div>
            );
        }
        return rowArr;
    }

    makeFurnishings = () => {
        const furnishings = this.state.furnishings;
        const htmlFurnishings = [];
        const numColors = Room.colorOptions.length;
        let colorIndex = 0;
        let key = 0;
        for(let furnishing of furnishings) {
            if(colorIndex > numColors) colorIndex = 0;
            htmlFurnishings.push(
                <Furnishing 
                color={Room.colorOptions[colorIndex]}
                nodes={furnishing}
                maxRows={this.state.rows}
                maxCols={this.state.cols}
                key={key++}
                />
            )
            colorIndex++;
        }
        if(colorIndex > numColors) colorIndex = 0;
        htmlFurnishings.push(
            <Furnishing
            color={Room.colorOptions[colorIndex]}
            nodes={this.state.furnishingUnderConstruction}
            maxRows={this.state.rows}
            maxCols={this.state.cols}
            key={key}
            />
        )
        return htmlFurnishings;
    }

    render() {
        return (
            <div className="room">
                <div className="grid" onMouseLeave={this.onMouseUp} onMouseUp={this.onMouseUp} draggable={false}>
                    {this.makeGrid()}
                    {this.makeFurnishings()}
                </div>

                <div className="room-btns">
                    <Button className="btn-danger" onClick={() => this.deleteSelf(this.key)}>Delete</Button>
                </div>
            </div>
        );
    }
}

export default Room;