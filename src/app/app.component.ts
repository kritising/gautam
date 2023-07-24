import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  showMobileNav = false;

  constructor() { }

  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }

  onLinkClick() {
    // Hide the mobile navigation toggle icons when a link is clicked
    this.showMobileNav = false;
  }
}
