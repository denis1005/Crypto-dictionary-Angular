import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment.prod'
import { IUser } from '../shared/interfaces/UserInterfase';

const apiUrl=environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user:IUser | null=null;
  auth:boolean=false;

  get isAuth():boolean {
    return this.auth
  }
  get accessToken():string | undefined  {
    return this.user?.accessToken
  }

  get isLoggedIn(){
    
    if(this.user !==null){
      const userString=localStorage.getItem('user')
      this.auth=true
      return JSON.parse(userString!)
    }
    else {
      return this.user !==null
    }
  }

  constructor(private http: HttpClient) { }

  register(email:string, password:string){
    return this.http
    .post<IUser>(`/api/users/register`,{email,password})
  }

  login(email:string, password:string){
    return this.http
    .post<IUser>(`/api/users/login`,{email,password})
  }

  logout(headers:HttpHeaders){
    return this.http.get(`/api/users/logout`,{headers});
  }
 


  

  getProfile(headers:HttpHeaders){
    return this.http.request('GET','/api/users/me',{headers})
  }
}
