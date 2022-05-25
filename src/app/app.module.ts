import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule, Routes } from '@angular/router';
import { AccountCheckComponent } from './pages/account-check/account-check.component';
import { RegistrationSuccessComponent } from './pages/registration-success/registration-success.component';
import { AccountDoesntConsistComponent } from './pages/account-doesnt-consist/account-doesnt-consist.component';
import { AccountConsistComponent } from './pages/account-consist/account-consist.component';

const appRoutes: Routes = [
  { path: '',component: RegistrationComponent },
  { path: 'account-check',component: AccountCheckComponent },
  { path: 'registration-success',component: RegistrationSuccessComponent },
  { path: 'account-doesnt-consist',component: AccountDoesntConsistComponent },
  { path: 'account-consist',component: AccountConsistComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ButtonComponent,
    AccountCheckComponent,
    RegistrationSuccessComponent,
    AccountDoesntConsistComponent,
    AccountConsistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
