import { Component, OnInit } from '@angular/core';
import { PokemonServicesService } from 'src/app/services/pokemon-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  name:string = "BULBASSAUR"
  typePokemon:string[] = ['Fire', 'Rock', 'Force']


  constructor( private service:PokemonServicesService){

  }
  ngOnInit():void {
    this.service.getPokemon("Pikachu").subscribe(
      {
      next: (res) => console.log(res),
      
      }
    )
  }

}
