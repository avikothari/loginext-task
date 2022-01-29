import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PincodeSearchComponent } from './pincode-search/pincode-search.component';

const routes: Routes = [
  { path: '', component: PincodeSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
