import { Component } from '@angular/core';
import { Kitten } from '../models/types/kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrl: './app-user-kitten.component.css'
})
export class UserKittenComponent {

    kittenDB:Array<Kitten> = [];
    
}
