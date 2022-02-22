import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-templet-driven',
  templateUrl: './templet-driven.component.html',
  styleUrls: ['./templet-driven.component.scss']
})
export class TempletDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';


  validateTopic(value:any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userModel)
  }

}
