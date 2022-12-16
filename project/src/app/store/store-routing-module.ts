import { RouterModule, Routes } from "@angular/router";
import { CancelOrederComponent } from "./cancel-oreder/cancel-oreder.component";
import { CardComponent } from "./card/card.component";
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
      component:CardComponent
     },

     {
      path:'store/cancel/:orderId',
      component:CancelOrederComponent
     },
   
     
]

export const StoreRoutingModule = RouterModule.forChild(routes);