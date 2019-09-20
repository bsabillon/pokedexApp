import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pokemon } from './../../../models/pokemon';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  id: number;
  abilities: string;
  base_experience: number;
  forms: string;
  game_indices: number;
  height: number;
  held_items: string;
  is_default: boolean;
  location_area_encounters: string;
  moves: string;
  order: number;
  name: string;
  species: string;
  sprites: string;
  stats: number;
  types: string;
  weight: number;

  constructor(public router: Router, public dataService: DataService) { }

  ngOnInit() {
  }


  addPokemon(){
    const pokemon: pokemon={
      id: this.id,
      abilities: this.abilities,
      base_experience: this.base_experience,
      forms: this.forms,
      game_indices: this.game_indices,
      height: this.height,
      held_items: this.held_items,
      is_default: this.is_default,
      location_area_encounters: this.location_area_encounters,
      moves: this.moves,
      order: this.order,
      name: this.name,
      species: this.species,
      sprites: this.sprites,
      stats: this.stats,
      types: this.types,
      weight: this.weight,
    }

    this.dataService.postPokemon(pokemon).subscribe((data)=>{
      this.dataService.pokemon=pokemon;
    })

  }
}
