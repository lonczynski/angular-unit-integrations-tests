import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { NewPersonPage } from './pages/new-person/new-person.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'new-person',
    component: NewPersonPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
