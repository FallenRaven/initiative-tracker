import './App.css';
import './Components/InitCard';
import InitList from "./Components/InitList";
import initialData from "./initial-data";
import {useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import InitCard from "./Components/InitCard";
import {Navbar} from "react-bootstrap";

function App() {

    const [characters, updateCharacters] = useState(initialData);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }

        return (

            <div className="App">
               <header className="App-header">

                       <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="characters">
                                {(provided) => (
                                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                        {characters.map(({id, name, init}, index) => {
                                                return (
                                                    <Draggable key={id} draggableId={id} index={index}>
                                                        {(provided) => (
                                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                <div className="characters-thumb">
                                                                    <InitCard name={name} init={init} />
                                                                </div>
                                                            </li>
                                                        )}
                                                    </Draggable>
                                                );
                                            })}
                                            {provided.placeholder}
                                        </ul>
                                        )}
                                            </Droppable>
                                            </DragDropContext>
                                            </header>
                                            <p>
                                            Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
                                            </p>
                                            </div>
                                            );

}

export default App;
