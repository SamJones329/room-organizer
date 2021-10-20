import React from 'react';
import { Col } from 'react-bootstrap';

class Node extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            ...props,
        }
        this.row = props.row;
        this.col = props.col;
    }

    render() {
        return (
            <div
                className={'node'}
                id={`node-${this.props.id}`}
                onMouseDown={() => this.state.onMouseDown(this.row, this.col)}
                onMouseEnter={() => this.state.onMouseEnter(this.row, this.col)}
            />
            
        );
    }
}

export default Node;