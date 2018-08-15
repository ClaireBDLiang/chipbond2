import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlotComponent } from './charts/flot/flot.component';
import { MorrisComponent } from './charts/morris/morris.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormsComponent,
    NotFoundComponent,
    FlotComponent,
    MorrisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
