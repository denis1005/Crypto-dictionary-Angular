import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { IShoppingCard } from 'src/app/shared/interfaces/ShoppinCard';
import { IUser } from 'src/app/shared/interfaces/UserInterfase';
import { CardService } from 'src/app/store/card.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  headers!: HttpHeaders;
  myOrders:IShoppingCard[] | null=null;
  user:IUser | null=null
 

  constructor (public cardService:CardService
    ,private authService:AuthServiceService,){
      this.user=authService.getUser;
  }
  ngOnInit(): void {
    this.cardService.getUserOrdersItems(this.authService.getUser._id).subscribe((data)=>{
      this.myOrders=data;
    })
  }

  totalSum(totalSum:string,quantity:string):number{
    return parseInt(totalSum)*parseInt(quantity)
  }
}
