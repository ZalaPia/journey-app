import WeeklyCalendar from "../WeeklyCalendar/WeeklyCalendar.js";

function JourneyLayout() {
    console.log("WeeklyCalendar import is:", WeeklyCalendar);

    return (
        <div>
            <h1>Journey Layout works</h1>
            <WeeklyCalendar />
        </div>
    );
}

export default JourneyLayout;