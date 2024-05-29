import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { RoundAdvanceBarComponent } from '../round-advance-bar/round-advance-bar.component';
import { ProductionViewComponent } from '../production-view/production-view.component';
import { HostListener } from '@angular/core';
import { machine } from '../shared/models/machine';
import { MachineService } from '../services/machines/machine.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [ 
    FormComponent,
     NgIf,
     RoundAdvanceBarComponent,
     ProductionViewComponent
    ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{

  ACroute : string = "";
  selectedMachineId : number = 0;
  selectedMachine : machine | undefined;
  

  constructor(private route:ActivatedRoute, private router : Router, private machineService: MachineService
  ){}
  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      // Extract the base route segment
      if (urlSegments.length > 1) {
        this.ACroute = urlSegments[urlSegments.length - 2].path;
      } else {
        this.ACroute = urlSegments[0].path;
      }

      // Check if there's an additional ID parameter
      if (this.ACroute === "machine"  || urlSegments.length > 1) {
        const id = +urlSegments[urlSegments.length - 1].path;
        this.selectedMachine = this.machineService.getMachineById(id);
        console.log("machine sidebar selected ", this.selectedMachine);

        
      }
    });
  }

  
  logout() : void{
    this.router.navigate(['/']);  }
}
