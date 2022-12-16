import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing-module';
import { StoreComponentComponent } from './store-component/store-component.component';
import { SharedModule } from "../shared/shared.module";
import { ShitDetailsComponent } from './shit-details/shit-details.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { CancelOrederComponent } from './cancel-oreder/cancel-oreder.component';
import { RouterModule } from '@angular/router';
import { FinishOrderComponent } from './finish-order/finish-order.component';




@NgModule({
    declarations: [
        StoreComponentComponent,
        ShitDetailsComponent,
        CardComponent,
        CancelOrederComponent,
        FinishOrderComponent,
      
    ],
    imports: [
        CommonModule,
        StoreRoutingModule,
        SharedModule,
        FormsModule,
        RouterModule
    ]
})
export class StoreModule { }
