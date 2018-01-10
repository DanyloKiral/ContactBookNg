import { Injectable } from '@angular/core';
import { Contact } from './../shared/Contact';

@Injectable()
export class ContactsService {
    contacts: Contact[];
    contactsPromise: Promise<Contact[]>;
    constructor() {
        this.contacts = [
            { id: 1, name: 'Vasia', numbers: ['+380506481362', '284-03-84'],
                email: 'mail@mail.com', address: 'Lviv, Naukova street', images: [] },
            { id: 2, name: 'Jack', numbers: [], email: 'mail4@mail.ua', address: '',
                images: [] },
            { id: 3, name: 'Monica', numbers: ['+79067356145'], email: '', address: 'Lviv, Ukraine',
                images: [] }
          ];

          this.contactsPromise = Promise.resolve(this.contacts);
     }

    getContacts(): Promise<Contact[]> {
        return this.contactsPromise;
    }

    getContact(id: number): Promise<Contact> {
        return this.contactsPromise.then(x => x.find(c => c.id === id));
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
