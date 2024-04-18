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

  getKittenDB(): Array<Kitten>{
    return this.kittenDB.value;
  }

  addKittenToDB(newKitten: Kitten): void {
    const currentArr = this.getKittenDB();
    const newArr = [...currentArr, newKitten];
    this.kittenDB.next(newArr);
  }

  getAdoptedDB(): Array<Kitten>{
    return this.adoptedDB.value;
  }

  addToAdoptedDB(newKitten: Kitten): void {
    const currentArr = this.getAdoptedDB();
    const newArr = [...currentArr, newKitten];
    this.adoptedDB.next(newArr);
  }

  removeFromGallery(kittenToRemove: Kitten): void {
    const gallery = this.getKittenDB();
    console.log("before filter " + gallery);
    const result = gallery.filter((kitten) => {
        kitten.name !== kittenToRemove.name
    });
    console.log("result of filter " + result);
    const newArr = [...result];
    this.kittenDB.next(newArr);
    console.log(this.getKittenDB());
  }


}
