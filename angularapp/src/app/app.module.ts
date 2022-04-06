import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { EditpassengerComponent } from './editpassenger/editpassenger.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpassengerComponent,
    EditpassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
