import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PokemonsComponent} from "./components/pokemons/pokemons/pokemons.component";
import {AddPokemonComponent} from "./components/pokemons/add-pokemon/add-pokemon.component";
import {PokemonDetailsComponent} from "./components/pokemons/pokemon-details/pokemon-details.component";
import { UpdatePokemonComponent } from './components/pokemons/update-pokemon/update-pokemon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'addPokemon', component: AddPokemonComponent },
  { path: 'updatePokemon/:id', component: UpdatePokemonComponent },
  { path: 'pokemonDetails/:id', component: PokemonDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
