import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const Isotope;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {



  }

  getUrl(i) {
    // return `assets/galeria2/img (${i+1}).jpg`;
    return `url('assets/galeria2/img (${i+1}).jpg')`;
  }

  ngAfterViewInit() {

  }

}
