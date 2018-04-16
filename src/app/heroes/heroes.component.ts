import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //Criando uma variável do tipo array de Hero
  heroes: Hero[];

  selectedHero: Hero;

  //Com essa declaração no construtor, quando o componente for chamado
  //ele vai criar uma variável e vai fazer o depency injection nela
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /* Antes do subscribe
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
*/

  //O subscribe possibilita um funcionamento assíncrono.
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}