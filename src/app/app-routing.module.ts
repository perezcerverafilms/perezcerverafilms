import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BenditarebeldiaComponent } from './pages/benditarebeldia/benditarebeldia.component';
import { EncantoComponent } from './pages/encanto/encanto.component';
import { CharlieComponent } from './pages/charlie/charlie.component';
import { ThefireescapeComponent } from './pages/thefireescape/thefireescape.component';
import { ComoconbancolombiaComponent } from './pages/comoconbancolombia/comoconbancolombia.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'benditarebeldia', component: BenditarebeldiaComponent},
  { path: 'encanto', component: EncantoComponent},
  { path: 'charlie', component: CharlieComponent},
  { path: 'thefireescape', component: ThefireescapeComponent},
  { path: 'comoconbancolombia', component: ComoconbancolombiaComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
