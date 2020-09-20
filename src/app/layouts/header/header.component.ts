import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [SideNavService]
})
export class HeaderComponent {     
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private SideNavService: SideNavService) {

  }

  clickMenu() { 
    this.SideNavService.toggle();
  }
}
