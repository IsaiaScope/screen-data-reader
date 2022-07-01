import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  template: `
    <div class="card-wrapper">
      <div
        class="card absolute-t0-l0"
        (click)="flipped = !flipped"
        [ngClass]="{ flipped: flipped }"
      >
        <div class="card-front absolute-t0-l0">
          <div class="layer">
            <h1>Lubos</h1>
            <div class="corner"></div>
            <div class="corner"></div>
            <div class="corner"></div>
            <div class="corner"></div>
          </div>
        </div>
        <div class="card-back absolute-t0-l0">
          <div class="layer">
            <div class="top">
              <h2>Chief Idea Officer</h2>
            </div>
            <div class="bottom">
              <a href="">pino</a><br />
              <a href="">pino</a><br />
              <a href="">pino</a><br />
              <a href="">pino</a><br />
              <a href="">pino</a><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit {
  flipped = false;

  constructor() {}

  ngOnInit(): void {}
}
