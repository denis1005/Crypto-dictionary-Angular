import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";


import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

import { RegisterComponent } from "./register/register.component";


const routes:Routes = [
    {
       path:'login',
       canActivate:[AuthActivate],
       component:LoginComponent,
       data:{
         title:'Login',
         loginRequired:false,
       }
    },
    {
        path:'register',
        canActivate:[AuthActivate],
        component:RegisterComponent,
        data:{
         title:'Register',
         loginRequired:false,
       }
     },

     {
      path:'logout',
      canActivate:[AuthActivate],
      component:LogoutComponent,
      data:{
         title:'Logout',
         loginRequired:true,
       }
   },

   
]

export const AuthRoutingModule = RouterModule.forChild(routes);