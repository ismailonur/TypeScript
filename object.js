var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: " + point.x + " Y: " + point.y + " konumuna gidiyor");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otob\u00FCs X: " + point.x + " Y: " + point.y + " konumuna gidiyor");
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 5 };
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 4, y: 5 });
taxi_2.currentLocation = { x: 6, y: 8 };
var bus_1 = new Bus();
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
