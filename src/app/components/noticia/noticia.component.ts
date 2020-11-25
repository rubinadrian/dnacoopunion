import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  id: String;
  noticia:any = {};
  loading = true;

  constructor(private route: ActivatedRoute,
              private _news: NewsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this._news.getNoticia(this.id).subscribe(resp => {
      this.noticia = resp;
      let options = { year: 'numeric', month: 'long', day: 'numeric' };
      this.noticia.news_date = new Date(this.noticia.news_date).toLocaleDateString("es-ES", options);
      let id: string = this.noticia.news_id.toString();
      this.noticia.bg = 'https://www.coopunion.com.ar/news/' +  id.padStart(5, '0') + '_m.jpg?' + Math.floor(Math.random() * 100000);
      this.loading = false;
    });
  }
}
