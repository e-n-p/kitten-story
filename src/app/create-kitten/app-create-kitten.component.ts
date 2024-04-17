import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContextService } from '../context.service';
import { Kitten } from '../models/types/kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrl: './app-create-kitten.component.css'
})
export class CreateKittenComponent {
    createKittenForm!:FormGroup;

    constructor(private formBuilder: FormBuilder, private context: ContextService){
      this.createKittenForm = this.formBuilder.group({
        name: [''],
        breed: [''],
        dob: [''],
        image: ['']
      });
    }

  onSubmit(): void{
    const newKitten : Kitten = {
      name: this.createKittenForm.value.name,
      breed: this.createKittenForm.value.breed,
      dob: this.createKittenForm.value.dob,
      image: this.createKittenForm.value.image
    };
    this.context.addKittenToDB(newKitten);
  }
}
