import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing-module';
import { CoreModule } from '../core/core.module';
import { NewsComponentComponent } from './news-component/news-component.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        NewsComponentComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        NewsRoutingModule,
        SharedModule
    ]
})
export class NewsModule { }
