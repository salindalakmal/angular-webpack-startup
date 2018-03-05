import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import { HEROES } from '../mock-heroes';

@Component({
  	selector: 'app-heroes',
  	templateUrl: __dirname + 'src/app/heroes/heroes.component.html',
  	styleUrls: [ __dirname + 'src/app/heroes/heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes = HEROES;
 
  selectedHero: Hero;
 
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}