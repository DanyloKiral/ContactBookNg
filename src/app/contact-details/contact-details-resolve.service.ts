import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Contact } from '../shared/Contact';
import { ContactsService } from '../shared/contacts.service';

@Injectable()
export class ContactDetailsResolve implements Resolve<Contact> {
    constructor(private _contactService: ContactsService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<Contact> {
        const id = +route.params['id'];

        return this._contactService.getContact(id).then(contact => {
            return contact;
        });
    }
}
