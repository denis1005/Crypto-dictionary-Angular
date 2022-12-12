import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { IUser } from 'src/app/shared/interfaces/UserInterfase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit {

  
  user: IUser | null =null
  isUserAuthenticated?:boolean=false;


  constructor(private authService:AuthServiceService){

  }

  ngOnInit(): void {
    
    
    this.authService.auth.subscribe((data)=>{
       this.isUserAuthenticated=data
    })
  
  }
  
  

}
