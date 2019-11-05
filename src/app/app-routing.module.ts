import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionInputPageComponent } from './instruction-input-page/instruction-input-page.component';
import { InstructionResultPageComponent } from './instruction-result-page/instruction-result-page.component';
import { InstructionSetListingPageComponent } from './instruction-set-listing-page/instruction-set-listing-page.component';


const routes: Routes = [
  { path: 'instruction-input', component: InstructionInputPageComponent },
  { path: 'instruction-results', component: InstructionResultPageComponent },
  { path: 'instruction-set', component: InstructionSetListingPageComponent },
  { path: '', redirectTo: '/instruction-input', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
