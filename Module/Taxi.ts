import { Point } from './Point';
import { Vehicle } from './Vehicle';

export class Taxi implements Vehicle {

    constructor(private _location?: Point, private _color?: string) { }

    travelTo(point: Point): void {
        console.log(`Taksi X: ${this._location.x} Y: ${this._location.y} dan ${point.x} Y: ${point.y} konumuna gidiyor`);
    }

    // _location bilgisini dışarı ile paylaşıyoruz
    get location() {
        return this._location;
    }

    // _location bilgisinin dışarıdan değiştirilmesine olanak sağlıyoruz.
    set location(value: Point) {
        if (value.x < 0 || value.y < 0) {
            throw new Error('Koordinat bilgileri negatif olamaz!');
        }
        this._location = value;
    }
}