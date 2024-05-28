import { machine } from "./machine";

export interface atelier{
    id : number,
    nomAtelier : string,
    chefAtelier : string,
    nombrePersonne : number,
    nombreMachines : number,
    capaciteMaximale : string,
    idmachine : machine[],
    usineId: number;

    
}