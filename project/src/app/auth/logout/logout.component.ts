import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
   constructor(private authServices:AuthServiceService
    ,private router:Router){
     
      
    
    }

   headers=new HttpHeaders()
  .set('Content-Type','application/json')
  .append('X-Authorization',`${this.authServices.user?.accessToken ||  ''}`);

  ngOnInit(): void {
    this.authServices.logout(this.headers).subscribe({
      next:()=>{
        localStorage.clear();
        this.authServices.auth=false;
        this.router.navigate(['/'])
      },
      error:(err)=>{
        console.log(err)
      }    
 
    })

  }
}
