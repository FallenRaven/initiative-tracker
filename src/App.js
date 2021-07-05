import logo from './logo.svg';
import './App.css';
import './Components/InitCard';
import InitList from "./Components/InitList";
import initialData from "./initial-data";

function App() {
    this.state = initialData;

  return this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const characters = column.characterIds.map(characterId => this.state.characters[characterId]);
        return (
            <div className="App">
              <header className="App-header">
                <InitList key={column.id} column={column} characters={characters}/>;
              </header>
            </div>
        )
    });
}

export default App;
