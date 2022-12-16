import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "../profile/edit-profile/edit-profile.component";
import { MemeColectionComponent } from "./meme-colection/meme-colection.component";
import { ProfileComponent } from "./profile/profile.component";


const routes:Routes = [
  
   {
      path:'profile',
      component:ProfileComponent,
   },
   {
      path:'profile/edit/:userId',
      component:EditProfileComponent,
   },
   {
      path:'profile/collection',
      component:MemeColectionComponent,
   },
]

export const ProfileRoutingModule = RouterModule.forChild(routes);