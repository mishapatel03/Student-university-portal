import { RouterModule } from '@angular/router';
import { SidenavListComponent } from './components/drawer/sidenav-list/sidenav-list.component';
import { SideNavService } from './services/side-nav.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import {MatListModule} from '@angular/material/list';

import { LayoutsComponent } from './layouts.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HeaderComponent } from './components/header/header.component';
import { from } from 'rxjs';
import { Routes } from '@angular/router';

import { HomeComponent } from './components/header/home/home.component';
import { FeedbackComponent } from './components/header/feedback/feedback.component';
import { LogoutComponent } from './components/header/logout/logout.component';
import { DegreecertificateComponent } from './components/drawer/sidenav-list/degreecertificate/degreecertificate.component';
import { ResultsComponent } from './components/drawer/sidenav-list/results/results.component';
import { TranscriptComponent } from './components/drawer/sidenav-list/transcript/transcript.component';
import { PaymentComponent } from './components/drawer/sidenav-list/payment/payment.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: '', component: LayoutsComponent },];


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
    RouterModule
  ],
  providers:[
    SideNavService
  ]
})
export class LayoutsModule { }
