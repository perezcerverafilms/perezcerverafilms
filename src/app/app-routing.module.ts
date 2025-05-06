import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BenditarebeldiaComponent } from './pages/benditarebeldia/benditarebeldia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'benditarebeldia', component: BenditarebeldiaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
