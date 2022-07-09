import ResidentInfo from "./ResidentInfo";

function ResidentsList({ characters = [] }) {
    return (
        <div>
            <h1>RESIDENTS:</h1>
            <div id="list">
                <div id="residentsList" style={{ width: "85%", gap: "20px", marginBottom: "60px" }}>
                    <ul className="groupList">
                        {characters.map((character) => (
                            <li key={character}><ResidentInfo character={character} /></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default ResidentsList;
