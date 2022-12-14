import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from "./core/core.module";
import { MainModule } from "./main/main.module";
import { appInterceptorProvider } from './app.interceptor';
import { NewsModule } from './news/news.module';
import { MemesModule } from './memes/memes.module';
import { ProfileModule } from './profile/profile.module';




@NgModule({
    declarations: [
        AppComponent,
    

    ],
    providers: [
        appInterceptorProvider
    ],
    bootstrap: [AppComponent],
    imports: [
        AuthModule,
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        CoreModule,
        MainModule,
        HttpClientModule,
        NewsModule,
        MemesModule ,
        ProfileModule
    ]
})
export class AppModule { }
