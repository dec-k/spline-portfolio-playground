import "./App.css";
import { RootScene } from "./scenes/RootScene";
import { Core } from "./scenes/Core";

function App() {
  return (
    <div className="App">
      <RootScene>
        <Core />
      </RootScene>
    </div>
  );
}

export default App;
