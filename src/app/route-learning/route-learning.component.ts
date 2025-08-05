import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-route-learning',
  imports: [RouterLink],
  templateUrl: './route-learning.component.html',
  styleUrl: './route-learning.component.css',
})
export class RouteLearningComponent {
  constructor(private aditya: Router) {}

  goToProfilePageBest() {
    this.aditya.navigate(['profile'], { queryParams: { name: 'Aditya Goel' } });
  }



  users: { name: string; age: number; email: string; id: number }[] = [
      { name: "Alice Johnson", age: 28, email: "alice@example.com", id: 1 },
      { name: "Bob Smith", age: 32, email: "bob@example.com", id: 2 },
      { name: "Charlie Brown", age: 24, email: "charlie@example.com", id: 3 },
      { name: "David Williams", age: 30, email: "david@example.com", id: 4 },
      { name: "Emma Davis", age: 27, email: "emma@example.com", id: 5 },
    ];
  
}
