import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUser } from '../shared/interfaces/UserInterfase';

  


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user?: IUser
  private _isLoggedIn$=new BehaviorSubject<boolean>(false);
  auth=this._isLoggedIn$.asObservable();
  

  
  get accessToken():string | undefined  {
    return this.user?.accessToken
  }

  get isLoggedIn(){
      return this.user !==null
  }

  get getUser(){
    return JSON.parse(localStorage.getItem('user')|| '{}') as IUser
  }

  constructor(private http: HttpClient) { 
    const user= localStorage.getItem('user')
    this._isLoggedIn$.next(!!user)
  }

  register(email:string,username:string,imageUrl:string,password:string,address:string,phone:string){
    return this.http
    .post<IUser>(`/api/users/register`,{email,username,imageUrl,password,address,phone}).pipe(
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
    return this.http.request<IUser>('GET','/api/users/me',{headers})
  }

  updateProfile(headers:HttpHeaders,data:any){
    return this.http.post('/api/users/me',data,{headers})
  } 
}
