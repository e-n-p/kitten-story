import { Component, OnInit } from '@angular/core';
import { ContextService } from '../context.service';
import { Kitten } from '../models/types/kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrl: './app-user-kitten.component.css'
})
export class UserKittenComponent implements OnInit{
  adoptedGallery:Array<Kitten> = [];

  constructor(public context: ContextService){}

  ngOnInit(): void {
    this.context.dataAdopted$.subscribe(data => {
      console.log('Adoption data updated:', data);
      this.adoptedGallery = data;
    });
  }
  
}
