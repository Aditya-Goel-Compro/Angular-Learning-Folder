import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterLink, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed styleUrls
})
export class AppComponent {
  heading = 'new-Angular-Project';
  myname = 'aditya goel';
  zz: any = '';
  abc(event: Event) {
    console.log((event?.target as HTMLInputElement).value);
    this.zz = (event?.target as HTMLInputElement).value;
  }
  nameFromInput: any = '';
  clickMe() {
    console.log('button clicked');

    this.nameFromInput = this.zz;
  }

  x: number = 0;
  name: string = ''; // Removed unnecessary space
  displayName: string = '';
  singleFnc(para: string) {
    if (para === 'inc') {
      this.x++;
    } else if (para === 'dec') {
      this.x--;
    } else {
      this.x = 0;
    }
  }

  handleInput(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
    console.log(this.name);
  }

  userEmail: string = ' ';
  emailFrontend: string = ' ';
  getEmail(val: string) {
    console.log(val);
    this.userEmail = val;
  }

  setEmail() {
    this.emailFrontend = this.userEmail;
  }

  showDiv: boolean = true;

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  color: string = 'red';

  arr = ['ksankjd', 'sfd', 'sds ', ' fdsfsd'];

  signalVar = signal(0);
  signalFnc(para: string) {
    if (para === 'inc') {
      this.signalVar.set(this.signalVar() + 1);
    } else {
      this.signalVar.set(this.signalVar() - 1);
    }
  }

  constructor() {
    effect(() => {
      console.log('Signal Value:', this.signalVar());
      // alert('signal value get changed');
    });
  }

  ArrayNames: string[] = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Emma',
    'Frank',
    'Grace',
    'Hannah',
    'Isaac',
    'Jack',
  ];

  twoWayBinding = 1;

  //  todo list

  taskItem: string = '';
  TaskArr: { id: number; task: string }[] = [];
  addTask() {
    this.TaskArr.push({ id: this.TaskArr.length + 1, task: this.taskItem });
    console.log(this.TaskArr);
    this.taskItem = '';
  }

  deleteTask(id: number) {
    this.TaskArr = this.TaskArr.filter((item) => item.id !== id);
  }
}
