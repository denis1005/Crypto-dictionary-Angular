import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewsArticle } from '../shared/interfaces/NewsInterface';
import { INewsObject } from '../shared/interfaces/NewsObjectInterface';

const  headers:HttpHeaders =new HttpHeaders()
.append('X-Api-Key',`f858cef6765d4bf6980b2e728da6ec3b`);

@Injectable({
  providedIn: 'root'
})

export class NewsServiceService  {

  constructor(public http:HttpClient) { }

  

   getNews(){
    return this.http.get<INewsObject>('https://newsapi.org/v2/everything?q=bitcoin',{headers})
   }


}
