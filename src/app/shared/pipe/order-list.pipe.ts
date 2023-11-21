import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any[], args: any[]): any[] {
    // Implementa la lógica de la tubería aquí, y si no necesitas las variables "value" o "args", simplemente omítelas.
    // Por ejemplo, si solo necesitas "value", puedes escribir el código así:
    return value;
  }
}
