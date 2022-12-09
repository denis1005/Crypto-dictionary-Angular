import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from "./core/core.module";
import { MainModule } from "./main/main.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        AuthModule,
        BrowserModule,
        CommonModule,
        CoreModule,
        MainModule,
        HttpClientModule,
    ]
})
export class AppModule { }
