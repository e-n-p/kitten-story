import { Component, OnInit } from '@angular/core';
import { ContextService } from '../context.service';
import { Kitten } from '../models/types/kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrl: './app-list-kitten.component.css'
})
export class ListKittenComponent implements OnInit{
  kittenGallery:Array<Kitten> = [];

  constructor(private context: ContextService){}

  ngOnInit(): void {
    this.context.dataGallery$.subscribe(data => {
      console.log('Gallery data updated:', data);
      this.kittenGallery = data;
    });
  }

  adoptKitten(newKitten: Kitten): void{
    console.log("adopt pressed");
    this.context.removeFromGallery(newKitten);
    console.log("kitten 'removed'");
    this.context.addToAdoptedDB(newKitten);
  }

}
