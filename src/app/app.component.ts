import { Component } from '@angular/core';
import { IonApp, IonButton, IonRow } from '@ionic/angular/standalone';
import { ThemeButtonComponent } from '../components/theme-button/theme-button.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [IonApp, IonRow, IonButton, ThemeButtonComponent]
})
export class AppComponent {
}
