import './App.css';
import { useEffect, useState } from "react";
import CarPagination from "./CarPagination";
import Car from "./Car";

const ENDPOINT = "http://127.0.0.1:7373";
const PAGE_SIZE = 10;

export default function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function loadCars(page = 1) {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${ENDPOINT}/cars?page=${page}&limit=${PAGE_SIZE}`
            );

            const data = await response.json();
            setCars(data.cars);
            setCurrentPage(data.currentPage);
            setTotalPages(data.totalPages);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadCars(1);
    }, []);

    async function nextChunkHandler() {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            await loadCars(nextPage);
        }
    }

    return (
        <div id="carContainerWrapper">
            <div id="carContainer">
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    cars.map(car => (
                        <Car
                            key={car.id}
                            brand={car.brand}
                            releaseDate={car.releaseDate}
                            color={car.color}
                            maxSpeed={car.maxSpeed}
                        />
                    ))
                )}
            </div>

          <CarPagination handlerCb={nextChunkHandler}/>
        </div>
    );
}