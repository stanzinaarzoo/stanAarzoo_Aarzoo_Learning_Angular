import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleColor',
  standalone: true
})
export class RoleColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
