import { useState } from "react";
import JourneyLayout from "./components/JourneyLayout/JourneyLayout";
import PhaseSelection from "./components/PhaseSelection/PhaseSelection";


function App() {
    const [phase, setPhase] = useState(null);
    const [isPhaseSelectionOpen, setIsPhaseSelectionOpen] = useState(true);

    function handleConfirmPhase(selectedPhase){
        setPhase(selectedPhase);
        setIsPhaseSelectionOpen(false);
    }

    function handleCancelPhaseSelection(){
            setIsPhaseSelectionOpen(false);
    }

    function handleChangePhase(){
        setIsPhaseSelectionOpen(true);
    }

    return (
        <>
            <JourneyLayout
                phase={phase}
                onChangePhase={handleChangePhase}
            />

            {isPhaseSelectionOpen && (
                <PhaseSelection
                    onConfirm={handleConfirmPhase}
                    onCancel={handleCancelPhaseSelection}
                />
            )}
        </>
    );
}

export default App;
