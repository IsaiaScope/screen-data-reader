import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="grid-center page">
      <app-share></app-share>
      <app-slider></app-slider>
    </div>
  `,
  styles: [``],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
