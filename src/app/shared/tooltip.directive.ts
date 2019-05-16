import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input()
  tooltip: string;

  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('MouseEnter', this.tooltip);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('MouseLeave', this.tooltip);
  }
}
