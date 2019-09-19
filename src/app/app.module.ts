import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddPokemonComponent } from './components/pokemons/add-pokemon/add-pokemon.component';
import { PokemonDetailsComponent } from './components/pokemons/pokemon-details/pokemon-details.component';
import { PokemonsComponent } from './components/pokemons/pokemons/pokemons.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AddPokemonComponent,
    PokemonDetailsComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatCardModule,MatFormFieldModule,MatIconModule,
    MatInputModule,MatButtonModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
