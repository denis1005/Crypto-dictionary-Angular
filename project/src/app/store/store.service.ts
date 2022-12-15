import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { ICryptoShirt } from '../shared/interfaces/CryptoShirt';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  headers: HttpHeaders | null=null;
  
  constructor( private http: HttpClient, private authService:AuthServiceService) {
    this.headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('X-Authorization', `${ this.authService.getUser.accessToken}`);

   }

   getAll(){
    return this.http.get<ICryptoShirt[]>('/api/data/store')
  }
  
  getOne(shirtId:string){
    return this.http.get<ICryptoShirt>(`/api/data/store/${shirtId}`)
  }
    
  
}
