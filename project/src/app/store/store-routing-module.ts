import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { CancelOrederComponent } from "./cancel-oreder/cancel-oreder.component";
import { CardComponent } from "./card/card.component";
import { FinishOrderComponent } from "./finish-order/finish-order.component";
import { ShitDetailsComponent } from "./shit-details/shit-details.component";
import { StoreComponentComponent } from "./store-component/store-component.component";






const routes:Routes = [
    {
       path:'store',
       component:StoreComponentComponent
    },
    {
        path:'store/details/:shirtId',
        component:ShitDetailsComponent
     },

     {
      path:'store/card',
      canActivate:[AuthActivate],
      component:CardComponent,
      data:{
         'loginRequired':true,
      }
     },

     {
      path:'store/cancel/:orderId',
      canActivate:[AuthActivate],
      component:CancelOrederComponent,
      data:{
         'loginRequired':true,
      }
     },

     {
      path:'store/finish/:orderId',
      canActivate:[AuthActivate],
      component:FinishOrderComponent,
      data:{
         'loginRequired':true,
      }
     },
   
     
]

export const StoreRoutingModule = RouterModule.forChild(routes);