import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BenditarebeldiaComponent } from './pages/benditarebeldia/benditarebeldia.component';
import { EncantoComponent } from './pages/encanto/encanto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'benditarebeldia', component: BenditarebeldiaComponent},
  { path: 'encanto', component: EncantoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
