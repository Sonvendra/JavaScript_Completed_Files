class Car{

    constructor(model,color,fuel,engineCapacity,mileage){
        this._model = model;
        this._color = color;
        this._fuel = fuel;
        this._engineCapacity = engineCapacity;
        this._mileage = mileage;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get fuel() {
        return this._fuel;
    }

    set fuel(value) {
        this._fuel = value;
    }

    get engineCapacity() {
        return this._engineCapacity;
    }

    set engineCapacity(value) {
        this._engineCapacity = value;
    }

    get mileage() {
        return this._mileage;
    }

    set mileage(value) {
        this._mileage = value;
    }

    specification(){
        let spec = `Model : ${this.model}
                    Color : ${this.color}
                    Fuel : ${this.fuel}
                    EngineCapacity : ${this.engineCapacity}
                    Mileage : ${this.mileage}`;
        return spec;
    }
}

// Create Car Obj
let car1 = new Car('BMW','Black','Diesel','4000CC','10kmpl');
let carSpec1 = car1.specification();
console.log(carSpec1);

// Create a New Car
let car2 = new Car('Audi','White','Diesel','5000CC','7kmpl');
let carSpec2 = car2.specification();
console.log(carSpec2);