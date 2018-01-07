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
  contacts: Contact[];

  constructor(private _contactsService: ContactsService, private router: Router) {
  }

  ngOnInit() {
    this.contacts = this._contactsService.getContacts();
  }

  onSelect(contact: ContactListItem) {
  }

  addNewContact(name) {
    const newContact = new Contact();
    newContact.name = name;
    const newId = this._contactsService.addNewContact(newContact);
    this.contacts = this._contactsService.getContacts();
    this.router.navigateByUrl('/contact/' + newId);
  }
}
