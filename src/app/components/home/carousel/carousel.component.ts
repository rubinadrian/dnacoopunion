import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import 'popper.js';

declare const $;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({
      pause: "false"
  });
  }

}
