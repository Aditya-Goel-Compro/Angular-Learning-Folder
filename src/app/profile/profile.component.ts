import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  name: string | null = ' ';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this jab profile url me hi data bhejo
    let dataFromRoute = this.route.snapshot.paramMap.get('data');
    console.log('data from the route :---- ', dataFromRoute);
    this.name = dataFromRoute;

    // this jab best practice in used
    this.route.queryParams.subscribe((dataFromRouterPage) => {
      this.name = dataFromRouterPage['name'];
    });

    // this jab route.ts file se hi data pass kara ho

    this.route.data.subscribe((data) => {
      this.name = data['name'];
    });
  }
}
