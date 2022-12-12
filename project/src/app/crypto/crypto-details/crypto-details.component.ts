import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent {
   
  constructor(public router:Router, private route:ActivatedRoute){
     console.log(this.route.snapshot.params['id'])
  }


}
