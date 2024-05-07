import { UserData } from "./Users";
import { machine } from "./machine";

export interface chefAtelier extends UserData{
    idMachine : machine[]
}