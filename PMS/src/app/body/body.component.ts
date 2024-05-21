import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { ActivatedRoute, UrlSegment } from '@angular/router';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  product =  [
    {id: 1, titre : 'Produits de lits militaires', produit:"lit" , quantiite: 80, dure: '10j', },
    {id: 2, titre : 'Produits de lits militaires', produit:"pilow" , quantiite: 10, dure: '5j', },
    {id: 3, titre : 'Produits de lits militaires', produit:"list" , quantiite: 80, dure: '10j', }
  ];
  machine = [
    {
      id : 1,
      nomMachine :"MA201 ",
      typeMachine: "electric" ,
      fonction : "soude",
      etat : 1,
      idAtelier : 1,
      rendement : 20
    },
    {
      id : 1,
      nomMachine :"ME303 ",
      typeMachine: "electric" ,
      fonction : "soude",
      etat : 1,
      idAtelier : 1,
      product : "80 lits",
      rendement : 30,
    },
    {
      id : 1,
      nomMachine :"MB407 ",
      typeMachine: "electric" ,
      fonction : "soude",
      etat : 1,
      idAtelier : 1,
      product : "80 lits",
      rendement : 60
    }
  ]

  constructor(private route : ActivatedRoute){}

  ACroute? : string;
  modify(id: number):void{

    const selectedItem = this.product.find(item => item.id === id);
    if (selectedItem) {
      // Set the values of the selected item to the form fields
      (document.getElementById('title') as HTMLInputElement).value = selectedItem.titre;
      (document.getElementById('product') as HTMLInputElement).value = selectedItem.produit; // Assuming 'product' should also display 'titre'
      (document.getElementById('quantity') as HTMLInputElement).value = selectedItem.quantiite.toString();
      (document.getElementById('dure') as HTMLInputElement).value = selectedItem.dure;
    }
  }
  ngOnInit(): void {
    this.route.url.subscribe(UrlSegment =>
       {
         this.ACroute = UrlSegment[UrlSegment.length - 1].path;

       }
     )
 }


}
