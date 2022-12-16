import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { CardService } from '../card.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-cancel-oreder',
  templateUrl: './cancel-oreder.component.html',
  styleUrls: ['./cancel-oreder.component.css']
})
export class CancelOrederComponent implements OnInit {
  
  orderId:string=''
  headers!: HttpHeaders;

  constructor(private router:Router, 
    public storeService:StoreService,
    private route:ActivatedRoute,
    private authService:AuthServiceService,
    private cardService:CardService){

     this.headers = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .append('X-Authorization', `${ this.authService.getUser.accessToken}`);

    this.orderId=this.route.snapshot.params['orderId'];
    console.log(this.orderId);
}
  ngOnInit(): void {{
    this.cardService.cancelOne(this.orderId,this.headers).subscribe((data)=>{
      console.log(data)
      this.router.navigate(['store/card'])
     
    })
  }

  }

}
