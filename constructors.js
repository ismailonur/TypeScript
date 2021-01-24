var Taxi = /** @class */ (function () {
    // Parametrelerin isteğe bağlı olup olmadığını "?" ile belirtiyoruz
    function Taxi(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: " + point.x + " Y: " + point.y + " konumuna gidiyor");
    };
    return Taxi;
}());
// 1 Parametre göndererek de Taxi objesi tanımlanabilir
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
// 2 Parametre göndererek de Taxi objesi tanımlanabilir
var taxi_2 = new Taxi({ x: 2, y: 5 }, 'blue');
// Parametre göndermeden de Taxi objesi tanımlanabilir
var taxi_3 = new Taxi();
