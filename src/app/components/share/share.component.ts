import { Component, OnInit } from '@angular/core';
import { SHARE } from './share-const';

@Component({
  selector: 'app-share',
  template: `
    <div class="container flex-center">
      <app-share-icon
        *ngFor="let key of keys"
        [data]="icons[key]"
      ></app-share-icon>
      <app-copy-clipboard></app-copy-clipboard>
    </div>
  `,
  styles: [
    `
      .container {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class ShareComponent implements OnInit {
  constructor() {}
  keys = Object.keys(SHARE).splice(0, 2);
  icons: Record<string, any> = SHARE;

  ngOnInit(): void {}
}
