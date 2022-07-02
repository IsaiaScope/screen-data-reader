import { Component, Input, OnInit } from '@angular/core';
import { icon } from '../share/share-const';

@Component({
  selector: 'app-share-icon',
  template: `
    <div *ngIf="data" class="icon">
      <a [href]="data.href" [target]="data.target">
        <span class="material-icons"> {{ data.icon }}</span>
      </a>
    </div>
  `,
  styles: [
    `
      .icon {
        margin-right: 10px;
      }
    `,
  ],
})
export class ShareIconComponent implements OnInit {
  @Input() data: icon | null = null;
  @Input() label = '';

  constructor() {}

  ngOnInit(): void {}
}
