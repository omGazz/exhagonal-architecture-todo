import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { todoDetailResolver, todoListResolver } from 'src/domains/todo/presentational/pages/data.resolver';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../domains/todo/presentational/pages/page-list/list-page.component').then(
        (m) => m.ListPageComponent
      ),
      resolve: {
        todos: todoListResolver
      }
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('../domains/todo/presentational/pages/page-detail/detail-page.component').then(
        (m) => m.DetailPageComponent
      ),
      resolve: {
        todos: todoDetailResolver
      }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
