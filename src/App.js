import './App.css';
import './Components/InitCard';
import InitList from "./Components/InitList";
import initialData from "./initial-data";
import {useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import InitCard from "./Components/InitCard";
import {Button, Col, Form, Navbar, Row} from "react-bootstrap";
import {useFormik} from "formik";

function App() {

    const [characters, updateCharacters] = useState(initialData);

    const formik = useFormik({
        initialValues: {
            name: '',
            init:''
        },
        onSubmit: values => {
            const items = Array.from(characters);
            let tempint = items.length + 1
            const text = {id: '', name: '', init: ''};
            text.id = "character-" + tempint
            text.name = values.name
            text.init = values.init
            let tempJSON = JSON.parse(JSON.stringify(text));
            items.push(tempJSON);
            updateCharacters(items);
            formik.resetForm();
        },
    });

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateCharacters(items);
        console.log(characters)
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
                                                        <InitCard name={name} init={init}/>
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
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="name" as={Row}>
                    <Col xs={"auto"}>
                        <Form.Label style={{color:'white'}}>Character Name</Form.Label>
                    </Col>
                    <Col xs={"auto"}>
                        <Form.Control type="text" placeholder="Enter name" onChange={formik.handleChange} value={formik.values.name}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="init" as={Row}>
                    <Col xs={"auto"}>
                        <Form.Label style={{color:'white'}}>Character Init</Form.Label>
                    </Col>
                    <Col xs={"auto"}>
                        <Form.Control type="text" placeholder="Enter init" onChange={formik.handleChange} value={formik.values.init}/>
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </header>
        </div>
    );

}

export default App;
