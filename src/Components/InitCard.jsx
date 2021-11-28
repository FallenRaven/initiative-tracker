import React from "react";
import {Card} from "react-bootstrap";


function InitCard({name, init}){
    return (
                <Card style={{ width: '18rem' }} >
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Init: {init}</Card.Text>
                    </Card.Body>
                </Card>
    );


}

export default InitCard