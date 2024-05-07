import { Component, OnInit} from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './information-bar.component.html',
  styleUrl: './information-bar.component.css'
})
export class InformationBarComponent implements OnInit{

  state : string = "usine"
  ACroute : string = ''

  // homme data
  user: string = "Mohammed";
  profition : string = "Chef de production";

  // usine data
  usinName: string = "Usine Rabat Av.AlFadila";
  chef : string = " Senbati Nizar";
  nombrePersonne : number = 20;
  nombreMUsine : number = 10;


  // atelier data 

  AtelierName: string = "Usine Rabat Av.AlFadila";
  chefAtelier : string = " Senbati Nizar";
  nombrePAtelier : number = 20;
  nombremachine : number = 10;
  capaciteAtelier : string = "10list/jours"

  // machien
  machine  : string = "Machine Soudage id2011";
  chefMachien : string = " Senbati Nizar";
  atelier_id : number = 2313 
  capacite : string = "10list/jours"

  constructor(private route : ActivatedRoute){}

  ngOnInit():void{
    this.route.url.subscribe(UrlSegment =>
      {
        this.ACroute = UrlSegment[UrlSegment.length - 1].path
      }
    )
    console.log(this.ACroute)
  }
  

}


