import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';
@NgModule({
  //as declaraçoes sao de componentes que serão exibidos no site
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    // forRoot espera um objeto de rotas, que são as rotas da aplicação
    RouterModule.forRoot([
      { // quando estiver na raiz da  aplicação, essa rota vai ser ativada
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
