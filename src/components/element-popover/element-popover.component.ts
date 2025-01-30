import { Component, Input } from '@angular/core';
import { tableElements } from '../../lib/data';
import { IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-element-popover',
  templateUrl: './element-popover.component.html',
  imports: [
    IonItem,
    IonList
  ],
  styleUrls: ['./element-popover.component.scss']
})
export class ElementPopoverComponent {
  @Input() data!: string;

  about: { mass: number, period: number, group: number, type: string, number: number } = {
    mass: 0,
    period: 0,
    group: 0,
    type: 'Unknown',
    number: 0
  };

  ngOnInit(): void {
    const element = tableElements.find((el: any) => el.symbol === this.data);
    this.about = {
      mass: element?.mass!,
      period: element?.period!,
      group: element?.positionGroup!,
      type: element?.group!,
      number: element?.Z!
    };
  }
}
