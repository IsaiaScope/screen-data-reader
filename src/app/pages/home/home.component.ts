import { Component, OnInit } from '@angular/core';
import { LabelData, LabelItem, LABELS } from './home-helper/home-const';
import { getWindowData } from './home-helper/home-methods';

@Component({
  selector: 'app-home',
  template: `
    <div class="page">
      <!-- <app-card
        *ngFor="let item of keys"
        [secTitle]="_data[item].secTitle"
        [props]="_data[item].props"
      ></app-card> -->
      <app-flip-card *ngFor="let item of keys"></app-flip-card>
    </div>
  `,
  styles: [``],
})
export class HomeComponent implements OnInit {
  keys = Object.keys(LABELS);
  _data = this.calcValues(LABELS);

  ngOnInit(): void {
    console.log(screen);
    console.log(navigator);
    console.log(this.keys);
    console.log(this._data);
  }

  calcValues(objData: LabelData) {
    const newData: Record<string, { secTitle: string; props: LabelItem[] }> =
      Object.keys(objData).reduce((pre, key) => {
        const { props } = objData[key];
        const _props = props.map((x) => {
          return { ...x, value: getWindowData(x.value) };
        });
        return { ...pre, [key]: { ...objData[key], props: _props } };
      }, {});
    return newData;
  }
}
