import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // path is always relative, so don't write '/' in path like this: { path: '/books'... }
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: ':isbn', // Better solution => path: 'details/:isbn';
    component: BookDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
