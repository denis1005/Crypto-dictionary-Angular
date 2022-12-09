import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CryptocardsComponent } from './cryptocards/cryptocards.component';
import { CryptotrakerComponent } from './cryptotraker/cryptotraker.component';



@NgModule({
  declarations: [
    MainComponent,
    CryptocardsComponent,
    CryptotrakerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
