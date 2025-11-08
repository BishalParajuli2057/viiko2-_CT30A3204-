// 1
let x: string = "Hello World!";
console.log(x);

// 2
type TVehicle = {
  color: string;
  model: string;
  year: number;
  power: number;
};

let myCar: TVehicle = {
  model: "Boring generic vehicle",
  color: "Red",
  year: 1993,
  power: 60,
};
console.log(
  `My car is a ${myCar.color} ${myCar.model} from ${myCar.year} with ${myCar.power} HP.`
);

// 3. Extending interface
interface IVehicle {
  color: string;
  model: string;
  year: number;
  power: number;
}

interface ICar extends IVehicle {
  bodyType: string;
  wheelCount: number;
}

interface IBoat extends IVehicle {
  draft: number;
}

interface IPlane extends IVehicle {
  wingspan: number;
}

const car: ICar = {
  model: "Ford focus",
  color: "Green",
  year: 2016,
  power: 150,
  bodyType: "Hatchback",
  wheelCount: 4,
};

const plane: IPlane = {
  model: "Boeing 777",
  color: "White",
  year: 2020,
  power: 170000,
  wingspan: 65,
};

const boat: IBoat = {
  model: "Bella",
  color: "Black",
  year: 2022,
  power: 100,
  draft: 0.42,
};

console.log(car);
console.log(plane);
console.log(boat);

// 4. Generic vehicle service
class VehicleService<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  list(): T[] {
    return this.items;
  }
}

const cars = new VehicleService<ICar>();
const boats = new VehicleService<IBoat>();

cars.add(car);
boats.add(boat);

console.log("Cars:", cars.list());
console.log("Boats:", boats.list());
