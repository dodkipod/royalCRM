import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss'],
})
export class CustomersDetailsComponent implements OnInit, OnDestroy {
  customer$: Observable<Customer>;

  constructor(
    private customersService: CustomersService,
    private activatedRouteService: ActivatedRoute
  ) {
    // this.activatedRouteService.params.subscribe()
  }

  ngOnInit(): void {
    this.customer$ = this.activatedRouteService.params.pipe(
      switchMap((params) => this.customersService.getById(params.id))
    );
  }
  ngOnDestroy(): void {}
}
