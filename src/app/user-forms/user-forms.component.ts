import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss']
})
export class UserFormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    // address: this.fb.group({
    //   street: [''],
    //   city: [''],
    //   state: [''],
    //   zip: ['']
    // }),
  });

  ngOnInit(): void {
  }

}
