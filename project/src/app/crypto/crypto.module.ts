import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoCardsComponent } from './cryptocards/cryptocards.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { RouterModule } from '@angular/router';
import { CryptoRoutingModule } from './crypto-routin-module';



@NgModule({
  declarations: [
    CryptoCardsComponent,
    CryptoDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CryptoRoutingModule

  ],
  exports: [
    CryptoCardsComponent
  ]
})
export class CryptoModule { }
