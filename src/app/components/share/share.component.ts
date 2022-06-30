import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  template: `
    <a
      href="mailto:mail@address.com?subject=SubjectHere&body=message%20goes%20here"
      >Send Mail</a
    >
    <a href="https://wa.me?text=carlo" target="_blank">Whats Up</a>

    <a href="" (click)="onClick()">Pino</a>
  `,
  styles: [],
})
export class ShareComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    navigator.clipboard.writeText(JSON.stringify('Pino'));
  }
}
