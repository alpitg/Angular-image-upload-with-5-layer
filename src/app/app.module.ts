import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ImageUploadModule } from "angular2-image-upload";
import { DataService } from "./services/data.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
// import {DatePickerModule} from 'ng2-datepicker-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { MatDatepickerModule, MdNativeDateModule, NativeDateAdapter } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(), //important for date
    ReactiveFormsModule,
    ImageUploadModule.forRoot(),
    AngularFontAwesomeModule,
    // DatePickerModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
