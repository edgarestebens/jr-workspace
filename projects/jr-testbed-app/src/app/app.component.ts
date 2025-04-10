import { Component, signal } from '@angular/core';

import {JrSideMenuComponent, TitleColor} from 'jr-side-menu'

@Component({
  selector: 'app-root',
  imports: [JrSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jr-testbed-app';

  isAuthenticated = signal(true);

  titleColor = TitleColor;


}
