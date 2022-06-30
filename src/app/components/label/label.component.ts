import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  template: `
    <label>{{ labelName }}: </label>
    <span>{{ value }}</span>
  `,
  styles: [],
})
export class LabelComponent implements OnInit {
  @Input() labelName = '';
  @Input() value: string | number = '';
  constructor() {}

  ngOnInit(): void {}
}
