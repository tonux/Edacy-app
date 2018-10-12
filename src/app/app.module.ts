import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EdacyComponent } from './edacy/edacy.component';
import { EdacyService } from './edacy/edacy.service';
import { FontsService } from '../fonts/fonts.service';
import { CoursComponent } from './cours/cours.component';

import { appRoutes } from './router';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    EdacyComponent,
    CoursComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EdacyService, FontsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
