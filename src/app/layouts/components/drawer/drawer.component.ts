import { SideNavService } from 'src/app/layouts/services/side-nav.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private SideNavService: SideNavService) {

   }

  ngOnInit() {
    this.SideNavService.sideNavToggleSubject.subscribe(()=>{
      this.SideNavService.toggle();
    })
  }

}
