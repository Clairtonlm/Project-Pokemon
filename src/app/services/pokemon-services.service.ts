import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {

  constructor() { }

  getPokemon(pokemonName:string){
    console.log(pokemonName);
  }
}
