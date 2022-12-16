import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { IShoppingCard } from 'src/app/shared/interfaces/ShoppinCard';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
  headers!: HttpHeaders;
  myOrders:IShoppingCard[] | null=null;
  totalSum:number=0

  constructor (public cardService:CardService
    ,private authService:AuthServiceService,
    private router :Router){
      this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('X-Authorization', `${ this.authService.getUser.accessToken}`);
  }
  ngOnInit(): void {
    this.cardService.getUserCardItems(this.authService.getUser._id).subscribe((data)=>{
      this.myOrders=data;
      console.log(data)
      data.forEach(x=>{
        this.totalSum+= parseInt(x.shirt.price)
      })
    })
  }

  clickHandler(orderId:string){
    this.router.navigate(['store/cancel',orderId])
  }
}
