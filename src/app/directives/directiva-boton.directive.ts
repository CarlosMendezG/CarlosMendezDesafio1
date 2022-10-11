import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaBotonAzul]'
})
export class DirectivaBotonDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    renderer.setStyle(elementRef.nativeElement, 'background-color', '');

  }

}
