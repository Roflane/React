import './App.css';
import DrawCalc from "./CalcCore";

function App() {
    try {
        return (
            <>{DrawCalc()}</>
        );
    }
    catch (SyntaxError) {
        console.log("Runtime syntax error, uvi.");
    }
}

export default App;
