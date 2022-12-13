import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";


const routes:Routes = [
    {
       path:'login',
       component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent,
     },

     {
      path:'logout',
      component:LogoutComponent,
   },

   {
      path:'profile',
      component:ProfileComponent,
   },
]

export const AuthRoutingModule = RouterModule.forChild(routes);