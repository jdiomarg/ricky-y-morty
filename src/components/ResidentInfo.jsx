import axios from "axios";
import { useEffect, useState } from "react";

function ResidentInfo({ character }) {
    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get(character).then((res) => setPerson(res.data));
    }, [character]);

    const handleState = () => {
        if (person.status === "Alive") {
            return (
                <div className="circle">
                    <div id="circle-green"></div>
                    <h3>
                        {person.status} - {person.species}
                    </h3>
                </div>
            );
        }
        if (person.status === "Dead") {
            return (
                <div className="circle">
                    <div id="circle-red"></div>
                    <h3>
                        {person.status} - {person.species}
                    </h3>
                </div>
            );
        }
        return (
            <div className="circle">
                <div id="circle-black"></div>
                <h3>
                    {person.status} - {person.species}
                </h3>
            </div>
        );
    };

    return (
        <div className="residentInfo">
            <div className="img-resident" style={{ width: "250px" }}>
                <img id="img-resident" src={person.image} alt={person.name} />
            </div>
            <div className="card">
                <h2>{person.name}</h2>
                {handleState()}
                <p>Origen:</p>
                <h3>{person.origin?.name}</h3>
                <p>Where Appear: </p>
                <h3><b>Episode {person.episode?.length}</b></h3>
            </div>
        </div>
    );
}
export default ResidentInfo;
