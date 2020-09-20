import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode : boolean = false;

  getDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
    this.darkMode = !this.darkMode;
  }
}
