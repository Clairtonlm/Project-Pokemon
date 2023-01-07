import { Injectable } from '@angular/core';
import{environments} from 'src/environments/environments';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs'
import { PokemonData } from "../models/pokemonData";

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {
  private baseUrl:string = "";
  private pokeData:PokemonData | any

  constructor(
    private http:HttpClient
  ) {
    this.baseUrl = environments.pokeApi
  }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    this.pokeData = this.http.get<PokemonData>(`${this.baseUrl}${pokemonName}`)
    return this.pokeData
  }
}
