import { Component, Input, OnInit } from '@angular/core';
import {
  LABELS,
  LabelData,
  LabelItem,
} from 'src/app/pages/home/home-helper/home-const';
import { getWindowData } from 'src/app/pages/home/home-helper/home-methods';

@Component({
  selector: 'app-slider',
  template: `
    <div class="slider-container">
      <app-card
        *ngFor="let item of keys"
        [secTitle]="_data[item].secTitle"
        [props]="_data[item].props"
      ></app-card>
      <!-- <div class="slide" *ngFor="let item of keys">
        <div class="f-col card" *ngIf="_data[item].props.length > 0">
          <h3>{{ _data[item].secTitle }}</h3>
          <ng-container *ngFor="let item of _data[item].props">
            <app-label
              [labelName]="item.label"
              [value]="item.value"
            ></app-label>
          </ng-container>
        </div>
      </div> -->
      <!-- <div class="slide">
        <h2>Airpods</h2>
        <h4>$199</h4>
        <img src="https://i.ibb.co/y08W0Jx/image1.png" alt="" />
        <a href="#" class="btn">Buy Now</a>
      </div>
      <div class="slide">
        <h2>iPhone 12</h2>
        <h4>$799</h4>
        <img src="https://i.ibb.co/NYdGg2q/image2.png" alt="" />
        <a href="#" class="btn">Buy Now</a>
      </div>
      <div class="slide">
        <h2>iPad</h2>
        <h4>$599</h4>
        <img src="https://i.ibb.co/Jd3t4hQ/image3.png" alt="" />
        <a href="#" class="btn">Buy Now</a>
      </div> -->
    </div>
  `,
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  keys = Object.keys(LABELS);
  _data = this.calcValues(LABELS);
  constructor() {}

  ngOnInit(): void {}

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

/*
  This JS is from the following project:
  https://github.com/bushblade/Full-Screen-Touch-Slider
*/

// const slider = document.querySelector('.slider-container'),
//   slides = Array.from(document.querySelectorAll('.slide'))

// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID = 0,
//   currentIndex = 0

// slides.forEach((slide, index) => {
//   const slideImage = slide.querySelector('img')
//   slideImage.addEventListener('dragstart', (e) => e.preventDefault())

//   // Touch events

// })

// // Disable context menu
// window.oncontextmenu = function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }

// function touchStart(index) {
//   return function (event) {
//     currentIndex = index
//     startPos = getPositionX(event)
//     isDragging = true

//     // https://css-tricks.com/using-requestanimationframe/
//     animationID = requestAnimationFrame(animation)
//     slider.classList.add('grabbing')
//   }
// }

// function touchEnd() {
//   isDragging = false
//   cancelAnimationFrame(animationID)

//   const movedBy = currentTranslate - prevTranslate

//   if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

//   if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

//   setPositionByIndex()

//   slider.classList.remove('grabbing')
// }

// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event)
//     currentTranslate = prevTranslate + currentPosition - startPos
//   }
// }

// function getPositionX(event) {
//   return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
// }

// function animation() {
//   setSliderPosition()
//   if (isDragging) requestAnimationFrame(animation)
// }

// function setSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`
// }

// function setPositionByIndex() {
//   currentTranslate = currentIndex * -window.innerWidth
//   prevTranslate = currentTranslate
//   setSliderPosition()
// }
