import { Component, Input } from '@angular/core';
import { Kitten } from '../models/types/kitten';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.css',
})
export class CatCardComponent {
  @Input()
  singleCat:Kitten = {
    name: '',
    breed: '',
    dob: new Date(),
    image: ''

  }
}
