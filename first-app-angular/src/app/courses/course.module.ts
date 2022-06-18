import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { StarComponent } from '../star/star.component';

@NgModule({
  // estamos declarando estes dois componentes, pois só necessitamos para o Module de Course
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
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
