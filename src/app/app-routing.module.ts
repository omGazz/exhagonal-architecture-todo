import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../feature/todo:domain/list:feature/list.component').then(
        (m) => m.ListComponent
      ),
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('../feature/todo:domain/detail:feature/detail.component').then(
        (m) => m.DetailComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
