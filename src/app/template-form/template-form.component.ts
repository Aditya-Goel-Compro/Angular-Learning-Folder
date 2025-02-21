import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule , NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports : [FormsModule , NgIf ] , 
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  userDetails: any  ; 
  addDetails(form: NgForm) {
    console.log('Form Data:', form); // Logs form values
    this.userDetails = form
    console.log(this.userDetails.range)
  }
}
