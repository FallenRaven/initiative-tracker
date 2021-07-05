import React, { useState } from "react";
import InitCard from "./InitCard";
import {DragDropContext, Droppable} from "react-beautiful-dnd";




function InitList(props){

    const [characters, updateCharacters] = useState();

    function handleOnDragEnd(result){
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }


    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={props.column.title}>
                {(provided) => (
                    <div  innerRef={provided.innerRef} {...provided.droppableProps} >
                        {props.characters.map((character, index) => <InitCard key={character.id} character={character} index ={index} />)}
                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
        </DragDropContext>
    )
}

export default InitList;