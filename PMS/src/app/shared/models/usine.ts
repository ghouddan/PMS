import { atelier } from "./atelier";

export interface usine{
    id : number,
    nomUsine : string,
    adresse : string,
    chefUsine : string,
    nombrePersonne : number,
    nombreMachines : number,
    idAtelier : atelier[]   
}