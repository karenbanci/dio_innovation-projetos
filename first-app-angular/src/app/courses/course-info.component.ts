import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  course: Course | undefined;

  // estamos pegando informacoes da rota que está ativa. CourseService está injetando via independente
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    // o parametro id, é exatamente o nome que foi definido no app.module.ts (pegamos o parametro definido naquela rota  )
    const idToRetrieve: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (idToRetrieve !== null) {
      const retrieved: Observable<Course> = this.courseService.retrieveById(+idToRetrieve);

      retrieved.subscribe({
        next: (course: Course) => this.course = course,
        error: (err: any) => console.error('Error', err)
      });

    }
  }

  save(): void {
    if(this.course){
      this.courseService.save(this.course).subscribe({
        next: course => console.log('Success', course),
        error: err => console.error('Error', err)
      })
    }
  }

}
