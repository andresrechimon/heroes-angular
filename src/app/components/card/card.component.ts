import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() heroe:any = {};
  @Input() i:number = 0;

  @Output() selectedHeroe: EventEmitter<number>;

  constructor(private router:Router){
    this.selectedHeroe = new EventEmitter();
  }

  verHeroe(){
    // this.router.navigate(['/heroe', i])
    // this.selectedHeroe.emit(this.i)
    this.router.navigate( ['/heroe', this.i] );
  }
}
