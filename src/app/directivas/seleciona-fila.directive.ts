import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelecionaFila]'
})
export class SelecionaFilaDirective {

  @Input()
  Fila_ant!:ElementRef
  

  constructor(private elementRef: ElementRef,private renderer:Renderer2) { }
  @HostListener('click')
  click_element() {


}
}
