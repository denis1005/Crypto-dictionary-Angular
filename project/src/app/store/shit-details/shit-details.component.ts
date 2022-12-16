import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { ICryptoShirt } from 'src/app/shared/interfaces/CryptoShirt';
import { CardService } from '../card.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-shit-details',
  templateUrl: './shit-details.component.html',
  styleUrls: ['./shit-details.component.css']
})
export class ShitDetailsComponent implements OnInit {

  @ViewChild('form') form!: NgForm
  shirt:ICryptoShirt | null=null
  shirtId:string=''
  headers!: HttpHeaders;

  constructor(private router:Router, 
    public storeService:StoreService,
    private route:ActivatedRoute,
    private authService:AuthServiceService,
    private cardService:CardService){

     this.headers = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .append('X-Authorization', `${ this.authService.getUser.accessToken}`);

    this.shirtId=route.snapshot.params['shirtId'];
  }

  ngOnInit(): void {
    this.storeService.getOne(this.shirtId)
    .subscribe((shirt)=>{
      this.shirt=shirt
      console.log(this.shirt)
    });
  }

  addToChartHandler(){
    const {price,sizes,gender,quantity}=this.form.value;
    const obj= {
      'order':{
        'price':price,
        'sizes':sizes,
        'gender':gender,
        'quantity':quantity,
      },
      'shirt':this.shirt
    }

    this.cardService.addOneToCard(obj,this.headers).subscribe((data)=>{
      console.log(data);
        this.router.navigate(['store/card']);
    })
  }
}
