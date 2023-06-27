import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit{
  heroes:any;
  
  constructor(private _heroesService:HeroesService, private router:Router){

  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroues();
  }

  verHeroe(i:number){
    this.router.navigate(['/heroe', i])
  }
}
