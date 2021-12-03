import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // path is always relative, so don't write '/' in path like this: { path: '/books'... }
  {
    path: 'search',
    component: BookSearchComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  },
  {
    path: ':isbn', // Better solution => path: 'details/:isbn';
    component: BookDetailsComponent,
  },
  {
    path: ':isbn/edit',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
