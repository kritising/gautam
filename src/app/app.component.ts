import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'hello-world';

  onLinkClick(url: string): void {
    // Use window.location.href to navigate to the specified URL.
    window.location.href = url;
  }

}
