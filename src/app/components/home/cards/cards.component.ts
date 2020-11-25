import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animacion(event: MouseEvent) {
    let elemento:any = event.target;
    let animationName = "pulse";
    elemento.classList.add('animated', animationName);
    elemento.addEventListener('animationend', () => elemento.classList.remove('animated', animationName));
  }

}
