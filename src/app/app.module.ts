import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EdacyComponent } from './edacy/edacy.component';
import { EdacyService } from './edacy/edacy.service';
import { FontsService } from '../fonts/fonts.service';

@NgModule({
  declarations: [
    AppComponent,
    EdacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EdacyService, FontsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
