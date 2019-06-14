import { Directive ,ElementRef,Renderer,HostListener} from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  constructor(private element: ElementRef, private renderer: Renderer) { }
  @HostListener('dblclick') dblClick() {
    this.element.nativeElement.style.forntSize='555px';
  console.log('bigger element double-clicked');
}
}
