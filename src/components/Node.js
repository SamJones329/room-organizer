import React from 'react';
import { Col } from 'react-bootstrap';

class Node extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            filled: false,
        }
        this.row = props.row;
        this.col = props.col;
    }

    render() {
        // console.log(this.state.filled);
        const fillclass = this.state.filled ? 'node--filled' : '';
        // const filled = (this.state.filled ? 'node--filled' : '');
        // console.log(`${this.state.key}: ${this.state.filled}`)
        // if(filled === 'node--filled') console.log(`fill node ${this.state.row}-${this.state.col}`)
        return (
            <div
                className={`node ${fillclass}`}
                onMouseDown={() => this.state.onMouseDown(this.row, this.col)}
                onMouseEnter={() => this.state.onMouseEnter(this.row, this.col)}
            />
            
        );
    }
}

export default Node;