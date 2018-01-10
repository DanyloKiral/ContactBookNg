import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../shared/Contact';

@Component({
  moduleId: module.id,
  selector: 'app-contact-details',
  templateUrl: 'contact-details.component.html',
  styleUrls: ['contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id: number;
  contact: Contact;
  isValid = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
   this.route.data.forEach((data: { contact: Contact }) => {
    if (data && data.contact) {
      this.contact = data.contact;
      this.isValid = true;
    } else {
      this.isValid = false;
    }
 });
  }

  removeNumber(index: number) {
    this.contact.numbers.splice(index, 1);
  }

  addNewNumber(newNumber: string) {
    if (newNumber) {
      this.contact.numbers.push(newNumber);
    }
  }
}
