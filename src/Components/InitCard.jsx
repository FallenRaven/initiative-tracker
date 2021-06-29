import React from "react";
import {Card} from "react-bootstrap";


function InitCard(){
    return (

            <Card className="mb-3" border="primary" style={{ width: '18rem'}}>
                <Card.Header>Harrow</Card.Header>
                <Card.Body>
                    <Card.Text>Init: 16</Card.Text>
                </Card.Body>
            </Card>

    );


}

export default InitCard