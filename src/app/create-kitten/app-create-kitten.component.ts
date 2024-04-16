import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrl: './app-create-kitten.component.css'
})
export class CreateKittenComponent {
    createKittenForm!:FormGroup;

    constructor(private formBuilder: FormBuilder){
      this.createKittenForm = this.formBuilder.group({
        name: [''],
        breed: [''],
        dob: [''],
        image: ['']
      })
  }

  onSubmit(): void{
    console.log(this.createKittenForm.value);
  }
}
