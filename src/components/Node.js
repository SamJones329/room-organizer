import React from 'react';
import { Col } from 'react-bootstrap';

class Node extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            ...props,
        }
    }

    render() {
        const filled = (this.state.filled ? 'node--filled' : '');
        return (
            <Col
                id={`node-${this.state.row}-${this.state.col}`}
                className={`node ${filled}`}
                onMouseDown={() => this.state.onMouseDown(this.state.row, this.state.col)}
                onMouseEnter={() => this.state.onMouseEnter(this.state.row, this.state.col)}
                onMouseUp={() => this.state.onMouseUp()}
            />
        );
    }
}

export default Node;