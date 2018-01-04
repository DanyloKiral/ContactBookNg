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
  private _contactService: ContactsService;
  id: number;
  contact: Contact;
  isValid = true;
  routeSubscription: any;

  constructor(contactService: ContactsService, private route: ActivatedRoute) {
    this._contactService = contactService;
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.contact = this._contactService.getContact(this.id);
      if (this.contact) {
        this.isValid = true;
        this.bindContact();
      } else {
        this.isValid = false;
      }
   });
  }

  private bindContact() {

  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
