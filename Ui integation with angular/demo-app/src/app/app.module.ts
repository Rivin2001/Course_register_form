import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidePaneComponent } from './common/side-pane/side-pane.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentListComponent } from './pages/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidePaneComponent,
    StudentRegistrationComponent,
    HomeComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
