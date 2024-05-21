import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { RoundAdvanceBarComponent } from '../round-advance-bar/round-advance-bar.component';
import { ProductionViewComponent } from '../production-view/production-view.component';

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

  constructor(private route:ActivatedRoute, private router : Router){}
  ngOnInit(): void {
     this.route.url.subscribe(UrlSegment =>
        {
          this.ACroute = UrlSegment[UrlSegment.length - 1].path;

        }
      )
  }

  logout() : void{
    this.router.navigate(['/']);  }
}
