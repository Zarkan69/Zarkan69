import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { CompetencesComponent } from './competences/competences.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ParcoursComponent,
    CompetencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
