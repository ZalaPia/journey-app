function PhaseSelection({ onSelectPhase }) {
    return (
        <div>
            <h2>Select your current phase:</h2>

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
    );
}

export default PhaseSelection;