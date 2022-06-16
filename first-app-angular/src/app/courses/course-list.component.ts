import {Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  // aqui estou criando a tag <app-course-list></app-course-list> que vai ser inserida em app.component.html
  selector: 'app-course-list',
  // estou direcionando meu URL
  templateUrl: './course-list.component.html'
})

// onInit - assim que o componente inicializar, ele chama o método Hook de chamada
export class CourseListComponent implements OnInit {

  // exibir o valor do nosso curso que foi criado em course.ts
  _courses: Course[] = [];

  // variavel iniciada com underline
  filteredCourses: Course[] = [];

  _filterBy!: string;

  constructor(private courseService: CourseService){

  }

  // vai inicializar o array de courses
  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  // definido no input
  set filter(value: string){
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy
  }
}
