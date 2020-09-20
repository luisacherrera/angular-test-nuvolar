import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent},
  { path: ':id', component: UserCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
