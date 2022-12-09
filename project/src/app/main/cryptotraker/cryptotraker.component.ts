import { Component, OnInit } from '@angular/core';
import { ICryptoTracer } from 'src/app/shared/interfaces/CryptoTrakerInterface';
import { TracerServiceService } from '../tracer-service.service';

@Component({
  selector: 'app-cryptotraker',
  templateUrl: './cryptotraker.component.html',
  styleUrls: ['./cryptotraker.component.css']
})
export class CryptotrakerComponent implements OnInit  {

  cryptoData:ICryptoTracer[] | [] =[];

  constructor(private tracerService:TracerServiceService){}


  ngOnInit(): void {
    // this.tracerService.getData().subscribe(data=>{
    //   this.cryptoData=data
    // })
  }
   
}
