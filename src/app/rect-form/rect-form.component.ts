import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rect-form',
  // templateUrl: './rect-form.component.html',
  template:` 
        <div class="container mt-2">
        <label for="name">Enter a Your Name</label> 
        <input type="text" [formControl]="name" class="form-control"  placeholder="Enter your Name">
        </div>
        <p>{{name.value}}</p>
        `,
  styleUrls: ['./rect-form.component.scss']
})
export class RectFormComponent implements OnInit {

  constructor() { }

  name = new FormControl('');

  ngOnInit(): void {
  }

}
