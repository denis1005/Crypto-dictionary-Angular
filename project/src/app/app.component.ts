import { Component } from '@angular/core';
import { AuthServiceService } from './auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  isAuth:boolean=false

  constructor(public authService:AuthServiceService){
    this.authService.auth.subscribe((value)=>{
       this.isAuth=value
    })

  }
  
  
}
