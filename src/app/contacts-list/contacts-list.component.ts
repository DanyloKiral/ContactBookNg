import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactListItem } from './../models/ContactListItem';
import { ContactsService } from './../services/contacts.service';
import { Contact } from '../models/Contact';

@Component({
  moduleId: module.id,
  selector: 'app-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private _contactsService: ContactsService;
  contacts: ContactListItem[];

  constructor(contactsService: ContactsService, private router: Router) {
    this._contactsService = contactsService;
  }

  ngOnInit() {
    this.contacts = this._contactsService.getContactLookups();
  }

  onSelect(contact: ContactListItem) {
  }

  addNewContact() {
    const newContact = new Contact();
    newContact.name = 'New contact';
    const newId = this._contactsService.addNewContact(newContact);
    this.contacts = this._contactsService.getContactLookups();
    this.router.navigateByUrl('/contact/' + newId);
  }
}
