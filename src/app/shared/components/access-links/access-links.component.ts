import { Component, OnInit } from '@angular/core';
import { AccessLinkInterface } from "../../../interfaces/AccessLink";

@Component({
  selector: 'app-access-links',
  templateUrl: './access-links.component.html',
  styleUrls: ['./access-links.component.scss']
})
export class AccessLinksComponent implements OnInit {

  links: AccessLinkInterface[] = [
    { name: 'Home', icon: 'home', routerLink: 'home' },
    { name: 'Search', icon: 'search', routerLink: 'search' }
  ];

  ala: string[] = ['hola'];

  constructor() { }

  ngOnInit(): void {
  }

}
