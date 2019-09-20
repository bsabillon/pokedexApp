import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { pokemon } from './../../../models/pokemon';

@Component({
  selector: 'app-update-pokemon',
  templateUrl: './update-pokemon.component.html',
  styleUrls: ['./update-pokemon.component.css']
})
export class UpdatePokemonComponent implements OnInit {
  public pokemonId: number;
  public pokemon: any = [];
  public abilities: string;
  public base_experience: number;
  public forms: string;
  public game_indices: number;
  public height: number;
  public held_items: string;
  public is_default: boolean;
  public location_area_encounters: string;
  public moves: string;
  public order: number;
  public name: string;
  public species: string;
  public sprites: string;
  public stats: number;
  public types: string;
  public weight: number;
  message : string;

  constructor(private route: ActivatedRoute, 
              public router: Router, 
              public dataService: DataService,
              private _snackBar: MatSnackBar
             ) { 
              this.pokemonId = this.route.snapshot.params.id;
             }


  openSnackBar(){
      this._snackBar.open('Pokemon updated successfully!','',{duration: 4000})
    }

  ngOnInit() {
    this.getPokemonDetail();
  }


  getPokemonDetail() {
    this.dataService.getPokemonbyId(this.pokemonId).subscribe((pokemon: pokemon) => {
      this.pokemon = pokemon;
      this.name = pokemon.name;
      this.abilities=pokemon.abilities;
      this.base_experience=pokemon.base_experience;
      this.forms=pokemon.forms;
      this.game_indices=pokemon.game_indices;
      this.height=pokemon.height;
      this.held_items=pokemon.held_items;
      this.location_area_encounters=pokemon.location_area_encounters;
      this.is_default=pokemon.is_default;
      this.moves=pokemon.moves;
      this.order=pokemon.order;
      this.name=pokemon.name;
      this.species=pokemon.species;
      this.sprites=pokemon.sprites;
      this.stats=pokemon.stats;
      this.types=pokemon.types;
      this.weight=pokemon.weight;
    });
  }


  updatePokemon(){
    const pokemon: pokemon={
      id: this.pokemonId,
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

    this.dataService.updatePokemon(this.pokemonId, pokemon).subscribe((data)=>{
      this.dataService.pokemon=pokemon;
      this.router.navigate(['/pokemons']);
      this.openSnackBar();
    })

  }

}
