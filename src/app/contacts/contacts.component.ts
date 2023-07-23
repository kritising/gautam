 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { Contact } from '../contact';
import { ServicesService } from '../services.service';


import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {


  contact: any;
addContact=new FormGroup( {
  name: new FormControl('', [Validators.required]),
  phone: new FormControl(''),
  email: new FormControl('', [Validators.required]),
  message: new FormControl('', [Validators.required])


});
  constructor(private servicesService: ServicesService, private builder: FormBuilder) {}




  getUserData(data:any)
  {
  console.log(this.addContact.value);
    console.warn(data)
    this.servicesService.saveUser(data).subscribe(result => console.warn(result));
  }


}
