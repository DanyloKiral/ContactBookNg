import { Injectable } from '@angular/core';
import { ContactListItem } from './models/ContactListItem';
import { Contact } from './models/Contact';

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
        const mappedLookupList: ContactListItem[] = this.contacts.map((value: Contact, index: number, array: Contact[]) => {
            return new ContactListItem(value.id, value.name);
        });

        return mappedLookupList;
    }
}
