import { RouterModule, Routes } from "@angular/router";
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
   
     
]

export const StoreRoutingModule = RouterModule.forChild(routes);