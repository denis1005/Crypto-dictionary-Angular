import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICryptoShirt } from 'src/app/shared/interfaces/CryptoShirt';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-component',
  templateUrl: './store-component.component.html',
  styleUrls: ['./store-component.component.css']
})
export class StoreComponentComponent implements OnInit {
  storeData:ICryptoShirt[] | null = null;
    
  constructor(private storeService:StoreService,private router:Router){

  }

  ngOnInit(): void {
     this.storeService.getAll().subscribe((data)=>{
        this.storeData=data;
     })
  }

  clickHandler(shirtId:string){
    this.router.navigate(['store/details',shirtId],)
  } 
}
