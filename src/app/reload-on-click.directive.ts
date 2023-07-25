import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[reloadOnClick]'
})
export class ReloadOnClickDirective {
  constructor() { }

  @HostListener('click')
  onClick(): void {
    // Reload the page when the header is clicked.
    window.location.reload();
  }
}
