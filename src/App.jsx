import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import ResidentsList from "./components/ResidentsList";
import SearchLocal from "./components/Search";


export default function App() {
  const ran = () => Math.floor(Math.random() * 126) + 1;
  const [universe, setUniverse] = useState([]);
  const [location, setLocation] = useState(ran());

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
          src="src/assets/bannerMain.jpg"
          alt="banner"
        />
        <SearchLocal setLocation={setLocation} />

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
