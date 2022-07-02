import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  template: `
    <div class="label">
      <label>{{ labelName }}: </label>
      <span>{{ value }}</span>
    </div>
  `,
  styles: [
    `
      .label {
        margin-bottom: 0.5em;
      }
    `,
  ],
})
export class LabelComponent implements OnInit {
  @Input() labelName = '';
  @Input() value: string | number = '';
  constructor() {}

  ngOnInit(): void {}
}
