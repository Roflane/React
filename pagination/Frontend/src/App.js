import './App.css';
import {useEffect, useState} from "react";
import DollPagination from "./DollPagination";

const DOLLS_ENDPOINT = "http://localhost:5102";
const PAGINATION_SHIFT = 5;

const doll = {
    name: 0,
    color: 0,
    price: 0,
    height: 0
}

function DollCard(doll) {
    return (
        <div className="dollCard">
            <h3>{doll.name}</h3>
            <p>Color: {doll.color}</p>
            <p>Price: {doll.price}</p>
            <p>Height: {doll.height}</p>
        </div>
    );
}

export default function App() {
    const [counter, setCounter] = useState(0);
    const [dolls, setDolls] = useState([]);

    async function load() {
        try {
            const response = await fetch(
                `${DOLLS_ENDPOINT}/dolls?start=${counter}&count=${PAGINATION_SHIFT}`
            );

            const json = await response.json();

            setDolls(prev => [...prev, ...json]);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        load();
    }, []);

    function nextChunkHandler() {
        const newCounter = counter + PAGINATION_SHIFT;
        setCounter(newCounter);
        load();
    }

    return (
        <div id="dollContainerWrapper">
            <div id="dollContainer">
                {dolls.map(x => (
                    <DollCard
                        key={x.id}
                        {...x}
                    />
                ))}
            </div>

            <DollPagination handlerCb={nextChunkHandler}/>
        </div>
    );
}
