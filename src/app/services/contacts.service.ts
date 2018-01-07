import { Injectable } from '@angular/core';
import { ContactListItem } from './../models/ContactListItem';
import { Contact } from './../models/Contact';

@Injectable()
export class ContactsService {
    contacts: Contact[];
    constructor() {
        this.contacts = [
            { id: 1, name: 'Vasia', numbers: ['+380506481362', '284-03-84'], email: 'mail@mail.com', address: 'Lviv, Naukova street' },
            { id: 2, name: 'Jack', numbers: [], email: 'mail4@mail.ua', address: '' },
            { id: 3, name: 'Sevil', numbers: ['+79067356145'], email: '', address: 'Lviv, Ukraine' }
          ];
     }

    getContacts(): Contact[] {
        return this.contacts;
    }

    getContact(id: number): Contact {
        const foundContact: Contact = this.contacts.find((value: Contact) => value.id === id);
        return foundContact;
    }

    addNewContact(newContact: Contact): number {
        let maxId = 0;
        this.contacts.forEach((value: Contact) => maxId = maxId > value.id ? maxId : value.id);
        newContact.id = maxId + 1;
        this.contacts.push(newContact);
        return newContact.id;
    }

    removeContact(contactId: number) {
        const index = this.contacts.findIndex((value: Contact) => value.id === contactId);
        if (index > -1) {
            this.contacts.splice(index, 1);
        } else {
            console.log('Contact to delete is not exist. Id = ' + contactId);
        }
    }
}
