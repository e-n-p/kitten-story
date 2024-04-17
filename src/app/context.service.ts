import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Kitten } from './models/types/kitten';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private kittenDB = new BehaviorSubject<Array<Kitten>>([]);
  data$ = this.kittenDB.asObservable();

  constructor() { }

  getKittenDB(): Array<Kitten>{
    return this.kittenDB.value;
  }

  addKittenToDB(newKitten: Kitten): void {
    const currentArr = this.getKittenDB();
    const newArr = [...currentArr, newKitten];
    this.kittenDB.next(newArr);
  }

}
