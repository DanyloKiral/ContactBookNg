import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/Contact';

@Component({
  moduleId: module.id,
  selector: 'app-contact-details',
  templateUrl: 'contact-details.component.html',
  styleUrls: ['contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  id: number;
  contact: Contact;
  isValid = true;
  routeSubscription: any;

  constructor(private _contactService: ContactsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.contact = this._contactService.getContact(this.id);
      if (this.contact) {
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

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
