import { Component, OnInit } from '@angular/core';
import { ICryptocurrency } from 'src/app/shared/interfaces/Cryptocurrency';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-cryptocards',
  templateUrl: './cryptocards.component.html',
  styleUrls: ['./cryptocards.component.css']
})
export class CryptoCardsComponent implements OnInit {

    cryptoData: ICryptocurrency[] | []=[]
    constructor(public cryptoService:CryptoService){

    }
  ngOnInit(): void {
    this.cryptoService.getAllCrypto().subscribe((data)=>{
      this.cryptoData=data;
      console.log(this.cryptoData);
    });
  }
}
