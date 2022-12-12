import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICryptocurrency } from 'src/app/shared/interfaces/Cryptocurrency';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {

  crypto:ICryptocurrency | null=null
  cryptoId:number=0
   
  constructor(public router:Router, 
    private route:ActivatedRoute,
    public cryptoService:CryptoService){
      this.cryptoId=this.route.snapshot.params['id']
  }
  ngOnInit(): void {
    if(this.cryptoId!=0){
      this.cryptoService
      .getOneCrypto(this.cryptoId)
      .subscribe((crypto)=>{
           this.crypto=crypto
      })
    }
  
  }

   
}
