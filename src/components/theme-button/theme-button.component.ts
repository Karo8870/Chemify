import { Component } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  imports: [
    IonButton,
    IonIcon
  ],
  styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent {
  constructor(private readonly themeService: ThemeService) {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
