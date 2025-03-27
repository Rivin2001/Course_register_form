import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
 
  {

    path:"",
    component:HomeComponent

  
  },

  {

    path:"register",
    component:StudentRegistrationComponent
  },
  {


    path:"students",
    component:StudentListComponent
  },
  {
   
    path:"login",
    component:LoginComponent

  }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
