import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

import { ReplacePipe } from './pipe/replace.pipe';
@NgModule({
  //as declaraçoes sao de componentes que serão exibidos no site
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseInfoComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // forRoot espera um objeto de rotas, que são as rotas da aplicação
    RouterModule.forRoot([
      { // vamos linkar esse path para outro componente
        path: 'courses', component: CourseListComponent
      },
      { // essa rota vai receber um path variable, o nome do parametro que iremos passar
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      { // quando estiver na raiz da aplicação, essa rota vai ser ativada
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      { //quando nao encontrar a rota ou nao existir, ele vai redirecionar para uma página de erro
        path: '**', component: Error404Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
