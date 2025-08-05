

import { Component, effect, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink, RouterOutlet, HeaderComponent , ReactiveFormsModule] ,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  

  // form control reactive form
  password  = new FormControl();
  email = new FormControl();;


  consoleFormData(){
    console.log(`email : ${this.email.value} , password : ${this.password.value}`);
    console.log();
  }
}