import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @HostBinding('attr.role') role = 'navigation';

  constructor() {}

  ngOnInit(): void {}
}
