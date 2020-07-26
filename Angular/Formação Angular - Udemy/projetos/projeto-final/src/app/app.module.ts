import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard';
import { CalculadoraModule } from './calculadora';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    AppRoutingModule//este arquivo precisa ser sempre o último dos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
