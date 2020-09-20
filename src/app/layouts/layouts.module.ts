import { RouterModule } from '@angular/router';
import { SidenavListComponent } from './drawer/sidenav-list/sidenav-list.component';
import { SideNavService } from './side-nav.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import {MatListModule} from '@angular/material/list';

import { LayoutsComponent } from './layouts.component';
import { DrawerComponent } from './drawer/drawer.component';
import { HeaderComponent } from './header/header.component';
import { from } from 'rxjs';

import { HomeComponent } from './header/home/home.component';
import { FeedbackComponent } from './header/feedback/feedback.component';
import { LogoutComponent } from './header/logout/logout.component';
import { DegreecertificateComponent } from './drawer/sidenav-list/degreecertificate/degreecertificate.component';
import { ResultsComponent } from './drawer/sidenav-list/results/results.component';
import { TranscriptComponent } from './drawer/sidenav-list/transcript/transcript.component';
import { PaymentComponent } from './drawer/sidenav-list/payment/payment.component';


@NgModule({
  declarations: [
    LayoutsComponent,
    DrawerComponent, 
    HeaderComponent, 
    SidenavListComponent, 
    HomeComponent, 
    FeedbackComponent, 
    LogoutComponent, 
    DegreecertificateComponent, 
    ResultsComponent, 
    TranscriptComponent, 
    PaymentComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,RouterModule
  ],
  exports:[
    HeaderComponent,
    DrawerComponent,
    LayoutsComponent,
  ],
  providers:[
    SideNavService
  ]
})
export class LayoutsModule { }
