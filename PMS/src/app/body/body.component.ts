import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { UsineService } from '../services/usine/usine.service';
import { AtelierService } from '../services/atelier/atelier.service';
import { MachineService } from '../services/machines/machine.service';
import { machine } from '../shared/models/machine';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  product = [
    { id: 1, titre: 'Produits de lits militaires', produit: "lit", quantiite: 80, dure: '10j' },
    { id: 2, titre: 'Produits de lits militaires', produit: "pilow", quantiite: 10, dure: '5j' },
    { id: 3, titre: 'Produits de lits militaires', produit: "list", quantiite: 80, dure: '10j' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usineService: UsineService,
    private atelierService: AtelierService,
    private machineService: MachineService
  ) {}

  ACroute?: string;
  usines: any[] = [];
  ateliers: any[] = [];
  machines: any[] = [];
  selectedMachine: machine | null = null;


  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      if (urlSegments.length > 1) {
        this.ACroute = urlSegments[urlSegments.length - 2].path;
      } else {
        this.ACroute = urlSegments[0].path;
      }

      if (this.ACroute === 'fact' && urlSegments.length > 1) {
        const usineId = +urlSegments[urlSegments.length - 1].path;
        this.ateliers = this.atelierService.getAteliersByUsineId(usineId);
        console.log('Filtered ateliers:', this.ateliers);
      } else if ((this.ACroute === 'atelier' || this.ACroute === 'machine') && urlSegments.length > 1) {
        const atelierId = +urlSegments[urlSegments.length - 1].path;
        this.machines = this.machineService.getMachinesByAtelierId(atelierId);
        console.log('Filtered machines:', this.machines);
      }
    });

    this.usines = this.usineService.getUsines();
    
  }

  modify(id: number): void {
    const selectedItem = this.product.find(item => item.id === id);
    if (selectedItem) {
      (document.getElementById('title') as HTMLInputElement).value = selectedItem.titre;
      (document.getElementById('product') as HTMLInputElement).value = selectedItem.produit;
      (document.getElementById('quantity') as HTMLInputElement).value = selectedItem.quantiite.toString();
      (document.getElementById('dure') as HTMLInputElement).value = selectedItem.dure;
    }
  }

  navigateToAtelier(usineId: number): void {
    this.router.navigate(['/fact', usineId]);
  }

  navigateToMachine(atelierId: number): void {
    this.router.navigate(['/atelier', atelierId]);
  }


  onMachineDoubleClicked(machine: machine): void {
    this.selectedMachine = machine;
  }
  
}
