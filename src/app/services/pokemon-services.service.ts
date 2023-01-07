import { Injectable } from '@angular/core';
import{environments} from 'src/environments/environments';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {
  private baseUrl:string = "";
  private pokeData:any

  constructor(
    private http:HttpClient
  ) {
    this.baseUrl = environments.pokeApi
  }

  getPokemon(pokemonName:string){
    this.pokeData = this.http.get(`${this.baseUrl}${pokemonName}`)
    console.log(this.pokeData)
  }
}
