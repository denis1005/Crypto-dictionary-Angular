import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {environment} from '../environments/environment.prod'
import { IUser } from '../shared/interfaces/UserInterfase';

const apiUrl=environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user:IUser | null=null;
  private _isLoggedIn$=new BehaviorSubject<boolean>(false);
  auth=this._isLoggedIn$.asObservable()
  

  
  get accessToken():string | undefined  {
    return this.user?.accessToken
  }

  get isLoggedIn(){
    
    if(this.user !==null){
      const userString=localStorage.getItem('user')
      
      return JSON.parse(userString!)
    }
    else {
      return this.user !==null
    }
  }

  constructor(private http: HttpClient) { 
    const user= localStorage.getItem('user')
    this._isLoggedIn$.next(!!user)
  }

  register(email:string, password:string){
    return this.http
    .post<IUser>(`/api/users/register`,{email,password}).pipe(
      tap((response:any)=>{
        this._isLoggedIn$.next(true)
      })
    )
  }

  login(email:string, password:string){
    return this.http
    .post<IUser>(`/api/users/login`,{email,password}).pipe(
      tap((response:any)=>{
        this._isLoggedIn$.next(true)
      })
    )
  }

  logout(headers:HttpHeaders){
    return this.http.get(`/api/users/logout`,{headers}).pipe(
      tap((response:any)=>{
        this._isLoggedIn$.next(false)
      })
    );
  }
 


  

  getProfile(headers:HttpHeaders){
    return this.http.request('GET','/api/users/me',{headers})
  }
}
