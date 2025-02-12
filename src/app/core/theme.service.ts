import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private _theme: string | null = localStorage.getItem('theme');

    toggleTheme(): void {
        if (this._theme === 'light') {
            this.setTheme('dark');
            return;
        }

        this.setTheme('light');
    }

    private setTheme(theme: string): void {
        this._theme = theme;
        localStorage.setItem('theme', this._theme);
        this.updateTheme()
    }

    updateTheme(): void {
        switch (this._theme) {
            case 'light':
                document.body.classList.add('light');
                document.body.classList.remove('dark');
                break;

            case 'dark':
                document.body.classList.add('dark');
                document.body.classList.remove('light');
                break;

            default:
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    document.body.classList.add('dark');
                    document.body.classList.remove('light');
                } else {
                    document.body.classList.add('light');
                    document.body.classList.remove('dark');
                }
        }
    }

    initTheme(): void {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        prefersDark.addEventListener('change', () => {
            this.updateTheme();
        });

        this.updateTheme();
    }
}