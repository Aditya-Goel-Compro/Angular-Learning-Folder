

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
  users: { name: string; age: number; email: string; id: number }[] = [
    { name: "Alice Johnson", age: 28, email: "alice@example.com", id: 1 },
    { name: "Bob Smith", age: 32, email: "bob@example.com", id: 2 },
    { name: "Charlie Brown", age: 24, email: "charlie@example.com", id: 3 },
    { name: "David Williams", age: 30, email: "david@example.com", id: 4 },
    { name: "Emma Davis", age: 27, email: "emma@example.com", id: 5 },
  ];


  // form control reactive form
  password  = new FormControl();
  email = new FormControl();;


  consoleFormData(){
    console.log(`email : ${this.email.value} , password : ${this.password.value}`);
    console.log();
  }
}