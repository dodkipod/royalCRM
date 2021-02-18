import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphCapital',
})
export class ParagraphCapitalPipe implements PipeTransform {
  transform(value: string): string {
    const trimmed = value.trim();
    let paragraph =
      trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
    return paragraph;
  }
}
