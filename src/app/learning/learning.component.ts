import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-learning',
  imports: [FormsModule, RouterLink, RouterOutlet, HeaderComponent, NgIf , NgFor],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent {
  myname = 'aditya goel';
  zz: any = '';
  arr2 = [
    { id: 1, name: 'aditya', age: 21 },
    { id: 2, name: 'goel', age: 20 },
  ];

  abc(event: Event) {
    console.log((event?.target as HTMLInputElement).value);
    this.zz = (event?.target as HTMLInputElement).value;
  }
  nameFromInput: any = '';
  clickMe() {
    console.log('button clicked');

    this.nameFromInput = this.zz;
  }
  heading = 'new-Angular-Project';
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
      console.log(
        'Signal Valuechanging hence effect fnc is running on value changes :',
        this.signalVar()
      );
      // alert('signal value get changed');
    });
  }

  // need of computed signals
  a = signal(1);
  b = signal(2);
  c = computed(() => this.a() + this.b());

  showComputedSignals() {
    console.log('value of c : -', this.c());
    this.a.set(100);
    console.log('value of c : -', this.c());
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

  bgColor = 'yellow';
  changeColor() {
    this.bgColor = 'green';
  }

  showText = true;
  toggleText() {
    this.showText = !this.showText;
  }

  sampleArray = [
  {
    "id": 1,
    "name": "Aditya Goel",
    "age": 22
  },
  {
    "id": 2,
    "name": "Pari Goel",
    "age": 20
  },
  {
    "id": 3,
    "name": "Rohan Sharma",
    "age": 25
  },
  {
    "id": 4,
    "name": "Sneha Verma",
    "age": 23
  },
  {
    "id": 5,
    "name": "Amit Yadav",
    "age": 21
  }
]



}
