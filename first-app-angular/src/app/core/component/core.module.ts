import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    RouterModule.forChild([
      { //quando nao encontrar a rota ou nao existir, ele vai redirecionar para uma página de erro
        path: '**', component: Error404Component
      }
    ])
  ],

  exports: [
    NavBarComponent
  ]
})

export class CoreModule {}
