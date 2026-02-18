import {useState} from "react";
import PhaseSelection from "./components/PhaseSelection/PhaseSelection";
import JourneyLayout from "./components/JourneyLayout/JourneyLayout";

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
