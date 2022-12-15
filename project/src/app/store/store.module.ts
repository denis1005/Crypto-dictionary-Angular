import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing-module';
import { StoreComponentComponent } from './store-component/store-component.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        StoreComponentComponent,
    ],
    imports: [
        CommonModule,
        StoreRoutingModule,
        SharedModule
    ]
})
export class StoreModule { }
