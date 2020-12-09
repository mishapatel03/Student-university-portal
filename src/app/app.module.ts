// import { RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { LayoutsModule } from './layouts/layouts.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';



// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './login/login.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent
//   ],
//   imports: [
//     RouterModule,
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule,
//     BrowserAnimationsModule,
//     LayoutsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { LayoutsModule } from './layouts/layouts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { SidenavListComponent } from './layouts/components/drawer/sidenav-list/sidenav-list.component';
import { SideNavService } from './layouts/services/side-nav.service';
import { LayoutsComponent } from './layouts/layouts.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import {MatListModule} from '@angular/material/list';


import { DrawerComponent } from './layouts/components/drawer/drawer.component';
import { HeaderComponent } from './layouts/components/header/header.component';

import { HomeComponent } from './layouts/components/header/home/home.component';
import { FeedbackComponent } from './layouts/components/header/feedback/feedback.component';
import { LogoutComponent } from './layouts/components/header/logout/logout.component';
import { DegreecertificateComponent } from './layouts/components/drawer/sidenav-list/degreecertificate/degreecertificate.component';
import { ResultsComponent } from './layouts/components/drawer/sidenav-list/results/results.component';
import { TranscriptComponent } from './layouts/components/drawer/sidenav-list/transcript/transcript.component';
import { PaymentComponent } from './layouts/components/drawer/sidenav-list/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    LayoutsComponent
  ],
  providers:[
    SideNavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
