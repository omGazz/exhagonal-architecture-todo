import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { todoDetailResolver, todoListResolver } from '../pages/data.resolver';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/page-list/list-page.component').then(
        (m) => m.ListPageComponent
      ),
      resolve: {
        todos: todoListResolver
      }
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('../pages/page-detail/detail-page.component').then(
        (m) => m.DetailPageComponent
      ),
      resolve: {
        todos: todoDetailResolver
      }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoShellRoutingModule { }
