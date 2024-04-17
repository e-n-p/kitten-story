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

  constructor(public context: ContextService){}

  ngOnInit(): void {
    // this.kittenGallery = this.context.getKittenDB();

    this.context.data$.subscribe(data => {
      console.log('Data updated:', data);
      this.kittenGallery = data;
    });
  }
}
