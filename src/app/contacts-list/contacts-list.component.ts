import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactsService } from './../shared/contacts.service';
import { Contact } from '../shared/Contact';

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
    this._contactsService.getContacts().then(x => this.contacts = x);
  }

  addNewContact(name: string) {
    if (name) {
      const newContact = new Contact();
      newContact.name = name;
      const newId = this._contactsService.addNewContact(newContact);
      this._contactsService.getContacts().then(x => this.contacts = x);
      this.router.navigate(['contact', newId]);
    }
  }

  removeContact(id: number) {
    const itemToRemoveIndex = this.contacts.findIndex((contact) => contact.id === id);
    if (itemToRemoveIndex > -1) {
      this._contactsService.removeContact(id);
      if (this.router.isActive('/contact/' + id, true)) {
        this.router.navigate(['']);
      }
      return false;
    }
  }
}
