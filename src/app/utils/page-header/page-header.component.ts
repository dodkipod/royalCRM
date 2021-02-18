import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() icon: String = '';
  @Input() title: string = '';
  @Input() description: string = '';
  constructor() {}

  ngOnInit(): void {}
}