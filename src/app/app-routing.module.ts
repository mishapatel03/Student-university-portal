import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './layouts/drawer/sidenav-list/payment/payment.component';
import { TranscriptComponent } from './layouts/drawer/sidenav-list/transcript/transcript.component';
import { ResultsComponent } from './layouts/drawer/sidenav-list/results/results.component';
import { DegreecertificateComponent } from './layouts/drawer/sidenav-list/degreecertificate/degreecertificate.component';
import { LogoutComponent } from './layouts/header/logout/logout.component';
import { FeedbackComponent } from './layouts/header/feedback/feedback.component';
import { HomeComponent } from './layouts/header/home/home.component';
//import { HComponent } from './layouts/header/h/h.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'logout', component: LogoutComponent },
  { path:'home', component: HomeComponent },
  { path:'feedback', component: FeedbackComponent },
  { path:'degreecertificate', component: DegreecertificateComponent },
  { path:'transcript', component: TranscriptComponent },
  { path:'results', component: ResultsComponent },
  { path:'payment', component: PaymentComponent },
  { path: 'layout', component: LayoutsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
