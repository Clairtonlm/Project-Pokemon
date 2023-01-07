import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonServicesService } from 'src/app/services/pokemon-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  pokemon: PokemonData


  name:string = "BULBASSAUR"
  typePokemon:string[] = ['Fire', 'Rock', 'Force']


  constructor( private service:PokemonServicesService)
  {
    this.pokemon = {
      id:0,
    name:'',
    sprites:{
      front_default:''
    },
    types:[]
    }
  }
  ngOnInit():void {
    this.service.getPokemon("Pikachu").subscribe(
      {
      next: (res) => {

        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
        console.log(res)
        console.log(this.pokemon)


      },
      error: (err) => console.log(err)

      }
    )
  }

}
