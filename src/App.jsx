import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import ResidentsList from "./components/ResidentsList";


export default function App() {
  const ran = () => Math.floor(Math.random() * 126) + 1;
  const [universe, setUniverse] = useState([]);
  const [location, setLocation] = useState(ran());


  const handleClick = ({ setLocation }) => {
    const input = document.getElementById("input").value;
    if (input === '') return;
    setLocation(input);
    document.getElementById("input").value = "";
  }


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${location}`)
      .then((res) => setUniverse(res.data));
  }, [location]);

  if (universe.residents?.length === 0) {
    axios
      .get(`https://rickandmortyapi.com/api/location/${ran()}`)
      .then((res) => setUniverse(res.data));
  }

  return (
    <>
      <div className="App">
        <img
          id="banner"
          src="src/assets/banner.jpg"
          alt="banner"
        />
        <form className="search" style={{ display: "flex", flexwrap: "wrap" }} onSubmit={handleClick}>
          <input id="input" placeholder="Type a location id" />
          <button id="button">Submit</button>
        </form>

        <LocationInfo
          name={universe.name}
          type={universe.type}
          dimension={universe.dimension}
          residents={universe.residents?.length}
        />
        <ResidentsList characters={universe.residents} />
      </div >
    </>
  );
}
