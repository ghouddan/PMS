import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { InformationBarComponent } from '../information-bar/information-bar.component';
import { BodyComponent } from '../body/body.component';
import { AtelierService } from '../services/atelier/atelier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ateliers',
  standalone: true,
  imports: [NavbarComponent, SideBarComponent, InformationBarComponent, BodyComponent],
  templateUrl: './ateliers.component.html',
  styleUrl: './ateliers.component.css'
})
export class AteliersComponent {

  ateliers: any[] = [];

  constructor(private route: ActivatedRoute, private atelierService: AtelierService) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const usineId = +params['usineId']; // Retrieve usineId from route parameter
  //     this.ateliers = this.atelierService.getAteliersByUsineId(usineId); // Filter ateliers by usineId
  //   });
  // }
}
