import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {pokemon} from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public pokemon: pokemon;
  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  public endpoint = 'http://localhost:5000';


  constructor(private http: HttpClient, public router: Router) { }

  getPokemons() {
    return this.http.get(`${this.endpoint}/pokemons`);
  }

  getPokemonbyId(id: number){
    return this.http.get(`${this.endpoint}/pokemons/byId/${id}`);
  }

  
}
