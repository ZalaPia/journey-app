import {useState} from "react";
import PhaseSelection from "./components/PhaseSelection";
import JourneyLayout from "./components/JourneyLayout";

function App() {
    const [phase, setPhase] = useState(null);

    return (
    <div className="app">
        {!phase && <PhaseSelection onSelectPhase={setPhase} />}
        {phase && <JourneyLayout phase={phase} />}
    </div>
  );
}

export default App;
