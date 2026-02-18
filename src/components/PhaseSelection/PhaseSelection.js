function PhaseSelection({ onSelectPhase }) {
    return (
        <div className ="PhaseSelection">
            <div>
                <h2>Select your current phase:</h2>
                <div className="PhaseSelection__options">
                    <button onClick={() => onSelectPhase("menstrual")}>
                        Menstrual cycle
                    </button>

                    <button onClick={() => onSelectPhase("birth-control")}>
                        Birth control
                    </button>

                    <button onClick={() => onSelectPhase("trying")}>
                        Trying to conceive
                    </button>

                    <button onClick={() => onSelectPhase("pregnancy")}>
                        Pregnancy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PhaseSelection;