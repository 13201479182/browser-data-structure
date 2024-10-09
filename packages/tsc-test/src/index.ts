import { m1 } from './m1.js';
import { m2 } from './m2.js';

class Name {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    add() {
        return 11;
    }
}

const a = new Name('asd');

export enum Color {
    red = 1,
}

console.log(a, m1, m2, Color[1]);
