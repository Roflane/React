import express from "express";
import cors from "cors";

const app = express();
const PORT = 7373;


app.use(cors());
app.use(express.json());

let cars = [];
const carBrands = ["Kia", "Audi", "BMW", "Mercedes", "Hyundai"];
const carColors = ["Black", "White", "Yellow", "Red"];

function genNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(start, end, startHour, endHour) {
    const date = new Date(+start + Math.random() * (end - start));
    const hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}


function generateCars(count) {
    cars = [];
    for (let i = 0; i < count; i++) {
        let car = {
            id: i + 1,
            brand: carBrands[genNum(0, carBrands.length - 1)],
            releaseDate: randomDate(new Date(2020, 0, 1), new Date(), 0, 24),
            color: carColors[genNum(0, carColors.length - 1)],
            maxSpeed: `${genNum(124, 220)}`
        }
        cars.push(car);
    }
}

generateCars(50);

app.get('/cars', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedCars = cars.slice(startIndex, endIndex);

    res.json({
        cars: paginatedCars,
        currentPage: page,
        totalPages: Math.ceil(cars.length / limit),
        totalCars: cars.length
    });
});

app.post('/cars/generate', (req, res) => {
    const { count = 50 } = req.body;
    generateCars(count);
    res.json({ message: `Generated ${count} cars`, total: cars.length });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});