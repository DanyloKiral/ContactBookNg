import { Injectable } from '@angular/core';
import { ContactListItem } from './../models/ContactListItem';
import { Contact } from './../models/Contact';

@Injectable()
export class ContactsService {
    contacts: Contact[];
    constructor() {
        this.contacts = [
            { id: 1, name: 'Vasia', numbers: [] },
            { id: 2, name: 'Jack', numbers: [] },
            { id: 3, name: 'Sevil', numbers: [] }
          ];
     }

    getContactLooukps(): ContactListItem[] {
        const mappedLookupList: ContactListItem[] = this.contacts
            .map((value: Contact, index: number, array: Contact[]) => {
                return new ContactListItem(value.id, value.name);
            });
        return mappedLookupList;
    }

    getContact(id: number): Contact {
        const foundContact: Contact = this.contacts.find((value: Contact) => value.id === id);
        return foundContact;
    }

    addNewContact(newContact: Contact) {
        this.contacts.push(newContact);
    }

    addNumberToContact(contactId: number, number: string) {
        const contact = this.getContact(contactId);
        const index = this.contacts.indexOf(contact);
        contact.numbers.push(number);
        this.contacts[index] = contact;
    }

    editContact(newContact: Contact) {
        const contactIndex = this.contacts.findIndex((value: Contact) => value.id === newContact.id);
        if (contactIndex > -1) {
            this.contacts[contactIndex] = newContact;
        } else {
            console.log('Contact to edit is not exist. Id = ' + newContact.id);
        }
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
