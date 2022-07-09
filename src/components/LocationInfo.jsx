function LocationInfo({ name, type, dimension, residents }) {
    return (
        <div className="locationInfo_name">
            <h2> {name} </h2>
            <div className="locationInfo_info" style={{ display: "flex", flexwrap: "wrap" }}>
                <span> Type : {type} </span>
                <span> Dimension : {dimension} </span>
                <span> Population : {residents} </span>
            </div>
        </div>
    );
}

export default LocationInfo;
