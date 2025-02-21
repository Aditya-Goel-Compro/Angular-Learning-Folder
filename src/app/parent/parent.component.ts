import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child2Component } from "./child2/child2.component";

@Component({
  selector: 'app-parent',
  imports: [RouterOutlet, RouterLink, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
username = "   choose from dropdown"


onUserChange(user:string){
  this.username = user ; 
}

}


