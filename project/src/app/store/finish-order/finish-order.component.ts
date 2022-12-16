import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { IShoppingCard } from 'src/app/shared/interfaces/ShoppinCard';
import { CardService } from '../card.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.css']
})
export class FinishOrderComponent implements OnInit {
  headers!: HttpHeaders;
  shoppingData:IShoppingCard[] | null=null;

  constructor(private router:Router, 
    public storeService:StoreService,
    private authService:AuthServiceService,
    private cardService:CardService){

     this.headers = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .append('X-Authorization', `${ this.authService.getUser.accessToken}`);
     this.cardService.getUserCardItems(authService.getUser._id).subscribe((data)=>{
       this.shoppingData=data;
     })


}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
