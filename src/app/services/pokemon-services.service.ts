import { Injectable } from '@angular/core';
import{environments} from 'src/environments/environments'

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {
  private baseUrl:string = "";

  constructor() {
    this.baseUrl = environments.pokeApi
  }

  getPokemon(pokemonName:string){
    console.log(this.baseUrl);
  }
}
