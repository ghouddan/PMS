import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { RoundAdvanceBarComponent } from '../round-advance-bar/round-advance-bar.component';
import { ProductionViewComponent } from '../production-view/production-view.component';
import { HostListener } from '@angular/core';

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

  ACroute : string = "usines";
  selectedMachineId : number = 0;
  

  constructor(private route:ActivatedRoute, private router : Router){}
  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      // Extract the base route segment
      if (urlSegments.length > 1) {
        this.ACroute = urlSegments[urlSegments.length - 2].path;
      } else {
        this.ACroute = urlSegments[0].path;
      }

      // Check if there's an additional ID parameter
      if (urlSegments.length > 1) {
        const id = +urlSegments[urlSegments.length - 1].path;
        // Retrieve filtered data based on the ID
      }
    });
  }

  
  logout() : void{
    this.router.navigate(['/']);  }
}
