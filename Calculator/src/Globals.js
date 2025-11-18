function createTile(name, value, evaluatable_value = null) {
    return {
        name,
        value,
        evaluatable_value: evaluatable_value !== null ? evaluatable_value : value
    };
}

export const tiles = [
    createTile("clear", "C", null),
    createTile("percent", "％", '%'),
    createTile("division", "÷", '/'),
    createTile("7", "7"),
    createTile("8", "8"),
    createTile("9", "9"),
    createTile("star", "×", "*"),
    createTile("4", "4"),
    createTile("5", "5"),
    createTile("6", "6"),
    createTile("minus", "─", '-'),
    createTile("1", "1"),
    createTile("2", "2"),
    createTile("3", "3"),
    createTile("plus", "+", '+'),
    createTile("zero", "0"),
    createTile(".", "."),
    createTile("equal", "="),
];


export let opUsed = false;
export const getOpUsed = () => opUsed; // getter
export const setOpUsed = (value) => {   // setter
    opUsed = value;
};