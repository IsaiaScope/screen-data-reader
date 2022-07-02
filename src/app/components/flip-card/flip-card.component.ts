import { Component, Input, OnInit } from '@angular/core';
import { LabelItem } from 'src/app/pages/home/home-helper/home-const';

@Component({
  selector: 'app-flip-card',
  template: `
    <div class="card-wrapper">
      <div
        class="card absolute-t0-l0"
        (click)="flipped = !flipped"
        [ngClass]="{ flipped: flipped }"
      >
        <div class="card-front absolute-t0-l0" [style.backgroundImage]="'url('+ imagSource +')'">
          <div class="layer grid-center">
            <app-txt-v1 [secTitle]="secTitle"></app-txt-v1>
          </div>
        </div>
        <div class="card-back absolute-t0-l0" [style.backgroundImage]="'url('+ imagSource +')'">
          <div class="layer grid-center">
              <ng-container *ngFor="let item of props">
                <app-label
                  [labelName]="item.label"
                  [value]="item.value"
                ></app-label>
              </ng-container>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit {
  flipped = false;
  @Input() secTitle = '';
  @Input() props: LabelItem[] = [];
  @Input() imagSource = '';
  constructor() {}

  ngOnInit(): void {}
}
