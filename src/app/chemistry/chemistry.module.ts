import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ChemistryPlayComponent} from './chemistry-play.component';
import {ChemistryPopoverComponent} from './chemistry-popover/chemistry-popover.component';
import {ElementPopoverComponent} from './element-popover/element-popover.component';
import { ThemeButtonComponent } from './theme-button/theme-button.component';

@NgModule({
    declarations: [
        ChemistryPlayComponent,
        ChemistryPopoverComponent,
        ElementPopoverComponent,
        ThemeButtonComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([
            {path: '', component: ChemistryPlayComponent}
        ])
    ]
})
export class ChemistryModule {
}