import { Component, OnInit } from '@angular/core';

interface navItem {
  title: string;
  icon: string;
  link?: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  navItems: navItem[] = [
    {
      title: 'customers',
      icon: 'fas fa-users',
      link: 'customers',
    },
    {
      title: 'contacts',
      icon: 'fas fa-address-book',
      link: 'contacts',
    },
    {
      title: 'OOPS',
      icon: 'fas fa-flag',
      link: 'oops',
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}
