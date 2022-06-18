import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

// queremos passar um valor para o componente
export class StarComponent implements OnChanges {

  // Input faz com que a nossa variável esteja elegível para receber a informacao de um componente externo, cria propriedades da tag Star
  @Input()
  rating: number = 0;
  starWidth!: number;


  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }
}
