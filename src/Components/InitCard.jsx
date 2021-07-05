import React from "react";
import {Card} from "react-bootstrap";
import {Draggable} from "react-beautiful-dnd";


function InitCard(props){
    return (
            <Draggable draggableId={props.character.id} index={props.index}>
                {(provided) => (
                <Card style={{ width: '18rem' }} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>

                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>Init: {props.init}</Card.Text>
                    </Card.Body>
                </Card>
                )}
            </Draggable>
    );


}

export default InitCard