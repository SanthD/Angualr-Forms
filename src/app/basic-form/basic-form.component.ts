import { JsonPipe } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],

})
export class BasicFormComponent implements OnInit,DoCheck {

  constructor() {
  
   }
  data:string="test data";
  id=Math.round(Math.random()*1000000);

  UserData:any = [
    // {
    //   "userName":"Santh",
    //   "password":"12345",
    //   "email":"santh@snth.com",
    //   "studentId": "12345",
    //   "studentCity":"Chennai"
    // },
    // {
    //   "userName":"Amith",
    //   "password":"12345",
    //   "email":"Amith@Amith.com",
    //   "studentId": "12346",
    //   "studentCity":"Bombay"
    // },

  ];

//   {
//     "userName": "santhkumar",
//     "password": "santhkumar",
//     "studentId": "12345",
//     "studentCity": "santhkumar"
// }

name:any;
 
  edit(userDetail:any){
    // console.log(userDetail.isEdit)
    // userDetail.isEdit default value is false
    userDetail.isEdit = true;
    // console.log(userDetail.isEdit)
  }

  Cancle(userDetail:any){
    userDetail.isEdit = false;
  }
  
  save(userDetail:any){
    console.log(userDetail)
    userDetail.isEdit = false;
    alert('Data submited')
  }

  deleteData(userDetail:any){
    console.log(userDetail)
    userDetail.isEdit = false;
    alert('Data submited')
  }

   ngOnInit(): void {
    
  }
  onSubmit(value:any):void{
    console.log(value)
    let userDetail = value;
    userDetail.isEdit = false;
    userDetail.studentId = this.id;

    this.UserData.push(userDetail)

    console.log(this.UserData)
 }

  ngDoCheck() {
  }

}
