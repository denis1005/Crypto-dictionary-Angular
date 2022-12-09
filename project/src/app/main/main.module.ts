import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CryptocardsComponent } from './cryptocards/cryptocards.component';
import { CryptotrakerComponent } from './cryptotraker/cryptotraker.component';
import { VideoComponent } from './video/video.component';
import { FactComponentComponent } from './fact-component/fact-component.component';




@NgModule({
  declarations: [
    MainComponent,
    CryptocardsComponent,
    CryptotrakerComponent,
    VideoComponent,
    FactComponentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
