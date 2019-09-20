import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pokemon } from './../../../models/pokemon';
import { DataService } from '../../../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
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
              ){

    this.pokemonId = this.route.snapshot.params.id;
   }

  openSnackBar(){
    this._snackBar.open('Pokemon deleted successfully!','',{duration: 2000})
  }
   
  ngOnInit() {
    this.getPokemonDetail();
  }


  getPokemonDetail() {
    this.dataService.getPokemonbyId(this.pokemonId).subscribe((pokemon: pokemon) => {
      this.pokemon = pokemon;
    });
  }

  deletePokemon(){
    this.dataService.deletePokemon(this.pokemonId).subscribe((data)=>{
      this.openSnackBar();
      this.router.navigate(['/pokemons']);
    })
  }

  

}
