import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SpinnerComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
