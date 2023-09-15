export default function Portfolio() {
    return (
        <div className="box">
        <a href="https://shrouded-springs-93967-4ef63984c8fc.herokuapp.com/" className="card job1 itemflex">
            <div className="card-column">
                <h3>An App Called Quest</h3>
                <p>Outdoor Planner</p>
            </div>
        </a>
        <a href="https://jalene-ferguson.github.io/my-academic-studies2/" className="card job2 itemflex">
            <div className="card-column">
                <h3>My Academic Studio</h3>
                <p>Studybuddy</p>
            </div>
        </a>
        <a href="_blank" className="card job3 itemflex">
            <div className="card-column">
                <h3>InkFlow</h3>
                <p>Canvas Art</p>
            </div>
        </a>
        <a href="_blank" className="card job4 itemflex">
            <div className="card-column">
                <h3>LED Wall</h3>
                <p>Light Show</p>
            </div>
        </a>
        <a href="_blank" className="card job5 itemflex">
            <div className="card-column">
                <h3>Run Buddy</h3>
                <p>Fitness Tracker</p>
            </div>
        </a>
        </div>
    )
}