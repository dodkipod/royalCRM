import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-page-header
      title="page not found"
      icon="fas fa-exclamation-circle"
      description="The page you are looking for was not found - Error 404."
    ></app-page-header>
  `,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
