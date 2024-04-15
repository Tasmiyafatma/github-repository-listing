import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchReposComponent } from './components/search-repos/search-repos.component';

const routes: Routes = [
  {
    path: '',
    component: SearchReposComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
