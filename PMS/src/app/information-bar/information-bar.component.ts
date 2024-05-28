import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsineService } from '../services/usine/usine.service';
import { AtelierService } from '../services/atelier/atelier.service';
import { MachineService } from '../services/machines/machine.service';

@Component({
  selector: 'app-information-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './information-bar.component.html',
  styleUrls: ['./information-bar.component.css']
})
export class InformationBarComponent implements OnInit {

  ACroute: string = '';

  // Home data
  user: string = "Mohammed";
  profition: string = "Chef de production";

  // Usine data
  usinName: string = "";
  chef: string = "";
  nombrePersonne: number = 0;
  nombreMUsine: number = 0;

  // Atelier data
  AtelierName: string = "";
  chefAtelier: string = "";
  nombrePAtelier: number = 0;
  nombremachine: number = 0;
  capaciteAtelier: string = "";

  // Machine data
  machine: string = "";
  chefMachien: string = "";
  atelier_id: number = 0;
  capacite: string = "";

  constructor(
    private route: ActivatedRoute,
    private usineService: UsineService,
    private atelierService: AtelierService,
    private machineService: MachineService
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      if (urlSegments.length > 1) {
        this.ACroute = urlSegments[urlSegments.length - 2].path;
      } else {
        this.ACroute = urlSegments[0].path;
      }

      // Check if there's an additional ID parameter
      if (urlSegments.length > 1) {
        const id = +urlSegments[urlSegments.length - 1].path;
        if (this.ACroute === 'fact') {
          this.loadUsineData(id);
        } else if (this.ACroute === 'atelier') {
          this.loadAtelierData(id);
        } else if (this.ACroute === 'machine') {
          this.loadMachineData(id);
        }
      }
    });
  }

  loadUsineData(usineId: number): void {
    const usine = this.usineService.getUsineById(usineId);
    if (usine) {
      this.usinName = usine.nomUsine;
      this.chef = usine.chefUsine;
      this.nombrePersonne = usine.nombrePersonne;
      this.nombreMUsine = usine.nombreMachines;
    }
  }

  loadAtelierData(atelierId: number): void {
    const atelier = this.atelierService.getAtelierById(atelierId);
    if (atelier) {
      this.AtelierName = atelier.nomAtelier;
      this.chefAtelier = atelier.chefAtelier;
      this.nombrePAtelier = atelier.nombrePersonne;
      this.nombremachine = atelier.nombreMachines;
      this.capaciteAtelier = atelier.capaciteMaximale;
    }
  }

  loadMachineData(machineId: number): void {
    const machine = this.machineService.getMachineById(machineId);
    if (machine) {
      this.machine = machine.nomMachine;
      this.chefMachien = machine.chefMachine;
      this.atelier_id = machine.idAtelier;
       this.capacite = machine.capaciteMaximale;
    }
  }
}
