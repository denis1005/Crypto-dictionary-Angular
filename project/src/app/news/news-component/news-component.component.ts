
import { Component, OnInit } from '@angular/core';
import { INewsArticle } from 'src/app/shared/interfaces/NewsInterface';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {

  newsData:INewsArticle[] | []=[];

  constructor(public newsService:NewsServiceService ){

  }


  ngOnInit(): void {
     this.newsService.getNews().subscribe((data)=>{
      this.newsData=data.articles.slice(0,15);
     })
  }

 
}
