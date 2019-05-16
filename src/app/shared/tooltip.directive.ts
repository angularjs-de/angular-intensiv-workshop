import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input()
  set tooltip(newVal) {
    this.tooltipElement.innerText = newVal;
  }

  private tooltipElement = document.createElement('div');

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.appendChild(this.tooltipElement);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.removeChild(this.tooltipElement);
  }
}
