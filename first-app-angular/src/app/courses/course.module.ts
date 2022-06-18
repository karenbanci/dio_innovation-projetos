import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
  // estamos declarando estes dois componentes, pois só necessitamos para o Module de Course
  declarations: [
    CourseListComponent,
    CourseInfoComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      { // vamos linkar esse path para outro componente
        path: 'courses', component: CourseListComponent
      },
      { // essa rota vai receber um path variable, o nome do parametro que iremos passar
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ]),
  ]
})

export class CourseModule { }
