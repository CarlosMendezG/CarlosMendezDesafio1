import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dirBajaEstilo]'
})
export class BajaEstiloDirective implements OnInit {

  @Input('dirBajaEstilo') esBaja: boolean = false;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'padding', '0px 10px 0px 10px');
    this.renderer.setStyle(this.elemento.nativeElement, 'border-radius', '40px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color', this.esBaja ? '#fff' : '#000000');
    this.renderer.setStyle(this.elemento.nativeElement, 'background-color', this.esBaja ? '#e53935' : '#fff');
  }

}
