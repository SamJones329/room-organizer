import { Container } from 'react-bootstrap';
import React from 'react';

class Furnishing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    makeSubGrid() {
        const nodes = this.state.nodes.values();
        const gridNodes = [];
        for(let index of nodes) {
            const row = Math.floor(index / this.state.maxRows);
            const col = index - row * this.state.maxCols;
            const top = row * 20; //px
            const left = row * 20; //px
            const newNode = (
                <div 
                className={`node--furnishing ${this.state.color}`} 
                style={`
                    top: ${top}px;
                    left: ${left}px;
                `}
                />
            );
        }
    }

    render() {
        return (
            <div className={`furnishing`}>
                {this.makeSubGrid()}
            </div>
        );
    }
}

export default Furnishing;