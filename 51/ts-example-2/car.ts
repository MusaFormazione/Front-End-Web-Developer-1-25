type Car = {
    make: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
    bestLapTime?: number; 
};

interface Maker {
    name: string;
    country: string;
    established: number;
    cars?: Car[];
}