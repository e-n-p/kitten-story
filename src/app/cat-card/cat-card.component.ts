import { Component, Input } from '@angular/core';
import { Kitten } from '../models/types/kitten';
import { ContextService } from '../context.service';

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
  };
  @Input()
  adoptButton: boolean = false;

  constructor(private context: ContextService){}

  adoptKitten(newKitten: Kitten): void{
    console.log("adopt pressed");
    this.context.removeFromGallery(newKitten);
    console.log("kitten 'removed'");
    this.context.addToAdoptedDB(newKitten);
  }

}
