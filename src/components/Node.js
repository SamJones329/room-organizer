import React from 'react';
import { Col } from 'react-bootstrap';

class Node extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            filled: false
        }
    }

    render() {
        const filled = (this.state.filled ? 'node--filled' : '');
        return (
            <Col
                id={`node-${this.state.row}-${this.state.col}`}
                className={`node ${filled}`}
                onMouseDown={() => this.handleMouseDown()}
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseUp={() => this.handleMouseUp()}
            />
        );
    }
}

export default Node;