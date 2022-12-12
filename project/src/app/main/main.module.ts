import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { CryptotrakerComponent } from './cryptotraker/cryptotraker.component';
import { VideoComponent } from './video/video.component';
import { FactComponentComponent } from './fact-component/fact-component.component';
import { CryptoModule } from '../crypto/crypto.module';




@NgModule({
  declarations: [
    MainComponent,
    CryptotrakerComponent,
    VideoComponent,
    FactComponentComponent,
  ],
  imports: [
    CommonModule,
    CryptoModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
