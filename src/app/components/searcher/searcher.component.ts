import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit{
  heroes:any = [];
  termino:string = '';

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['termino'])
      this.heroes = this._heroesService.searchHeroes(params['termino']);
      this.termino = params['termino'];
      console.log('Héroes filtrados: ', this.heroes)
    })
  }
}
