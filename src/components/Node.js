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

    handleMouseDown() {
        this.state.onMouseDown(this.state.row, this.state.col);
        this.setState({ filled: true });
    }

    handleMouseEnter() {
        const mouseDown = this.state.onMouseEnter(this.state.row, this.state.col);
        if(mouseDown) this.setState({ filled: true });
    }

    handleMouseUp() {
        this.state.onMouseUp(this.state.row, this.state.col);
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