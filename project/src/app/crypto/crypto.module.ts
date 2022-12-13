import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoCardsComponent } from './cryptocards/cryptocards.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { RouterModule } from '@angular/router';
import { CryptoRoutingModule } from './crypto-routin-module';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        CryptoCardsComponent,
        CryptoDetailsComponent,
    ],
    exports: [
        CryptoCardsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CryptoRoutingModule,
        SharedModule
    ]
})
export class CryptoModule { }
