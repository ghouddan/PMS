import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { RoundAdvanceBarComponent } from '../round-advance-bar/round-advance-bar.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [ 
    FormComponent,
     NgIf,
     RoundAdvanceBarComponent,
    ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{

  ACroute : string = "usines";

  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
     this.route.url.subscribe(UrlSegment =>
        {
          this.ACroute = UrlSegment[UrlSegment.length - 1].path;

        }
      )
  }

}
