import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Kitten } from './models/types/kitten';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private kittenDB = new BehaviorSubject<Array<Kitten>>([]);
  dataGallery$ = this.kittenDB.asObservable();

  private adoptedDB = new BehaviorSubject<Array<Kitten>>([]);
  dataAdopted$ = this.adoptedDB.asObservable();


  constructor() { }

  createNewArray(array:Array<Kitten>, newKitten:Kitten): Array<Kitten> {
    return [...array, newKitten];
  }

  getKittenDB(): Array<Kitten>{
    return this.kittenDB.value;
  }

  addKittenToDB(newKitten: Kitten): void {
    this.kittenDB.next(this.createNewArray(this.getKittenDB(), newKitten));
  }

  getAdoptedDB(): Array<Kitten>{
    return this.adoptedDB.value;
  }

  addToAdoptedDB(newKitten: Kitten): void {
    this.adoptedDB.next(this.createNewArray(this.getAdoptedDB(), newKitten));
  }

  removeFromGallery(kittenToRemove: Kitten): void {
    const result = this.getKittenDB().filter((kitten: Kitten) => {
        return kitten.name !== kittenToRemove.name
    });
    const newArr = [...result];
    this.kittenDB.next(newArr);
    console.log(this.getKittenDB());
  }
}
