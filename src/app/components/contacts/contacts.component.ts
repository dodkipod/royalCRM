import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  constructor(contactsService: ContactsService) {
    this.contacts = contactsService.getAll();
  }

  ngOnInit(): void {}
}
