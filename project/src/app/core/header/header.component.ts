import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { IUser } from 'src/app/shared/interfaces/UserInterfase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit {

  @Input('auth') auth:boolean=false
  user: IUser | null =null


  constructor(private authService:AuthServiceService){

  }
  ngOnInit(): void {
    
    this.user=this.authService.isLoggedIn;
  
  }
  
  

}
