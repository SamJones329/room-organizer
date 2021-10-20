import React from 'react';
import { Col } from 'react-bootstrap';

class Node extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            filled: false,
        }
    }

    onMouseDown() {
        this.state.onMouseDown(this.state.row, this.state.col);
        this.setState({
            filled: true,
        })
    }

    onMouseEnter() {
        this.state.onMouseEnter(this.state.row, this.state.col);
        this.setState({
            filled: true,
        })
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
                onMouseDown={this.onMouseDown}
                onMouseEnter={this.onMouseEnter}
                onMouseUp={() => this.state.onMouseUp()}
            />
            
        );
    }
}

export default Node;