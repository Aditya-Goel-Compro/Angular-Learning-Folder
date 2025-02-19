import { Component } from '@angular/core';
import { FormGroup  , FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile-group',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-group.component.html',
  styleUrl: './profile-group.component.css'
})
export class ProfileGroupComponent {



  profileForm = new FormGroup
  ({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){
    console.log("form is submitted");
  }

  consoleFormData(){
    console.log(`name : ${this.profileForm.value.name} , email : ${this.profileForm.value.email} , password : ${this.profileForm.value.password}`);
  }
}
