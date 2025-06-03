  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'currency'   // isso é uma pipe biultin que formata o preço do produto
  })
  export class CurrencyPipe implements PipeTransform {
    transform(value: number): string {
      return `$${value.toFixed(2)}`;
    }
  }
  