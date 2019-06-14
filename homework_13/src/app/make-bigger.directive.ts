import { Directive ,ElementRef,Renderer,HostListener} from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {
private size=14;
  constructor(private element: ElementRef, private renderer: Renderer) { }
  @HostListener('dblclick') 
  onDoubleClick() {
    this.size= this.size+2;
    this.element.nativeElement.style.fontSize=`${this.size}px`;
  console.log('bigger element double-clicked');
}
}
