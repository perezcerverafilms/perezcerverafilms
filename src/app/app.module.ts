import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { NavComponent } from './nav/nav.component';
import { BenditarebeldiaComponent } from './pages/benditarebeldia/benditarebeldia.component';
import { EncantoComponent } from './pages/encanto/encanto.component';
import { CharlieComponent } from './pages/charlie/charlie.component';
import { ThefireescapeComponent } from './pages/thefireescape/thefireescape.component';
import { ComoconbancolombiaComponent } from './pages/comoconbancolombia/comoconbancolombia.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectCardComponent,
    NavComponent,
    BenditarebeldiaComponent,
    EncantoComponent,
    CharlieComponent,
    ThefireescapeComponent,
    ComoconbancolombiaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
