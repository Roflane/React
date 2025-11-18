import {tiles, opUsed, setOpUsed} from "./Globals.js";

function pushElement(event) {
    try {
        const display = document.getElementById("res");
        const name = event.target.className;
        const value = event.target.value;

        if (name.length > 1 && opUsed) return;
        setOpUsed(name ? name.length > 1 : false);

        if (display.textContent === '0') {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    }
    catch (Error) {
        console.log("Couldn't push element.");
    }
}

function calculateResult() {
    try {
        let resElem = document.getElementById("res");
        let expr = resElem.textContent;

        expr = expr.replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/─/g, "-")
            .replace(/％/g, "%");
        resElem.textContent = eval(expr);
    }
    catch (error) {
        console.log("Invalid operation detected:", error);
        document.getElementById("res").textContent = "Error";
    }
}

function clearResult() {
    try {
        document.getElementById("res").textContent = '0';
    }
    catch (SyntaxError) {
        console.log("Couldn't clear.");
    }
}

export default function DrawCalc() {
    return (
        <div className="calc-root">
            <div className="display">
                <span className="result" id="res">0</span>
            </div>
            <div className="tiles">
                {tiles.map(({ name, value }, index) => {
                    if (name === "clear") {
                        return <button key={index} className={name} onClick={clearResult}>{value}</button>;
                    }
                    else if (name === "equal") {
                        return <button key={index} className={name} onClick={calculateResult}>{value}</button>;
                    }
                    else if (name.length === 1) {
                        return <button key={index} value={name} onClick={pushElement}>{value}</button>;
                    }
                    else {
                        return <button key={index} className={name} value={value} onClick={pushElement}>{value}</button>;
                    }
                })}
            </div>
        </div>
    );
}