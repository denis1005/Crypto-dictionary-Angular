
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { INewsArticle } from 'src/app/shared/interfaces/NewsInterface';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {

  newsData:INewsArticle[] | []=[];

  constructor(public newsService:NewsServiceService,private router:Router ){

  }


  ngOnInit(): void {
     this.newsService.getNews().subscribe({
      next:(data)=>{
        this.newsData=data.articles.slice(0,20);
       },
       error:(err)=>{
        if(err.status=='0'){
          this.router.navigate(['404'])
        }
      }
     })
  }

  
 
}
