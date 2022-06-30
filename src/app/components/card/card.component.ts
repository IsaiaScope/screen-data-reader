import { Component, Input } from '@angular/core';
import { LabelItem } from 'src/app/pages/home/home-helper/home-const';

@Component({
  selector: 'app-card',
  template: `
    <div class="f-col card" *ngIf="props.length > 0">
      <h3>{{ secTitle }}</h3>
      <ng-container *ngFor="let item of props">
        <app-label [labelName]="item.label" [value]="item.value"></app-label>
      </ng-container>
    </div>
  `,
  styles: [``],
  // host: { class: 'grid-center slide' },
})
export class CardComponent {
  @Input() secTitle = '';
  @Input() props: LabelItem[] = [];
}
