import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  name:string = "BULBASSAUR"
  typePokemon:string[] = ['Fire', 'Rock', 'Force']
}
