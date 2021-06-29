import React, { useState } from "react";
import InitCard from "./InitCard";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";




function InitList(){

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
            <Droppable droppableId="characters">
                {(provided) => (
                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                        <InitCard></InitCard>
                        <InitCard></InitCard>
                        <InitCard></InitCard>
                    </ul>
                )}

            </Droppable>
        </DragDropContext>
    )
}

export default InitList;