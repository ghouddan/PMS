import { Injectable } from '@angular/core';
import { atelier } from '../../shared/models/atelier';
import { machine } from '../../shared/models/machine';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {
  private ateliers: atelier[] = [
    {
      id: 1,
      nomAtelier: 'Atelier A',
      chefAtelier: 'Alice Smith',
      nombrePersonne: 10,
      nombreMachines: 2,
      capaciteMaximale: '10 items/jour',
      usineId: 1,
      idmachine: [
        {
          id: 1,
          nomMachine: 'Machine 1',
          typeMachine: 'Type A',
          fonction: 'Function A',
          capaciteMaximale: '10 items/jour',
          chefMachine: 'Jon Look',
          etat: true,
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
        }
      ]
    },
    {
      id: 2,
      nomAtelier: 'Atelier B',
      chefAtelier: 'Alice Smith',
      nombrePersonne: 10,
      nombreMachines: 2,
      capaciteMaximale: '20 items/jour',
      usineId: 2,
      idmachine: [
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
        }
      ]
    },
    {
      id: 6,
      nomAtelier: 'Atelier C',
      chefAtelier: 'Alice Smith',
      nombrePersonne: 10,
      nombreMachines: 1,
      capaciteMaximale: '10 items/jour',
      usineId: 2,
      idmachine: [
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
      ]
    }
  ];

  constructor() { }

  getAteliers(): atelier[] {
    return this.ateliers;
  }

  getAteliersByUsineId(usineId: number): atelier[] {
    return this.ateliers.filter(atelier => atelier.usineId === usineId);
  }

  getAtelierById(atelierId: number): atelier | undefined {
    return this.ateliers.find(atelier => atelier.id === atelierId);
  }
}
