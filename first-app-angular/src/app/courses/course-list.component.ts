import {Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  // aqui estou criando a tag <app-course-list></app-course-list> que vai ser inserida em app.component.html
  //  comentei a linha de baixo, porque deixamos de usá-lo a partir do momento que criamos uma rota
  // selector: 'app-course-list',
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
    this.retrieveAll();
  }

  retrieveAll(): void {
    // o subscribe é subscrever o contrato, de fato ele vai chamar a nossa requisição
    this.courseService.retrieveAll().subscribe({
      // quando a requisição dá certo, o next retorna alguma coisa para trabalharmos. Chamar a callback function
      next: courses => {
        // o courses é exatamente o retorno do <Course[]> que está no course.service.ts
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      // caso dê algum problema, ele vai dar error no console
      error: err => console.log('Error', err)
    })
  }

  deleteById(courseId: number): void {
    // vou chamar, e passar o id que estou informando através do nosso template
    this.courseService.deleteById(courseId).subscribe({
      // chamamos a funcao dessa forma
      next: () => {
        console.log('Deleted');
        // filtrar novamente, após deletar o curso (vamos atualizar a lista de curso)
        this.retrieveAll()
      },
      error: err => console.log('Error', err)
    })
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
