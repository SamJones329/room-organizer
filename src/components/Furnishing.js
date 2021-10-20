import { Container } from 'react-bootstrap';
import React from 'react';

const NODE_SIZE = 25;//px

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
        let key = 0;
        for(const index of nodes) {
            const row = Math.floor(index / this.state.maxRows);
            const col = index - row * this.state.maxCols;
            const top = row * NODE_SIZE; //px
            const left = col * NODE_SIZE; //px
            const newNode = (
                <div 
                className={`node node--furnishing ${this.state.color}`} 
                style={{
                    top: `${top}px`,
                    left: `${left}px`
                }}
                onMouseEnter={this.props.onMouseEnter}
                key={key++}
                />
            );
            gridNodes.push(newNode);
        }
        return gridNodes;
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                ...this.props
            })
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