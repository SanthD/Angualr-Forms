import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TempletDrivenComponent } from './templet-driven/templet-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { LoginComponent } from './login/login.component';
import { RgistrationComponent } from './rgistration/rgistration.component';
import { TaskComponent } from './task/task.component';
import { BasicFormComponent } from './basic-form/basic-form.component';


const routes: Routes = [
  {
    path:'',
    component:BasicFormComponent
  },
  {
    path:'TempletDriven',
    component:TempletDrivenComponent
  },
  {
    path:'Reactive',
    component:ReactiveComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Rgistration',
    component:RgistrationComponent

  },
  {
    path:'Task',
    component:TaskComponent
  },
  {
    path:'Basic',
    component:BasicFormComponent
  },
 {
    path:'**',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentsArray = [ HeaderComponent,
  TempletDrivenComponent,
  ReactiveComponent,
  LoginComponent,
  RgistrationComponent,
  TaskComponent,
  BasicFormComponent
]
