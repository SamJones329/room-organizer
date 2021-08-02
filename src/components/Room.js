import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';

class Room extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: props.rows,
            columns: props.columns,
        };
    }

    makeColumns = (columns) => {
        const colArr = []
        for(let i = 0; i < columns; i++) {
            const id = `square-${i}`;
            colArr[i] = (
                <Col className="grid-square" id={id}>
                
                </Col>
            )
        }
        return colArr;
    }

    makeGrid = (rows, columns) => {
        const rowArr = []
        for(let i = 0; i < rows; i++) {
            const id = `row-${i}`;
            rowArr[i] = (
                <Row className="grid-row" id={id}>
                    {this.makeColumns(columns)}
                </Row>
            )
        }
        return rowArr;
    }

    render() {
        return (
            <Container className="grid">
                {this.makeGrid(this.state.rows, this.state.columns)}
            </Container>
        );
    }
}

export default Room;