import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
// Import other components and modules as needed

@NgModule({
  declarations: [

    // List other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // Import other modules here
  ],
  bootstrap: [AppComponent],
  "providers": []

})
export class AppModule{}
