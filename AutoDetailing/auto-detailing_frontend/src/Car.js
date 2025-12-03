import "./Car.css";

export default function Car({brand, releaseDate, color, maxSpeed}) {
    return (<div className="car">
        <div className="carBrand">Brand: {brand}</div>
        <div className="carReleaseDate">Release Date: {releaseDate}</div>
        <div className="carColor">Color: {color}</div>
        <div className="carMaxSpeed">Max Speed: {maxSpeed}</div>
    </div>);
}