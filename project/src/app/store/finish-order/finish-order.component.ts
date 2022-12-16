import { HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { IShoppingCard } from 'src/app/shared/interfaces/ShoppinCard';
import { CardService } from '../card.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.css']
})
export class FinishOrderComponent implements OnInit  {
  headers!: HttpHeaders;
  shoppingData:IShoppingCard[] | null=null;
  orderId:string='';
  order:IShoppingCard | null=null

  constructor(private router:Router, 
    public storeService:StoreService,
    private route:ActivatedRoute,
    private authService:AuthServiceService,
    private cardService:CardService){

     this.headers = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .append('X-Authorization', `${ this.authService.getUser.accessToken}`);

    this.orderId=this.route.snapshot.params['orderId'];
    this.cardService.getOne(this.orderId).subscribe((order)=>{

        this.cardService.addOneToOrders(order,this.headers).subscribe((data)=>{
           
        })
        
    });
   
     
}

  ngOnInit(): void {
    
    
    this.cardService.cancelOne(this.orderId,this.headers).subscribe((data)=>{
      this.router.navigate(['profile/orders'])
  
    })
    
  }


}




