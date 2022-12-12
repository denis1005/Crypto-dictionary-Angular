import { RouterModule, Routes } from "@angular/router";
import { CryptoDetailsComponent } from "./crypto-details/crypto-details.component";



const routes:Routes = [
    {
       path:'crypto/:id',
       component:CryptoDetailsComponent
    },
    
]

export const CryptoRoutingModule = RouterModule.forChild(routes);