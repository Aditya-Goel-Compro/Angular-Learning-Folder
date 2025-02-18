import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: { name: string; age: number; email: string; id: number }[] = [
    { name: "Alice Johnson", age: 28, email: "alice@example.com", id: 1 },
    { name: "Bob Smith", age: 32, email: "bob@example.com", id: 2 },
    { name: "Charlie Betrown", age: 24, email: "charlie@example.com", id: 3 },
    { name: "David Williams", age: 30, email: "david@example.com", id: 4 },
    { name: "Emma Davis", age: 27, email: "emma@example.com", id: 5 },
  ];

  particularUser = this.users[0];


userId:number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((x) => {
      console.log(x["id"]);
      this.userId = x["id"]
      this.particularUser = this.users[this.userId-1];
  });


  }
}