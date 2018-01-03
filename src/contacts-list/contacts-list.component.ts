import { Component, OnInit } from '@angular/core';
import { ContactListItem } from './../models/ContactListItem';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private _contactsService: ContactsService;
  contacts: ContactListItem[];

  constructor(contactsService: ContactsService) {
    this._contactsService = contactsService;
  }

  ngOnInit() {
    this.contacts = this._contactsService.getContactLooukps();
  }

  onSelect(contact: ContactListItem) {
    alert(contact.name);
  }
}
