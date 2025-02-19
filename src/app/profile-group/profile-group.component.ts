import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup  , FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-group',
  imports: [ReactiveFormsModule , NgIf],
  templateUrl: './profile-group.component.html',
  styleUrl: './profile-group.component.css'
})
export class ProfileGroupComponent {



  profileForm = new FormGroup
  ({
    name: new FormControl('' , [Validators.required , Validators.minLength(4)]),  
    email: new FormControl('' , [Validators.required , Validators.email]),
    password: new FormControl('' , [Validators.required , Validators.minLength(6) , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}')])
  });

  onSubmit(){
    console.log("form is submitted");
  }

  consoleFormData(){
    console.log(`name : ${this.profileForm.value.name} , email : ${this.profileForm.value.email} , password : ${this.profileForm.value.password}`);
  }

  get name(){
    return this.profileForm.get('name');
  }

  get email(){
    return this.profileForm.get('email');
  }
  get password(){ 
    return this.profileForm.get('password');
  }
}
