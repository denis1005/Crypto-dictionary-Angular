import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { ICryptoShirt } from 'src/app/shared/interfaces/CryptoShirt';
import { IUser } from 'src/app/shared/interfaces/UserInterfase';
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
  @ViewChild('quantity') quantity!: ElementRef;
  @ViewChild('sizes') sizes!: ElementRef;
  @ViewChild('genders') genders!: ElementRef;
	selectedQuantity:string = '';
  selectedSizes:string = '';
  selectedGenders:string = '';
  isAuth:boolean =false;

	onSelected():void {
		this.selectedQuantity = this.quantity.nativeElement.value;
	}

  onSelectedSizes():void {
		this.selectedSizes = this.sizes.nativeElement.value;
	}

  onSelectedGender():void {
		this.selectedGenders = this.genders.nativeElement.value;
	}


  constructor(private router:Router, 
    public storeService:StoreService,
    private route:ActivatedRoute,
    private authService:AuthServiceService,
    private cardService:CardService){

     this.headers = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .append('X-Authorization', `${ this.authService.getUser.accessToken}`);

    this.shirtId=route.snapshot.params['shirtId'];
    authService.auth.subscribe((data)=>{
        this.isAuth=data;
    })
  }

  ngOnInit(): void {
    this.storeService.getOne(this.shirtId)
    .subscribe((shirt)=>{
      this.shirt=shirt
      console.log(this.shirt)
    });
  }

  

  addToChartHandler(){
    if (this.form.invalid){return;}
    const {price,sizes,gender,quantity}=this.form.value;
    console.log(price,sizes,gender,quantity);
    const obj= {
      'order':{
        'price':price,
        'sizes':this.selectedSizes,
        'gender':this.selectedGenders,
        'quantity':this.selectedQuantity,
      },
      'shirt':this.shirt
    }

    this.cardService.addOneToCard(obj,this.headers).subscribe((data)=>{

        this.router.navigate(['store/card']);
    })
  }
}
