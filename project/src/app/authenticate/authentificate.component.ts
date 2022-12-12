import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.html',
  styleUrls: ['./authenticate.css']
})
export class AuthenticateComponent implements OnInit {
  
  isAuthentication=true;
  constructor(private authService:AuthServiceService){

  } 

  headers=new HttpHeaders()
  .set('Content-Type','application/json')
  .append('X-Authorization',`${this.authService.user?.accessToken ||  ''}`);

  ngOnInit(): void {
    this.authService.getProfile(this.headers).subscribe({
      next:(user)=>{
       
        this.isAuthentication=false;
        console.log(user)
      },
      error:(err)=>{
        
        this.isAuthentication=false;
        console.log(err)
      }
    })
  }

}
