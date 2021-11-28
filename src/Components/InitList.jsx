import React, { useState } from "react";
import InitCard from "./InitCard";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import initialData from "../initial-data";




function InitList(){

    const [characterList, updateCharacterList] = useState(initialData.characters);

    function handleOnDragEnd(result){
        if (!result.destination) return;

        const items = Array.from(characterList.characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacterList(items);
    }


    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="initList">
                {(provided) => (

                        <ul className="initList" innerRef={provided.innerRef} {...provided.droppableProps}>
                        {characterList.map(({id, name, init}, index) => {
                            return (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <InitCard name={name} init={init}/>
                                        </li>
                                    )}
                                </Draggable>
                            ) ;
                        })}
                        {provided.placeholder}
                        </ul>

                )}

            </Droppable>
        </DragDropContext>
    )
}

export default InitList;