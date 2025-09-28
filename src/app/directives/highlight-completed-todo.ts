import { Directive, input, effect, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true,
})
export class HighlightCompletedTodo {
// This will be bound via [isCompleted] in the template
  isCompleted = input<boolean>(false);
  el = inject(ElementRef);

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8'; // Fixed hex color
    } else {
      // Optional: reset styles when not completed
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '';
    }
  });
}
