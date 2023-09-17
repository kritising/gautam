import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServiceComponent } from './service/service.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './Home/Home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const routes: Routes = [
 {
  path: 'project',
  component: ProjectComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'serviceDetails',
  component: ServiceDetailsComponent
},
{
  path: 'service',
  component: ServiceComponent
},
{
  path: 'contacts',
  component: ContactsComponent
},

{
  path: 'home',
  component: HomeComponent
},

{
  path: 'projectDetail',
  component: ProjectDetailsComponent
},

{ path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [
   RouterModule.forRoot(routes, {
     scrollPositionRestoration: 'top'
   })
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
