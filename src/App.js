import { useState } from "react";
import PhaseSelection from "./components/PhaseSelection/PhaseSelection";
import JourneyLayout from "./components/JourneyLayout/JourneyLayout";

function App() {
    const [phase, setPhase] = useState(null);

    console.log("APP RENDER, phase =", phase);

    return (
        <div className="app">
            {!phase && (
                <PhaseSelection
                    onConfirm={(value) => {
                        console.log("CONFIRM CLICKED, value =", value);
                        setPhase(value);
                    }}
                />
            )}

            {phase && <JourneyLayout />}
        </div>
    );
}

export default App;
