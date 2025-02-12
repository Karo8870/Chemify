import {Component} from '@angular/core';
import {ThemeService} from "../../core/theme.service";

@Component({
    selector: 'app-theme-button',
    templateUrl: './theme-button.component.html',
    styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent {
    constructor(private readonly themeService: ThemeService) {
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}