interface Action {
    type: string;
    payload?: any;
}

interface Reducer<T> {
    (state: T, action: Action): T;
}


let reducer: Reducer<number> = (state: number, action: Action) => {

    switch (action?.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}


console.log(reducer(0, null));

let inc: Action = { type: 'INC' };
console.log(reducer(0, inc));
console.log(reducer(1, inc));

let dec: Action = { type: 'DEC' };
console.log(reducer(100, dec));