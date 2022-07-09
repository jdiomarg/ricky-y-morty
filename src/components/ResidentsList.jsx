import ResidentInfo from "./ResidentInfo";

function ResidentsList({ characters = [] }) {
    return (
        <div>
            <h1>RESIDENTS:</h1>
            <div id="list">
                <div id="residentsList" style={{ width: "85%", gap: "20px", marginBottom: "60px" }}>
                    {characters.map((character) => (
                        <>
                            <ResidentInfo key={character} character={character} />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ResidentsList;
