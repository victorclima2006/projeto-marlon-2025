import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',           //ta sendo utilzada dps que adicionamos um produto, o nome fica em destaque, fica em maiusculo
  standalone:false
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value; // aq ve se é nulo ou indefinido
    return value.toUpperCase(); // o texto vira maiusculos
  }
}
