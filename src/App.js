import "./App.css";
import { RootCanvas } from "./scenes/RootCanvas";
import { Core } from "./scenes/Core";
import { Overlay } from "./scenes/Overlay";

function App() {
  return (
    <div className="App">
      <RootCanvas useFixed>
        <Core />
      </RootCanvas>
      <Overlay />
    </div>
  );
}

export default App;
