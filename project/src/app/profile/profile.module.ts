import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing-module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MemeColectionComponent } from './meme-colection/meme-colection.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    EditProfileComponent,
    ProfileComponent,
    MemeColectionComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    EditProfileComponent,
    ProfileComponent
  ]
  
})
export class ProfileModule { }
