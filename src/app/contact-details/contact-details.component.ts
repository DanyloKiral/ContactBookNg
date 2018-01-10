import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/Contact';

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

  constructor(private _contactService: ContactsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.id = +params['id'];
      this._contactService.getContact(this.id).then(x => {
        this.contact = x;
        if (this.contact) {
          this.isValid = true;
        } else {
          this.isValid = false;
        }
      });
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
