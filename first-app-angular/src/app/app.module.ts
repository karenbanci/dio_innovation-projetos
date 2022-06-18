import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
@NgModule({
  //as declaraçoes sao de componentes que serão exibidos no site
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    // forRoot espera um objeto de rotas, que são as rotas da aplicação
    RouterModule.forRoot([


      { // quando estiver na raiz da  aplicação, essa rota vai ser ativada
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
