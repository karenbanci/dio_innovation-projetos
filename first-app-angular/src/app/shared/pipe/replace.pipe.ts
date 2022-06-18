import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  // esse nome do atributo
  name: 'replace'
})

// implementando uma interface chamada PipeTransform
export class ReplacePipe implements PipeTransform {

  // (método de hook)o valor do parametro sera o valor da propriedade que vai estar passando lá no html
  transform(value: string, char: string, valueToReplace: string){
    // substituir o character pelo novo valor que quero colocar
    return value.replace(char, valueToReplace);

  }
}
