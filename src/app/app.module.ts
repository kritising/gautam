  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServiceComponent } from './service/service.component';
import { ServicesService } from './services.service';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './Home/Home.component';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';

import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ServiceComponent,
    ProjectComponent,
    AboutComponent,
    HomeComponent,
    ProjectDetailsComponent,
    ServiceDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
