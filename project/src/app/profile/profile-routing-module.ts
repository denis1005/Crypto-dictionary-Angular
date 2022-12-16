import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "../profile/edit-profile/edit-profile.component";
import { AuthActivate } from "../shared/guards/auth.activate";
import { MemeColectionComponent } from "./meme-colection/meme-colection.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProfileComponent } from "./profile/profile.component";


const routes:Routes = [
  
   {
      path:'profile',
      component:ProfileComponent,
      canActivate:[AuthActivate],
      data:{
         'loginRequired':true,
      }
   },
   {
      path:'profile/edit/:userId',
      canActivate:[AuthActivate],
      component:EditProfileComponent,
      data:{
         'loginRequired':true,
      }
   },
   {
      path:'profile/collection',
      canActivate:[AuthActivate],
      component:MemeColectionComponent,
      data:{
         'loginRequired':true,
      }
   },
   {
      path:'profile/orders',
      canActivate:[AuthActivate],
      component:OrdersComponent,
      data:{
         'loginRequired':true,
      }
   },
   
]

export const ProfileRoutingModule = RouterModule.forChild(routes);