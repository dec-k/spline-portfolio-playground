import "./App.css";
import { RootCanvas } from "./scenes/RootCanvas";
import { Core } from "./scenes/Core";
import { Overlay } from "./scenes/Overlay";
import LmaoText from "./scenes/lmao";

function App() {
  return (
    <div className="App">
      <RootCanvas>
        {/* <Core /> */}
        <LmaoText />
      </RootCanvas>
      <Overlay />
    </div>
  );
}

export default App;
