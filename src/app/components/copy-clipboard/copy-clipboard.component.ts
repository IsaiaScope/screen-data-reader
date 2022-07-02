import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-clipboard',
  template: `
    <div class="copy-clipboard">
      <span class="material-icons" (click)="onClick()"> content_copy </span>
    </div>
  `,
  styles: [
    `
      .copy-clipboard {
        cursor: pointer;
      }
    `,
  ],
})
export class CopyClipboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  onClick() {
    navigator.clipboard.writeText(JSON.stringify('Pinuccio'));
  }
}
