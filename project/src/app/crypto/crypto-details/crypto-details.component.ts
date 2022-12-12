import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent {

  video:string='width="560" height="315" src="https://www.youtube.com/embed/jxLkbJozKbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"'
   
  constructor(public router:Router, 
    private route:ActivatedRoute){
     console.log(this.route.snapshot.params['id'])
  }


}
