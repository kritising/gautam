 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { Contact } from '../contact';
import { ServicesService } from '../services.service';
import emailjs from '@emailjs/browser';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

 contactForm: FormGroup= this.fb.group({
   name: 'name',
  to_name:'name',
   email: 'email',
   phone: 'your number',
   message: 'message'


  });
  constructor(private servicesService: ServicesService, private http: HttpClient,private fb: FormBuilder) {}






  async onSubmit() {
    emailjs.init('Xb35lcy5Fral6M5CG');
  let response =await emailjs.send("service_c2o7e2b","template_de5z6yi",{
    name: this.contactForm.value.name,
    to_name: this.contactForm.value.name,
    phone: this.contactForm.value.phone,
    email: this.contactForm.value.email,
    message: this.contactForm.value.message,
     });

  alert('Message has been send.');
  this.contactForm.reset();
}
}
