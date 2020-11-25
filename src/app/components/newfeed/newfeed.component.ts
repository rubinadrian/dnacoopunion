import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

declare const Isotope;

@Component({
  selector: 'app-newfeed',
  templateUrl: './newfeed.component.html',
  styleUrls: ['./newfeed.component.css']
})
export class NewfeedComponent implements OnInit {
  news = [];
  black = 'black';

  constructor(public _news:NewsService) { }

  ngOnInit() {
    this._news.getNews().subscribe((resp:any) => {
      this.news = resp;
      for(let item of this.news) {
        let id: string = item.news_id.toString();
        item.bg = 'https://www.coopunion.com.ar/news/' +  id.padStart(5, '0') + '_m.jpg?' + Math.floor(Math.random() * 100000);
      }
      setTimeout(()=>{
        var elem = document.querySelector('.gallery');
        new Isotope( elem, {
          itemSelector: '.gallery-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-sizer',
            gutter: 0
          }
        });
      }, 25);

    });
  }



}
