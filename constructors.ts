interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    color: String;

    // Parametrelerin isteğe bağlı olup olmadığını "?" ile belirtiyoruz
    constructor(location?: Point, color?: string) {
        this.currentLocation = location;
        this.color = color;
    }

    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Taksi X: ${point.x} Y: ${point.y} konumuna gidiyor`);
    }
}

// 1 Parametre göndererek de Taxi objesi tanımlanabilir
let taxi_1: Taxi = new Taxi({x: 2, y: 5});
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);

// 2 Parametre göndererek de Taxi objesi tanımlanabilir
let taxi_2 = new Taxi({x: 2, y: 5}, 'blue');

// Parametre göndermeden de Taxi objesi tanımlanabilir
let taxi_3 = new Taxi();
