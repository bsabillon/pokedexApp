import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { pokemon } from './../../../models/pokemon';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public pokemons: any = [];


  constructor(public router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.dataService.getPokemons().subscribe((pokemon: pokemon) => {
      this.dataService.pokemon = pokemon;
      this.pokemons = pokemon;
    });
  }


}
