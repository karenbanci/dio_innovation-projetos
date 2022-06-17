import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  course!: Course;

  // estamos pegando informacoes da rota que está ativa. CourseService está injetando via independente
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){}

  ngOnInit(): void {
    // o parametro id, é exatamente o nome que foi definido no app.module.ts (pegamos o parametro definido naquela rota  )
    const idToRetrieve = this.activatedRoute.snapshot.paramMap.get('id');
    if (idToRetrieve !== null) {
      const retrieved = this.courseService.retrieveById(+idToRetrieve);
      if (retrieved) {
        this.course = retrieved;
      }
    }
  }

  save(): void {
    this.courseService.save(this.course)
  }
}
