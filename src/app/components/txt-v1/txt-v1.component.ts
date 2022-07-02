import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-txt-v1',
  template: `
    <div class="content">
      <h2>{{ secTitle | titlecase }}</h2>
      <h2>{{ secTitle | titlecase }}</h2>
    </div>
  `,
  styleUrls: ['./txt-v1.component.scss'],
})
export class TxtV1Component implements OnInit {
  @Input() secTitle =''  
  constructor() {}

  ngOnInit(): void {}
}
