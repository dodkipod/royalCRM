import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef: AngularFirestoreCollection<Customer>;
  customers$: Observable<Customer[]>;

  constructor(private afs: AngularFirestore) {
    this.customersRef = this.afs.collection<Customer>('customers', (ref) =>
      ref.orderBy('firstName', 'asc')
    );

    this.customers$ = this.customersRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }

  add(customer: Customer) {
    return this.customersRef.add(customer);
  }

  getAll() {
    return this.customers$;
  }

  remove(id: string) {
    return this.customersRef.doc(id).delete();
  }

  getById(id: string) {
    return this.customersRef
      .doc<Customer>(id)
      .valueChanges()
      .pipe(
        map((doc) => {
          if (doc) {
            return { id, ...doc };
          }
          return doc;
        })
      );
  }

  update(id: string, customer: Customer) {
    if (confirm('You sure mate?')) {
      return this.customersRef.doc(id).update(customer);
    }
  }
}
