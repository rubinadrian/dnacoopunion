import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css']
})
export class Carousel2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#header-slippry").slippry({
      // options
      adaptiveHeight: false, // height of the sliders adapts to current slide
      captions: false, // Position: overlay, below, custom, false

      // pager
      pager: false,

      // controls
      controls: false,
      autoHover: false,

      // transitions
      transition: 'kenburns', // fade, horizontal, kenburns, false
      kenZoom: 10,
      speed: 1000 // time the transition takes (ms)
      });
  }

}
