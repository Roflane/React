import "./DollCard.css";

export default function DollCard({id = 0, name = "Test", color = "Black", price = 0.5, height = 16}) {

    return (<div className="dollCard">
        <div className="dollId">Id: {id}</div>
        <div className="dollName">Name: {name}</div>
        <div className="dollColor">Color: {color}</div>
        <div className="dollPrice">Price: {price}</div>
        <div className="dollHeight">Height: {height}</div>
    </div>);
}