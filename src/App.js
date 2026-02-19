import { useState } from "react";
import PhaseSelection from "./components/PhaseSelection/PhaseSelection";
import JourneyLayout from "./components/JourneyLayout/JourneyLayout";

function App() {
    const [phase, setPhase] = useState(null);

    return (
        <div className="app">
            {/* Vedno je spodaj layout (kasneje WeeklyCalendar) */}
            <JourneyLayout phase={phase} />

            {/* Overlay se pokaže samo, če phase še ni izbran */}
            {!phase && (
                <PhaseSelection onConfirm={setPhase} />
            )}
        </div>
    );
}

export default App;