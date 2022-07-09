function SearchLocal({ setLocation }) {
    const handleClick = (event) => {
        event.preventDefault();
        const input = document.getElementById("input").value;
        if (input === '') return;
        setLocation(input);
        document.getElementById("input").value = "";
    };

    return (
        <div className="header">
            <h1>Rick and Morty Proyect</h1>
            <form className="search" onSubmit={handleClick} style={{ display: "flex", flexwrap: "wrap" }}>
                <input id="input" placeholder="Type a location id" />
                <button id="button">Sudmit</button>
            </form>
        </div>
    );
}
export default SearchLocal;


