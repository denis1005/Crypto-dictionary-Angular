import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesService  {

  constructor( public http : HttpClient) {

   }
  

  like (memeId:string,headers:HttpHeaders){
    return this.http.post(`/api/data/likes/`,{memeId},{headers})
  }
  
  getLikes(memeId:string,headers:HttpHeaders){
    return this.http.get<number>(`/api/data/likes/?where=memeId%3D%22${memeId}%22&distinct=_ownerId&count`,{headers})
  }

  hasLiked = (memeId:string, userId:string,headers:HttpHeaders) =>
  this.http.get<number>(
    `/api/data/likes/?where=memeId%3D%22${memeId}%22%20and%20_ownerId%3D%22${userId}%22&count`,{headers}
  );

}
