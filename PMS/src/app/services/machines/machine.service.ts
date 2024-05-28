import { Injectable } from '@angular/core';
import { machine } from '../../shared/models/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private machines: machine[] = [
    {
      id: 1,
      nomMachine: 'Machine 1',
      typeMachine: 'Type A',
      fonction: 'Function A',
      etat: true,
      capaciteMaximale: '10 items/jour',
      chefMachine: 'Jon Look',
      idAtelier: 1,
      productName: 'Product A',
      production: 100
    },
    {
      id: 2,
      nomMachine: 'Machine 2',
      typeMachine: 'Type B',
      fonction: 'Function B',
      etat: false,
      capaciteMaximale: '10 items/jour',
      chefMachine: 'Smith Look',
      idAtelier: 1,
      productName: 'Product B',
      production: 150
    },
    {
      id: 3,
      nomMachine: 'Machine 3',
      typeMachine: 'Type C',
      fonction: 'Function C',
      etat: true,
      capaciteMaximale: '10 items/jour',
      chefMachine: 'Pedro Look',
      idAtelier: 2,
      productName: 'Product C',
      production: 200
    },
    {
      id: 4,
      nomMachine: 'Machine 4',
      typeMachine: 'Type D',
      fonction: 'Function D',
      etat: false,
      capaciteMaximale: '10 items/jour',
      chefMachine: 'Marck Look',
      idAtelier: 2,
      productName: 'Product D',
      production: 120
    },
    {
      id: 6,
      nomMachine: 'Machine 6',
      typeMachine: 'Type E',
      fonction: 'Function E',
      etat: true,
      capaciteMaximale: '10 items/jour',
      chefMachine: 'Simp Look',
      idAtelier: 6,
      productName: 'Product E',
      production: 300
    }
  ];

  constructor() {}

  getMachinesByAtelierId(atelierId: number): machine[] {
    return this.machines.filter(machine => machine.idAtelier === atelierId);
  }

  getMachines(): machine[] {
    return this.machines;
  }

  getMachineById(machineId: number): machine | undefined {
    return this.machines.find(machine => machine.id === machineId);
  }
}
