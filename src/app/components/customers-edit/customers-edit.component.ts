import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  async onSubmit({ value, valid }: NgForm) {
    if (valid) {
      await this.customersService.update(this.form.id, value);
      this.routerService.navigate(['/customers']);
    }
  }
  constructor(
    private customersService: CustomersService,
    private routerService: Router,
    private activeatedRouterService: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeatedRouterService.params
      .pipe(
        switchMap((params) => this.customersService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => {
        this.form = customer;
      });
  }
}
