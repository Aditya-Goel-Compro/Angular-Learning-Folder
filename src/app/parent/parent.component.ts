import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-parent',
  imports: [RouterOutlet, RouterLink, Child2Component, Child1Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  username = '   choose from dropdown';

  onUserChange(user: string) {
    this.username = user;
  }

  arr = ['child1', 'child2', 'child3', 'child4', 'child5'];

}
